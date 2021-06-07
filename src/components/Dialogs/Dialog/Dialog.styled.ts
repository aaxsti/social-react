import styled from "styled-components";
import {Col, Row} from "antd";

export const DialogDate = styled.p`
  margin: 0;
  padding: 0;
  color: gray;
  font-size: 13px;
`

export const DialogItemInfo = styled(Col)`
  padding-left: 20px;
`

export const DialogItem = styled(Row)`
  width: 300px;
  padding: 10px;
  transition: 0.3s;
  &:hover {
    opacity: 1;
    background-color: #ebedee;
  }
  cursor: pointer;
`

export const DialogItemRight = styled(Col)`
  font-size: 16px;
  margin-left: auto;
`

export const NewMessagesCount = styled.span`
  color: gray;
`