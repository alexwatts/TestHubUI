import React from "react";
import {JobProps} from "../types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import {decode} from 'html-entities';

export function Job(props: JobProps) {
    return (
     <>
        { (props.properties && props.properties.length > 0 ) &&
            <Button className='btn-sm' href={decode(props.properties[0].value)} target='_blank'>
                <FontAwesomeIcon icon={faLink}/>
            </Button>
        }
     </>
   );
}