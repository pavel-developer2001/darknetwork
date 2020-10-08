import React, { useState, createContext } from "react";

export const NetworkContext = createContext();

export const NetworkContextProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedPost, setselectedPost] = useState(null);

  const addPosts = (post) => {
    setPosts([...posts,post])
  }
  const addUser = (user) => {
    setUsers([...users,user])
  }
  const addComments = (comment) => {
    setComments([...comments,comment])
  }
  return (
    <NetworkContext.Provider
      value={{
        posts,
        setPosts,
        addPosts,
        users,
        setUsers,
        addUser,
        comments,
        setComments,
        addComments,
        selectedPost,
        setselectedPost
      }}
    >
      {props.children}
    </NetworkContext.Provider>
  );
};