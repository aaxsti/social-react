import React, {FC} from "react";
import {Button, Col, DatePicker, Input, Radio, Row} from "antd";
import {NavLink} from "react-router-dom";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";

type PropsType = {}

const dateFormat = 'YYYY/MM/DD';

export const SignUpForm: FC<PropsType> = () => {
    return (
        <form>
            <Row>
                <Col style={{paddingRight: 30}}>
                    <Row style={{paddingBottom: 15}}>
                        <Input placeholder={'Email'}/>
                    </Row>
                    <Row style={{paddingBottom: 15}}>
                        <Input.Password
                            placeholder="Пароль"
                            iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                        />
                    </Row>
                    <Row style={{paddingBottom: 15}}>
                        <Input.Password
                            placeholder="Повторите пароль"
                            iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                        />
                    </Row>
                    <Row style={{paddingBottom: 15}}>
                        <Input placeholder={'Имя'}/>
                    </Row>
                    <Row style={{paddingBottom: 15}}>
                        <Input placeholder={'Фамилия'}/>
                    </Row>
                </Col>
                <Col>
                    <Row style={{paddingBottom: 15, width: 220}}>
                        <Input placeholder={'Номер телефона'}/>
                    </Row>
                    <Row style={{paddingBottom: 23}}>
                        <Row style={{paddingRight: 10, paddingTop: 6}}>Дата рождения :</Row>
                        <DatePicker placeholder={'Выберите дату'} format={dateFormat}/>
                    </Row>
                    <Row style={{paddingBottom: 15}}>
                        <Row style={{paddingRight: 30}}>Пол :</Row>
                        <Radio.Group>
                            <Radio value={1} style={{paddingRight: 20}}>Мужской</Radio>
                            <Radio value={2}>Женский</Radio>
                        </Radio.Group>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Button>Создать аккаунт</Button>
                <NavLink to={'/login'}><Button type="link">Уже есть аккаунт</Button></NavLink>
            </Row>
        </form>
    )
}
