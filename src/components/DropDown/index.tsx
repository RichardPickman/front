import { ProductInput, ProductInputType } from "@/types";

interface Props {
    elements: string[],
    onChange: (type: string) => void;
}

export const DropDownMenu = ({ elements, onChange }: Props) => {
    return (
        <label className="grid grid-cols-2 items-center">
            Type
            <select className="
                flex
                border
                w-full
                rounded
                justify-between
                p-2
                bg-white
            "
                id="productType"
                onClick={(event) => onChange(event.currentTarget.value)}
            >
                {elements.map((item) => (
                    <option
                        id={item}
                        key={item}
                        value={item}
                        className="capitalize"
                    >
                        {item}
                    </option>
                ))}
            </select>
        </label>
    )
};
