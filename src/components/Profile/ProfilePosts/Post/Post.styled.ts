import styled from "styled-components";
import {CloseCircleOutlined} from "@ant-design/icons";
import {Col} from "antd";

export const PostBlock = styled.div`
  background-color: #f0f2f5;
  border-radius: 2px;
  margin-bottom: 10px;
  padding: 15px;
`

export const DeletePostButton = styled(CloseCircleOutlined)`
  float: right;
  font-size: 20px;
  transition: 0.2s;

  &:hover {
    opacity: 1;
    color: #000;
  }
`

export const PostInfo = styled(Col)`
  padding-left: 30px;
  padding-top: 10px;
`

export const PostDate = styled.span`
  color: gray;
  font-size: 13px;
`

export const PostText = styled.p`
  word-wrap: break-word;
  width: 600px;
`

export const PostActionsBlock = styled.div`
  color: gray;
  font-size: 16px;
`