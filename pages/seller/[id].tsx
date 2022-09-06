import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Container from "../../components/_Layout/Container";
import SellerProfile from "../../components/Seller/SellerProfile";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { IParams, Product, Seller } from "../../types";
import { _sellers } from "../../data/sellers";
import { BackspaceIcon } from "@heroicons/react/outline";
import { routes } from "../../routes";

const Home: NextPage<{ id: string }> = ({ id }) => {
  const [seller, setSeller] = useState<Seller | null>(
    _sellers.find((x) => x.sellerId === id) ?? null
  );
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
  const arr: string[] = _sellers.map((x) => x.sellerId);
  const paths = arr.map((id) => {
    return {
      params: { id },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const props = { id };
  return { props };
};

export default Home;
