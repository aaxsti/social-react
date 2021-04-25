import React, {FC} from "react";
import s from './NewsItem.module.css'
import {Image} from 'antd';

type PropsType = {
    title : string
    image : string
    description : string
    newsSite : string
    publishedAt : string
    key ?: number
}

const NewsItem: FC<PropsType>  = (props) => {
    let pub = props.publishedAt.slice(0, 10).split('-').join(' ')
    return (
        <div className={s.main}>

            <div className={s.mainBlock}>
                <div className={s.titleFlex}>
                    <h2 className={s.title}>{props.title.length >= 84 ? `${props.title.slice(0, 84)}...` : props.title}</h2>
                    <div className={s.publishedBlock}><h4 className={s.published}>{pub}</h4></div>

                </div>
                <div className={s.descriptionBlock}>
                    <p className={s.description}>{props.description}</p></div>
            </div>
            <div className={s.imageBlock}>
                <Image src={props.image} className={s.image} alt={''}/>
            </div>
        </div>
    )
}

export default NewsItem;