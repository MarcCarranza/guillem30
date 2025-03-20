import { Router, RouterContext } from "@oak/oak/router";
import { respostes } from "../db.ts";
import { ObjectId } from "npm:mongodb@6.14.2";

async function addResposta({
    request,
    response
}: RouterContext<string>): Promise<string> {
    try {
        const body = await request.body.json();
        const result = await respostes.insertOne(body);
        return JSON.stringify({ id: result.insertedId })
    } catch (error: unknown) {
        if (error instanceof Error) {
            return JSON.stringify({ error: error.message })
        }
        
        return JSON.stringify({ error: "Unhandled error" })
    }
}

async function getRespostes({
    params,
    response
}: RouterContext<string>): Promise<string> {
    // TODO: Receive already used IDs
    const result = await respostes.find().toArray();
    try {
        return JSON.stringify(result)
    } catch (err) {
        return "Error"
    }
}

export { addResposta, getRespostes };