import React from 'react';
import './index.scss';


const Thumbnail = ({ title, description }) => (
  <div className="thumbnail">
    
    <div className="thumbnail-title">
      {title}
    </div>
    {
      description ? 
      <div className="thumbnail-description">{description}</div>
      :
      null
    }
  </div>
)

export default Thumbnail;