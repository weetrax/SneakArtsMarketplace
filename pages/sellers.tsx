import React, { useEffect, useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { SearchIcon } from "@heroicons/react/outline";
import { ChangeEvent } from "react";
import { Seller } from "../types";
import Container from "../components/_Layout/Container";
import CarouselCoverflow from "../components/_Layout/CarouselCoverflow";
import SellerItem from "../components/Seller/SellerItem";
import sellersJson from "../data/sellers.json";
import { getSellers } from "../services/sneakartsApi";
import { AxiosResponse } from "axios";
import FullscreenLoader from "../components/_Layout/Loaders/FullscreenLoader";

const Home: NextPage = () => {
  const [seller, setSeller] = useState<Seller[]>([]);
  const [filteredSeller, setFilteredSeller] = useState<Seller[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getSellers()
      .then((response: AxiosResponse) => {
        setSeller(response.data);
        setFilteredSeller(response.data);
      })
      .catch((err) => {
        //console.log(err);
        setSeller(sellersJson as any);
        setFilteredSeller(sellersJson as any);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredSellers = [...seller].filter((x, i) =>
      x.sellerUserName
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );
    setFilteredSeller(filteredSellers);
  };

  return (
    <div>
      <Head>
        <title>SneakArts - Nos artistes</title>
        <meta
          name="description"
          content="SneakArts - Marketplace for creators"
        />
        <link rel="icon" href="/assets/img/favicon.ico" />
      </Head>
      {loading ? (
        <FullscreenLoader />
      ) : (
        <Container>
          <div className="my-8">
            <div className="mb-16">
              <h2 className="text-center md:text-left text-3xl md:text-4xl font-extrabold title-gradient mb-8">
                Nos Artistes Partenaires
              </h2>
              <div className="flex items-center justify-center">
                <CarouselCoverflow
                  items={seller?.map((a, i) => {
                    return <SellerItem key={`seller_${i}`} seller={a} />;
                  })}
                ></CarouselCoverflow>
              </div>
            </div>
            <div className="flex flex-wrap items-end justify-between">
              <h2 className="text-center md:text-left text-3xl md:text-4xl font-extrabold title-gradient mb-8">
                Artistes
              </h2>
              <div className="flex justify-between items-center">
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <SearchIcon
                      aria-hidden={true}
                      className="w-5 h-5 text-gray-300 dark:text-dark-400"
                    />
                  </div>
                  <input
                    type="text"
                    onChange={handleChangeSearch}
                    className="block bg-[rgba(0,0,0,0)] p-1 w-full pl-10 text-sm border-b border-gray-300 dark:border-dark-400 focus:border-primary-500 focus:outline-none"
                    placeholder="Rechercher"
                    required
                  ></input>
                </div>
              </div>
            </div>
            {filteredSeller.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-4">
                {filteredSeller.map((s, i) => {
                  return (
                    <SellerItem key={`seller_${i}`} seller={s}></SellerItem>
                  );
                })}
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <svg
                  className="max-w-lg"
                  width="900"
                  height="600"
                  viewBox="0 0 900 600"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="transparent" d="M0 0h900v600H0z" />
                  <path
                    d="M450 535.766c181.149 0 328-5.715 328-12.766s-146.851-12.767-328-12.767S122 515.949 122 523c0 7.051 146.851 12.766 328 12.766z"
                    fill="url(#a)"
                  />
                  <rect
                    x="203"
                    y="122"
                    width="437"
                    height="361"
                    rx="18"
                    fill="#fff"
                    stroke="#E1E4E5"
                    strokeWidth="4"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M252 237.701v4.703c0 2.597 2.079 4.704 4.641 4.704h55.699c2.562 0 4.641-2.107 4.641-4.704v-4.778c0-14.233-16.05-23.48-32.49-23.48-16.441 0-32.491 9.252-32.491 23.48m20.837-64.799c-6.436 6.436-6.436 16.871 0 23.307 6.436 6.437 16.871 6.437 23.308 0 6.436-6.436 6.436-16.871 0-23.307-6.437-6.436-16.872-6.436-23.308 0z"
                    fill="#cbd5e1"
                  />
                  <rect
                    x="241"
                    y="260"
                    width="85"
                    height="10"
                    rx="5"
                    fill="#E1E4E5"
                  />
                  <rect
                    x="241"
                    y="280"
                    width="85"
                    height="10"
                    rx="5"
                    fill="#E1E4E5"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M252 389.701v4.703c0 2.597 2.079 4.704 4.641 4.704h55.699c2.562 0 4.641-2.107 4.641-4.704v-4.778c0-14.233-16.05-23.48-32.49-23.48-16.441 0-32.491 9.252-32.491 23.48m20.837-64.799c-6.436 6.436-6.436 16.871 0 23.307 6.436 6.437 16.871 6.437 23.308 0 6.436-6.436 6.436-16.871 0-23.307-6.437-6.436-16.872-6.436-23.308 0z"
                    fill="#cbd5e1"
                  />
                  <rect
                    x="241"
                    y="412"
                    width="85"
                    height="10"
                    rx="5"
                    fill="#E1E4E5"
                  />
                  <rect
                    x="241"
                    y="432"
                    width="85"
                    height="10"
                    rx="5"
                    fill="#E1E4E5"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M377 237.701v4.703c0 2.597 2.079 4.704 4.641 4.704h55.699c2.562 0 4.641-2.107 4.641-4.704v-4.778c0-14.233-16.05-23.48-32.49-23.48-16.441 0-32.491 9.252-32.491 23.48m20.837-64.799c-6.436 6.436-6.436 16.871 0 23.307 6.436 6.437 16.871 6.437 23.308 0 6.436-6.436 6.436-16.871 0-23.307-6.437-6.436-16.872-6.436-23.308 0z"
                    fill="#cbd5e1"
                  />
                  <rect
                    x="366"
                    y="260"
                    width="85"
                    height="10"
                    rx="5"
                    fill="#E1E4E5"
                  />
                  <rect
                    x="366"
                    y="280"
                    width="85"
                    height="10"
                    rx="5"
                    fill="#E1E4E5"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M377 389.701v4.703c0 2.597 2.079 4.704 4.641 4.704h55.699c2.562 0 4.641-2.107 4.641-4.704v-4.778c0-14.233-16.05-23.48-32.49-23.48-16.441 0-32.491 9.252-32.491 23.48m20.837-64.799c-6.436 6.436-6.436 16.871 0 23.307 6.436 6.437 16.871 6.437 23.308 0 6.436-6.436 6.436-16.871 0-23.307-6.437-6.436-16.872-6.436-23.308 0z"
                    fill="#cbd5e1"
                  />
                  <rect
                    x="366"
                    y="412"
                    width="85"
                    height="10"
                    rx="5"
                    fill="#E1E4E5"
                  />
                  <rect
                    x="366"
                    y="432"
                    width="85"
                    height="10"
                    rx="5"
                    fill="#E1E4E5"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M502 237.701v4.703c0 2.596 2.079 4.704 4.641 4.704h55.699c2.562 0 4.641-2.108 4.641-4.704v-4.778c0-14.233-16.05-23.48-32.49-23.48-16.441 0-32.491 9.252-32.491 23.48m0 152.075v4.703c0 2.596 2.079 4.704 4.641 4.704h55.699c2.562 0 4.641-2.108 4.641-4.704v-4.778c0-14.233-16.05-23.48-32.49-23.48-16.441 0-32.491 9.252-32.491 23.48m20.837-216.799c-6.436 6.436-6.436 16.871 0 23.308 6.436 6.436 16.871 6.436 23.308 0 6.436-6.437 6.436-16.872 0-23.308-6.437-6.436-16.872-6.436-23.308 0zm0 152c-6.436 6.436-6.436 16.871 0 23.308 6.436 6.436 16.871 6.436 23.308 0 6.436-6.437 6.436-16.872 0-23.308-6.437-6.436-16.872-6.436-23.308 0z"
                    fill="#cbd5e1"
                  />
                  <rect
                    x="491"
                    y="260"
                    width="85"
                    height="10"
                    rx="5"
                    fill="#E1E4E5"
                  />
                  <rect
                    x="491"
                    y="412"
                    width="85"
                    height="10"
                    rx="5"
                    fill="#E1E4E5"
                  />
                  <rect
                    x="491"
                    y="280"
                    width="62"
                    height="10"
                    rx="5"
                    fill="#E1E4E5"
                  />
                  <rect
                    x="491"
                    y="432"
                    width="85"
                    height="10"
                    rx="5"
                    fill="#E1E4E5"
                  />
                  <path
                    d="M683.358 373.294s-16.259 10.64-30.005 9.55c-13.747-1.09-22.322-14.748-26.925-19.706-4.599-4.958-16.193-16.939-12.715-21.963 3.478-5.024 6.57.387 7.729 3.865 1.16 3.478.02-3.455 1.751-3.08 1.728.375 1.04 4.583 2.736 5.959 1.697 1.372 26.817 14.512 32.227 13.739 5.411-.773 7.78-2.257 9.303-3.834 1.518-1.58 17.912 12.035 15.899 15.47z"
                    fill="#F8AE9D"
                  />
                  <path
                    d="m630.196 502.706-.043 7.285-16.645 8.969v3.923h33.29v-6.724l1.743-13.453h-18.345z"
                    fill="#E1E4E5"
                  />
                  <path
                    d="M713.695 413.839s-45.954-15.706-67.179-13.152c-20.904 4.251-21.062 29.464-20.985 44.297.078 14.832 2.539 57.73 2.539 57.73h23.366s8.359-38.581 11.149-56.78c0 0 1.148-8.146 7.297-5.055 25.174 12.661 40.988 6.957 43.86-5.024 2.871-11.98-.047-22.016-.047-22.016z"
                    fill="#5D6A79"
                  />
                  <path
                    d="M694.696 346.605s-15.037 7.401-27.265 9.252c-12.753 1.932 5.024 18.55 18.937 18.55s8.328-27.802 8.328-27.802z"
                    fill="#cbd5e1"
                  />
                  <path
                    d="m756.751 511.656 8.92.043 8.32 11.207h4.162v-31.388h-7.134l-14.268 2.844v17.294z"
                    fill="#E1E4E5"
                  />
                  <path
                    d="M756.778 512.375v-19.323c-18.856-1.932-26.229-2.16-46.032-2.253-14.222-.066-6.844-3.931-6.844-3.931 15.574-10.821 31.562-37.1 31.562-37.1 9.426-14.686 4.101-37.487 4.101-37.487s-17.217 5.024-31.972 4.251c0 0-15.985 19.71-43.86 62.994-11.138 17.294-9.863 36.265 11.057 37.262 0 0 50.425.611 81.988-4.413z"
                    fill="#5D6A79"
                  />
                  <path
                    d="M700.049 344.526s-13.295 2.443-14.922 19.656c-1.213 12.846-.212 30.268-.212 35.871 0 5.604-2.856 5.133 1.066 6.814 3.923 1.681 24.734 18.55 53.302 5.518 0 0 4.459-25.823 3.122-41.459-.842-9.836-3.478-25.894-20.498-27.273l-21.858.873z"
                    fill="#cbd5e1"
                  />
                  <path
                    d="m704.037 317.729-7.308-.17s-6.036 26.434 8.912 23.427l-.282 2.79s-4.572.669-6.303 1.056c0 0 5.186 4.463 11.431 3.965 6.245-.499 10.601-4.568 10.601-4.568l-3.069-.31-1.136-11.099s3.571-1.893 3.795-4.123c.224-2.23-.278-2.845-1.893-3.571-1.616-.727-4.128 1.839-4.128 1.839s-2.284-5.298-2.504-8.703l-8.116-.533z"
                    fill="#F8AE9D"
                  />
                  <path
                    d="m633.809 331.896 110.83 91.152a8.723 8.723 0 0 1 1.275 12.193 8.727 8.727 0 0 1-12.251 1.372l-112.607-90.031 12.753-14.686z"
                    fill="#5D6A79"
                  />
                  <path
                    d="M592.844 249c30.844 0 55.844 25 55.844 55.844s-25 55.844-55.844 55.844-55.844-25-55.844-55.844S562 249 592.844 249zm0 95.325c21.804 0 39.481-17.677 39.481-39.481 0-21.804-17.677-39.481-39.481-39.481-21.804 0-39.481 17.677-39.481 39.481 0 21.804 17.677 39.481 39.481 39.481z"
                    fill="#E1E4E5"
                  />
                  <path
                    d="M727.028 405.371s-16.258 10.639-30.005 9.549c-13.746-1.089-22.322-14.747-26.925-19.705-4.599-4.959-16.193-16.939-12.715-21.963 3.479-5.024 6.57.386 7.73 3.865 1.159 3.478.019-3.455 1.75-3.081 1.728.375 1.04 4.584 2.737 5.96 1.696 1.372 26.816 14.511 32.227 13.739 5.41-.773 7.779-2.257 9.302-3.834 1.519-1.581 17.913 12.034 15.899 15.47z"
                    fill="#F8AE9D"
                  />
                  <path
                    d="M741.231 362.667s.788 24.88-5.009 35.315c-5.797 10.434-6.211 10.774-11.609 5.194-5.395-5.581-15.057-11.223-13.704-15.745 1.352-4.521 4.131-12.324 5.217-19.207 1.159-7.343 3.864-22.415 9.661-24.347 0 0 13.882 5.12 15.444 18.79z"
                    fill="#cbd5e1"
                  />
                  <path
                    d="M720.235 332.662c-1.194 1.906-4.055 1.897-3.552-.295.571-2.492.927-5.795-1.198-5.405-2.124.391-2.408 2.023-3.148.973-.741-1.051-.316-5.097-6.412-6.048-6.097-.948-8.818.908-11.528-.652-1.624-.934-2.162-2.855-2.333-4.247-.048-.395.29-.903.514-.575.213.311.827.359.689.01-.857-2.161-1.983-6.792 2.489-9.665 5.988-3.846 11.28-.326 14.444.212 6.971 1.186 11.457 2.099 13.247 6.946 1.483 4.021.132 13.41-3.212 18.746z"
                    fill="#5D6A79"
                  />
                  <path
                    d="M174.364 378.662c-11.407 10.485-31.568 7.125-31.568 7.125s-1.653-20.359 9.763-30.838c11.407-10.485 31.558-7.132 31.558-7.132s1.654 20.359-9.753 30.845z"
                    fill="url(#b)"
                  />
                  <circle
                    r="7"
                    transform="matrix(1 0 0 -1 167 310)"
                    fill="#E1E4E5"
                  />
                  <circle cx="708" cy="193" r="8" fill="#5D6A79" />
                  <circle cx="682" cy="247" r="10" fill="#E1E4E5" />
                  <circle
                    cx="662.883"
                    cy="171.883"
                    r="3.171"
                    transform="rotate(105 662.883 171.883)"
                    fill="#E1E4E5"
                  />
                  <circle cx="691" cy="148" r="5" fill="#E1E4E5" />
                  <path
                    d="M654.578 91h-.152C653.522 103.346 644 103.536 644 103.536s10.5.198 10.5 14.464c0-14.266 10.5-14.464 10.5-14.464s-9.518-.19-10.422-12.536z"
                    fill="#E1E4E5"
                  />
                  <circle
                    r="12.5"
                    transform="matrix(1 0 0 -1 159.5 148.5)"
                    fill="url(#c)"
                  />
                  <circle
                    r="6.5"
                    transform="matrix(-1 0 0 1 229.5 94.5)"
                    fill="#E1E4E5"
                  />
                  <defs>
                    <linearGradient
                      id="a"
                      x1="463.987"
                      y1="550.082"
                      x2="463.957"
                      y2="482.449"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset="1" stopColor="#EEE" />
                    </linearGradient>
                    <linearGradient
                      id="b"
                      x1="129.175"
                      y1="414.161"
                      x2="213.835"
                      y2="295.253"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset="1" stopColor="#EEE" />
                    </linearGradient>
                    <linearGradient
                      id="c"
                      x1="13.033"
                      y1="39.016"
                      x2="12.262"
                      y2="-27.196"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset="1" stopColor="#EEE" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}
          </div>
        </Container>
      )}
    </div>
  );
};

export default Home;
