import { useState } from "react";
import "./App.css";
import FormComponent, { IPostForm } from "./components/FormComponent";
import PostsComponent from "./components/posts/PostsComponent";
import { PostModel } from "./models/PostModel";
import { createPost } from "./services/jph.api.service";

const App = () => {
  const [newPost, setNewPost] = useState<PostModel | undefined>(undefined);

  const handlePostForm = (data: IPostForm) => {
    const userId = 1;
    createPost({ ...data, userId }).then((res) => {
      setNewPost({ ...res.data.data, id: res.data.id });
    });
  };

  return (
    <div className="container">
      <div className="postsList">
        <PostsComponent newPost={newPost} />
      </div>
      <div className="postForm">
        <FormComponent handlePostForm={handlePostForm} />
      </div>
    </div>
  );
};

export default App;
