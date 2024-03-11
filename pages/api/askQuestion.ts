import query from "@/lib/queryApi";
import type { NextApiRequest,NextApiResponse } from "next";

type Data = {
    message:string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const {prompt,chatId,model,session}=req.body;
    if(!prompt){
        return res.status(400).json({ message: 'Invalid Prompt' })
    }
    if(!chatId){
        return res.status(400).json({ message: 'Invalid ChatId' })
    }
    const responce= await query(prompt,chatId,model);
    console.log(responce);
    res.status(200).json({ message: 'Hello World' })
}