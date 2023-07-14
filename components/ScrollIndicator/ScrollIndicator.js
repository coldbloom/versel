import React, {useEffect, useState} from "react";
import style from './ScrollIndicator.module.css'
const ScrollIndicator = ({children}) => {
    const [scroll, setScroll] = useState(0);

    const onScroll = () => {
        const Scrolled = document.documentElement.scrollTop;
        const MaxHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const ScrollPercent = (Scrolled / MaxHeight) * 100;
        setScroll(ScrollPercent);
    };

    // if (typeof window !== "undefined") {
    //     window.addEventListener("scroll", onScroll);
    // }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
    }, [])

    return (
        <>
            <div className={style.container}>
                <div className={style.progressBar} style={{ width: `${scroll}%` }} />
            </div>
            {children}
        </>
    );
};

export default ScrollIndicator;
