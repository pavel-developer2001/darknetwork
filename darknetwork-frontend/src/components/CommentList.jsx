import React from "react";
import "../index.css";
import CommentListItem from "./CommentListItem";
import NetworkApi from "../apis/NetworkApi";

const CommentList = ({ userId, postId }) => {
  const [comment, setComment] = React.useState([]);
  console.log(postId);
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await NetworkApi.get(`/user/${userId}/comments`, {
        postId,
      });
      const postInfo = response.data.data.comments;
      console.log(postInfo);
      setComment(postInfo);
    };
    fetchData();
  }, [userId, postId]);

  return (
    <div className="comment-list">
      {comment.map((todo) => (
        <CommentListItem text={todo.text} index={todo.id} />
      ))}
      {/* {post.map((todo) => <PostListItem
                                    userId={userId} 
                                    key={todo.id}
                                    postId={todo.id}
                                    text={todo.postText} 
                                    name={todo.postAuthor}
                                    like={todo.countLike} 
                                    commentCount={todo.countComments} />)} */}
    </div>
  );
};

export default CommentList;
