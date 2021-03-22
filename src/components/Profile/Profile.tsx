import React, {FC} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../types/types";

type PropsType = {
    isOwner: boolean
    status: string
    profile: ProfileType | null

    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
    updateStatus: (status: string) => void
}


const Profile: FC<PropsType>= ({savePhoto, isOwner, profile, status, saveProfile, updateStatus}) => {
    return (
        <div>
            <ProfileInfo
                savePhoto={savePhoto}
                isOwner={isOwner}
                profile={profile}
                status={status}
                saveProfile={saveProfile}
                updateStatus={updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;


