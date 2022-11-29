import React from "react";
import {HoverOverImageIconProps} from "../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function HoverOverImageIcon(props: HoverOverImageIconProps) {

    function openImageTab (data: string) {
        const image = new Image();
        image.src = data;
        const w = window.open("");
        w?.document.write(image.outerHTML);
    }

    return (
        <>
            {props.image &&
                <Row className='mt-1 mb-1 '>
                    <Col className='col-sm-12'>
                        <Button className='btn-sm' href="#/" onClick={() => openImageTab('data:image/png;base64,' + props.image?.data)} >
                            <FontAwesomeIcon icon={faCamera}/>
                        </Button>
                    </Col>
                </Row>
            }
        </>
    );
}
