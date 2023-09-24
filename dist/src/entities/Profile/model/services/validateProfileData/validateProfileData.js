import { ValidateProfileError } from 'entities/Profile/model/types/profile';
export var validateProfileData = function (profile) {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    var firstName = profile.firstName, lastName = profile.lastName, age = profile.age, country = profile.country;
    var errors = [];
    if (!firstName || !lastName) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }
    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }
    return errors;
};
