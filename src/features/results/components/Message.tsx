import React, { useState } from 'react';
import classNames from "classnames";
import {MessageProps} from "../types";
import styles from "../Result.module.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export function Message(props: MessageProps) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
            { (props.messages && props.messages.length > 0)  &&
            <>
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
              </>
            }
        </>
    );
}