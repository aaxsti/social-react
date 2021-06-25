import React, {RefObject} from "react";

export const scrollChatHelper = (
    e: React.UIEvent<HTMLDivElement, UIEvent>,
    isAutoScroll: boolean,
    setIsAutoScroll: (bool: boolean) => void) => {

    const element = e.currentTarget;
    if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
        !isAutoScroll && setIsAutoScroll(true)
    } else {
        isAutoScroll && setIsAutoScroll(false)
    }
}

export const autoScrollHelper = (e: RefObject<HTMLDivElement>, isAutoScroll: boolean) => {
    const element = e.current;
    element?.scrollIntoView({behavior: 'smooth'})
    if (isAutoScroll) {
        element?.scrollIntoView({behavior: 'smooth'})
    }
    window.scrollTo(0,0)
}