import React from 'react'
import '../index.css'
import PostListItem from './PostListItem'
import NetworkApi from '../apis/NetworkApi'


const PostList = ({userId}) => {

    const [post, setPost] = React.useState([]) 
    React.useEffect(() => { 
    const fetchData = async () => {
        const response = await NetworkApi.get(`/user/${userId}/posts`)
        const postInfo = response.data.data.posts
        setPost(postInfo)
        }
        fetchData()
    }, [userId])

    
    return (
        <div className='post-list'>
         
             {post.map((todo) => <PostListItem
                                    userId={userId} 
                                    key={todo.id}
                                    postId={todo.id}
                                    text={todo.postText} 
                                    name={todo.postAuthor}
                                    like={todo.countLike} 
                                    commentCount={todo.countComments} />)}
          
        </div>
    )
}
export default PostList