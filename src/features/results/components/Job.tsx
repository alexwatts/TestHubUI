import React from "react";
import classNames from "classnames";
import {JobProps} from "../types";
import styles from "../Result.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";

export function Job(props: JobProps) {
    return (
     <div>
        { (props.properties && props.properties.length > 0 ) &&
            <a href={props.properties[0].value} target='_blank'><FontAwesomeIcon icon={faLink}/></a>
        }
     </div>
   );
}