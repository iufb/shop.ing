import { Pagination, Products, SortPanel } from "@/components";
import { SortEnum, sortReducer } from "@/components/Sort/sort.reducer";
import { Loader, Error } from "@/components/ui";
import { WithLayout } from "@/layout/Layout";
import { getPopularBrands, getProduct, productType } from "@/utils/api-client";
import { productNavLinks } from "@/utils/constants";
import { IProduct } from "@/utils/types/products.interface";
import { getRuType, paginate } from "@/utils/utils";
import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useMemo, useReducer, useState } from "react";
const Brands = dynamic(() => import("../../../components/Brands/Brands"), {
  loading: () => <Loader />,
});

const Type = ({
  products = [],
  brands = [],
}: {
  products: IProduct[];
  brands: string[];
}): JSX.Element => {
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
  const paginatedProducts = useMemo(
    () => paginate(sortedProducts, currentPage, 10),
    [currentPage, sortedProducts, sort]
  );
  return (
    <div className="w-full  col  grid gap-3">
      <h1 className="lg:text-3xl text-xl  font-bold text-gray-900 capitalize justify-self-start ml-3">
        {getRuType(type)}
      </h1>
      <Brands brands={brands} />
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
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: productNavLinks.map((path) => `/market/${path.eng}`),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<{
  products: IProduct[];
  brands: string[];
}> = async (context) => {
  const productType = context.params?.type as productType;
  const productData: IProduct[] = await getProduct(productType).then((data) => {
    try {
      if (typeof data !== "boolean") {
        const productString = data;
        return JSON.parse(productString);
      } else {
        return [];
      }
    } catch (e) {
      if (e instanceof Error) {
        console.log(e);
      }
    }
  });
  const brandsData: string[] = await getPopularBrands(productType).then(
    (data) => {
      try {
        const brandsString = data;
        if (typeof brandsString !== "boolean") {
          // get array of brands
          return JSON.parse(brandsString)[0].brands;
        } else {
          return [];
        }
      } catch (e) {
        console.log(e);
      }
    }
  );

  return {
    props: {
      products: productData,
      brands: brandsData,
    },
  };
};
