import React from 'react';

const BlogPost = ({data}) => {
    return (
        <div className="card shadow-sm">
            
           <div className="card-header d-flex align-items-center">
           <img className="mx-3"src={data.authorImg} alt=""width="60"/>
           <div>
           <h6 className="text-primary">{data.author}</h6>
           <p>{data.date}</p>
           </div>
           </div>
           <div className="card-body">
               <h5>{data.title}</h5>
               <p className="card-text text-secondary mt-4">{data.description}</p>

           </div>
        </div>
    );
};

export default BlogPost;