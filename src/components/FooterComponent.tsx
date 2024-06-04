import { useStore } from "../context/ContextProvider";

const FooterComponent = () => {
  const {
    usersStore: { favoriteUser },
    postsStore: { favoritePost },
    commentsStore: { favoriteComment },
  } = useStore();

  return (
    <div>
      {favoriteUser && (
        <div>
          Favorite User: {favoriteUser.name} ({favoriteUser.email})
        </div>
      )}
      {favoritePost && <div>Favorite Post: {favoritePost.title}</div>}
      {favoriteComment && <div>Favorite Comment: {favoriteComment.body}</div>}
    </div>
  );
};

export default FooterComponent;
