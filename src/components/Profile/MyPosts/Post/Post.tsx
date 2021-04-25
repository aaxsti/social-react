import React, {useState} from 'react';
import s from './Post.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {Image} from 'antd';
import {HeartTwoTone} from "@ant-design/icons";

type PropsType = {
    message: string
    likesCount: number
    date: Date
}

const Post: React.FC<PropsType> = ({message, likesCount, date}) => {

    const [localLikesCount, setLocalLikesCount] = useState(likesCount)

    // @ts-ignore
    const userPhoto: string | undefined = useSelector((state: AppStateType) => state.profilePage.profile?.photos.large)

    return (
        <div className={s.posts}>
            <div className={s.item} style={{fontSize: '16px'}}>
                <Image src={userPhoto} preview={false} style={{borderRadius: '40px'}}/>
                <span>{message}</span>
                <div>
                    {/*<span>{likesCount} <HeartTwoTone  twoToneColor="#1890ff"/> </span>*/}
                    <span>{localLikesCount} <span><HeartTwoTone onClick={() => setLocalLikesCount(prevCount => prevCount + 1)} twoToneColor="#1890ff"/></span> </span>
                    <span>{date.toISOString().substring(0, 10)} {date.toISOString().substr(11, 5)}</span>
                </div>
            </div>
        </div>
    )
};

export default Post;


