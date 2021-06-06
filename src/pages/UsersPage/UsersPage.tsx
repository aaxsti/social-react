import React, {FC, useEffect} from "react";
import User from "../../components/Users/User";
import {UsersSearchForm} from "../../components/forms/UsersSearchForm/UsersSearchForm";
import {FilterType, follow, requestUsers, unfollow} from "../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "../../selectors/users-selectors";
import {useHistory} from "react-router-dom";
import * as queryString from "querystring";
import Preloader from "../../components/common/Preloader/Preloader";
import {UserOutlined} from "@ant-design/icons";
import {List} from "antd";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {PaginatorWrapper, UserList, UsersPageWrapper } from "./UsersPage.styles";

type PropsType = {}

type QueryParamsType = { term?: string; page?: string; friend?: string };

const UsersPage: FC<PropsType> = () => {

    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType

        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)

        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}
        switch (parsed.friend) {
            case 'null':
                actualFilter = {...actualFilter, friend: null}
                break;
            case 'true':
                actualFilter = {...actualFilter, friend: true}
                break;
            case 'false':
                actualFilter = {...actualFilter, friend: false}
                break;
        }

        dispatch(requestUsers(actualPage, pageSize, actualFilter));
    }, [])

    useEffect(() => {
        const query: QueryParamsType = {}
        if (!!filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)

        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter));
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter));
    }

    const userFollow = (userId: number) => {
        dispatch(follow(userId))
    }

    const userUnfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }

    if (!users) {
        return <Preloader/>
    }

    return (
        <UsersPageWrapper>
            <h2><UserOutlined/> Пользователи ({totalUsersCount})</h2>

            <UsersSearchForm onFilterChanged={onFilterChanged}/>

            <PaginatorWrapper
                pageSize={pageSize}
                current={currentPage}
                total={totalUsersCount}
                onChange={onPageChanged}
                showSizeChanger={false}
            />

            <UserList>
                <List size={'large'}>
                    {users.map(u => <User
                        user={u}
                        key={u.id}
                        followingInProgress={followingInProgress}
                        unfollow={userUnfollow}
                        follow={userFollow}
                    />)}
                </List>
            </UserList>

            <PaginatorWrapper
                pageSize={pageSize}
                current={currentPage}
                total={totalUsersCount}
                onChange={onPageChanged}
                showSizeChanger={false}
            />

        </UsersPageWrapper>
    )
}

export default withAuthRedirect(UsersPage);