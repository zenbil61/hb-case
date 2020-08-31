import React from 'react';

import Select from './Select'
import Input from './Input'


const Form = ({children,onSubmit}) => {    


    const handleSubmit = event => {
        onSubmit(event);
        event.preventDefault();
    } 


    return (
        <form onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

export default Form;

export {
    Input,
    Select
}