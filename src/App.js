import React from "react";
import PostForm from "./components/PostForm";
import User from "./components/User";
import { useSelector } from "react-redux";
import Post from "./components/Post";

const App = () => {
  const posts = useSelector((state) => state.postReducer);

  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        <User />
      </div>
    </div>
  );
};

export default App;
