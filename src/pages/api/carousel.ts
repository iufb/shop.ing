// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { transferChildProcessOutput } from "@/utils/shell";
import { spawn } from "child_process";
import type { NextApiRequest, NextApiResponse } from "next";

export default function GET(req: NextApiRequest, res: NextApiResponse) {
  const cmd = spawn(
    "python3",
    (process.cwd(), ["scripts/getCarouselItems.py"]),
    {
      cwd: process.cwd(),
    }
  );
  transferChildProcessOutput(cmd, res);
}
