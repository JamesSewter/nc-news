import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import { ArticleList } from "./ArticleList";

export const Nav = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles().then((articlesData) => {
      setArticles(articlesData);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

    return (
    <>
      <h2>Articles</h2>
      <ArticleList articles={articles} /* topic={topic} */ />
    </>
  );
};

/* IGNORE below--> */
/* 
  const [topics, setTopics] = useState([]); 
  useEffect to getTopics and set
  default to all topics 
  SEE Stephens msg on pull request when get to topics!!!! */