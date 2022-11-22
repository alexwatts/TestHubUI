import React from "react";
import classNames from "classnames";
import {HoverOverImageIconProps} from "../types";
import styles from "../Result.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';

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
                <Button className='btn-sm' href="#/" onClick={() => openImageTab('data:image/png;base64,' + props.image?.data)} >
                    <FontAwesomeIcon icon={faCamera}/>
                </Button>
            }
        </>
    );
}
