import React, {FC} from "react";
import githubIcon from '../../assets/about/github.svg'
import linkedinIcon from '../../assets/about/linkedin.svg'
import vkIcon from '../../assets/about/vkontakte.svg'
import telegramIcon from '../../assets/about/telegram.svg'
import gmailIcon from '../../assets/about/gmail.svg'
import {Footer} from "antd/es/layout/layout";
import styled from "styled-components";

type PropsType = {}

const FooterWrapper = styled(Footer)`
  text-align: center;
  background-color: #e8e8ed
`
const AboutBlock = styled.div`
  margin: 0 auto;
  width: 500px;
`
const AboutBlockHeader = styled.h3`
  margin: 0;
  padding: 0 0 15px 0;
  font-weight: lighter;
  text-align: center;
  font-size: 18px;
`
const IconsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const IconsBlockElement = styled.a`
  outline: none;
  padding-right: 10px;

  &:last-child {
    padding-right: 0;
  }
`
const AboutBlockInfo = styled.div`
  font-weight: lighter;
  padding-top: 20px;
`

const AppFooter: FC<PropsType> = () => {
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