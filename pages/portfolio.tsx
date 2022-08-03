import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../components/_Layout/Container'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>BoilerNext - Portfolio</title>
                <meta name="description" content="BoilerNext - A NextJS - Tailwind - Typescript Boilerplate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <div className='my-8'>
                    <h1 className='text-2xl font-bold'>Portfolio</h1>
                </div>
            </Container>
        </div>
    )
}

export default Home
