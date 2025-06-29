import React from 'react';
import {Link} from 'react-router-dom'
import appwriteService from "../appwrite/config"
function PostCard({
    $id, title, featuredImage
}){
    return (
        <Link to={'/post/${$id}'}>
            <div
            className='w-full bg-gray-100 rounded-xl p-4'
            >
                <div>
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title} classNamee='rounded-xl'/>
                </div>
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </Link>
    )

}