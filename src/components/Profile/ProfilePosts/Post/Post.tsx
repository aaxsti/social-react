import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Avatar, List} from 'antd';
import {HeartTwoTone} from "@ant-design/icons";
import {actions} from '../../../../redux/profile-reducer';
import {DeletePostButton, LikeElement, PostBlock} from './Post.styled';

type PropsType = {
    message: string
    likesCount: number
    date: Date
    id: number
    profileImage: string | null | undefined
    months: Array<string>
}

const Post: React.FC<PropsType> = ({message, likesCount, date, id, profileImage, months}) => {

    const [localLikesCount, setLocalLikesCount] = useState(likesCount)
    const [isLiked, setIsLiked] = useState(false);

    let dispatch = useDispatch();

    const deletePostCallback = () => {
        dispatch(actions.deletePost(id));
    }

    const like = () => {
        setLocalLikesCount(likesCount + 1);
        setIsLiked(false);
    };

    const unlike = () => {
        setLocalLikesCount(likesCount - 1);
        setIsLiked(true);
    };

    const formattedDate = date.getDate() + ' ' + months[date.getMonth()] + ' в ' +
        date.toLocaleTimeString().slice(0, -3);

    return (
        <PostBlock>
            <List.Item>
                <List.Item.Meta
                    avatar={<Avatar src={profileImage} size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 80}}/>}
                    title={message}
                    description={
                        <span>
                                {formattedDate}
                            <LikeElement><HeartTwoTone
                                onClick={!isLiked ? like : unlike}
                                twoToneColor="#1890ff"/> {localLikesCount}
                                </LikeElement>
                            </span>
                    }
                />
                <DeletePostButton onClick={deletePostCallback}/>
            </List.Item>
        </PostBlock>
    )
};

export default Post;

