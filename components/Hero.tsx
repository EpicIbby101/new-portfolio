import Image from "next/image";
import Avatar from "@/app/main.jpg";
import BackgroundImg from "@/app/pinksky.jpg";

const Hero = () => {
  return (
    <div
      className="relative w-full"
      style={{
        backgroundImage: `url(${BackgroundImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-35"></div>{" "}
      {/* Dark overlay */}
      <section className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
        <div className="relative flex flex-col gap-0 lg:gap-0 items-center justify-center text-center lg:text-left lg:items-start mt-20 w-7xl text-gray-100">
          <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-0">
            Hello, <br /> I&apos;m Kevin Grittner
          </h1>
          <p className="text-lg opacity-80 mb-5 ">
            I&apos;m a software engineer and web developer
          </p>
          <div className="lg:hidden">
            <Image
              src={Avatar}
              alt="Avatar"
              className="w-3/4 sm:w-1/2 md:w-1/2 rounded-full mx-auto mb-5"
              priority={true}
            />
          </div>
          <p className="text-lg opacity-80 leading-relaxed max-w-[1500px] mb-8">
            My goal as a developer is to build applications that are intuitive,
            responsive, and user-friendly. I believe that technology has the
            power to transform industries and improve people&apos;s lives, and
            I&apos;m excited to be a part of that transformation as a full-stack
            developer.
          </p>
          <button className="btn btn-primary btn-wide">
            Check out my projects
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:w-full mt-12">
          <Image
            src={Avatar}
            alt="Avatar"
            className="w-5/6 xl:w-5/6 rounded-full"
            priority={true}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
