import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {updateStatus} from "../../../../../redux/profile-reducer";
import {StatusInput, StatusText} from './ProfileStatus.styled';
import {toast} from "react-toastify";

type PropsType = {
    status: string
    isOwner?: boolean
}

const ProfileStatus: FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState<boolean>(false);
    let [status, setStatus] = useState<string>(props.status);

    const dispatch = useDispatch();

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        props.isOwner && setEditMode(true);
    };

    const deactivateEditMode = () => {
        if (status.length > 50) {
            toast.info('Статус слишком длинный')
        } else {
            setEditMode(false);
            dispatch(updateStatus(status));
        }
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <>
            {!editMode &&
            <StatusText onDoubleClick={activateEditMode}>
                {props.status || "----"}
            </StatusText>
            }
            {editMode &&
            <StatusInput
                onChange={onStatusChange}
                autoFocus={true}
                onBlur={deactivateEditMode}
                value={status}/>
            }
        </>
    )
}

export default ProfileStatus;