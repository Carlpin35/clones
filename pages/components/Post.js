import React from 'react';
import {
     BookmarkIcon,
     ChatIcon,
     DotsHorizontalIcon,
     EmojiHappyIcon,
     HeartIcon,
     PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFiled } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react'
import { db, storage} from '/firebase'
import { addDoc, collection, doc, serverTimestamp, onSnapshot, orderBy, query } from '@firebase/firestore';




export default function Post({ id, username, userImg, img, caption }) {
	const { data: session } = useSession();  
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);


  


   /* useEffect(
        () => 
        onSnapshot(
            query(
               collection(db, 'posts', id, 'comments'), 
               orderBy('timestamp', 'desc')
               ), 
            (snapshot) => setComments(snapshot.docs)
            ), 
        [db],
        console.log(collection) 
        );  */

    const sendComment = async (e) => {
              e.preventDefault();

        const commentToSend = comment;
        setComment("");

        await addDoc(collection(db, "posts", id, "comments"), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp()

       
        });
    };
        
        
    
   

    return (
		<div className="bg-white my-7 border rounded-sm">
			
            {/*header*/}
          <div className="flex items-center p-5">

             <img src={userImg} className="rounded-full h-12 w-12 border p-1 mr-3" alt="" />
             <p className="flex-1 font-bold">{username}</p>
              <DotsHorizontalIcon className="h-5" />
           </div>
        {/*img*/}

        <img className="w-full object-cover" src={img} alt="" />

        {/*buttons*/}
        {session && (
            <div className="flex justify-between px-4 pt-4">
              <div className="flex space-x-4" >
                 <HeartIcon className="btn" />  
                 <ChatIcon className="btn" />
                 <PaperAirplaneIcon className="btn" />
              </div>

              <BookmarkIcon className="btn" />
         </div>
            )}
         

        {/*caption*/}

        <p className="p-5 truncate" >
        	<span className="font-bold mr-1">{username} </span>{caption}
        </p>

        {/*comments*/}

    {/*input box*/}
    {session && (
    <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
           <input
             value={comment}
             onChange={ e => setComment(e.target.value)} 
             className="border-none flex-1 focus:ring-0 outline-none"
             type="text" 
             placeholder="Write a comment"
              />
        <button 
        type="submit"
        disabled={!comment.trim()}
        onClick={sendComment}
        className="font-semibold text-blue-400">Post</button>
    </form>

        )}
    

           {/* */}

		</div>
	)
}