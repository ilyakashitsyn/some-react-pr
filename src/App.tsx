import { useState, useEffect } from "react";
import "./App.css";

type CardProps = {
  title: string;
  rating?: number;
  isCool?: boolean;
  actors?: { name: string }[];
};

const Card = ({ title }: CardProps) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [title, hasLiked]);

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>
        {title} - {count ? count : null}
      </h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" rating={5} isCool={true} />
      <Card title="Avatar" />
      <Card title="Alien" />
    </div>
  );
};

export default App;
