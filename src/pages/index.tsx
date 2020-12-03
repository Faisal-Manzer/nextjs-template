import React from 'react';

import Head from 'next/head';
import { NextPage } from 'next'


const Home: NextPage = () => (
    <>
        <Head>
            <title>
                Hello World
            </title>
        </Head>
        <div className='flex justify-center items-center h-screen'>
            <h1 className='text-center'>
                Hello World
            </h1>
        </div>
    </>
);

export default Home;
