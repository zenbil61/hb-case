import React from 'react';
import './index.scss'

const Input = ({value,label,placeholder,onChange}) => {

    return (
    <div className="form-item">
            {label ?  <label> {label} </label>: null}

            <input type="text" value={value} placeholder={placeholder} onChange={onChange} />
    </div>
    )
}

export default Input;