import styled from "styled-components";
import {Header} from "antd/es/layout/layout";
import {Col} from "antd";
import {Link} from "react-router-dom";

export const HeaderWrapper = styled(Header)`
  background-color: #979ea9;
  border-bottom: #bac2ce;
`
export const HeaderLogo = styled.img`
  width: 40px;
`

export const HeaderLogoWrapper = styled(Col)`
  padding-left: 120px;
`

export const HeaderUserAvatarLink = styled(Link)`
  padding-right: 30px;
`

export const HeaderUserEmail = styled.span`
  padding-left: 63px;
`


export const HeaderLogoLink = styled(Link)`
  color: black;

  &:hover {
    color: #414141;
    text-decoration: underline;
  }
`
