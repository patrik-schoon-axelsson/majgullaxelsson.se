import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, Row } from 'react-bootstrap';
import { useState } from 'react';

const FooterModal = () => {
    
    const [modalVisible, setModalVisible] = useState();
    const toggleVisibility = () => setModalVisible(!modalVisible);

    return (
        <>
            <h5 className="text-center m-2"><a className="modal-link" onClick={toggleVisibility}>Kontakta Majgull</a></h5>

            <Modal show={modalVisible} onHide={toggleVisibility}>
                <Modal.Header closeButton>
                    <Modal.Title className="display-handwriting">Kontakta Majgull</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <p className="mb-4">
                            Majgull har valt att inte använda sig av sociala medier, men förfrågningar och annan post som skickas in via det här formuläret skickas vidare till henne.
                        </p>
                    <Form>
                        <Form.Group>
                        <Form.Text className="m-2">Välj en anledning till att ni kontaktar Majgull:</Form.Text>
                        <div id="radioContainer" className="inline-radio m-3">
                            <Form.Check inline type="radio" id="interview" label="Intervjuer/Bokningar" />
                            <Form.Check inline type="radio" id="questions" label="Allmänna frågor" />                        
                        </div>
                        <Form.Control type="email" id="returnMail" aria-describedby="returnMailText" />
                        <Form.Text id="returnMailText">E-postadress ni vill få återkoppling mot:</Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default FooterModal