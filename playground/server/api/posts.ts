import { defineEventHandler } from "h3";
// import {usePrisma} from "../../../src/runtime/server/utils/prisma"
import { usePrisma } from "#nuxt-prisma";
const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export default defineEventHandler(async (e) => {
  const prisma = usePrisma();
  await sleep(2000);
  return await prisma.post.findMany();
});
