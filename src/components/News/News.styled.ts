import styled from "styled-components";
import {Image} from "antd";

export const NewsItem = styled.div`
  border-bottom: 1px #f0f0f0 solid;
  padding-bottom: 5px;
`

export const NewsItemDescription = styled.div`
  text-align: justify;
`

export const NewsItemImage = styled(Image)`
  width: 400px;
  border: 2px #c1c1c1 solid;
  border-radius: 3px;
  max-width: 100%;
`
