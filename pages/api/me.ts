import { validateRoute } from "@/lib/auth";
import { NextApiRequest, NextApiResponse } from "next";

export default validateRoute(
  (req: NextApiRequest, res: NextApiResponse, user: any) => {
    res.json(user);
  }
);
