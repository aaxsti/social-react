import styled from "styled-components";

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

export const RightMessageElements = styled.div`
  color: gray;
  font-size: 14px;
  float: right;
  padding-right: 10px;
`
