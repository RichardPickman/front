interface ItemProps {
    sku: string;
    name: string;
    price: string;
    dimension?: string;
    weight?: string;
    size?: string;
    type: string;
};

export const Item = (props: ItemProps) => (
    <div className="flex flex-col items-center justify-center w-full">
        {Object.entries(props).map(([key, value]) => (
            <p
                key={key}
                className="
                    w-full
                    truncate
                    text-xs
                "
            >
                {`${key}: ${value}`}
            </p>
        ))}
    </div>
)
