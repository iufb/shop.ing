import { NewsProps } from "./News.props";
import { news } from "../../utils/constants";
import Image from "next/image";
export const News = ({ className, ...props }: NewsProps): JSX.Element => {
  const { phone, watch, notebook, headphones, videoMp4, videoWebm } = news;
  return (
    <div
      className="w-full lg:h-[500px] h-full grid grid-cols-1  p-2 bg-[#333333] lg:center lg:gap-8 gap-4"
      {...props}
    >
      <div className="lg:col lg:gap-4 col center gap-2  ">
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

      <div className="w-[350px] justify-self-center lg:center lg:w-[500px]   lg:h-[400px]">
        <video loop playsInline muted autoPlay>
          <source src={videoWebm} />
          <source src={videoMp4} />
        </video>
      </div>
      <div className=" lg:col lg:gap-4 mg:center col center gap-2  ">
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
