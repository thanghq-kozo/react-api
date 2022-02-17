// import Exercise from "./pages/Exercise";
import HomePage from "./pages/Home";
import { useState } from "react";
import Review from "./pages/Review";

function App() {
  const [review, setReview] = useState(true)
  return (
    <div>
      {review ? <Review setReview={setReview}/> : <HomePage/>}
      {/* <Exercise/> */}
    </div>
  );
}

export default App;
