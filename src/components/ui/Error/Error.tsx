import { ErrorProps } from "./Error.props";

export const Error = ({
  className,
  error,
  ...props
}: ErrorProps): JSX.Element => {
  return (
    <div
      className={`${className} p-5 rounded-md max-w-[350px] w-full justify-self-center flex items-start justify-center gap-5 text-red-600 flex-col border-2 border-red-600 `}
      {...props}
    >
      <h1 className="text-2xl">Something went wrong...</h1>
      <p className="text-xl">{error}</p>
    </div>
  );
};
