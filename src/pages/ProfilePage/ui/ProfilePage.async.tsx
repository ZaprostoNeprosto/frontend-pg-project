import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Исключительно в образовательных целях, пока нет бэкенда
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
