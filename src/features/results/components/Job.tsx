import React from "react";
import {JobProps} from "../types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Job(props: JobProps) {
    return (
     <>
        { (props.properties && props.properties.length > 0 ) &&
        <Row className='mt-1 mb-1'>
            <Col className='col-sm-12'>
                <Button className='btn-sm' href={decodeURIComponent(props.properties[0].value)} target='_blank'>
                    <FontAwesomeIcon icon={faLink}/>
                </Button>
            </Col>
        </Row>
        }
     </>
   );
}