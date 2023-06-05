
interface Props {
    value: string,
    type?: "button" | "submit" | "reset" | undefined;
    onClick: () => void,
}

export const Button = ({ value, type, onClick }: Props) => {
    return (
        <a type={type} className="border rounded px-4 py-2" onClick={onClick}>
            {value}
        </a>
    )
}
