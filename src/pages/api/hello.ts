import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  name: string;
}

// eslint-disable-next-line require-jsdoc
const handler = (req: NextApiRequest, res: NextApiResponse<Data>): void => {
  console.log(req);
  res.status(200).json({ name: "John Doe" });
};

export default handler;
