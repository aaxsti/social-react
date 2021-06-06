import styled from "styled-components";
import {Button, Col} from "antd";

export const FormElement = styled.div`
  padding-top: 10px;
  width: 300px;
`

export const ProfileDataFormWrapper = styled.form`
  border: 1px solid #e4e4e4;
  border-radius: 2px;
  padding: 10px;
`

export const ProfileDataFormContacts = styled(Col)`
  padding-right: 80px;
`

export const ProfileDataFormHeader = styled.h3`
  padding-top: 5px;
`

export const SaveFormButton = styled(Button)`
  margin-top: 30px;
  margin-bottom: 30px;
`