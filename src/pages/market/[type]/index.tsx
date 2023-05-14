import { Pagination, SortPanel } from "@/components";
import { SortEnum, sortReducer } from "@/components/Sort/sort.reducer";
import { Loader, Error } from "@/components/ui";
import { WithLayout } from "@/layout/Layout";
import { getProduct, productType } from "@/utils/api-client";
import { IProduct } from "@/utils/types/products.interface";
import { getRuType, paginate } from "@/utils/utils";
import { getValidJSONString } from "@/utils/utils";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useMemo, useReducer, useState } from "react";
const Products = dynamic(
  () => import("../../../components/ProductsContainer/Products"),
  { loading: () => <Loader /> }
);
const Brands = dynamic(() => import("../../../components/Brands/Brands"), {
  loading: () => <Loader />,
});
const Type = ({ products }: { products: IProduct[] }): JSX.Element => {
  const { asPath } = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [{ sort, products: sortedProducts }, dispatch] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.priceDown,
    }
  );
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // useEffect(() => {
  //   setError("");
  //   getProduct(type)
  //     .then((data) => {
  //       const productsString = data as string[];
  //       const products = JSON.parse(productsString[0]);
  //       setProducts(products);
  //     })
  //     .catch((e) => {
  //       setError("Fetching data error occured.");
  //       console.log(e);
  //     });
  // }, [type]);
  const paginatedProducts = useMemo(
    () => paginate(sortedProducts, currentPage, 10),
    [currentPage, sortedProducts, sort]
  );
  return (
    <div className="w-full  col  grid gap-3">
      <h1 className="lg:text-3xl text-xl  font-bold text-gray-900 capitalize justify-self-start ml-3">
        {getRuType(type)}
      </h1>
      <Brands />
      <SortPanel quantity={sortedProducts.length} onSort={onSort} sort={sort} />

      {error ? (
        <Error error={error} />
      ) : (
        <>
          <Products products={paginatedProducts} />
          <Pagination
            items={sortedProducts.length}
            pageSize={10}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </>
      )}
    </div>
  );
};

export default WithLayout(Type);
export const getServerSideProps: GetServerSideProps<{
  products: IProduct[];
}> = async (context) => {
  const productType = context.req.url?.split("/").pop() as productType;
  const data = await getProduct(productType).then((data) => {
    if (typeof data !== "boolean") {
      const productString = data;
      return JSON.parse(getValidJSONString(productString[0]));
    }
  });

  return {
    props: {
      products: data,
    },
  };
};
