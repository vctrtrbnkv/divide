export interface ReceiptItem {
    name: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
}

export interface Guest {
    name: string;
    phone: string;
    selectedItems: number[];
    customSplit: boolean;
    amountOwed: number;
}

export interface CreatedBy {
    userId: string;
    name: string;
}

export interface INewReceipt {
    imageUrl: string;
    date: string;
    companyName: string;
    totalAmount: number;
    currency: string;
    tip: number;
    recognized: boolean;
    items: ReceiptItem[];
    guests: Guest[];
    splitMode: string;
    createdBy: CreatedBy;
}

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
    guests: Guest[];
    splitMode: string;
    createdBy: CreatedBy;
}
