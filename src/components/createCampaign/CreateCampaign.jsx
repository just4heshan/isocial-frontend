import {React, useState} from 'react'

import axios from "axios";

import "./sharePost.css"

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import TagIcon from '@mui/icons-material/Tag';
import MoodIcon from '@mui/icons-material/Mood';
import PushPinIcon from '@mui/icons-material/PushPin';

const CreateCampaign = (e) => {
    const [state, setState] = useState({selectedFile: 'none'});

    const imageBrowseHandler = (e) => {
        e.preventDefault()
        setState({
            selectedFile: e.target.files[0]
        })
    }

    const imageUploadHandler = (e) => {
        console.log(state)
    }

  return (
    <div className="share-post">
        <div className="share-post-wrapper">
            <div className="share-post-top">
                <img src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Profile Image" className="share-post-profile-image" />
                <textarea placeholder='What is in your mind?' type="text" className="share-input" />
            </div>
            <hr className="share-post-hr" />
            <div className="share-post-bottom">
                <div className="share-options">
                    <div className="share-option">
                        <input type="file" 
                            onChange={imageBrowseHandler}/>
                        <AddAPhotoIcon fontSize="large" className='share-option-icon' onClick={imageUploadHandler} />
                        <span className="share-option-text">Photo</span>
                    </div>
                    <div className="share-option">
                        <TagIcon fontSize="large" className='share-option-icon tag-icon-color' />
                        <span className="share-option-text">Tag</span>
                    </div>
                    <div className="share-option">
                        <MoodIcon fontSize="large" className='share-option-icon feeling-icon-color' />
                        <span className="share-option-text">Feeling</span>
                    </div>
                    <div className="share-option">
                        <PushPinIcon fontSize="large" className='share-option-icon location-icon-color' />
                        <span className="share-option-text">Location</span>
                    </div>
                </div>
                <button className="share-btn">Share</button>
            </div>
        </div>
    </div>
  )
}

export default CreateCampaign