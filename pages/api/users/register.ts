import type { NextApiRequest, NextApiResponse } from 'next';

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).send({ ...req.body, role: 'user' });
};

export default register;
