import React from "react";
import PostListItem from "../PostListItem/PostListItem";
import * as S from "./style";

const PostList = ({ postList }) => {
  return (
    <S.Container>
      {postList.map((post) => (
        <PostListItem key={post.id} {...post} />
      ))}
    </S.Container>
  );
};

export default PostList;
