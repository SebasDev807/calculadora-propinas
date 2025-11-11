export interface MenuItem {
    id: number;
    name: string;
    price: number;
}

export type OrderItem = MenuItem & {
    quantity: number;
}

export interface TipOption {
    id: string;
    value: number;
    label: string;
}