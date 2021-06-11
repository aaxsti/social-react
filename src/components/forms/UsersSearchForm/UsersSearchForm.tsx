import {Form, Formik} from "formik";
import React, {FC} from "react";
import {FilterType} from "../../../redux/users-reducer";
import {useSelector} from "react-redux";
import {getUsersFilter} from "../../../selectors/users-selectors";
import Button from "antd/lib/button";
import {Select} from "formik-antd";
import {SearchOutlined} from "@ant-design/icons";
import {SearchTermSelect, SearchUserInput} from "./UsersSearchForm.styled";

type FriendFormType = "true" | "false" | "null";

type FormType = {
    term: string
    friend: FriendFormType
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: FC<PropsType> = React.memo(({onFilterChanged}) => {

        const filter = useSelector(getUsersFilter)

        const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
            const filter: FilterType = {
                term: values.term,
                friend: values.friend === "null" ? null : values.friend === "true"
            }
            onFilterChanged(filter)
            setSubmitting(false)
        }

        return (
            <Formik
                enableReinitialize
                initialValues={{
                    term: filter.term,
                    friend: String(filter.friend) as FriendFormType
                }}
                onSubmit={submit}
            >
                {({isSubmitting}) => (
                    <Form>
                        <SearchUserInput name="term"/>

                        <Button htmlType="submit" disabled={isSubmitting}>
                            <SearchOutlined/>
                        </Button>

                        <SearchTermSelect name="friend">
                            <Select.Option value="null">Все</Select.Option>
                            <Select.Option value="true">Только друзья</Select.Option>
                            <Select.Option value="false">Все кроме друзей</Select.Option>
                        </SearchTermSelect>
                    </Form>
                )}
            </Formik>
        )
    }
)