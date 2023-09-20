import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Исключительно в образовательных целях, пока нет бэкенда
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 500);
}));
