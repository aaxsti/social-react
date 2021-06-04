import React, {useEffect, useState, FC, ChangeEvent} from 'react';
import {Input} from "antd";
import {useDispatch} from "react-redux";
import {updateStatus} from "../../../redux/profile-reducer";

type PropsType = {
    status: string
    isOwner: boolean
}

const ProfileStatusWithHooks: FC<PropsType> = (props) => {

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
                <div style={{paddingTop: 4, fontSize: '16px'}}
                     onDoubleClick={activateEditMode}>{props.status || "----"}</div>
            </div>
            }
            {editMode &&
            <div>
                <Input
                    style={{width: '276px'}}
                    onChange={onStatusChange}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    value={status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;