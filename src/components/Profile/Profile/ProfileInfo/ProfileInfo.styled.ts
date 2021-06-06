import styled from "styled-components";
import {Col, Image, PageHeader, Row} from "antd";
import {NavLink} from "react-router-dom";

export const AvatarImage = styled(Image)`
  width: 200px;
  max-width: 100%;
  border-radius: 2px;
`
export const AvatarImageWrapperCol = styled(Col)`
  padding-right: 50px;
`
export const UserName = styled(PageHeader)`
  margin: 0;
  padding: 2px 0 0 0;
  border-bottom: 2px gray solid;
`
export const MainInfoNameRow = styled(Row)`
  color: gray;
  font-size: 15px;
`
export const MainInfoRow = styled(Row)`
  color: #416a92;
  font-size: 15px;
`

export const ProfileEditButton = styled(Col)`
  padding-left: 47px;
`

export const FriendsAmountBlock = styled.div`
  padding-top: 7px;
  font-size: 15px;
`

export const FriendsAmountLink = styled(NavLink)`
  color: #06162a;
`

export const MainProfileDataFields = styled.div`
  padding-top: 9px;
`

export const MainProfileDataFieldValues = styled.div`
  padding-left: 15px;
`

export const ProfileButtons = styled(Row)`
  padding-top: 15px;
`

export const HiddenUploadInput = styled.input`
  display: none;
`
