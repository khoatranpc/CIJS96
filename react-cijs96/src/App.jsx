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
    showModal = <Modal
      pokemon={crrData}
      onClose={() => {
        setCrrData(null);
      }}
      onChangePokemon={(pokemon) => {
        setCrrData(pokemon);
      }}
      onSave={() => {
        setPokData(crrData);
        setCrrData(null);
      }}
    />;
  }
  /**
   * Tư tưởng, cần phải biết được đã kích vào pokemon nào. khi nhận thấy có dữ liệu thì mới hiển thị modal
   * còn không có thì không hiện
   * 
   * 
   * - Cần phải lưu lại thông tin pokemon bất kỳ vừa kích -> dùng state
   * -> Khi thực hiện kích pokemon -> thực hiện lưu thông tin pokemon vừa kích vào state vừa tạo
   * -> thực hiện cài đặt logic, kiểm tra xem có dữ liệu vừa kích không
   * nếu có -> hiển thị modal
   */
  return (
    <div className="app">
      <PokemonCard name={pokData.name} image={pokData.img} onClick={() => {
        setCrrData(pokData);
      }} />
      {showModal}
    </div>
  )
}
export default App;