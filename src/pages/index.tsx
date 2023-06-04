import Link from 'next/link';
import Head from 'next/head';
import { useLayoutEffect, useState } from 'react';

import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Layout } from '@/components/Layout';
import { BoxWithCheckbox } from '@/components/BoxWithCheckbox';
import { Item } from '@/components/Item';
import { useProducts } from '@/hooks/useProducts';
import { useRouter } from 'next/router';


export default function Home({ API_URL }: { API_URL: string }) {
  const [products, isError, getProducts, deleteProducts] = useProducts(API_URL);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const router = useRouter();

  const onCheckboxClick = (id: string) =>
    selectedItems.includes(id)
      ? setSelectedItems(prev => prev.filter(itemId => itemId !== id))
      : setSelectedItems(prev => [...prev, id]);

  const onDelete = () => deleteProducts(selectedItems);

  useLayoutEffect(() => {
    getProducts();
  }, [])

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
          <Button value="MASS DELETE" onClick={onDelete} />
        </div>
      </Header>
      <div className="grid grid-cols-4 gap-4">
        {isError &&
          <p className="text-red-500">
            Error occured while getting a products! <span className="text-sky-500 underline" onClick={() => getProducts()}>Try again?</span>
          </p>}
        {products && products.map((item) => (
          <BoxWithCheckbox key={item.sku} id={item.sku} isActive={selectedItems.includes(item.sku)} onChange={onCheckboxClick}>
            <Item {...item} />
          </BoxWithCheckbox>
        ))}
      </div>
    </Layout>
  )
}


export const getStaticProps = () => ({
  props: {
    API_URL: process.env.REACT_APP_API_URL,
  }
})
