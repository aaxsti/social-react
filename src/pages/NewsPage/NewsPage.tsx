import React, {FC} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store/redux-store";
import NewsItem from "../../components/NewsItem/NewsItem";
import {Divider} from "antd";
import {ExceptionOutlined} from "@ant-design/icons";
type PropsType = {}

const News: FC<PropsType> = () => {
    const news = useSelector((state: AppStateType) => state.newsPage.news)

    let newsElements = news.map((item, index) => <NewsItem
        title={item.title} image={item.imageUrl} description={item.summary}
        publishedAt={item.publishedAt} key={index}/>)

    return (
        <div style={{width: 700}}>
            <h2><ExceptionOutlined/> Новости</h2>
            <Divider style={{margin: 0, padding: 0}}/>
            <div style={{paddingTop: 5}}>
            {newsElements}
            </div>
        </div>

    )
}

export default News;