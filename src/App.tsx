import { RouterProvider } from 'react-router-dom';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import { router } from './router';
import { theme } from './styles/theme';

const App = () => (
    <StyleSheetManager>
        <ThemeProvider theme={theme}>
            <Reset />
            <RouterProvider router={router} />
        </ThemeProvider>
    </StyleSheetManager>
);

export default App;
