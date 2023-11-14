import React from 'react'

const commentsData =[
    {
     name:"Anmir Munna",
     comment:"hey this is Anmir",
     replies:[]
    },
    {
     name:"Anmir Munna",
     comment:"hey this is Anmir",
     replies:[{
        name:"Anmir Munna",
        comment:"hey this is Anmir",
        replies:[{
            name:"Anmir Munna",
            comment:"hey this is Anmir",
            replies:[{
                name:"Anmir Munna",
                comment:"hey this is Anmir",
                replies:[{
                    name:"Anmir Munna",
                    comment:"hey this is Anmir",
                    replies:[{
                        name:"Anmir Munna",
                        comment:"hey this is Anmir",
                        replies:[]
                       },]
                   },]
               },]
           },]
       }]
    },
    {
     name:"Anmir Munna",
     comment:"hey this is Anmir",
     replies:[{
        name:"Anmir Munna",
        comment:"hey this is Anmir",
        replies:[{
            name:"Anmir Munna",
            comment:"hey this is Anmir",
            replies:[]
           },]
       },]
    },
    {
     name:"Anmir Munna",
     comment:"hey this is Anmir",
     replies:[{
        name:"Anmir Munna",
        comment:"hey this is Anmir",
        replies:[{
            name:"Anmir Munna",
            comment:"hey this is Anmir",
            replies:[{
                name:"Anmir Munna",
                comment:"hey this is Anmir",
                replies:[{
                    name:"Anmir Munna",
                    comment:"hey this is Anmir",
                    replies:[{
                        name:"Anmir Munna",
                        comment:"hey this is Anmir",
                        replies:[]
                       },]
                   },]
               },]
           },]
       },]
    },
    {
     name:"Anmir Munna",
     comment:"hey this is Anmir",
     replies:[{
        name:"Anmir Munna",
        comment:"hey this is Anmir",
        replies:[{
            name:"Anmir Munna",
            comment:"hey this is Anmir",
            replies:[{
                name:"Anmir Munna",
                comment:"hey this is Anmir",
                replies:[]
               },]
           },]
       },]
    },

]

const Comment = ({data})=>{
    const {name,comment,replies} = data;
    return (
    <div className='flex shadow-lg bg-gray-400 rounded-lg my-2'>
   <div className='h-8 w-8'>
    <img src="http://localhost:3000/images/user.svg" />
   </div>
   <div className='px-3 '>
   <p className='text-lg font-bold text-red-900'>{name}</p>
    <p className='text-base font-bold text-blue-500 px-3 py-1'>{comment}</p>
   </div>
    </div>
)}

const CommentsList = ({comments}) =>{
    return comments.map((comment,index)=>(
    <div>
    <Comment key={index}  data={comment}/>
     <div className='pl-5 border border-l-black ml-5'>
     <CommentsList comments={comment.replies}/>     
    </div>
    </div>   
    ));
}
const CommentsContainer = () => {
  return (
    <div  className='m-2 p-5 font-bold text-2xl'>
        Comments:
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;