import styled from "styled-components";
import {Footer} from "antd/es/layout/layout";

export const FooterWrapper = styled(Footer)`
  text-align: center;
  background-color: #e8e8ed
`
export const AboutBlock = styled.div`
  margin: 0 auto;
  width: 500px;
`
export const AboutBlockHeader = styled.h3`
  margin: 0;
  padding: 0 0 15px 0;
  font-weight: lighter;
  text-align: center;
  font-size: 18px;
`
export const IconsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IconsBlockElement = styled.a`
  outline: none;
  padding-right: 10px;

  &:last-child {
    padding-right: 0;
  }
`
export const AboutBlockInfo = styled.div`
  font-weight: lighter;
  padding-top: 20px;
`
