import { useEffect, useRef, useState } from 'react';
import { NavigateFunction } from 'react-router-dom';

import { useUploadReceiptMutation } from '../../redux/receiptsApi';
import { Button } from '../../ui/Button';
import FilePicker from '../../ui/FilePicker';
import Camera from '../../ui/Icons/Camera';
import Download from '../../ui/Icons/Download';
import { detectDeviceType, DeviceType } from '../../utils/helpers/detectDevice';

interface UploadFileInputProps {
    navigate: NavigateFunction;
    redirectPath: string;
}

const UploadFileInput = ({ navigate, redirectPath }: UploadFileInputProps) => {
    const [deviceType, setDeviceType] = useState<DeviceType | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploadReceipt, { isLoading }] = useUploadReceiptMutation();

    useEffect(() => {
        const type = detectDeviceType();
        setDeviceType(type);
    }, []);

    const openFileInput = (
        accept: string,
        capture?: 'user' | 'environment'
    ) => {
        if (fileInputRef.current) {
            fileInputRef.current.accept = accept;
            if (capture) {
                fileInputRef.current.setAttribute('capture', capture);
            } else {
                fileInputRef.current.removeAttribute('capture');
            }
            fileInputRef.current.click();
        }
    };

    const handleFileSelect = async (file: File | File[]) => {
        const selectedFile = Array.isArray(file) ? file[0] : file;
        if (!selectedFile) return;

        // const formData = new FormData();
        // formData.append('file', selectedFile);

        const newReceipt = {
            // date: new Date().toISOString(),
            // companyName: 'Неизвестно',
            totalAmount: Math.round(Math.random() * 10000),
            items: [
                {
                    id: 1,
                    name: 'Борщ',
                    quantity: 2,
                    unitPrice: 250,
                    totalPrice: 500,
                },
                {
                    id: 2,
                    name: 'Чай с лимоном',
                    quantity: 1,
                    unitPrice: 100,
                    totalPrice: 200,
                },
                {
                    id: 3,
                    name: 'Куриное филе',
                    quantity: 1,
                    unitPrice: 410,
                    totalPrice: 820,
                },
            ],
            // recognized: false,
            // items: [],
            // guests: [],
            // tip: 0,
            // currency: '',
            // splitMode: '',
            // createdBy: { userId: 'mock_user', name: 'Вы' },
        };

        // formData.append('info', JSON.stringify(newReceipt));

        try {
            const result = await uploadReceipt(newReceipt).unwrap();
            console.log('Файл успешно отправлен');
            const newId = result.id;
            console.log('Новый идентификатор чека:', newId);
            navigate(`${redirectPath}/${newId}`);
        } catch (err) {
            console.error('Ошибка загрузки файла:', err);
        }
    };

    return (
        <>
            <FilePicker ref={fileInputRef} onFileSelect={handleFileSelect} />

            {deviceType === 'android' && (
                <>
                    <Button
                        onClick={() => openFileInput('image/*', 'environment')}
                        icon={<Camera />}
                        disabled={isLoading}
                    >
                        Сфотографировать чек
                    </Button>
                    <Button
                        onClick={() => openFileInput('image/*')}
                        icon={<Download />}
                        disabled={isLoading}
                    >
                        Загрузить чек
                    </Button>
                </>
            )}

            {deviceType === 'safari-ios' && (
                <Button
                    onClick={() => openFileInput('image/*')}
                    icon={<Download />}
                    disabled={isLoading}
                >
                    Добавить чек
                </Button>
            )}

            {deviceType === 'desktop' && (
                <Button
                    onClick={() => openFileInput('image/*')}
                    icon={<Download />}
                    disabled={isLoading}
                >
                    Загрузить чек
                </Button>
            )}
        </>
    );
};

export default UploadFileInput;
