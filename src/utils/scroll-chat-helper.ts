import React from "react";

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