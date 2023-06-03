import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button"
import { Col, Layout } from "@/components/Layout";
import { productFields } from "../../mock/fields";
import { useProductFetch } from "@/hooks/useFetch";
import { ProductEntity } from "@/types";
import { FormFields } from "../../components/Form";
import { useRouter } from "next/router";
import Head from "next/head";

export type InputField = string | number;

const AddProduct = ({ attributes, API_URL }: { attributes: ProductEntity, API_URL: string }) => {
    const [status, message, fetchForm, clearFetchStates] = useProductFetch(API_URL);
    const [fields, setFields] = useState<Record<string, string | number>>({});
    const [type, setType] = useState('');

    const router = useRouter();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const baseAtrr = ['sku', 'name', 'price'];

        if (!(type in attributes)) {
            return;
        }

        baseAtrr.push(...attributes[type].inputs.map((item) => item.id));

        const payload = Object.fromEntries(Object.entries(fields).filter(([key]) => baseAtrr.includes(key)));

        fetchForm('POST', { ...payload, type });
    };

    const onChange = (changedFields: typeof fields, type: string) => {
        setFields({ ...fields, ...changedFields });
        setType(type);
        clearFetchStates();
    };

    useEffect(() => {
        if (message === 'Item successfully created') {
            router.push('/');
        }
    }, [status, message, router])

    return (
        <Layout>
            <Head>
                <title>Add product</title>
                <meta name="Home page of the best e commerce web site that human kind ever known" />
            </Head>
            <form
                method="POST"
                id="product_form"
                className="flex flex-col mt-4 w-full gap-4 max-w-md"
                onSubmit={handleSubmit}
            >
                <div className="flex items-center justify-between pb-2 border-b">
                    <h1>Product List</h1>
                    <div className="flex gap-2">
                        <Button type="submit" value="Save" onClick={() => { }} />
                        <Link href={'/'}>
                            <Button type="button" value="Cancel" onClick={() => { }} />
                        </Link>
                    </div>
                </div>
                <Col className="gap-2">
                    {status === 400 && <p className="text-red-500">{message}</p>}

                    <FormFields attributes={attributes} onChange={onChange} />
                </Col>
            </form>
        </Layout>
    )
}

export const getStaticProps = async () => ({
    props: {
        attributes: productFields,
        API_URL: process.env.REACT_APP_API_URL,
    }
})

export default AddProduct;
