import type { NextPage } from "next";
import Head from "next/head";
import Container from "../components/_Layout/Container";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SneakArts - artists</title>
        <meta
          name="description"
          content="SneakArts - Marketplace for creators"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className="my-8">
          <h1 className="text-2xl font-bold">artists</h1>
        </div>
      </Container>
    </div>
  );
};

export default Home;
