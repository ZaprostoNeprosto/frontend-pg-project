import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'user' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('user123'),
        )).toEqual({ username: 'user123' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123456'),
        )).toEqual({ password: '123456' });
    });
});
