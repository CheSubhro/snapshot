import React ,{useState}  from 'react'
import Modal from '@mui/material/Modal';
import './MyModal.css';


const MyModal = (props) => {
    // console.log(props)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
      };

    

    return (
        <>
            <div>
                <Modal
                    open={props.display}>
                        <div className="modal-body">
                            <div className="close-btn" onClick={handleClose}>X</div>
                            <div className="modal-img">
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