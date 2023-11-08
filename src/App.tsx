import Navigation from "./components/Navigation";
import './App.css';
import bible from './assets/bible.webp'

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <div className="jumbotron">
          <img src={ bible } className="bible-image"/ >
          <h1 className="jumbotron-head"> God wants to have a <span className="relationship-text">relationship</span> with you! </h1>
          <h2 className="jumbotron-caption"> and it starts with a willingness</h2>
          <div className="btn-div">
            <button type="button" className="btn btn-primary btn-lg">Study the Bible!</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
