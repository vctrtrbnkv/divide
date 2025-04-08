import { useEffect, useRef, useState } from 'react';

import { Button } from '../../ui/button';
import FilePicker from '../../ui/FilePicker';
import Camera from '../../ui/Icons/Camera';
import Download from '../../ui/Icons/Download';
import { detectDeviceType, DeviceType } from '../../utils/helpers/detectDevice';

const UploadFileInput = () => {
    const [deviceType, setDeviceType] = useState<DeviceType | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

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

    return (
        <>
            <FilePicker
                ref={fileInputRef}
                onFileSelect={(file) => console.log(file)}
            />

            {deviceType === 'android' && (
                <>
                    <Button
                        onClick={() => openFileInput('image/*', 'environment')}
                        icon={<Camera />}
                    >
                        Сфотографировать чек
                    </Button>
                    <Button
                        onClick={() => openFileInput('image/*')}
                        icon={<Download />}
                    >
                        Загрузить чек
                    </Button>
                </>
            )}

            {deviceType === 'safari-ios' && (
                <Button
                    onClick={() => openFileInput('image/*')}
                    icon={<Download />}
                >
                    Добавить чек
                </Button>
            )}

            {deviceType === 'desktop' && (
                <Button
                    onClick={() => openFileInput('image/*')}
                    icon={<Download />}
                >
                    Загрузить чек
                </Button>
            )}

            {!deviceType && <p>🔍 Определяем устройство...</p>}
        </>
    );
};

export default UploadFileInput;
