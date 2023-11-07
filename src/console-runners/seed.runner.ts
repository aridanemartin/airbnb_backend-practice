import { exec } from "child_process";
export const run = async () => {
  exec("npm run start", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
};
