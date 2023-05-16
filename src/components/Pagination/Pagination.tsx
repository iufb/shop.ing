import { PaginationProps } from "./Pagination.props";

export const Pagination = ({
  className,
  items,
  currentPage,
  pageSize,
  onPageChange,
  ...props
}: PaginationProps): JSX.Element | null => {
  const pageCount = Math.ceil(items / pageSize);
  if (pageCount === 1) return null;
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  return (
    <div
      className={`${className} w-full h-full  justify-self-center  max-w-[30px] max-h-[50px] px-2`}
      {...props}
    >
      <ul className="center gap-2">
        {pages.map((page) => (
          <li
            key={page}
            onClick={() => onPageChange(page)}
            className={`p-2 rounded-md border shadow ${
              page == currentPage ? "text-red-600" : "text-gray-700"
            } cursor-pointer`}
          >
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
};
