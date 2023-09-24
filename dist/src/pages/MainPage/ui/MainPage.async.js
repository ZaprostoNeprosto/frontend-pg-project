import { lazy } from 'react';
export var MainPageAsync = lazy(function () { return new Promise(function (resolve) {
    // @ts-ignore
    // Исключительно в образовательных целях, пока нет бэкенда
    setTimeout(function () { return resolve(import('./MainPage')); }, 500);
}); });
