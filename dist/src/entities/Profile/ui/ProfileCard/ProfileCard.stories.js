var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { ProfileCard } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(ProfileCard, __assign({}, args), void 0); };
export var Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 29,
        country: Country.Kazakhstan,
        lastName: 'user123',
        firstName: 'asd',
        city: 'asf',
        currency: Currency.USD,
        avatar: 'https://img.myloview.ru/murals/profile-icon-vector-male-user-person-avatar-in-flat-color-glyph-pictogram-illustration-700-121123314.jpg',
    },
};
export var withError = Template.bind({});
withError.args = {
    error: 'true',
};
export var Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
