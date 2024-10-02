import React, {useState} from 'react'
import  "./Add.css"
import HomeButton from '../../Components/HomeButton/HomeButton'
import EmojiPicker from 'emoji-picker-react';

function Add() {

  const [title,setTitle]=useState("" );
  const [description,setDesc]=useState("" );
  const [category,setCategory]=useState("" );
  const [emoji,setEmoji]=useState("" );
  const [OpenEmojiDialog,setOpenEmojiDialog]=useState(false);
  return (
    <div>
       <h1 className='text-center text-primary'> 📝Add Note</h1>

       <input 
       type="text"
        placeholder="Title"
        value={title}
        onChange={(e)=>{
       setTitle(e.target.value);
        }}
        className='user-input'/>

       <input 
       type="text"
        placeholder="Description"
        value={description}
        onChange={(e)=>{
       setDesc(e.target.value);
        }}
        className='user-input'/>
       
       <select value={category} onChange={(e)=>setCategory(e.target.value)} className='user-input user-input-select'>
        <option value="shopping">Shopping</option>
        <option value="deadline">Deadline</option>
        <option value="personal">Personal</option>
        <option value="work">Work</option>
       </select>

       <div> {emoji}</div>

       <button type='button' onClick={() => setOpenEmojiDialog(true)}>
        Select Emoji
      </button>
      
        <EmojiPicker 
        open={OpenEmojiDialog} 
        height={"300px"} 
        width={"400px"}
        searchDisabled={true}
        skinTonesDisabled={true}
        onEmojiClick={(emojiObject)=>{
          setEmoji(emojiObject.emoji)
          setOpenEmojiDialog(false)
        }}
        className='emoji-picker'
        />
       

        <button type='button' onClick={()=>{
          setTitle("");
        }}>
          clear
        </button>
      
       


      <HomeButton/>
        </div>
  )
}

export default Add