import { Book, CD, Furniture } from "@/types";
import { useState } from "react"

export const useProducts = (API_URL: string) => {
    const [isError, setError] = useState(false);
    const [products, setProducts] = useState<(CD | Furniture | Book)[] | null>(null);

    const getProducts = async () => {
        const response = await fetch(`${API_URL}/index.php`, { method: 'GET' });
        const body = await response.json();

        if (response.status === 400) {
            setError(true);
        }

        const payload = body.map((item: CD | Furniture | Book) => {
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

        setProducts(payload);
    }

    const deleteProducts = async (ids: string[]) => {
        const response = await fetch(`${API_URL}/index.php`, {
            method: 'DELETE',
            body: JSON.stringify(ids),
        });

        if (response.status === 400) {
            setError(true);
        }

        getProducts();
    }

    return [products, isError, getProducts, deleteProducts] as const;
}
