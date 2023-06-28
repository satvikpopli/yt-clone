import React, { useState } from 'react'
import './App.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import { lightTheme, darkTheme } from './components/styles/Themes';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Search from "./pages/Search";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/watch/:id",
    element: <Watch />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search/:id",
    element: <Search />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const themeToggler = () : void => {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;