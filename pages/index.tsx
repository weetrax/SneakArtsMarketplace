import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import Container from "../components/_Layout/Container";

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Head>
        <title>SneakArts - Marketplace</title>
        <meta
          name="description"
          content="SneakArts - Marketplace for creators"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*
      <Script src="/assets/js/threejs.js"></Script>
      <Script defer={true} src="/assets/js/orbit-controls.js"></Script>
      <Script defer={true} src="/assets/js/globe.js"></Script>
      */}
      <Script defer={true} src="/assets/js/main-globe.js"></Script>

      <div className="my-8">
        <section className="min-h-[450px]">
          <Container>
            <div
              className="movable absolute top-20 flex items-center justify-center w-full -right-[45%]"
              id="globe"
            >
              <canvas className="scale-125" width="508" height="435"></canvas>
            </div>
            <div className="mt-[100px] md:mt-[120px] relative z-10 rounded-lg w-4/5">
              <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl">
                Trouver les <span className="title-gradient">créateurs</span>{" "}
                idéal pour la{" "}
                <span className="title-gradient">personnalisation</span> de vos
                sneakers avec la{" "}
                <span className="title-gradient">Marketplace SneakArts</span>
              </h1>
            </div>
          </Container>
        </section>
        <section>
          <div className="bg-white">
            <Container>
              <div className="grid grid-cols-2 py-4 gap-4">
                <div className="col-span-2 md:col-span-1">
                  <h2 className="text-2xl font-semibold">
                    Chaussures, skateboard, pecorine, <br /> trouvez l{"'"}
                    artiste qu{"'"}il vous faut!
                  </h2>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <img className="max-h-52" src="/assets/img/nike.png"></img>
                </div>
              </div>
            </Container>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
