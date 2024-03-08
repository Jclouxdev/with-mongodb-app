import {NextApiRequest, NextApiResponse} from "next";

// Swagger definition
/**
 * @swagger
 * /api/authent:
 *   get:
 *     description: Returns the authent
 *     responses:
 *       200:
 *         description: Hello Authent
 */

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    res.json({status: 200, data: "Hello Authent"})
}