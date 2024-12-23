import { getTopics } from "../../api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { capitaliseFirstLetter } from "../../utils/utils";

export const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [userFeedback, setUserFeedback] = useState("");

  useEffect(() => {
    setUserFeedback("Topics loading...");
    getTopics()
      .then((topicsData) => {
        setUserFeedback("");
        setTopics(topicsData);
      })
      .catch(() => {
        setUserFeedback("Oh no - there was an error loading Topics");
      });
  }, []);

  return (
    <nav>
      {userFeedback ? (
        <h3>{userFeedback}</h3>
      ) : (
        <ul id="topic-list">
          {topics.map((topic) => {
            return (
              <li key={topic.slug}>
                <Link to={`/articles?topic=${topic.slug}`}>
                  <h2>{capitaliseFirstLetter(topic.slug)}</h2>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};
