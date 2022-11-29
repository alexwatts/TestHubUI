import React, { useState } from 'react';
import {MessageProps} from "../types";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Message(props: MessageProps) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
            { (props.messages && props.messages.length > 0)  &&
            <Row className='mt-1 mb-1 '>
               <Col className='col-sm-12'>
                 <Button className='btn-sm' variant="primary" onClick={handleShow}>
                    <FontAwesomeIcon icon={faEnvelope}/>
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title><FontAwesomeIcon icon={faEnvelope}/> Message</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div>{props.messages[0]}</div>
                      <div>{props.messages[1]}</div>
                      <div>{props.messages[2]}</div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Col>
             </Row>
            }
        </>
    );
}