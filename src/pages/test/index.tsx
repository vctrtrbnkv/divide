import React, { useEffect, useRef, useState } from 'react';

type DeviceType = 'safari-ios' | 'android' | 'desktop' | 'other-mobile';

const PhotoUploader = () => {
    const [deviceType, setDeviceType] = useState<DeviceType | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const openFileInput = (
        accept: string,
        capture?: 'environment' | 'user' | undefined
    ) => {
        if (!fileInputRef.current) return;
        fileInputRef.current.accept = accept;
        if (capture) {
            fileInputRef.current.setAttribute('capture', capture);
        } else {
            fileInputRef.current.removeAttribute('capture');
        }
        fileInputRef.current.click();
    };

    useEffect(() => {
        const ua = navigator.userAgent;
        const isIOS = /iPhone|iPad|iPod/i.test(ua);
        const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
        const isAndroid = /Android/i.test(ua);
        const isMobile = /Mobi|Android/i.test(ua);

        if (isIOS && isSafari) setDeviceType('safari-ios');
        else if (isAndroid) setDeviceType('android');
        else if (!isMobile) setDeviceType('desktop');
        else setDeviceType('other-mobile');
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            console.log('Выбран файл:', file);
        }
    };

    return (
        <div>
            <input
                ref={fileInputRef}
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />

            {deviceType === 'android' && (
                <>
                    <button onClick={() => openFileInput('image/*')}>
                        📁 Загрузить фото
                    </button>
                    <br />
                    <br />
                    <button
                        onClick={() => openFileInput('image/*', 'environment')}
                    >
                        📁 Сфотографировать фото
                    </button>
                </>
            )}

            {deviceType === 'safari-ios' && (
                <button onClick={() => openFileInput('image/*')}>
                    📷 Safari iOS — выбрать или сделать фото
                </button>
            )}

            {deviceType === 'desktop' && (
                <button onClick={() => openFileInput('image/*')}>
                    🖼 Загрузить с компьютера
                </button>
            )}

            {!deviceType && <p>🔍 Определяем устройство...</p>}
        </div>
    );
};

export default PhotoUploader;
