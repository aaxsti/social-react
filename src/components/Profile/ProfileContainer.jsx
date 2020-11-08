import React from 'react';
import Profile from "./Profile";
import {usersAPI} from "../../api/api";
import {connect} from 'react-redux';
import {setUserProfile} from "../../redux/profile-reducer";


class ProfileContainer extends React.Component {

    componentDidMount() {
        usersAPI.getUserProfile().then(data => {
            this.props.setUserProfile(data);
        });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);