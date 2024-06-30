import { CartItem } from "store/cart-slice";

export interface OrderHistoryItemModel {
    id: string;
    orderDate: string;
    totalAmount: string;
    items: CartItem[];
}