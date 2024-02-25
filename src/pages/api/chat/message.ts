// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
    if (req.method === 'POST') {
        console.log(req.body)
        res.status(200).json({ name: "Message Sent" });
    } else if(req.method === 'GET') {
        res.status(200).json({ name: "Messages List" });
    } else {
        res.status(405).json({ name: 'Method not allowed' });
    }
  
}
