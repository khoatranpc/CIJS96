import React from 'react';
import './styles.css';

const Modal = (props) => {

    return (
        <div className="modal">
            <div className="content">
                <button style={{ float: 'right' }} onClick={props.onClose}>Close</button>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQneX2OwCcPMNd7RkjJtUGnZRJrAR9ciOoFrw&s" />
                <br />
                <div>
                    <span>Tên pokemon: </span><input type="text" value={props.pokemon.name} />
                </div>
                <div>
                    <span>Hệ: </span><select>
                        <option value="">Lửa</option>
                        <option value="">Nước</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Modal;