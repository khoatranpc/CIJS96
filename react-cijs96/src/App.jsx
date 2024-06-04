import { useState } from "react";
import PokemonCard from "./PokemonCard";
import Modal from "./components/Modal";

const data = {
  name: "Bulbasaur",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQneX2OwCcPMNd7RkjJtUGnZRJrAR9ciOoFrw&s"
};
const App = () => {
  const [pokData, setPokData] = useState(data);
  const [crrData, setCrrData] = useState(null);

  let showModal = null;
  if (crrData) {
    showModal = <Modal pokemon={crrData} onClose={() => {
      setCrrData(null);
    }} />;
  }
  
  return (
    <div className="app">
      <PokemonCard name={pokData.name} image={pokData.img} onClick={() => {
        setCrrData(data);
      }} />
      {showModal}
    </div>
  )
}
export default App;