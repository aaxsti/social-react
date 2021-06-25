import styled from "styled-components";
import {CloseCircleOutlined} from "@ant-design/icons";

export const DialogMessageElement = styled.div<{ viewed: boolean }>`
  background-color: ${props => (!props.viewed && "#e6eff7")};
  border-bottom: 1px #dadcdf solid;
  padding: 13px 0 5px 10px;
`

export const DialogMessageText = styled.p`
  padding: 0 0 0 5px;
  margin: 0;
  word-wrap: break-word
`

export const DeleteMessageButton = styled(CloseCircleOutlined)`
  color: gray;
  font-size: 18px;
  float: right;
  padding-right: 10px;
`