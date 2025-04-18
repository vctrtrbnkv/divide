import { createBrowserRouter } from 'react-router-dom';

import GuestEditPage from './pages/GuestEditPage/GuestEditPage';
import MainPage from './pages/Main/MainPage';
import NotFoundPage from './pages/NotFound/NotFound';
import RootPage from './pages/Root/RootPage';
import SplitSettingsPage from './pages/SplitSettings/SplitSettingsPage';
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
        path: Paths.SplitSetupId,
        element: <SplitSetupPage />,
        children: [],
    },
    {
        path: Paths.SplitSettingsId,
        element: <SplitSettingsPage />,
        children: [],
    },
    {
        path: Paths.GuestCreate,
        element: <GuestEditPage />,
        children: [],
    },
    {
        path: Paths.GuestEdit,
        element: <GuestEditPage />,
        children: [],
    },
]);
