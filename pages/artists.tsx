import { SearchIcon } from "@heroicons/react/outline";
import type { NextPage } from "next";
import Head from "next/head";
import ArtistItem from "../components/Artist/ArtistItem";
import Container from "../components/_Layout/Container";
import { Artist } from "../types";

const artists: Artist[] = [
  {
    id: "1",
    name: "Stefano",
    description: "lorem ipsum",
    imageUrl: "https://picsum.photos/seed/a/200/200",
    tags: ["cuir", "manga"],
    city: "Cannes",
    country: "France",
    address: "16 avenue Leon M",
  },
  {
    id: "2",
    name: "Blacky",
    description: "lorem ipsum",
    imageUrl: "https://picsum.photos/seed/b/200/200",
    tags: ["manga", "disney"],
    city: "Lille",
    country: "France",
    address: "16 avenue Leon M",
  },
  {
    id: "3",
    name: "Freeze",
    description: "lorem ipsum",
    imageUrl: "https://picsum.photos/seed/c/200/200",
    tags: ["sneakers"],
    city: "Paris",
    country: "France",
    address: "16 avenue Leon M",
  },
  {
    id: "4",
    name: "Cassy",
    description: "lorem ipsum",
    imageUrl: "https://picsum.photos/seed/d/200/200",
    tags: ["skate"],
    city: "Cannes",
    country: "France",
    address: "16 avenue Leon M",
  },
];

const Home: NextPage = () => {
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
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Artistes</h1>
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Search
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block p-4 min-w-[300px] pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-dark-600 dark:placeholder-gray-400 dark:text-white focus:border-primary-500 focus:outline-none transition-all duration-200 ease-in-out"
                  placeholder="Rechercher"
                  required
                ></input>
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-primary-500 hover:bg-primary-400 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-500 dark:hover:bg-primary-600"
                >
                  Ok
                </button>
              </div>
            </form>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-4">
            {artists.map((artist, index) => {
              return <ArtistItem artist={artist}></ArtistItem>;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
