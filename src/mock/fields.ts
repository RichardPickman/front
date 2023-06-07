import { ProductEntity } from "@/types";

export const productFields: ProductEntity = {
    DVD: {
        inputs: [
            {
                id: 'size',
                type: 'number',
                required: true,
            },
        ],
        description: 'Please, provide size',
    },
    Book: {
        inputs: [
            {
                id: 'weight',
                type: 'number',
                required: true,
            },
        ],
        description: 'Please, provide weight',
    },
    Furniture: {
        inputs: [
            {
                id: 'width',
                type: 'number',
                required: true,
            },
            {
                id: 'height',
                type: 'number',
                required: true,
            },
            {
                id: 'length',
                type: 'number',
                required: true,
            },
        ],
        description: 'Please, provide dimensions',
    },
}
