import React, { forwardRef, useImperativeHandle, useRef } from 'react';

import { FilePickerRef, IFilePickerProps } from '../interfaces'; // Подключаем интерфейсы
import { InvisibleInput } from './styles';

const FilePicker = forwardRef<FilePickerRef, IFilePickerProps>(
    ({ accept = '*/*', capture, onFileSelect, multiple = false }, ref) => {
        const inputRef = useRef<HTMLInputElement>(null);

        // Позволяет передать ref наружу, чтобы родительский компонент мог управлять input
        useImperativeHandle(ref, () => inputRef.current!);

        const trigger = () => {
            inputRef.current?.click();
        };

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const files = e.target.files;
            if (!files || files.length === 0) return;

            if (multiple) {
                onFileSelect(Array.from(files));
            } else {
                onFileSelect(files[0]);
            }
        };

        return (
            <>
                <InvisibleInput
                    ref={inputRef}
                    type="file"
                    accept={accept}
                    capture={capture}
                    onChange={handleChange}
                    multiple={multiple}
                    style={{ display: 'none' }}
                />
                {trigger}
            </>
        );
    }
);

FilePicker.displayName = 'FilePicker'; // Для удобства дебага

export default FilePicker;
