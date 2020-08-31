import React, { useState } from 'react';
import Form, { Input } from 'ui/Form';
import Button from 'ui/Button';
import { voteService } from 'utils/dataHelper';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import './index.scss'

const CreateView  = () => {

    const [name,setName] = useState("");
    const [url,setUrl] = useState("");
    const handleSubmit = () => {
       voteService.addItem({
           name,
           url,
           lastVoted : new Date().getTime() 
        });
        toast(`${name} ADDED`)
        setUrl("");
        setName("");
    }
    
    return (
        <div  className="create-view container">
            <Link to="/" className="back-button">Return to List</Link>

            <h2> Add New Link </h2>

            <Form>
                <Input 
                    label="Link Name :"
                    onChange={e=> setName(e.target.value)} 
                    value={name} 
                    placeholder="e.g. Alphabet" />

                <Input 
                    label="Link Url:"
                    onChange={e => setUrl(e.target.value)} 
                    value={url} 
                    placeholder="e.g. http://abc.xyz" />

                <div className="create-view-actions">
                    <Button onClick={handleSubmit}> ADD </Button>
                </div>
            </Form>
            
        </div>
    )
} 



export default CreateView;