import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Исключительно в образовательных целях, пока нет бэкенда
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));
