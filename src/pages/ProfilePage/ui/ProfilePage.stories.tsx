import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from 'pages/ProfilePage/ui/ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema } from 'entities/Profile';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

const profile: ProfileSchema = {
    form: {
        username: 'admin',
        age: 29,
        country: Country.Kazakhstan,
        lastName: 'fsdfsdfdsf',
        firstName: 'asd',
        city: 'asf',
        currency: Currency.USD,
        avatar: 'https://img.myloview.ru/murals/profile-icon-vector-male-user-person-avatar-in-flat-color-glyph-pictogram-illustration-700-121123314.jpg',
    },
    isLoading: false,
    readonly: false,
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile,
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile,
})];
