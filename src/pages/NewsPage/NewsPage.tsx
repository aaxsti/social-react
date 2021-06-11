import React, {FC} from "react";
import {useSelector} from "react-redux";
import {Divider} from "antd";
import {ExceptionOutlined} from "@ant-design/icons";
import News from "../../components/News/News";
import {selectNews} from "../../selectors/news-selectors";

const NewsPage: FC = () => {
    const news = useSelector(selectNews)

    let newsElements = news.map((item, index) => <News
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

export default NewsPage;