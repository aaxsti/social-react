import React, {FC, useState} from "react";
import styles from "./Paginator.module.css";
import cn from 'classnames';
import { Button } from "antd";
import {LeftOutlined, RightOutlined } from "@ant-design/icons";

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage?: number
    portionSize?: number

    onPageChanged?: (pageNumber: number) => void
}

const Paginator: FC<PropsType> = ({
                                      totalItemsCount,
                                      pageSize,
                                      currentPage,
                                      onPageChanged = x => x,
                                      portionSize = 10
                                  }) => {
    // Getting total pages count
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    // Pushing pages to array
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const [portionNumber, setPortionNumber] = useState(1);

    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (

        <div className={styles.paginator}>

            {portionNumber > 1 &&
            <Button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}><LeftOutlined /></Button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={cn({
                        [styles.selectedPage]: currentPage === p
                    }, styles.pageNumber)}
                                 key={p}
                                 onClick={(e) => {
                                     onPageChanged(p);
                                 }}>{p}</span>

                })}

            {portionCount > portionNumber &&
            <Button onClick={() => {
                setPortionNumber((portionNumber + 1))
            }}><RightOutlined /></Button>
            }

        </div>
    )
}

export default Paginator;