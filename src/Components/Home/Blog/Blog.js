import React from 'react';
import wilson from '../../../images/Ellipse 1.png';
import wilson1 from '../../../images/Ellipse 2.png';
import wilson2 from '../../../images/Ellipse 3.png';
import BlogPost from './BlogPost';
import './Blogs.css';
const Blog = () => {
    const blogData = [
        {   id:'1',
            title : 'Check at least a doctor in a year for your teeth',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Dr. Cudi',
            authorImg : wilson,
            date : '23 April 2019'
        },
        {    id:'2',
            title : 'Two time brush in a day can keep you healthy',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Dr. Sinthia',
            authorImg : wilson1,
            date : '23 April 2019'
        },
        {    id:'3npm sat',
            title : 'The tooth cancer is taking a challenge',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Dr. Cudi',
            authorImg : wilson2,
            date : '23 April 2019'
        },
    ]
    return (
        <section className="blogs">
               <h1 class="heading"> From our <span>Blogs</span> </h1> 
          <div className="container">
            <div className="card-deck mt-5">
            {
                blogData.map(data=><BlogPost key={data.id} data={data}></BlogPost>)
            }
            </div>
            </div>
        </section>
    );
};

export default Blog;