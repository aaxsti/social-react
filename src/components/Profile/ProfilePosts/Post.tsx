import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Avatar, List} from 'antd';
import {CloseCircleOutlined, HeartTwoTone} from "@ant-design/icons";
import {actions} from '../../../redux/profile-reducer';

type PropsType = {
    message: string
    likesCount: number
    date: Date
    id: number
    profileImage: string | null | undefined
}

const Post: React.FC<PropsType> = ({message, likesCount, date, id, profileImage}) => {

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

    return (
        <div style={{backgroundColor: '#f0f2f5', borderRadius: 2, marginBottom: 10}}>
            <List size={'large'}>
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={profileImage} size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 80}}/>}
                        title={message}
                        description={
                            <span>{date.toISOString().substring(0, 10) + ' ' + date.toISOString().substr(11, 5)}
                            <div style={{paddingTop: 3}}><HeartTwoTone onClick={!isLiked ? like : unlike}
                                                                       twoToneColor="#1890ff"/> {localLikesCount}</div></span>}/>
                    <CloseCircleOutlined style={{float: 'right', fontSize: 20}} onClick={deletePostCallback}/>
                </List.Item>
            </List>
        </div>
    )
};

export default Post;

