import React  from 'react';
import Button from '../Button'
import './index.scss';


const Dialog = ({ content, onOk, onClose, state }) => {


    const handleOk = () => {
        onOk(state.data);
        onClose({ accepted:true, ...state.data });
    }

    const handleClose = () => {
        onClose({ accepted:false, ...state.data });
    }

    const Template = () => (
        <div className="dialog">

            <div className="dialog-overlay"></div>

            <div className="dialog-wrapper">

                <div className="dialog-header">
                    <span>Remove Link</span>
                    <span className="close-icon" onClick={handleClose}>X</span>
                </div>
                <div className="dialog-content">
                    {content}
                </div>
                <div className="dialog-footer">
                    <Button onClick={handleOk}>OK</Button>
                    <Button onClick={handleClose}>CLOSE</Button>
                </div>
            </div>


        </div>
    )

    return state.isVisible ? <Template /> : <></>

}


export default Dialog;