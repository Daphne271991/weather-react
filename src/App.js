import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
export default function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <Weather />
      <footer>
        <p>
          This project was coded by Daphne Bonilla{" "}
          <a
            href="https://github.com/Daphne271991/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </p>
      </footer>
    </div>
  );
}
