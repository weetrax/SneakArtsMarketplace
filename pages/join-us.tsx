import Container from "../components/_Layout/Container";
import Head from "next/head";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SneakArts - Join us</title>
        <meta
          name="description"
          content="SneakArts - Marketplace for creators | Join us now !"
        />
        <link rel="icon" href="/assets/img/favicon.ico" />
      </Head>
      <div className="py-16 md:py-0">
        <Container>
          <section className="min-h-screen-nav flex gap-4 flex-col md:flex-row relative items-center justify-center">
            <div className="w-full md:w-1/2 text-center md:text-left ">
              <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl">
                Rejoignez <span className="title-gradient">SneakArts</span>
              </h1>
              <h2 className="text-lg">
                Proposez vos services de création auprès de nombreux amateurs de
                Custom !
              </h2>
              <div className="mt-12">
                <a
                  href="https://sneakarts.com/vendorlogin?create_account=1"
                  target={"_blank"}
                  rel="noreferrer nooperer"
                  className="rounded-full px-8 py-3 text-white border border-primary-500 bg-primary-500 hover:bg-primary-400 duration-200 transition-all ease-in-out"
                >
                  M{"'"}inscrire !
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                className="max-w-md mx-auto w-full"
                src="/assets/img/joinus.svg"
              ></img>
            </div>
          </section>
          <svg
            width="16"
            height="49"
            viewBox="0 0 16 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto featured-page-header-arrow relative mb-12"
          >
            <path
              opacity="0.5"
              d="M7.2929 48.7071C7.68342 49.0976 8.31658 49.0976 8.70711 48.7071L15.0711 42.3431C15.4616 41.9526 15.4616 41.3195 15.0711 40.9289C14.6805 40.5384 14.0474 40.5384 13.6569 40.9289L8 46.5858L2.34315 40.9289C1.95262 40.5384 1.31946 40.5384 0.928934 40.9289C0.53841 41.3195 0.53841 41.9526 0.928934 42.3431L7.2929 48.7071ZM7 4.37114e-08L7 48L9 48L9 -4.37114e-08L7 4.37114e-08Z"
              fill="#596380"
            ></path>
          </svg>
          <section className="py-12">
            <div className="text-3xl md:text-4xl font-extrabold title-gradient mb-12">
              Comment ca marche ?
            </div>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-4">
                <div className="text-xl title-gradient font-extrabold">1.</div>
                <div className="font-bold mb-3">Validation du compte</div>
                <p>
                  SneakArts étudie votre profil pour s{"'"}assurer que vous êtes
                  un Professionnel.
                </p>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="text-xl title-gradient font-extrabold">2.</div>
                <div className="font-bold mb-3">Création de votre Shop</div>
                <p>
                  Vous commencez à mettre en avant vos oeuvres et services avec
                  les bons tags.
                </p>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="text-xl title-gradient font-extrabold">3.</div>
                <div className="font-bold mb-3">Commencez à vendre</div>
                <p>
                  Commencez à vendre auprès de nouveaux clients. Vous récupérez
                  90% du total, si vendu sur notre site
                </p>
              </div>
            </div>
          </section>
          <section className="py-16">
            <div className="text-3xl md:text-4xl font-extrabold title-gradient mb-12">
              Pourquoi vendre sur SneakArts ?
            </div>
            <div className="grid grid-cols-12 gap-8">
              <div className="group col-span-12 md:col-span-4 border dark:border-dark-400 dark:hover:border-primary-500 hover:border-primary-500 shadow-sm rounded-lg p-4 duration-200 transition-colors ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 mb-4 group-hover:text-primary-500 duration-200 transition-colors ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                </svg>

                <p>
                  Gagnez de l{"'"}argent grâce à un nouveau canal de vente dédié
                  au Custom
                </p>
              </div>
              <div className="group col-span-12 md:col-span-4 border dark:border-dark-400 dark:hover:border-primary-500 hover:border-primary-500 shadow-sm rounded-lg p-4 duration-200 transition-colors ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 mb-4 group-hover:text-primary-500 duration-200 transition-colors ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p>Touchez les nombreux visiteurs de SneakArts</p>
              </div>
              <div className="group col-span-12 md:col-span-4 border dark:border-dark-400 dark:hover:border-primary-500 hover:border-primary-500 shadow-sm rounded-lg p-4 duration-200 transition-colors ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 mb-4 group-hover:text-primary-500 duration-200 transition-colors ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <p>
                  Facilitez le passage de commandes et la prise de contact Pro
                </p>
              </div>
              <div className="group col-span-12 md:col-span-4 border dark:border-dark-400 dark:hover:border-primary-500 hover:border-primary-500 shadow-sm rounded-lg p-4 duration-200 transition-colors ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 mb-4 group-hover:text-primary-500 duration-200 transition-colors ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                  />
                </svg>
                <p>
                  Bénéficiez d{"'"}un code Créateur de 10% pour vous et votre
                  communauté
                </p>
              </div>
              <div className="group col-span-12 md:col-span-4 border dark:border-dark-400 dark:hover:border-primary-500 hover:border-primary-500 shadow-sm rounded-lg p-4 duration-200 transition-colors ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 mb-4 group-hover:text-primary-500 duration-200 transition-colors ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                  />
                </svg>
                <p>
                  Nous traduisons en Anglais tous les services pour une
                  visibilité à l{"'"}International
                </p>
              </div>
              <div className="group col-span-12 md:col-span-4 border dark:border-dark-400 dark:hover:border-primary-500 hover:border-primary-500 shadow-sm rounded-lg p-4 duration-200 transition-colors ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 mb-4 group-hover:text-primary-500 duration-200 transition-colors ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                  />
                </svg>
                <p>
                  SneakArts ne prend que 10% de commission sur les ventes
                  réalisées
                </p>
              </div>
            </div>
          </section>
          <section className="text-center pb-16">
            <a
              href="https://sneakarts.com/vendorlogin?create_account=1"
              target={"_blank"}
              rel="noreferrer nooperer"
              className="rounded-full px-8 py-3 text-white border border-primary-500 bg-primary-500 hover:bg-primary-400 duration-200 transition-all ease-in-out"
            >
              Rejoindre SneakArts !
            </a>
          </section>
        </Container>
      </div>
    </>
  );
};

export default Home;
