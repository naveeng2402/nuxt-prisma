import { defineEventHandler } from "h3"
// import {usePrisma} from "../../../src/runtime/server/utils/prisma"
import {usePrisma} from "#nuxt-prisma"

export default defineEventHandler(async(e)=>{
    const prisma = usePrisma()
    return await prisma.post.findMany()
})