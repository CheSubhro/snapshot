import React ,{useState}  from 'react'
import Modal from '@mui/material/Modal';
import './MyModal.css';


const MyModal = (props) => {
    const handleOpen = props.handleOpen
    const handleClose = props.handleClose
    
    return (
        <>
            <div>
                <Modal
                    open={handleOpen}
                    onClose={handleClose}>
                        <div className="modal-body">
                            <div className="modal-img">
                                <div className="close-btn" onClick={handleClose}>X</div>
                                <img src={ props.image } alt="" />
                                <div className="modal-desc">
                                    <h4>
                                        {props.title}
                                    </h4>  
                                </div> 
                            </div>
                        </div>    
                </Modal>
            </div>
        </>
    )
}

export default MyModal