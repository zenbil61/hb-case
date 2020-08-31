import React from 'react';
import './index.scss'

const Select = ({ data, onSelect, placeholder ,value}) => {
    return(
    <select defaultValue={ value ? value : "" } onChange={onSelect}>

         {!value ? <option value="" disabled>{placeholder}</option>  : null}

        {data.map(({text,val},index) => <option key={index} value={val}>{text}</option>)}

    </select> 
    )
}

export default Select;