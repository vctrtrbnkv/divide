import { ReactNode } from 'react';

export interface IInputBaseProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    maxLength?: number;
    type: 'text' | 'number' | 'radio';
    id: string;
}

export interface INumberInputProps extends IInputBaseProps {
    min: number;
    max: number;
    inputMode: string;
    pattern: string;
}

export interface IRadioInputProps extends IInputBaseProps {
    name: string;
    checked?: boolean;
}

export interface IButtonProps {
    children: ReactNode;
    icon?: ReactNode;
    onClick?: (e: React.MouseEvent) => void;
    disabled?: boolean;
}

import React from 'react';

export interface IFilePickerProps {
    accept?: string;
    capture?: 'user' | 'environment';
    onFileSelect: (file: File | File[]) => void;
    multiple?: boolean;
}

// Создаем тип для ссылки на input элемент
export type FilePickerRef = HTMLInputElement;
