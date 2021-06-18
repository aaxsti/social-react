import styled from "styled-components";
import {Col} from "antd";

export const DialogChatWindow = styled.div`
  padding: 10px;
  overflow-y: auto;
  height: 100%;
  border: 1px #ebedee solid;
  border-radius: 2px;
  background-color: #f3f3f7;
`

export const DialogMessagesBlock = styled(Col)`
  padding-left: 20px;
  max-height: 515px;
  width: 450px;
`