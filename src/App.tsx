import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import { store } from './redux/store';
import { router } from './router';
import GlobalStyle from './styles/globalStyles';
import { theme } from './styles/theme';

const App = () => (
    <Provider store={store}>
        <StyleSheetManager>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Reset />
                <RouterProvider router={router} />
            </ThemeProvider>
        </StyleSheetManager>
    </Provider>
);

export default App;
