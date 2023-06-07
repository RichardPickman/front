import { ProductEntity } from "@/types";
import { useRouter } from "next/router";
import { useState } from "react"


export const useAddProduct = (url: string, attributes: ProductEntity) => {
    const [isError, setError] = useState(false);
    const [message, setMessage] = useState('');
    const [product, setProduct] = useState({});
    const [type, setType] = useState('');

    const router = useRouter();

    const fetchProduct = async (payload: Record<string, unknown>) => {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ ...payload, type }),
        });
        const body = await response.json();

        if (response.status === 400) {
            setError(true);
            setMessage(body.message);

            return;
        }

        router.push('/');
    }

    const onSubmit = async (event: any) => {
        event.preventDefault();

        const baseAtrr = ['sku', 'name', 'price'];

        if (!(type in attributes)) {
            return;
        }

        baseAtrr.push(...attributes[type].inputs.map((item) => item.id));

        const payload = Object.fromEntries(Object.entries(product).filter(([key]) => baseAtrr.includes(key)));

        fetchProduct(payload);
    };

    const clearError = () => {
        setError(false);
        setMessage('');
    }

    const onChange = (changedFields: typeof product, newType: string) => {
        setProduct({ ...product, ...changedFields });
        setType(newType);
        clearError();
    };

    return [isError, message, onChange, onSubmit] as const;
}
