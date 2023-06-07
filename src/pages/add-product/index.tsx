import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import getConfig from "next/config";
import { useRouter } from "next/router";

import { Button } from "@/components/Button"
import { Col, Layout } from "@/components/Layout";
import { productFields } from "../../mock/fields";
import { useAddProduct } from "@/hooks/useFetch";
import { FormFields } from "../../components/Form";
import { ProductEntity } from "@/types";

export type InputField = string | number;

const AddProduct = ({ attributes, API_URL }: { attributes: ProductEntity, API_URL: string }) => {
    const [isError, message, onChange, onSubmit] = useAddProduct(API_URL, attributes);
    const router = useRouter();

    return (
        <Layout>
            <Head>
                <title>Add product</title>
                <meta name="Home page of the best e commerce web site that human kind ever known" />
            </Head>
            <div className="flex w-full items-center justify-center pb-2 border-b">
                <h1>Add Product</h1>
            </div>
            <form
                method="POST"
                id="product_form"
                className="flex flex-col mt-4 w-full gap-4"
                onSubmit={onSubmit}
            >
                {isError && <p className="text-red-500">{message}</p>}

                <FormFields attributes={attributes} onChange={onChange} />

                <div className="flex gap-2 justify-end">
                    <Button type="submit" value="Save" onClick={() => { }} />
                    <Button type="button" value="Cancel" onClick={() => router.push('/')} />
                </div>
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
