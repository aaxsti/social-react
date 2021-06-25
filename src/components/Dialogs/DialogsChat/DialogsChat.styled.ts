import styled from "styled-components";
import {Col} from "antd";

export const DialogChatWindow = styled.div`
  overflow-y: auto;
  height: 100%;
  border: 1px #ebedee solid;
  border-radius: 2px;
  background-color: #f3f5f7;
`

export const DialogMessagesBlock = styled(Col)`
  padding-left: 20px;
  max-height: 515px;
  width: 450px;
`

export const NoDialogHeader = styled.h1`
  text-align: center;
  padding-top: 50%;
  color: gray;
`