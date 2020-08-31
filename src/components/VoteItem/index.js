import React from 'react';

import Thumbnail from 'ui/Thumbnail';
import { Row, Col } from 'ui/Grid';

import  './index.scss'

const VoteItem = props => {

    const { count, name, url, upVote, downVote, deleteVote } = props;

    return (
        <div className="vote-item">
            <a className="vote-item-delete" onClick={() => deleteVote(props) }> - </a>
            <Row>
                <Col position="left">
                    <Thumbnail title={count} description="points" />
                </Col>
                <Col position="right">
                    <div className="vote-item-content">
                        <div className="vote-item-content-top">
                            <h4>{name}</h4>
                            <p>{url}</p>
                        </div>
                        <div className="vote-item-content-bottom">
                            <a onClick={() => upVote(props)}>Up Vote</a>
                            <a onClick={() => downVote(props)}>Down Vote</a>
                        </div>
        
                    </div>
                </Col>
            </Row>
        </div>
    )
}


export default VoteItem;