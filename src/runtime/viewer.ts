import { exec } from "child_process";
export const setupPrismaStudio = () => {
  exec("npx prisma studio --browser none", (error, stdout, stderr) => {
    console.log("prisma studio stdout: " + stdout);
    console.log("prisma studio stderr: " + stderr);
    if (error !== null) {
      console.log("exec error: " + error);
    }
  });
};
