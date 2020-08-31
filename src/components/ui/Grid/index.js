import React from 'react';
import './index.scss'

const Row = ({ children }) => {
    return (
        <div className="row">
            {children}
        </div>
    )
}
const Col = ({ position, children}) =>  <div className={`col-${position}`}> { children } </div>

export {
    Row,
    Col
};