import Container from "../../components/_Layout/Container";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import SellerProfile from "../../components/Seller/SellerProfile";
import { BackspaceIcon } from "@heroicons/react/outline";
import { getSellers } from "../../services/sneakartsApi";
import { IParams, Product, Seller } from "../../types";
import { routes } from "../../routes";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

const Home: NextPage<{ seller: Seller }> = ({ seller }) => {
  const [products, setProducts] = useState<Product[]>(
    seller?.sellerProducts ?? []
  );
  const [copyProducts, setCopyProducts] = useState<Product[]>(
    seller?.sellerProducts ?? []
  );
  const [activeTag, setActiveTag] = useState<string | null>(null);

  return (
    <div>
      <Head>
        <title>SneakArts - Nos artistes</title>
        <meta
          name="description"
          content="SneakArts - Marketplace for creators"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className="my-8">
          <Link href={routes.sellers}>
            <a className="flex text-center items-center gap-1 md:text-left text-2xl md:text-3xl font-extrabold mb-8 hover:text-primary-500 duration-200 transition-all ease-in-out">
              <BackspaceIcon className="w-5 md:w-7 h-5 md:h-8"></BackspaceIcon>
              <span>Retour</span>
            </a>
          </Link>
          <SellerProfile
            seller={seller!!}
            activeTag={activeTag}
            setActiveTag={setActiveTag}
            allProducts={products}
            products={copyProducts}
            setProducts={setCopyProducts}
          />
        </div>
      </Container>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getSellers();
  const paths = (data as Seller[]).map((seller: Seller) => {
    return {
      params: { id: seller.sellerId },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const { data } = await getSellers();
  //TODO: Optimiser avec query qui query directement le seller avec l'id
  const seller = (data as Seller[]).find((x) => x.sellerId === id);
  const props = { seller };
  return { props };
};

export default Home;
