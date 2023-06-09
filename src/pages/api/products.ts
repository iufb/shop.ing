import { transferChildProcessOutput } from "@/utils/shell";
import { spawn } from "child_process";
import type { NextApiRequest, NextApiResponse } from "next";
export default function GET(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.url) {
    const { productType } = request.query;
    if (typeof productType !== "string") {
      response.status(400).json({ error: "Invalid request" });
      return;
    }
    const cmd = spawn(
      "python3",
      (process.cwd(), ["scripts/getProducts.py", productType || ""]),
      {
        cwd: process.cwd(),
      }
    );
    transferChildProcessOutput(cmd, response);
  }
}
