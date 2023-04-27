import { NewsProps } from "./News.props";
import { news } from "../../utils/constants";
import Image from "next/image";
export const News = ({ className, ...props }: NewsProps): JSX.Element => {
  const { phone, watch, notebook, headphones, videoMp4, videoWebm } = news;
  return (
    <div className="w-full h-[500px]  bg-[#333333] center gap-8" {...props}>
      <div className="col gap-4 ">
        <Image
          src={phone}
          alt="phone"
          width={220}
          height={150}
          className="goldBorder"
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <Image
          src={watch}
          alt="watch"
          width={220}
          height={150}
          className="goldBorder"
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      <div>
        <video loop playsInline muted autoPlay className="w-[500px] h-[400px] ">
          <source src={videoWebm} />
          <source src={videoMp4} />
        </video>
      </div>
      <div className=" col gap-4">
        <Image
          src={notebook}
          alt="notebook"
          width={220}
          height={150}
          className="goldBorder"
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <Image
          src={headphones}
          alt="headphones"
          width={220}
          height={150}
          className="goldBorder"
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    </div>
  );
};
