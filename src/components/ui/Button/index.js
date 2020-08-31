import React from 'react'
import './index.scss';

const Button = ({ className, children, onClick }) => 
{
    const handleClick = e => {
        onClick();
        e.preventDefault();

    }
    return (
        <button className={`button ${className ? className : ''}`}  onClick={handleClick}>
            {children}
        </button>
    )
}

export default Button;