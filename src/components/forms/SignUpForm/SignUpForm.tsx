import React, {FC} from "react";
import {Button, Col, DatePicker, Input, Radio, Row} from "antd";
import {NavLink} from "react-router-dom";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import {SignUpFormElement, SignUpFormWrapper } from "./SignUpForm.styled";

type PropsType = {}

const dateFormat = 'YYYY/MM/DD';

export const SignUpForm: FC<PropsType> = () => {
    return (
        <form>
            <Row>
                <SignUpFormWrapper>
                    <SignUpFormElement>
                        <Input placeholder={'Email'}/>
                    </SignUpFormElement>
                    <SignUpFormElement>
                        <Input.Password
                            placeholder="Пароль"
                            iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                        />
                    </SignUpFormElement>
                    <SignUpFormElement>
                        <Input.Password
                            placeholder="Повторите пароль"
                            iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                        />
                    </SignUpFormElement>
                    <SignUpFormElement>
                        <Input placeholder={'Имя'}/>
                    </SignUpFormElement>
                    <SignUpFormElement>
                        <Input placeholder={'Фамилия'}/>
                    </SignUpFormElement>
                </SignUpFormWrapper>
                <Col>
                    <SignUpFormElement style={{width: 220}}>
                        <Input placeholder={'Номер телефона'}/>
                    </SignUpFormElement>
                    <Row style={{paddingBottom: 23}}>
                        <Row style={{paddingRight: 10, paddingTop: 6}}>Дата рождения :</Row>
                        <DatePicker placeholder={'Выберите дату'} format={dateFormat}/>
                    </Row>
                    <SignUpFormElement>
                        <Row style={{paddingRight: 30}}>Пол :</Row>
                        <Radio.Group>
                            <Radio value={1} style={{paddingRight: 20}}>Мужской</Radio>
                            <Radio value={2}>Женский</Radio>
                        </Radio.Group>
                    </SignUpFormElement>
                </Col>
            </Row>
            <Row>
                <Button>Создать аккаунт</Button>
                <NavLink to={'/login'}><Button type="link">Уже есть аккаунт</Button></NavLink>
            </Row>
        </form>
    )
}
