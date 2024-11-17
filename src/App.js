import { ThemeProvider } from 'styled-components';
import GlobalStyle from './global/globalStyle';
import theme from './global/theme';
import AnimalsContainer from './docs/context/expert/AnimalsContainer';
import CountContainer from './pages/docs/count/CountContainer';
import FontContainer from './pages/docs/font/FontContainer';
import { Route, RouterProvider, Routes } from 'react-router-dom';
import Main from './pages/main/_component/Main';
import Intro from './pages/intro/_component/Intro';
import Job from './pages/job/_component/Job';
import router from './routes/router';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
