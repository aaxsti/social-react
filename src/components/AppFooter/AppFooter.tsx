import React, {FC} from "react";
import githubIcon from '../../assets/about/github.svg'
import linkedinIcon from '../../assets/about/linkedin.svg'
import vkIcon from '../../assets/about/vkontakte.svg'
import telegramIcon from '../../assets/about/telegram.svg'
import gmailIcon from '../../assets/about/gmail.svg'
import {
    AboutBlock,
    AboutBlockHeader,
    AboutBlockInfo,
    FooterWrapper,
    IconsBlock,
    IconsBlockElement} from "./AppFooter.styled";

const AppFooter: FC= () => {
    return (
        <FooterWrapper>
            <AboutBlock>
                <AboutBlockHeader>
                    Me in social
                </AboutBlockHeader>
                <IconsBlock>
                    <IconsBlockElement href='https://github.com/aaxsti'>
                        <img src={githubIcon} alt='github link icon'/>
                    </IconsBlockElement>
                    <IconsBlockElement href='https://linkedin.com/in/astapenko-maxim'>
                        <img src={linkedinIcon} alt='linkedin link icon'/>
                    </IconsBlockElement>
                    <IconsBlockElement href='https://vk.com/bladerunner1'>
                        <img src={vkIcon} alt='vk link icon'/>
                    </IconsBlockElement>
                    <IconsBlockElement href='https://t.me/astapenkomaxim'>
                        <img src={telegramIcon} alt='telegram link icon'/>
                    </IconsBlockElement>
                    <IconsBlockElement href='mailto:3646824@gmail.com'>
                        <img src={gmailIcon} alt='gmail link icon'/>
                    </IconsBlockElement>
                </IconsBlock>
                <AboutBlockInfo>
                    Social Network ©2021 Created by Maxim Astapenko
                </AboutBlockInfo>
            </AboutBlock>
        </FooterWrapper>
    )
}

export default AppFooter;