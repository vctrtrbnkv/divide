import { RouterProvider } from 'react-router-dom';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import { router } from './router';
import GlobalStyle from './styles/globalStyles';
import { theme } from './styles/theme';

const App = () => (
    <StyleSheetManager>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <Reset />
            <RouterProvider router={router} />
        </ThemeProvider>
    </StyleSheetManager>
);

export default App;
