import Container from "../components/_Layout/Container";
import Head from "next/head";
import Link from "next/link";
import ProductSearch from "../components/Product/ProductSearch";
import sellersJson from "../data/sellers.json";
import { AxiosResponse } from "axios";
import { getSellers } from "../services/sneakartsApi";
import { routes } from "../routes";
import { Product, Seller } from "../types";
import { useEffect, useState } from "react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [seller, setSeller] = useState<Seller[]>([]);

  useEffect(() => {
    getSellers()
      .then((response: AxiosResponse) => {
        setSeller(response.data);
      })
      .catch((err) => {
        //console.log(err);
        setSeller(sellersJson as any);
      });
  }, []);

  const getAllProducts = () => {
    let products: Product[] = [];
    [...seller].forEach((seller) => {
      products = [...products, ...seller.sellerProducts];
    });
    return products;
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/js/main-globe.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>SneakArts - Marketplace</title>
        <meta
          name="description"
          content="SneakArts - Marketplace for creators"
        />
        <link rel="icon" href="/assets/img/favicon.ico" />
      </Head>
      <div>
        <section className="min-h-screen-nav flex relative items-center justify-center overflow-hidden">
          <div className="h-full w-full absolute z-10 md:z-0"></div>
          <Container>
            <div className="movable blur-[1px] opacity-40" id="globe">
              <canvas
                className="mx-auto scale-150"
                width="508"
                height="435"
              ></canvas>
            </div>
          </Container>
        </section>
        <section className="h-[400px] -mt-[calc(50vh+64px)]">
          <Container>
            <div className="relative z-10 rounded-lg w-4/5 mx-auto text-center">
              <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl">
                Trouve <span className="title-gradient">l{"'"}Artiste</span>{" "}
                id??al pour tes{" "}
                <span className="title-gradient">customisations</span>
              </h1>
            </div>
          </Container>
        </section>
        <svg
          width="16"
          height="49"
          viewBox="0 0 16 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-12 mx-auto featured-page-header-arrow relative"
        >
          <path
            opacity="0.5"
            d="M7.2929 48.7071C7.68342 49.0976 8.31658 49.0976 8.70711 48.7071L15.0711 42.3431C15.4616 41.9526 15.4616 41.3195 15.0711 40.9289C14.6805 40.5384 14.0474 40.5384 13.6569 40.9289L8 46.5858L2.34315 40.9289C1.95262 40.5384 1.31946 40.5384 0.928934 40.9289C0.53841 41.3195 0.53841 41.9526 0.928934 42.3431L7.2929 48.7071ZM7 4.37114e-08L7 48L9 48L9 -4.37114e-08L7 4.37114e-08Z"
            fill="#596380"
          ></path>
        </svg>
        <section>
          <Container>
            <div className="mt-12">
              <h2 className="text-center text-3xl md:text-4xl font-extrabold title-gradient mb-8">
                Les services de nos artistes
              </h2>
              <div className="flex items-center justify-center">
                <ProductSearch products={getAllProducts()} />
              </div>
            </div>
          </Container>
        </section>
        <div className="flex justify-center items-center gap-4 my-12 relative z-20">
          <Link href={routes.sellers}>
            <a className="rounded-full px-8 py-3 text-white border border-primary-500 bg-primary-500 hover:bg-primary-400 duration-200 transition-all ease-in-out">
              Trouver un artiste
            </a>
          </Link>
          <a
            href="https://sneakarts.com/fr/"
            target={"_blank"}
            rel="noreferrer nooperer"
            className="rounded-full px-8 py-3 text-primary-500 hover:text-white border border-primary-500 hover:bg-primary-500 duration-200 transition-all ease-in-out"
          >
            Acheter un kit
          </a>
        </div>
        <svg
          width="16"
          height="49"
          viewBox="0 0 16 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto featured-page-header-arrow relative"
        >
          <path
            opacity="0.5"
            d="M7.2929 48.7071C7.68342 49.0976 8.31658 49.0976 8.70711 48.7071L15.0711 42.3431C15.4616 41.9526 15.4616 41.3195 15.0711 40.9289C14.6805 40.5384 14.0474 40.5384 13.6569 40.9289L8 46.5858L2.34315 40.9289C1.95262 40.5384 1.31946 40.5384 0.928934 40.9289C0.53841 41.3195 0.53841 41.9526 0.928934 42.3431L7.2929 48.7071ZM7 4.37114e-08L7 48L9 48L9 -4.37114e-08L7 4.37114e-08Z"
            fill="#596380"
          ></path>
        </svg>
        <section className="pb-16">
          <Container>
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-2 gap-8 items-center my-4">
                <div className="col-span-2 md:col-span-1 text-center md:text-right pl-0 md:pl-16 order-2 md:order-1">
                  <div className="text-3xl md:text-4xl font-extrabold title-gradient mb-4">
                    Artistes V??rifi??s
                  </div>
                  <p>
                    Les Professionnels pr??sents sur SneakArts, proposent tous
                    des cr??ations originales de grande qualit?? !
                  </p>
                </div>
                <div className="col-span-2 md:col-span-1 flex justify-center md:justify-start order-1 md:order-2">
                  <img
                    className="max-h-[180px] md:max-h-[250px] pl-0 md:pl-8"
                    src="/assets/img/check.svg"
                  ></img>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 items-center">
                <div className="col-span-2 md:col-span-1 flex justify-center md:justify-end">
                  <img
                    className="max-h-[180px] md:max-h-[250px] pr-0 md:pr-8"
                    src="/assets/img/paint.svg"
                  ></img>
                </div>
                <div className="col-span-2 md:col-span-1 text-center md:text-left pr-0 md:pr-16">
                  <div className="text-3xl md:text-4xl font-extrabold title-gradient mb-4">
                    Peinture de Qualit??
                  </div>
                  <p>
                    Tous les Artistes pr??sents sur SneakArts utilisent des
                    Peintures sp??cialement con??u pour le Cuir et Textile.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 items-center">
                <div className="col-span-2 md:col-span-1 text-center md:text-right pl-0 md:pl-16 order-2 md:order-1">
                  <div className="text-3xl md:text-4xl font-extrabold title-gradient mb-4">
                    Cr??ations Unique
                  </div>
                  <p>
                    Chaque Custom est r??alis?? ?? la demande, avec vos pr??cisions
                    pour un r??sultat unique !
                  </p>
                </div>
                <div className="col-span-2 md:col-span-1 flex justify-center md:justify-start order-1 md:order-2">
                  <img
                    className="max-h-[180px] md:max-h-[250px] pl-0 md:pl-8"
                    src="/assets/img/idea.svg"
                  ></img>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
};

export default Home;
