import type { NextApiRequest, NextApiResponse } from 'next';
import { ValidationError } from 'yup';
import bcrypt from 'bcrypt';

import { registerSchema } from '../../../validators';
import { userModel } from '../../../models/';
import dbConnect from '../../../utils/dbConnect';

type registerError = {
  name?: string;
  password?: string;
  email?: string;
  [key: string]: string | undefined;
};

function extractError(error: ValidationError[]) {
  const newError: registerError = {};

  error.map((err) => {
    if (err.path) {
      newError[err.path] = err.message;
    }
  });

  return newError;
}

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await dbConnect();
    const { name, email, password } = req.body;

    await registerSchema.validate(
      { name, email, password },
      { abortEarly: false }
    );

    const emailExists = await userModel.findOne({ email });

    if (emailExists) {
      return res
        .status(409)
        .send({ email: 'This email address is already being used' });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = new userModel({
      name,
      email,
      password: hash,
    });

    await user.save();

    res
      .status(200)
      .send({ name: user.name, email: user.email, role: user.role });
  } catch (error: any) {
    if (error instanceof ValidationError) {
      const err = extractError(error.inner);
      res.status(400).json(err);
    } else {
      res.status(500).send(error);
    }
  }
};

export default register;
