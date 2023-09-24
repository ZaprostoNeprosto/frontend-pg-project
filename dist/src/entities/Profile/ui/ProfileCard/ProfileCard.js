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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect } from 'entities/Currency';
import { CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';
export var ProfileCard = function (props) {
    var _a;
    var className = props.className, data = props.data, isLoading = props.isLoading, error = props.error, readonly = props.readonly, onChangeFirstName = props.onChangeFirstName, onChangeLastName = props.onChangeLastName, onChangeAge = props.onChangeAge, onChangeCity = props.onChangeCity, onChangeUsername = props.onChangeUsername, onChangeAvatar = props.onChangeAvatar, onChangeCurrency = props.onChangeCurrency, onChangeCountry = props.onChangeCountry;
    var t = useTranslation('profile').t;
    if (isLoading) {
        return (_jsx("div", __assign({ className: classNames(cls.ProfileCard, {}, [className, cls.loading]) }, { children: _jsx(Loader, {}, void 0) }), void 0));
    }
    if (error) {
        return (_jsx("div", __assign({ className: classNames(cls.ProfileCard, {}, [className, cls.error]) }, { children: _jsx(Text, { theme: TextTheme.ERROR, title: t('Произошла ошибка при загрузке профиля'), text: t('Попробуйте обновить страницу'), align: TextAlign.CENTER }, void 0) }), void 0));
    }
    var avatarValue;
    if (data === null || data === void 0 ? void 0 : data.avatar) {
        avatarValue = (data.avatar.length <= 15)
            ? data.avatar
            : "".concat(data.avatar.substring(0, 15), "...").concat(data.avatar.slice(-15));
    }
    else {
        avatarValue = '';
    }
    var mods = (_a = {},
        _a[cls.editing] = !readonly,
        _a);
    return (_jsx("div", __assign({ className: classNames(cls.ProfileCard, mods, [className]) }, { children: _jsxs("div", __assign({ className: cls.data }, { children: [(data === null || data === void 0 ? void 0 : data.avatar) && (_jsx("div", __assign({ className: cls.avatarWrapper }, { children: _jsx(Avatar, { src: data === null || data === void 0 ? void 0 : data.avatar }, void 0) }), void 0)), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.firstName, placeholder: t('Ваше имя'), className: cls.input, onChange: onChangeFirstName, readonly: readonly }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.lastName, placeholder: t('Ваша фамилия'), className: cls.input, onChange: onChangeLastName, readonly: readonly }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.age, placeholder: t('Ваш возраст'), className: cls.input, onChange: onChangeAge, readonly: readonly }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.city, placeholder: t('Ваш город'), className: cls.input, onChange: onChangeCity, readonly: readonly }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.username, placeholder: t('Имя пользователя'), className: cls.input, onChange: onChangeUsername, readonly: readonly }, void 0), _jsx(Input, { value: avatarValue, placeholder: t('Ссылка на аватар'), className: cls.input, onChange: onChangeAvatar, readonly: readonly }, void 0), _jsx(CurrencySelect, { className: cls.input, value: data === null || data === void 0 ? void 0 : data.currency, onChange: onChangeCurrency, readonly: readonly }, void 0), _jsx(CountrySelect, { className: cls.input, value: data === null || data === void 0 ? void 0 : data.country, onChange: onChangeCountry, readonly: readonly }, void 0)] }), void 0) }), void 0));
};
