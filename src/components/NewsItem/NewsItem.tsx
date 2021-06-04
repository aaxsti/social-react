import React, {FC} from "react";
import s from './NewsItem.module.css'
import {Image} from 'antd';

type PropsType = {
    title : string
    image : string
    description : string
    publishedAt : string
    key ?: number
}

const NewsItem: FC<PropsType>  = ({title, image, description, publishedAt}) => {
    return (
        <>
        <div style={{borderBottom: '1px #f0f0f0 solid', paddingBottom: 5}}>
            <div className={s.mainBlock}>
                <div className={s.titleFlex}>
                    <h3 className={s.title}>{title.length >= 84 ? `${title.slice(0, 84)}...` : title}</h3>
                    <div className={s.publishedBlock}><h4 className={s.published}>{publishedAt}</h4></div>

                </div>
                <div className={s.descriptionBlock}>
                    <p className={s.description}>{description}</p></div>
            </div>
            <div>
                <Image src={image} className={s.image} alt={''}/>
            </div>
            <br/>
        </div>
        <br/>
    </>
    )
}

export default NewsItem;