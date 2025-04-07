import { createBrowserRouter } from 'react-router-dom';

import MainPage from './pages/Main/MainPage';
import NotFoundPage from './pages/NotFound/NotFound';
import RootPage from './pages/Root/RootPage';
import SplitSetupPage from './pages/SplitSetup/SplitSetup';
import { Paths } from './utils/constants';

export const router = createBrowserRouter([
    {
        path: Paths.Root,
        element: <RootPage />,
        children: [],
    },
    {
        path: Paths.Main,
        element: <MainPage />,
        children: [],
    },
    {
        path: Paths.NotFound,
        element: <NotFoundPage />,
        children: [],
    },
    {
        path: Paths.SplitSetup,
        element: <SplitSetupPage />,
        children: [],
    },
]);
