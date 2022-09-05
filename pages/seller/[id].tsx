import React, { useState } from "react";
import Head from "next/head";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { IParams, Product, Seller } from "../../types";
import Container from "../../components/_Layout/Container";
import { _sellers } from "../../data/sellers";
import Link from "next/link";
import { BackspaceIcon, GlobeAltIcon } from "@heroicons/react/outline";
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

  const handleGetTags = (): string[] => {
    const producs = seller?.sellerProducts;
    const tags: string[] = [];
    producs?.map((x) => {
      x.productReference.split(",").forEach((z) => {
        if (!tags.includes(z)) {
          tags.push(z);
        }
      });
    });
    return tags;
  };

  const handleClickTag = (value: string) => {
    const products: Product[] = [];
    seller?.sellerProducts?.map((x) => {
      const productTags = x.productReference.split(",");
      if (productTags.includes(value)) {
        products.push(x);
      }
    });
    setCopyProducts(products);
  };

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
          <div className="grid grid-cols-12 items-start justify-center gap-8">
            <div className="col-span-12">
              <div className="text-center md:text-left text-3xl md:text-4xl font-extrabold title-gradient mb-8">
                Créateur
              </div>
              <div className="bg-white dark:bg-dark-600 border border-gray-200 dark:border-dark-400 dark:hover:border-primary-500 hover:border-primary-500 duration-200 ease-in-out transition-all rounded-lg p-3">
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={seller?.sellerLogo}
                    className="w-16 h-16 object-cover rounded-full"
                  ></img>
                  <div className="flex flex-col">
                    <div className="font-bold text-3xl">
                      {seller?.sellerUserName}
                    </div>
                    <div className="flex gap-2">
                      <span>
                        {seller?.sellerCountry}, {seller?.sellerCity} |{" "}
                      </span>
                      <a
                        href={seller?.sellerSocial}
                        className="items-center justify-center hover:text-primary-500 duration-200 transition-all ease-in-out"
                      >
                        <GlobeAltIcon className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="font-semibold mb-4">
                  {seller?.sellerDescription}
                </div>
                <div className="flex gap-2">
                  {handleGetTags().map((x, i) => {
                    return (
                      <button
                        type="button"
                        onClick={() => handleClickTag(x)}
                        key={i}
                        className="cursor-pointer hover:bg-primary-200 px-2 py-1 text-primary-800 text-xs font-medium bg-primary-100 rounded-full duration-200 transition-all ease-in-out"
                      >
                        #{x}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-span-12">
              <div className="text-center md:text-left text-3xl md:text-4xl font-extrabold title-gradient mb-8">
                Shop
              </div>
              <div className="my-4 grid grid-cols-12 flex-col gap-4">
                {copyProducts?.map((x, i) => {
                  return (
                    <div
                      key={i}
                      className="group col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
                    >
                      <img
                        className="group-hover:border group-hover:dark:border group-hover:border-primary-500 group-hover:dark:border-primary-500 h-36 w-full rounded-t-lg object-cover"
                        src={x.productImage}
                      ></img>
                      <div className="bg-white dark:bg-dark-600 border border-gray-200 dark:border-dark-400 group-hover:dark:hover:border-primary-500 group-hover:border-primary-500 duration-200 ease-in-out transition-all rounded-b-lg p-3">
                        <div className="flex flex-col gap-2">
                          <div className="flex justify-between items-center">
                            <div>Categorie</div>
                            <div>{x.productCategory}</div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>Prix</div>
                            <div>{x.productPrice}€</div>
                          </div>
                          <div className="flex justify-between items-center mb-8">
                            <div>Tags</div>
                            <div className="flex gap-2 justify-start items-center overflow-auto max-w-[120px]">
                              {x.productReference
                                .split(",")
                                .map((tag, tagIndex) => {
                                  return (
                                    <span
                                      key={tagIndex}
                                      className="px-2 py-1 text-primary-800 text-xs font-medium bg-primary-100 rounded-full"
                                    >
                                      {tag}
                                    </span>
                                  );
                                })}
                            </div>
                          </div>
                          <div className="flex">
                            <a
                              className="cursor-pointer text-sm w-full text-white text-center rounded-full py-2 px-3 bg-primary-500 hover:bg-primary-400 transition-all duration-200 ease-in-out"
                              href={x.productUrl}
                            >
                              Commander
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {}
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
