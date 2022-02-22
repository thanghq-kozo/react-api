import ReviewVI from "./pages/ReviewVI";
import HomePage from "./pages/Home";
import { useState } from "react";
import ReviewEN from "./pages/ReviewEN";
import Header from "./components/Header";

function App() {
  const [reviewEN, setReviewEN] = useState(false);
  const [reviewVI, setReviewVI] = useState(false);

  return (
    <div>
      <Header setReviewEN={setReviewEN} setReviewVI={setReviewVI} />
      {(!reviewEN && !reviewVI) && <HomePage />}
      {reviewEN && (
        <ReviewEN setReviewEN={setReviewEN} setReviewVI={setReviewVI} />
      )}
      {reviewVI && (
        <ReviewVI setReviewVI={setReviewVI} setReviewEN={setReviewEN} />
      )}
    </div>
  );
}

export default App;
