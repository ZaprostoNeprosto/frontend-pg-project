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
import { memo, useRef, } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './Page.module.scss';
export var Page = memo(function (props) {
    var className = props.className, children = props.children, onScrollEnd = props.onScrollEnd;
    var wrapperRef = useRef();
    var triggerRef = useRef();
    useInfiniteScroll({
        triggerRef: triggerRef,
        wrapperRef: wrapperRef,
        callback: onScrollEnd,
    });
    return (_jsxs("section", __assign({ ref: wrapperRef, className: classNames(cls.Page, {}, [className]) }, { children: [children, _jsx("div", { ref: triggerRef }, void 0)] }), void 0));
});
