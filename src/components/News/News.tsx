import React, {FC} from "react";
import { NewsItem, NewsItemDescription, NewsItemImage } from "./News.styled";

type PropsType = {
    title: string
    image: string
    description: string
    publishedAt: string
    key?: number
}

const News: FC<PropsType> = ({title, image, description, publishedAt}) => {
    return (
        <>
            <NewsItem>
                <div>
                    <div>
                        <h3>{title}</h3>
                        <h4>{publishedAt}</h4>
                    </div>
                    <NewsItemDescription>
                        <p>{description}</p>
                    </NewsItemDescription>
                </div>
                <NewsItemImage src={image} alt={'News item image'}/>
                <br/>
            </NewsItem>
            <br/>
        </>
    )
}

export default News;