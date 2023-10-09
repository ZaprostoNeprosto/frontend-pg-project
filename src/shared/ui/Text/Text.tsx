import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

export enum HeaderTag {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
}

export enum TextTag {
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
    p = 'p',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    headerHTMLTag?: HeaderTag;
    textHTMLTag?: TextTag;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        headerHTMLTag = 'h1',
        textHTMLTag = 'p',
    } = props;

    const HeaderHTMLTagElement = HeaderTag[headerHTMLTag];
    const TextHTMLTagElement = TextTag[textHTMLTag];

    return (
        <div className={classNames(cls.Text, {}, [
            className, cls[theme], cls[align], cls[size],
        ])}
        >
            {title && <HeaderHTMLTagElement className={cls.title}>{title}</HeaderHTMLTagElement>}
            {text && <TextHTMLTagElement className={cls.text}>{text}</TextHTMLTagElement>}
        </div>
    );
});
