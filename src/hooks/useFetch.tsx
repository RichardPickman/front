import { useState } from "react"


export const useProductFetch = (url: string) => {
    const [status, setStatus] = useState(0);
    const [message, setMessage] = useState('');

    const fetchForm = async (method: string, payload: unknown) => {
        const response = await fetch(`${url}/index.php`, {
            method: method,
            body: JSON.stringify(payload),
        });
        const body = await response.json();

        if (response.status === 400) {
            setStatus(400);
            setMessage(body.message);
        }

        if (response.status === 200) {
            setStatus(200);
            setMessage(body.message);
        }
    }

    const clearFetchStates = () => {
        setStatus(0);
        setMessage('');
    }

    return [status, message, fetchForm, clearFetchStates] as const;
}
