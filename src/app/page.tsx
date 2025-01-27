import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amber & Nathan</title>
      </Head>
      <div className="bg-lilac min-h-screen text-lilac/90 flex items-center justify-center font-sans">
        <div className="fixed inset-0 bg-linear-layer bg-cover animate-opacityPulseSlow"></div>
        <div className="fixed inset-0 bg-layer-2 bg-cover animate-drift animate-opacityPulseFast"></div>
        <div className="fixed inset-0 bg-layer-1 bg-cover animate-drift animate-opacityPulseMedium"></div>

        <Image
          src="cloud2.png"
          width={440}
          height={99}
          alt="Cloud 2"
          className="absolute bottom-24 right-0 w-1/2 sm:w-1/3 opacity-75 cloud animate-cloud-2"
        />
        <Image
          src="cloud3.png"
          width={411}
          height={117}
          alt="Cloud 3"
          className="absolute bottom-10 left-1/4 w-1/4 sm:w-1/5 opacity-60 cloud animate-cloud-3"
        />

        <div className="max-w-2xl mx-4 p-6 relative rounded-2xl">
          <p className="text-2xl leading-10">
            A dance is beautiful
            <br />
            not for how long it lasts
            <br />
            but for how it moves us.
          </p>
        </div>
      </div>
    </>
  );
}
