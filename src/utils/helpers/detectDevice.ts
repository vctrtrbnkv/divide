export type DeviceType = 'safari-ios' | 'android' | 'desktop' | 'other-mobile';

export const detectDeviceType = (): DeviceType => {
    const ua = navigator.userAgent;

    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
    const isAndroid = /Android/i.test(ua);
    const isMobile = /Mobi|Android/i.test(ua);

    if (isIOS && isSafari) return 'safari-ios';
    if (isAndroid) return 'android';
    if (!isMobile) return 'desktop';
    return 'other-mobile';
};
