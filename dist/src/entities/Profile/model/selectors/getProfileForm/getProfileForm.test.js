import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';
describe('getProfileForm.test', function () {
    test('should return error', function () {
        var data = {
            username: 'admin',
            age: 29,
            country: Country.Kazakhstan,
            lastName: 'fsdfsdfdsf',
            firstName: 'asd',
            city: 'asf',
            currency: Currency.USD,
        };
        var state = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state)).toEqual(data);
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getProfileForm(state)).toEqual(undefined);
    });
});
