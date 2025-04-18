import { ReactNode } from 'react';
import React from 'react';

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

export interface ICheckboxInputProps {
    id?: string;
    name?: string;
    value?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export interface IButtonProps {
    children: ReactNode;
    icon?: ReactNode;
    onClick?: (e: React.MouseEvent) => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
}

export interface IFilePickerProps {
    accept?: string;
    capture?: 'user' | 'environment';
    onFileSelect: (file: File | File[]) => void;
    multiple?: boolean;
}

export type FilePickerRef = HTMLInputElement;
