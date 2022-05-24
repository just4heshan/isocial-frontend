import React, { Component } from 'react';
import Select from 'react-select'


import "./createAdd.css";

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import TagIcon from '@mui/icons-material/Tag';
import MoodIcon from '@mui/icons-material/Mood';
import PushPinIcon from '@mui/icons-material/PushPin';

const CreateAdd = () => {
    const options = [
        { value: 'product', label: 'Product' },
        { value: 'knowledge', label: 'Knowledge' },
        { value: 'service', label: 'Service' }
      ]
  return (
    <div className="add-post">
        <div className="add-post-wrapper">
            <div className="add-post-top">
                <img src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Profile Image" className="add-post-profile-image" />
                <input rows={5} cols={5} placeholder='      Write an advertisement title...' type="text" className="add-input-title" />
                <textarea rows={5} cols={5} placeholder='      Advertisement description...' type="text" className="add-input-desc" />
                <Select options={options} />
            </div>
            <hr className="add-post-hr" />
            <div className="add-post-bottom">
                <div className="add-options">
                    <div className="add-option">
                        <AddAPhotoIcon fontSize="large" className='add-option-icon' />
                        <span className="add-option-text">Photo</span>
                    </div>
                    <div className="add-option">
                        <PushPinIcon fontSize="large" className='add-option-icon location-icon-color' />
                        <span className="add-option-text">Location</span>
                    </div>
                </div>
                <button className="publish-btn">Publish Add</button>
            </div>
        </div>
    </div>
  )
}

export default CreateAdd