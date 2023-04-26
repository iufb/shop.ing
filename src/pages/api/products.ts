import { transferChildProcessOutput } from "@/utils/shell";
import { spawn } from "child_process";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
export default function GET(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const productType = request.query.productType as string;
  if (typeof productType !== "string") {
    response.status(400).json({ error: "Invalid request" });
    return;
  }
  console.log("productType", productType);
  const cmd = spawn(
    "python3",
    (process.cwd(), ["scripts/web-scraper.py", productType || ""]),
    {
      cwd: process.cwd(),
    }
  );
  transferChildProcessOutput(cmd, response);
}
