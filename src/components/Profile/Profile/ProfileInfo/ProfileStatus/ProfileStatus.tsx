import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {updateStatus} from "../../../../../redux/profile-reducer";
import {StatusInput, StatusText} from './ProfileStatus.styled';

type PropsType = {
    status: string
    isOwner: boolean
}

const ProfileStatus: FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const dispatch = useDispatch();

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        props.isOwner && setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        dispatch(updateStatus(status));
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
            <div>
                <StatusText onDoubleClick={activateEditMode}>
                    {props.status || "----"}
                </StatusText>
            </div>
            }
            {editMode &&
            <div>
                <StatusInput
                    onChange={onStatusChange}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    value={status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatus;