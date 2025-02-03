import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="bg-green-300 text-4xl text-blue-500 p-4">
        vite with tailwind
      </p>
      <Card name="Akshay Chavan" post="Full Stack Developer" />
      <Card post="developer" />
      <Card />
    </>
  );
}

export default App;
