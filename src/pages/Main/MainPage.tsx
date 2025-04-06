import { useEffect } from 'react';

import MainLayout from '../../layouts/MainLayout';
import MiniLayout from '../../layouts/MiniLayout';
import { apiFetch } from '../../utils/api';

const MainPage = () => {
    useEffect(() => {
        apiFetch('receipts').then((response) => {
            console.log(response);
        });
    }, []);

    return (
        <MainLayout>
            <MiniLayout>
                <div>Hello World!</div>
            </MiniLayout>
        </MainLayout>
    );
};

export default MainPage;
