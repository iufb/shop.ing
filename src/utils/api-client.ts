import { getValidJSONString } from "./utils";
const typeUrl = {
  phone: "smartfony-plansety/smartfony",
  tv: "televizory-audio-video/televizory",
};
export type productType = "phone" | "tv";
export const getProduct = async (product: productType) => {
  const res = await fetch(
    `/api/products?${new URLSearchParams({ productType: typeUrl[product] })}`,
    {}
  );
  const reader = res.body?.getReader();
  if (reader) {
    return streamResponse(reader);
  } else {
    return false;
  }
};
async function streamResponse(stream: ReadableStreamDefaultReader<Uint8Array>) {
  return await new Promise((resolve, reject) => {
    const decoder = new TextDecoder();
    let result: string[] = [];
    const readChunk = ({
      done,
      value,
    }: ReadableStreamReadResult<Uint8Array>) => {
      if (done) {
        resolve(result);
        return;
      }
      const output = decoder.decode(value);

      result.push(getValidJSONString(output));
      stream.read().then(readChunk);
    };
    if (result[0] == "[]\n") {
      reject("Invalid product");
    }
    stream.read().then(readChunk);
  });
}
