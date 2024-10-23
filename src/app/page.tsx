import Head from "next/head";
import Image from "next/image";
import CalendarDropdown from "../components/CalendarDropdown";
import CoupleImg from "./images/2744.webp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amber & Nathan</title>
      </Head>
      <div className="bg-lilac min-h-screen text-lilac/90 flex items-center justify-center">
        <div className="fixed inset-0 bg-linear-layer bg-cover animate-opacityPulseSlow"></div>
        <div className="fixed inset-0 bg-layer-2 bg-cover animate-drift animate-opacityPulseFast"></div>
        <div className="fixed inset-0 bg-layer-1 bg-cover animate-drift animate-opacityPulseMedium"></div>

        <Image
          src="cloud1.png"
          width={568}
          height={141}
          alt="Cloud 1"
          className="absolute top-10 left-0 w-1/3 sm:w-1/4 opacity-80 cloud animate-cloud-1"
        />
        <Image
          src="cloud2.png"
          width={440}
          height={99}
          alt="Cloud 2"
          className="absolute top-1/4 right-0 w-1/2 sm:w-1/3 opacity-75 cloud animate-cloud-2"
        />
        <Image
          src="cloud3.png"
          width={411}
          height={117}
          alt="Cloud 3"
          className="absolute bottom-10 left-1/4 w-1/4 sm:w-1/5 opacity-60 cloud animate-cloud-3"
        />
        <Image
          src="cloud4.png"
          width={227}
          height={63}
          alt="Cloud 4"
          className="absolute bottom-1/4 right-1/4 w-1/3 sm:w-1/4 opacity-70 cloud animate-cloud-4"
        />

        <div className="max-w-2xl mx-4 p-6 relative bg-white/60 rounded-2xl shadow-lg backdrop-blur-md">
          <div className="subtle-title text-center">
            We&apos;re getting married!
          </div>

          <h1 className="text-4xl md:text-5xl my-3 font-bold uppercase tracking-wider text-center">
            Amber & Nathan
          </h1>

          <Image
            src={CoupleImg}
            className="w-full h-auto rounded-lg"
            alt="Amber and Nathan"
          />

          <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 items-center justify-center">
            <div className="flex items-center space-x-4">
              <CalendarDropdown />
              <p className="text-lg text-center md:text-left">June 21, 2025</p>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://www.google.com/maps/place/Maple+Falls,+WA/@48.9180446,-122.1348824,10750m/data=!3m2!1e3!4b1!4m6!3m5!1s0x54844d9757dcad01:0x240effb8e8e3715d!8m2!3d48.9242888!4d-122.077093!16zL20vMDEwdnNu!5m1!1e3?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="card-btn"
              >
                📍
              </a>
              <p className="text-lg text-center md:text-left">
                Maple Falls, WA
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
