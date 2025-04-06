import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Paths } from '../../utils/constants';

const RootPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(Paths.Main);
    }, [navigate]);

    return null;
};

export default RootPage;
