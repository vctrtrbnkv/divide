import { useNavigate } from 'react-router-dom';

import SplitSetupForm from '../../components/SplitSetupForm';
import MainLayout from '../../layouts/MainLayout';
import { Paths } from '../../utils/constants';

const SplitSetupPage = () => {
    const navigate = useNavigate();

    const redirectPath = Paths.SplitSettings;

    return (
        <MainLayout>
            <SplitSetupForm navigate={navigate} redirectPath={redirectPath} />
        </MainLayout>
    );
};

export default SplitSetupPage;
