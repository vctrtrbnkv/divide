import { Navigate } from 'react-router-dom';

import { Paths } from '../../utils/constants';

const RootPage = () => <Navigate to={Paths.Main} />;

export default RootPage;
