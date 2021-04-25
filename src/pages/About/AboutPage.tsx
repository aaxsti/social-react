import React, {FC} from "react";
import style from "./AboutPage.module.css"
import githubIcon from '../../assets/about/github.svg'
import linkedinIcon from '../../assets/about/linkedin.svg'
import vkIcon from '../../assets/about/vkontakte.svg'
import telegramIcon from '../../assets/about/telegram.svg'
import gmailIcon from '../../assets/about/gmail.svg'

type PropsType = {}

const About: FC<PropsType> = (props) => {
    return (
        <div className={style.aboutBlock}>
            <h3>Me in social</h3>
            <div className={style.iconsBlock}>
                <a href='https://github.com/aaxsti'><img src={githubIcon} alt='link icons'/></a>
                <a href='https://linkedin.com/in/astapenko-maxim'><img src={linkedinIcon} alt='link icons'/></a>
                <a href='https://vk.com/bladerunner1'><img src={vkIcon} alt='link icons'/></a>
                <a href='https://t.me/astapenkomaxim'><img src={telegramIcon} alt='link icons'/></a>
                <a href='mailto:3646824@gmail.com'><img src={gmailIcon} alt='link icons'/></a>
            </div>
        </div>
    )
}

export default About;