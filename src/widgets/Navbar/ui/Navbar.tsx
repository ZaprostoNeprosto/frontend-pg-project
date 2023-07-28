import React from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss'
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} className={cls.mainLink}>
                    О сайте
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
                    Главная
                </AppLink>
            </div>
        </div>
    );
};