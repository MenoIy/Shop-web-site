import type { NextApiRequest, NextApiResponse } from 'next';

import dbConnect from '../../../utils/dbConnect';
import { userModel } from '../../../models/';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).send({ ...req.body, role: 'user' });
};
