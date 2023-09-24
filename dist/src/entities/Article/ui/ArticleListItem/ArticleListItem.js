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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticleListItem.module.scss';
import { ArticleBlockType, ArticleView, } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
export var ArticleListItem = memo(function (props) {
    var className = props.className, article = props.article, view = props.view;
    var t = useTranslation().t;
    var navigate = useNavigate();
    var onOpenArticle = useCallback(function () {
        navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]);
    var types = _jsx(Text, { text: article.type.join(', '), className: cls.types }, void 0);
    var views = (_jsxs(_Fragment, { children: [_jsx(Text, { text: String(article.views), className: cls.views }, void 0), _jsx(Icon, { Svg: EyeIcon }, void 0)] }, void 0));
    if (view === ArticleView.BIG) {
        var textBlock = article.blocks.find(function (block) { return block.type === ArticleBlockType.TEXT; });
        return (_jsx("div", __assign({ className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, { children: _jsxs(Card, __assign({ className: cls.card }, { children: [_jsxs("div", __assign({ className: cls.header }, { children: [_jsx(Avatar, { size: 30, src: article.user.avatar }, void 0), _jsx(Text, { text: article.user.username, className: cls.username }, void 0), _jsx(Text, { text: article.createdAt, className: cls.date }, void 0)] }), void 0), _jsx(Text, { title: article.title, className: cls.title }, void 0), types, _jsx("img", { src: article.img, className: cls.img, alt: article.title }, void 0), textBlock && (_jsx(ArticleTextBlockComponent, { block: textBlock, className: cls.textBlock }, void 0)), _jsxs("div", __assign({ className: cls.footer }, { children: [_jsx(Button, __assign({ onClick: onOpenArticle, theme: ButtonTheme.OUTLINE }, { children: t('Читать далее') }), void 0), views] }), void 0)] }), void 0) }), void 0));
    }
    return (_jsx("div", __assign({ className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, { children: _jsxs(Card, __assign({ className: cls.card, onClick: onOpenArticle }, { children: [_jsxs("div", __assign({ className: cls.imageWrapper }, { children: [_jsx("img", { alt: article.title, src: article.img, className: cls.img }, void 0), _jsx(Text, { text: article.createdAt, className: cls.date }, void 0)] }), void 0), _jsxs("div", __assign({ className: cls.infoWrapper }, { children: [types, views] }), void 0), _jsx(Text, { text: article.title, className: cls.title }, void 0)] }), void 0) }), void 0));
});
