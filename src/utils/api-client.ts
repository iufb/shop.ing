import { parse } from "url";
import { getValidJSONString } from "./utils";
const typeUrl = {
  phone: "smartfony-plansety/smartfony",
  tv: "televizory-audio-video/televizory",
  notebook: "noutbuki-komputery/komputery/noutbuki",
  smartwatch: "smartfony-plansety/umnye-gadzety/smart-casy",
  vacuumCleaner: "tehnika-dla-doma/uborka-doma/pylesosy",
  washingMachine: "tehnika-dla-doma/stiralnye-masiny",
};
export type productType =
  | "phone"
  | "tv"
  | "notebook"
  | "smartwatch"
  | "vacuumCleaner"
  | "washingMachine";
export const getProduct = async (
  product: productType
): Promise<string | boolean> => {
  const url = `http://localhost:3000/api/products?productType=${typeUrl[product]}/`;
  const res = await fetch(url);
  const reader = res.body?.getReader();
  if (reader) {
    return streamResponse(reader);
  } else {
    return false;
  }
};
export const getPopularBrands = async (product: productType) => {
  const res = await fetch(
    `/api/brands?${new URLSearchParams({ productType: typeUrl[product] })}`,
    {}
  );
  const reader = res.body?.getReader();
  if (reader) {
    return streamResponse(reader);
  } else {
    return false;
  }
};
export const getCarouselItems = async () => {
  const res = await fetch(`api/carousel`, {});
  const reader = res.body?.getReader();
  if (reader) {
    return streamResponse(reader);
  } else {
    return false;
  }
};
async function streamResponse(
  stream: ReadableStreamDefaultReader<Uint8Array>
): Promise<string> {
  return await new Promise((resolve, reject) => {
    const decoder = new TextDecoder();
    let result: string = "";
    const readChunk = ({
      done,
      value,
    }: ReadableStreamReadResult<Uint8Array>) => {
      if (done) {
        resolve(result);
        return;
      }
      const output = decoder.decode(value);
      result += output;

      stream.read().then(readChunk);
    };
    stream.read().then(readChunk);
  });
}
