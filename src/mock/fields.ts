import { ProductEntity } from "@/types";

export const productFields: ProductEntity = {
    dvd: {
        id: 'dvd',
        inputs: [
            {
                id: 'size',
                type: 'number',
                required: true,
            },
        ],
        description: 'Please, provide size',
    },
    book: {
        id: 'book',
        inputs: [
            {
                id: 'weight',
                type: 'number',
                required: true,
            },
        ],
        description: 'Please, provide weight',
    },
    furniture: {
        id: 'furniture',
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
