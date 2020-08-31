import React from 'react';
import { Row, Col } from 'ui/Grid';
import { Link } from 'react-router-dom';
import Thumbnail from 'ui/Thumbnail';
import './index.scss'
const Header = ({to}) => {
    return (
        <header>
            <Link to={to}>
                <Row>
                    <Col position="left">
                        <Thumbnail title="+" />
                    </Col>
                    <Col position="right">
                    <div className="content">
                        SUBMIT A LINK
                    </div>
                    </Col>
                </Row>
            </Link>
         </header>

    )
}

export default Header;