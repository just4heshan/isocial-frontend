import {React, useState, useEffect} from 'react'
import {useDispatch} from 'react-redux';
import FileBase from 'react-file-base64';

import "./createCampaign.css"
import {createCampaign} from '../../actions/campaigns'; 

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import TagIcon from '@mui/icons-material/Tag';
import MoodIcon from '@mui/icons-material/Mood';
import PushPinIcon from '@mui/icons-material/PushPin';

const CreateCampaign = (e) => {
    const dispatch = useDispatch();

    const [postData, setPostData] = useState({message: '', selectedFile: '', tags: '' });
    
    const sumbitHandler =(e) => {
        e.preventDefault()
        dispatch(createCampaign(postData))
        console.log(postData)
    }

  return (
    <div className="share-post">
        <div className="share-post-wrapper">
            <form action='/' onSubmit={sumbitHandler}>
            <div className="share-post-top">
                <img src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Profile Image" className="share-post-profile-image" />
                <textarea 
                    placeholder='What is in your mind?' 
                    type="text" 
                    className="share-input" 
                    value={postData.message} 
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                    />
            </div>
            <hr className="share-post-hr" />
            <div className="share-post-bottom">
                <div className="share-options">
                    <div className="share-option">
                        <div className="input-image"><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>    
                        <AddAPhotoIcon fontSize="large" className='share-option-icon'/>
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
                <button className="share-btn">Create Campaign</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default CreateCampaign