import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import PostList from "./PostList";
import { POSTLIST, postListActions } from "./PostListSlice";

const PostListContainer = () => {
  const dispatch = useDispatch();
  const { postList } = useSelector((state) => state[POSTLIST]);

  useEffect(() => {
    const { loadPost } = postListActions;

    dispatch(loadPost());
  }, [dispatch]);

  return <PostList postList={postList} />;
};

export default PostListContainer;
