import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <VStack
                gap="16"
                max
                className={classNames(cls.CommentCard, {}, [className, cls.loading])}
            >
                <HStack gap="16">
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width={100} height={16} className={cls.username} />
                </HStack>
                <Skeleton width="100%" height={50} className={cls.text} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack
            gap="8"
            max
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <AppLink to={`${RoutePath.profile + comment.user.id}`} className={cls.headerLink}>
                <HStack gap="8">
                    {comment.user.avatar
                        ? <Avatar size={30} src={comment.user.avatar} />
                        : null}
                    <Text className={cls.username} title={comment.user.username} />
                </HStack>
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </VStack>
    );
});
