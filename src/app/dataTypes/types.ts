export interface Product {
    name: string;
    id: number;
    parent: number;
    photo: string;
    currency: string;
    price: string;
}

export interface Category {
    keyword_name: string;
    keyword_id: number;
}

export interface ApiResponse {
    aaData: Product[];
}
export interface TypeCategory {
    aaData: Category[];
}
