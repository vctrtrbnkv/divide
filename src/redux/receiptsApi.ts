import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IReceipt, TReceiptUpdate } from './inerfaces';

export const receiptsApi = createApi({
    reducerPath: 'receiptsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    tagTypes: ['Receipts'],
    endpoints: (builder) => ({
        getReceipts: builder.query<IReceipt[], void>({
            query: () => 'receipts',
            providesTags: ['Receipts'],
        }),
        getReceiptById: builder.query<IReceipt, number>({
            query: (id) => `receipts/${id}`,
            providesTags: (result, error, id) => [{ type: 'Receipts', id }],
        }),
        uploadReceipt: builder.mutation<
            { id: number },
            Pick<IReceipt, 'totalAmount'>
        >({
            query: (receipt) => ({
                url: 'receipts',
                method: 'POST',
                body: receipt,
            }),
            invalidatesTags: ['Receipts'],
        }),
        deleteReceipt: builder.mutation<void, number>({
            query: (id) => ({
                url: `receipts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Receipts'],
        }),
        updateReceipt: builder.mutation<void, TReceiptUpdate>({
            query: ({ id, ...patch }) => ({
                url: `receipts/${id}`,
                method: 'PATCH',
                body: patch,
            }),
            invalidatesTags: ['Receipts'],
        }),
    }),
});

export const {
    useGetReceiptsQuery,
    useGetReceiptByIdQuery,
    useUploadReceiptMutation,
    useDeleteReceiptMutation,
    useUpdateReceiptMutation,
} = receiptsApi;
