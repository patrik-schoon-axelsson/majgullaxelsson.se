import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


const FooterModal = () => {
    
    const [modalVisible, setModalVisible] = useState();
    const toggleVisibility = () => setModalVisible(!modalVisible);

    return (
        <>
            <Button variant="link" onClick={toggleVisibility}><h5 className="text-center m-2">Kontakta Majgull</h5></Button>

            <Modal show={modalVisible} onHide={toggleVisibility}>
                <Modal.Header closeButton>
                    <Modal.Title className="display-handwriting">Kontakta Majgull</Modal.Title>
                </Modal.Header>
                <Modal.Body>Majgull har valt att inte använda sig av sociala medier, men förfrågningar och annan epost som skickas in via det här formuläret skickas vidare till henne.</Modal.Body>
            </Modal>
        </>
    )
}

export default FooterModal