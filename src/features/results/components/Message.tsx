import React from "react";
import classNames from "classnames";
import {MessageProps} from "../types";
import styles from "../Result.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export function Message(props: MessageProps) {
    return (
        <div className={classNames(styles.tooltipwrap)}>
            { (props.messages && props.messages.length > 0)  &&
                <FontAwesomeIcon icon={faEnvelope}/>
            }
            { (props.messages && props.messages.length > 0) &&
                <div className={classNames(styles.tooltipcontent)}>
                    <div>{props.messages[0]}</div>
                    <div>{props.messages[1]}</div>
                    <div>{props.messages[2]}</div>
                </div>
            }
        </div>
    );
}