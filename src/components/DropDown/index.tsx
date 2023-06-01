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
                onClick={(event) => onChange(event.currentTarget.value)}
            >
                {elements.map((item) => (
                    <option
                        key={item}
                        value={item}
                    >
                        {item}
                    </option>
                ))}
            </select>
        </label>
    )
};
