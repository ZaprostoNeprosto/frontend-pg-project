import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Исключительно в образовательных целях, пока нет бэкенда
    setTimeout(() => resolve(import('./ArticlesPage')), 1500);
}));
