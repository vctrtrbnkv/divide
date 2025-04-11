import { useEffect, useRef, useState } from 'react';

import { useUploadReceiptMutation } from '../../redux/receiptsApi';
// import { useNavigate } from 'react-router-dom';
// import { useAddReceiptMutation } from '../../redux/receiptsApi';
import { Button } from '../../ui/button';
import FilePicker from '../../ui/FilePicker';
import Camera from '../../ui/Icons/Camera';
import Download from '../../ui/Icons/Download';
import { detectDeviceType, DeviceType } from '../../utils/helpers/detectDevice';

const UploadFileInput = () => {
    const [deviceType, setDeviceType] = useState<DeviceType | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploadReceipt, { isLoading }] = useUploadReceiptMutation();
    // const navigate = useNavigate();

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

        const formData = new FormData();
        formData.append('file', selectedFile);

        const newReceipt = {
            date: new Date().toISOString(),
            companyName: 'Неизвестно',
            totalAmount: 0,
            recognized: false,
            items: [],
            guests: [],
            tip: 0,
            currency: '',
            splitMode: '',
            createdBy: { userId: 'mock_user', name: 'Вы' },
        };

        formData.append('info', JSON.stringify(newReceipt));

        try {
            await uploadReceipt(formData).unwrap();
            console.log('Файл успешно отправлен');
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
