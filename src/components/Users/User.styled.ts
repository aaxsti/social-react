import styled from "styled-components";
import Item from "antd/es/list/Item";
import {NavLink} from "react-router-dom";
import {Col, Row} from "antd";

export const UserItem = styled(Item)`
  background-color: #f0f2f5;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12);
  margin-top: 15px;
  border-radius: 2px;
  transition: 0.3s;

  &:hover {
    opacity: 1;
    background-color: #d4d7de;
  }
`

export const CountryFlagIcon = styled.img`
  width: 15px;
`

export const UserNameLink = styled(NavLink)`
  color: black;
  &:hover {
    color: gray;
  }
`

export const UserListContent = styled(Col)`
  padding-left: 30px;
`

export const UserCountry = styled.div`
  padding-top: 5px;
`

export const UserItemRow = styled(Row)`
  padding: 0 10px 0 10px;
`

export const UserStatus = styled.p`
  margin: 0;
  padding: 0;
  color: gray;
  font-size: 13px;
  word-wrap: break-word;
  width: 600px;
`