import styled from "styled-components";
import {CloseCircleOutlined} from "@ant-design/icons";

export const PostBlock = styled.div`
  background-color: #f0f2f5;
  border-radius: 2px;
  margin-bottom: 10px;
`

export const LikeElement = styled.div`
  padding-top: 3px;
`

export const DeletePostButton = styled(CloseCircleOutlined)`
  float: right;
  font-size: 20px;
`