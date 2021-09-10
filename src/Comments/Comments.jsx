import React, { useState } from 'react';
import { randomColor } from 'randomcolor';

const Comments = ({ currentTodo, handleChangeComment }) => {

    const [comment, setComment] = useState('')

    const newItem = () => {
        if(comment.trim() !== '') {
            const newComment = {
                id: Math.random().toString(36).substr(2, 9),
                comment,
                color: randomColor({
                    luminosity: 'light'
                }),
            }
            handleChangeComment(newComment)
            
        }else{
            alert('Enter comment')
        }
    }
    
    const handleKeyPressComment = (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            newItem();
            setComment('')
        }
    }

    return (
        <div className='comment-wrapper'>
           <h1 className='comments'>Comments-{currentTodo && currentTodo.task}</h1> 
           {
               currentTodo && currentTodo.comments.map((comment, index) => {
                   return(
                    <div key={index} className='square-block'>
                        <div className='square'  style={{backgroundColor:comment.color}}/>
                        <p className='text'>{`${comment.comment}`}</p> 
                    </div>
                   )

               })
           }
           <div className='square-block-comment'>
                <div className='square' />
                <textarea 
                    disabled={!currentTodo}
                    className='comment-input'
                    type='text' 
                    placeholder='Add comment...'
                    onChange={(e) => setComment(e.target.value)}
                    onKeyDown={handleKeyPressComment}
                    value={comment}
                />
           </div>
          
        </div>
    )
}
export default Comments;