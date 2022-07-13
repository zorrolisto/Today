import type { NextPage } from "next";
import Head from "next/head";

const LandingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Today app</title>
        <meta name="description" content="App for schedule your weeks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen min-h-screen flex flex-col justify-center items-center p-4 overflow-y-scroll">
        <h2 className="text-[3rem] lg:text-[5rem] md:text-[5rem] font-extrabold text-gray-700">
          TODAY
        </h2>
        <p className="text-2xl text-gray-700">App for schedule your week</p>
      </div>
    </>
  );
};

export default LandingPage;
