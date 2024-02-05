import { ApiResponse, TypeCategory } from './dataTypes/types';

const API_URL = 'https://sistemtoko.com/public/hijja/product';

export const fetchProducts = async (): Promise<ApiResponse> => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }

    return response.json();
};

const CATEGORY_URL = 'https://sistemtoko.com/public/hijja/cat';

export const fetchProductCategory = async (): Promise<TypeCategory> => {
    const response = await fetch(CATEGORY_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }

    return response.json();
};


