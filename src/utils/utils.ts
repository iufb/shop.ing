export const getValidJSONString = (str: string) => {
  return str
    .replace(/'/g, '"')
    .replace(/\\n/g, " ")
    .replace(/\\xa/g, ".")
    .replace(/\\/g, "")
    .replace(/\""/g, '"');
};
