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
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/addCommentForm';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Page } from 'shared/ui/Page/Page';
import { addCommentForArticle, } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId, } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsCommentsReducer, getArticleComments, } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
var reducers = {
    articleDetailsComments: articleDetailsCommentsReducer,
};
var ArticleDetailsPage = function (props) {
    var className = props.className;
    var t = useTranslation('article-details').t;
    var id = useParams().id;
    var dispatch = useDispatch();
    var comments = useSelector(getArticleComments.selectAll);
    var commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    var navigate = useNavigate();
    var onBackToList = useCallback(function () {
        navigate(RoutePath.articles);
    }, [navigate]);
    var onSendComment = useCallback(function (text) {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);
    // if (__PROJECT__ === 'storybook') {
    //     id = '1';
    // }
    useInitialEffect(function () {
        dispatch(fetchCommentsByArticleId(id));
    });
    if (!id) {
        return (_jsx(Page, __assign({ className: classNames(cls.ArticleDetailsPage, {}, [className]) }, { children: t('Статья не найдена') }), void 0));
    }
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsxs(Page, __assign({ className: classNames(cls.ArticleDetailsPage, {}, [className]) }, { children: [_jsx(Button, __assign({ theme: ButtonTheme.OUTLINE, onClick: onBackToList }, { children: t('Назад к списку') }), void 0), _jsx(ArticleDetails, { id: id }, void 0), _jsx(Text, { className: cls.commentTitle, title: t('Комментарии') }, void 0), _jsx(AddCommentForm, { onSendComment: onSendComment }, void 0), _jsx(CommentList, { isLoading: commentsIsLoading, comments: comments }, void 0)] }), void 0) }), void 0));
};
export default memo(ArticleDetailsPage);
