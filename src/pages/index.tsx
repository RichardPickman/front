import Head from 'next/head';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Layout } from '@/components/Layout';
import { BoxWithCheckbox } from '@/components/BoxWithCheckbox';
import { Item } from '@/components/Item';
import { useProducts } from '@/hooks/useProducts';

const Home = ({ API_URL }: { API_URL: string }) => {
    const [products, isError, getProducts, deleteProducts] = useProducts(API_URL);
    const router = useRouter();

    useLayoutEffect(() => {
        getProducts();
    }, []);

    return (
        <Layout>
            <Head>
                <title>Home</title>
                <meta name="Home page of the best e commerce web site that human kind ever known" />
            </Head>
            <Header>
                <h1>Product List</h1>
                <div className="flex gap-2">
                    <Button value="ADD" onClick={() => router.push('/add-product')} />
                    <Button value="MASS DELETE" onClick={() => deleteProducts()} />
                </div>
            </Header>
            <div className="grid grid-cols-4 w-full gap-4">
                {isError &&
                    <p className="text-red-500">
                        Error occured while getting a products! <span className="text-sky-500 underline" onClick={() => getProducts()}>Try again?</span>
                    </p>}
                {products && products.map((item) => (
                    <BoxWithCheckbox key={item.sku} id={item.sku}>
                        <Item {...item} />
                    </BoxWithCheckbox>
                ))}
            </div>
        </Layout >
    )
};

export default Home;

export const getStaticProps = () => ({
    props: {
        API_URL: process.env.REACT_APP_API_URL,
    }
})
