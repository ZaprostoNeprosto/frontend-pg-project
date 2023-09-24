import { loginActions, loginReducer } from './loginSlice';
describe('loginSlice.test', function () {
    test('test set username', function () {
        var state = { username: 'user' };
        expect(loginReducer(state, loginActions.setUsername('user123'))).toEqual({ username: 'user123' });
    });
    test('test set password', function () {
        var state = { password: '123' };
        expect(loginReducer(state, loginActions.setPassword('123456'))).toEqual({ password: '123456' });
    });
});
