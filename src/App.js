import './App.css';
import StarRating from './StarRating';
function App() {
  return (
    <div className="App">
      <StarRating messages={["Terrific", "Bad","Okay", "Good","Excellent"]} maxRating={5}/>
    </div>
  );
}

export default App;
