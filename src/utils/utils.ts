import { productType } from "./api-client";
import { productNavLinks } from "./constants";
import { IProduct } from "./types/products.interface";

export const getValidJSONString = (str: string) => {
  const validString = str
    .replace(/'/g, '"')
    .replace(/\\n/g, " ")
    .replace(/\\xa/g, ".")
    .replace(/\\/g, "")
    .replace(/\""/g, '"');
  console.log(validString);
  return validString;
};
export const priceToNumber = (str: string) => {
  return parseInt(str.replace(/\s/g, ""));
};
export const getFormattedPrice = (price: number) => {
  return price.toLocaleString("ru-RU") + " m";
};
export const getRuType = (type: productType) => {
  for (const productNavLink of productNavLinks) {
    if (productNavLink.eng === type) return productNavLink.link;
    else {
      continue;
    }
  }
};
export const paginate = (
  items: IProduct[],
  pageNumber: number,
  pageSize: number
) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};
