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
                <div className="text-lg title-gradient font-extrabold">1.</div>
                <div className="font-bold mb-3">Validation du compte</div>
                <p>
                  SneakArts étudie votre profil pour s{"'"}assurer que vous êtes
                  un Professionnel.
                </p>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="text-lg title-gradient font-extrabold">2.</div>
                <div className="font-bold mb-3">Création de votre Shop</div>
                <p>
                  Vous commencez à mettre en avant vos oeuvres et services avec
                  les bons tags.
                </p>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="text-lg title-gradient font-extrabold">3.</div>
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
              <div className="col-span-12 md:col-span-4 border dark:border-dark-400 dark:hover:border-primary-500 hover:border-primary-500 shadow-sm rounded-lg p-4 duration-200 transition-colors ease-in-out">
                <p>
                  Gagnez de l{"'"}argent grâce à un nouveau canal de vente dédié
                  au Custom
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 border dark:border-dark-400 dark:hover:border-primary-500 hover:border-primary-500 shadow-sm rounded-lg p-4 duration-200 transition-colors ease-in-out">
                <p>Touchez les nombreux visiteurs de SneakArts</p>
              </div>
              <div className="col-span-12 md:col-span-4 border dark:border-dark-400 dark:hover:border-primary-500 hover:border-primary-500 shadow-sm rounded-lg p-4 duration-200 transition-colors ease-in-out">
                <p>
                  Facilitez le passage de commandes et la prise de contact Pro
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 border dark:border-dark-400 dark:hover:border-primary-500 hover:border-primary-500 shadow-sm rounded-lg p-4 duration-200 transition-colors ease-in-out">
                <p>
                  Bénéficiez d{"'"}un code Créateur de 10% pour vous et votre
                  communauté
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 border dark:border-dark-400 dark:hover:border-primary-500 hover:border-primary-500 shadow-sm rounded-lg p-4 duration-200 transition-colors ease-in-out">
                <p>
                  Nous traduisons en Anglais tous les services pour une
                  visibilité à l{"'"}International
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 border dark:border-dark-400 dark:hover:border-primary-500 hover:border-primary-500 shadow-sm rounded-lg p-4 duration-200 transition-colors ease-in-out">
                <p>
                  SneakArts ne prend que 10% de commission sur les ventes
                  réalisées sur le site
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
