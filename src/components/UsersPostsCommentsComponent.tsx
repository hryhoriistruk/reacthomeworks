import { useEffect, useMemo, useState } from "react";
import { useContextProvider } from "../context/ContextProvider";
import { UserWithPostsWithCommentsType } from "../models/UserWithPostsWithCommentsType";
import CommentComponent from "./CommentComponent";
import PostComponent from "./PostComponent";
import UserComponent from "./UserComponent";

const UsersPostsCommentsComponent = () => {
  const {
    usersStore: { allUsers },
    postsStore: { allPosts },
    commentsStore: { allComments },
  } = useContextProvider();

  const [usersWithPostsWithComments, setUsersWithPostsWithComments] = useState<
    UserWithPostsWithCommentsType[]
  >([]);

  const usersWithPostsWithCommentsArray = useMemo(() => {
    return () => {
      return allUsers.map((user) => {
        const posts = allPosts.filter((post) => post.userId == user.id);
        const postsWithComments = posts.map((post) => {
          return {
            post,
            comments: allComments.filter(
              (comment) => comment.postId == post.id
            ),
          };
        });
        const newUser = {
          user,
          posts: postsWithComments,
        };
        return newUser;
      });
    };
  }, [allPosts, allUsers, allComments]);

  useEffect(() => {
    setUsersWithPostsWithComments(usersWithPostsWithCommentsArray);
  }, [usersWithPostsWithCommentsArray]);

  return (
    <div>
      {usersWithPostsWithComments.map((user) => (
        <div key={user.user.id}>
          <UserComponent user={user.user} />
          <ul>
            {user.posts.map((post) => (
              <li key={post.post.id}>
                <PostComponent post={post.post} />
                <ul>
                  {post.comments.map((comment) => (
                    <li key={comment.id}>
                      <CommentComponent comment={comment} />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UsersPostsCommentsComponent;
