import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy <FC<LoginFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    // Исключительно в образовательных целях, пока нет бэкенда
    setTimeout(() => resolve(import('./LoginForm')), 1500);
}));
