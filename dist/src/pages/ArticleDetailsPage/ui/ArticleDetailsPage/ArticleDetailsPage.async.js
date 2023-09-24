import { lazy } from 'react';
export var ArticleDetailsPageAsync = lazy(function () { return new Promise(function (resolve) {
    // @ts-ignore
    // Исключительно в образовательных целях, пока нет бэкенда
    setTimeout(function () { return resolve(import('./ArticleDetailsPage')); }, 500);
}); });
