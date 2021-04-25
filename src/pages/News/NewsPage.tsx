import React,  {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Preloader from "../../components/common/Preloader/Preloader";
import {requestNews} from "../../redux/news-reducer";
import NewsItem from "./NewsItem";
import { Button } from "antd";

type PropsType = {
    list : Array<any>
    size : number
    page : number
    find : Function
    preloader: boolean
    showmore?: Function
}

const News : FC<PropsType> = () => {
    const dispatch = useDispatch();

    const props : PropsType = {
        find: function(){dispatch(requestNews(this.size))},
        size: useSelector((state: AppStateType) => state.news.size),
        list: useSelector((state : AppStateType) => state.news.list),
        page: useSelector((state : AppStateType) => state.news.page),
        preloader: useSelector((state : AppStateType) => state.news.preloader),
        // showmore: function(){dispatch(showMoreNews(this.size, this.page))}
    }

    function mount() {
        props.find(props.size)
    }

    useEffect(mount,[])

    let elements = props.list.map((item, index) => <NewsItem
        title={item.title} image={item.imageUrl} description={item.summary}
        newsSite={item.newsSite} publishedAt={item.publishedAt} key={index}/>)
    return (
        props.preloader ? <Preloader/> : <div>
            <h2>News</h2>
            {elements}
            <Button onClick={() => {}}>Show more</Button>
        </div>

    )
}

export default News;