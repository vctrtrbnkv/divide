export interface ReceiptItem {
    id: number;
    name: string;
    quantity: number;
    unitPrice: number;
    totalPrice?: number;
}

export interface Guest {
    id: number;
    name: string;
    phone?: string;
    selectedItems?: number[];
    customSplit?: boolean;
    amountOwed?: number;
}

export interface CreatedBy {
    userId: string;
    name: string;
}

export type TGuests = Guest[];

export interface IReceipt {
    id: number;
    imageUrl: string;
    date: string;
    companyName: string;
    totalAmount: number;
    currency: string;
    tip: number;
    recognized: boolean;
    items: ReceiptItem[];
    guests: TGuests;
    splitMode: string;
}

export type TReceiptUpdate = {
    id: number;
    guests: TGuests;
};
