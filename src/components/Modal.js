import React from 'react';
//import './components/Modal.css';


function Modal(){
    return (
        <div className="modalBackground">
            <div className="modalContainer">
            <div className='title'><h1>Are you sure?</h1></div>
            <div className='footer'>
                <button className='but1'>Cancel</button>
                <button className='but2'>Delete</button>

            </div>


            </div>
            </div>
    )   
}

export default Modal 