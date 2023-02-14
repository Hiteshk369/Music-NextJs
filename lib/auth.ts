import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../lib/prisma";

export const validateRoute = (handler: any) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { HK_ACCESS_TOKEN: token } = req.cookies;

    if (token) {
      let user;
      try {
        const { id } = jwt.verify(token, "password");
        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error("Not authorized user");
        }
      } catch (error) {
        res.status(401);
        res.json({ error: "Not Authorized" });
      }
      return handler(req, res, user);
    }

    res.status(401);
    res.json({ error: "Not Authorized" });
  };
};
