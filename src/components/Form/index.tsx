import { useState } from "react";
import { InputWithLabel } from "@/components/InputWithLabel";
import { DropDownMenu } from "@/components/DropDown";
import { ProductEntity } from "@/types";

const baseValues = {
    sku: {
        id: 'sku',
        inputs: [
            {
                id: 'sku',
                type: 'text',
                required: true,
            },
        ],
        description: 'Please, provide capacity',
    },
    name: {
        id: 'name',
        inputs: [
            {
                id: 'name',
                type: 'text',
                required: true,
            },
        ],
        description: 'Please, provide capacity',
    },
    price: {
        id: 'price',
        inputs: [
            {
                id: 'price',
                type: 'number',
                required: true,
            },
        ],
        description: 'Please, provide capacity',
    },
}

interface Props {
    attributes: ProductEntity,
    onChange: (changedFields: Record<string, string | number>, type: string) => void,
}

export const FormFields = ({ attributes, onChange }: Props) => {
    const types = ['', ...Object.keys(attributes)];
    const [type, setType] = useState(types[0]);

    return (
        <>
            {Object.entries(baseValues).map(([key, value]) => (
                <div className="grid grid-cols-2 items-center" key={key}>
                    <p className="capitalize">{key}</p>
                    {value.inputs.map((item) => (
                        <InputWithLabel
                            key={key}
                            {...item}
                            onChange={(text) => onChange({ [key]: text }, type)}
                        />
                    ))}
                </div>
            ))}
            <DropDownMenu elements={types} onChange={(value) => setType(value)} />
            {type && attributes[type].inputs.map((item) => (
                <div className="grid grid-cols-2 items-center" key={item.id}>
                    {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
                    <InputWithLabel
                        key={item.id}
                        {...item}
                        onChange={(text) => onChange({ [item.id]: text }, type)}
                    />
                </div>
            ))}
        </>
    );
}
