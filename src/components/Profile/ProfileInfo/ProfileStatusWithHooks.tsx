import React, {useEffect, useState, FC, ChangeEvent} from 'react';
import {Input} from "antd";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
       setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
            <div style={{float: 'right'}}>
                <span style={{fontSize: '17px', color:'#ffffff'}} onDoubleClick={activateEditMode}>{props.status || "----"}</span>
            </div>
            }
            {editMode &&
            <div>
                <Input
                    style={{width: '150px', float: 'right'}}
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