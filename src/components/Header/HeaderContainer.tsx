import React from 'react';
import Header, { MapPropsType, DispatchPropsType } from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<MapPropsType & DispatchPropsType> {

    render() {
        return (
            <Header
                {...this.props}
                isAuth={this.props.isAuth}
                login={this.props.login}
                logout={this.props.logout}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
};

export default compose(
    connect<MapPropsType, DispatchPropsType, {}, AppStateType>
    (mapStateToProps, {logout})
)(HeaderContainer)