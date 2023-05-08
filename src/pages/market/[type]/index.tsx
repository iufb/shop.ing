import { Brands, Products, Pagination, Sort } from "@/components";
import { SortEnum, sortReducer } from "@/components/Sort/sort.reducer";
import { Loader } from "@/components/ui";
import { WithLayout } from "@/layout/Layout";
import { getPopularBrands, getProduct, productType } from "@/utils/api-client";
import { IProduct } from "@/utils/types/products.interface";
import { statusType } from "@/utils/types/types";
import { getRuType, paginate } from "@/utils/utils";
import { useRouter } from "next/router";
import { useEffect, useMemo, useReducer, useState } from "react";

const Type = (): JSX.Element => {
  const { asPath } = useRouter();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [{ sort, products: sortedProducts }, dispatch] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.priceDown,
    }
  );
  const [status, setStatus] = useState<statusType>("init");
  const [error, setError] = useState("");
  const type = asPath.split("/")[2] as productType;
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  const onSort = (type: SortEnum) => {
    dispatch({ type });
  };
  useEffect(() => {
    if (products.length > 0)
      dispatch({ type: "reset", initialState: products });
  }, [products]);
  useEffect(() => {
    getPopularBrands(type).then((data) => {
      const brandsString = data as string[];
      setBrands(JSON.parse(brandsString[0])[0].brands); // get array of brands
    });
  }, [type]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);
  useEffect(() => {
    setStatus("loading");
    getProduct(type)
      .then((data) => {
        const productsString = data as string[];
        setProducts(JSON.parse(productsString[0]));
        setStatus("success");
      })
      .catch((e) => {
        setError(e);
        console.log(e);
        setStatus("error");
      });
  }, [type]);
  const paginatedProducts = useMemo(
    () => paginate(sortedProducts, currentPage, 10),
    [currentPage, sortedProducts, sort]
  );
  return (
    <div className="w-full  col  grid gap-3">
      <h1 className="text-3xl  font-bold text-gray-900 capitalize justify-self-start ml-3">
        {getRuType(type)}
      </h1>
      <Brands brands={brands} status={status} />
      <div className="flex justify-between">
        <p className="text-gray-600">
          В продаже{" "}
          <span className="text-black font-bold"> {sortedProducts.length}</span>{" "}
          товаров
        </p>
        <Sort onSort={onSort} sort={sort} />
      </div>
      {(status == "loading" || products.length == 0) && (
        <div className="w-full center h-[600px]">
          <Loader />
        </div>
      )}
      {status == "success" && <Products products={paginatedProducts} />}
      {status == "error" && <div>{error}</div>}
      <Pagination
        items={sortedProducts.length}
        pageSize={10}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default WithLayout(Type);
