import React from "react";
import classNames from "classnames";
import styles from '../Result.module.css'
import {ColumnProps} from "../types";
import {HoverOverImageIcon} from "./HoverOverImageIcon";
import {Message} from "./Message";
import {Job} from "./Job";
import Col from 'react-bootstrap/Col';

export function Column(props: ColumnProps) {
    const failed = props.display === 'failed'
    const passed = props.display === 'passed'
    const empty = props.display === 'empty'

    return (
        <Col data-testid={'test-result-' + props.columnId}
            className={
                classNames(
                    failed && styles.columnFailed,
                    passed && styles.columnPassed,
                    empty && styles.columnEmpty,
                    styles.columnSize,
                    "col-sm-1 border border-dark"
                )
            }>
                { (props.properties && props.properties.length > 0 ) &&
                    <Job properties={props.properties}/>
                }
                { (props.image) &&
                    <HoverOverImageIcon image={props.image}/>
                }
                { (props.messages && props.messages.length > 0)  &&
                    <Message messages={props.messages}/>
                }
        </Col>
    );
}