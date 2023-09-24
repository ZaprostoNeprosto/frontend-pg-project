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
import { memo } from 'react';
import cls from './Text.module.scss';
export var TextTheme;
(function (TextTheme) {
    TextTheme["PRIMARY"] = "primary";
    TextTheme["ERROR"] = "error";
})(TextTheme || (TextTheme = {}));
export var TextAlign;
(function (TextAlign) {
    TextAlign["RIGHT"] = "right";
    TextAlign["LEFT"] = "left";
    TextAlign["CENTER"] = "center";
})(TextAlign || (TextAlign = {}));
export var TextSize;
(function (TextSize) {
    TextSize["M"] = "size_m";
    TextSize["L"] = "size_l";
})(TextSize || (TextSize = {}));
export var Text = memo(function (props) {
    var className = props.className, text = props.text, title = props.title, _a = props.theme, theme = _a === void 0 ? TextTheme.PRIMARY : _a, _b = props.align, align = _b === void 0 ? TextAlign.LEFT : _b, _c = props.size, size = _c === void 0 ? TextSize.M : _c;
    return (_jsxs("div", __assign({ className: classNames(cls.Text, {}, [
            className, cls[theme], cls[align], cls[size],
        ]) }, { children: [title && _jsx("p", __assign({ className: cls.title }, { children: title }), void 0), text && _jsx("p", __assign({ className: cls.text }, { children: text }), void 0)] }), void 0));
});
