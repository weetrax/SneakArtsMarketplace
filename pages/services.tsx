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
import FullscreenLoader from "../components/_Layout/Loaders/FullscreenLoader";

const Home: NextPage = () => {
  const [seller, setSeller] = useState<Seller[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getSellers()
      .then((response: AxiosResponse) => {
        setSeller(response.data);
      })
      .catch((err) => {
        //console.log(err);
        setSeller(sellersJson as any);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const getAllProducts = () => {
    let products: Product[] = [];
    [...seller].forEach((seller) => {
      products = [...products, ...seller.sellerProducts];
    });

    return products;
  };

  return (
    <div>
      <Head>
        <title>SneakArts - Produits</title>
        <meta
          name="description"
          content="SneakArts - Marketplace for creators"
        />
        <link rel="icon" href="/assets/img/favicon.ico" />
      </Head>
      <div>
        {loading ? (
          <FullscreenLoader />
        ) : (
          <section>
            <Container>
              <div className="my-12">
                <h2 className="text-center text-3xl md:text-4xl font-extrabold title-gradient mb-8">
                  Les services de nos artistes
                </h2>
                <div className="flex items-center justify-center">
                  <ProductSearch products={getAllProducts()} />
                </div>
              </div>
            </Container>
          </section>
        )}
      </div>
    </div>
  );
};

export default Home;
