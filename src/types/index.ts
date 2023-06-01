export type ProductInputType = 'text' | 'number';

export type ProductInput = {
    id: string,
    type: ProductInputType,
    required: boolean,
}

export type ProductAttributes = {
    id: string,
    inputs: ProductInput[],
    description?: string,
}

export type ProductEntity = {
    [k: string]: ProductAttributes,
}

interface Product {
    sku: string,
    name: string,
    price: string,
}

export type Book = Product & {
    weight: string;
    type: 'book',
}

export type CD = Product & {
    size: string;
    type: 'dvd',
}

export type Furniture = Product & {
    dimension: string;
    type: 'furniture',
}

export type ProductType = CD['type'] | Book['type'] | Furniture['type'];
