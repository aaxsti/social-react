import styled from "styled-components";
import {Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";

export const FriendsPageHeader = styled.h2`
  padding-bottom: 9px;
`

export const FriendsSearchInput = styled(Input)`
  width: 200px;
`

export const SearchIcon = styled(SearchOutlined)`
  padding-left: 10px;
`