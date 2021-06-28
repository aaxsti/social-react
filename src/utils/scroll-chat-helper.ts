import React, {RefObject} from "react";

export const scrollChatHelper = (
    e: React.UIEvent<HTMLDivElement, UIEvent>,
    isAutoScroll: boolean,
    setIsAutoScroll: (bool: boolean) => void) => {

    const element = e.currentTarget;
    if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 70) {
        !isAutoScroll && setIsAutoScroll(true)
    } else {
        isAutoScroll && setIsAutoScroll(false)
    }
}

export const autoScrollHelper = (e: RefObject<HTMLDivElement>, isAutoScroll: boolean) => {
    const element = e.current;
    if (isAutoScroll || ((element!?.scrollHeight - element!?.scrollTop - element!?.clientHeight) < 70)) {
        element?.scrollIntoView({behavior: 'smooth'})
    }
    window.scrollTo(0,0)
}