import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Maxim
                </div>
                <div className={s.dialog}>
                    Ilya
                </div>
                <div className={s.dialog}>
                    Ivan
                </div>
                <div className={s.dialog}>
                    Stas
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
};

export default Dialogs;

