import "./styles.css";
import Card from "./Components/Card";

export default function App() {
  return (
    <div className="App">
      <Card
        head="Mobile Operating System"
        elems={["Android", "Blackberry", "iPhone", "Windows Phone"]}
      />
      <Card
        head="Mobile Manufactures"
        elems={["Samsung", "HTC", "Micromax", "Apple"]}
      />
    </div>
  );
}
