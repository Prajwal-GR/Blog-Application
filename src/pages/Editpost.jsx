import React from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import appwriteService from '../appwrite/config'
import Container from '../components/container/Container'
import postForm from '../components/post-form/PostForm'
function Editpost(){
    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        appwriteService.getPost(slug).then((post)=>{
            if(post){
                setPost(post)
            }else{
                navigate('/')
            }
        })
    },[slug,navigate])
    return(
        <div className='py-6'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    )
}

export default Editpost;