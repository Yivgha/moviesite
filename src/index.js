import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import {App} from "../src/components/App"
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

          <BrowserRouter basename="/moviesite">
            <App />
          </BrowserRouter>

    </ThemeProvider>
  </React.StrictMode>
);
