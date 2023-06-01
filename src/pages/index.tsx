import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Layout } from '@/components/Layout';
import { BoxWithCheckbox } from '@/components/BoxWithCheckbox';
import { Item } from '@/components/Item';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Book, CD, Furniture } from '@/types';
import Head from 'next/head';


export default function Home({ products, API_URL }: { products: (CD | Book | Furniture)[], API_URL: string }) {
  const router = useRouter();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const onCheckboxClick = (id: string) =>
    selectedItems.includes(id)
      ? setSelectedItems(prev => prev.filter(itemId => itemId !== id))
      : setSelectedItems(prev => [...prev, id]);

  const onDelete = async () => {
    await fetch(`${API_URL}/index.php`, {
      method: 'DELETE',
      body: JSON.stringify(selectedItems),
    });

    router.reload();
  };

  return (
    <main className="flex justify-center">
      <Layout>
        <Head>
          <title>Home</title>
          <meta name="Home page of the best e commerce web site that human kind ever known" />
        </Head>
        <Header>
          <h1>Product List</h1>
          <div className="flex gap-2">
            <Link href={'add-product'}>
              <Button value="Add" onClick={() => { }} />
            </Link>
            <Button value="Mass delete" onClick={onDelete} />
          </div>
        </Header>
        <div className="grid grid-cols-4 gap-4">
          {products.map((item) => (
            <BoxWithCheckbox key={item.sku} id={item.sku} isActive={selectedItems.includes(item.sku)} onChange={onCheckboxClick}>
              <Item {...item} />
            </BoxWithCheckbox>
          ))}
        </div>
      </Layout>
    </main>
  )
}

export const getServerSideProps = async () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const response =
    await fetch(`${API_URL}/index.php`, { method: 'GET' })
      .then(res => res.json()) as (CD | Book | Furniture)[];

  const payload = response.map((item) => {
    if (item.type === 'furniture') {
      const { sku, name, price, type, ...rest } = item;

      return {
        sku,
        name,
        price,
        dimension: Object.values(rest).join('x'),
      }
    }

    return item;
  });

  return {
    props: {
      products: payload,
      API_URL,
    }
  }
}
