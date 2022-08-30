import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { PostModel } from "../interfaces/PostModel";
import Content from "../layout/Content";

const Post = () => {
  const [posts, setPosts] = useState<PostModel[] | null>();

  const divAttr: React.HtmlHTMLAttributes<HTMLDivElement> = {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  };

  useEffect(() => {
    const fetchPost = async () => {
      const json = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=100"
      ).then((res) => res.json());
      const result = await json;
      setPosts(result as PostModel[]);
    };

    fetchPost();
  });

  return (
    <Content>
      {posts &&
        posts?.map((post, index) => {
          return (
            <Card key={index}>
              <div {...divAttr}>
                <h4>{post.title}</h4>
                <h4># {post.id}</h4>
              </div>

              <p>{post.body}</p>
            </Card>
          );
        })}
    </Content>
  );
};

export default Post;
