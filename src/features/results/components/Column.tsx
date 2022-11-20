import React from "react";
import classNames from "classnames";
import styles from '../Result.module.css'
import {ColumnProps} from "../types";
import {HoverOverImageIcon} from "./HoverOverImageIcon";
import {Message} from "./Message";
import {Job} from "./Job";

export function Column(props: ColumnProps) {
    const failed = props.display === 'failed'
    const passed = props.display === 'passed'
    const empty = props.display === 'empty'

    return (
        <td data-testid={'test-result-' + props.columnId}
            className={
                classNames(
                    failed && styles.columnFailed,
                    passed && styles.columnPassed,
                    empty && styles.columnEmpty
                )
            }>
            <Job properties={props.properties}/>
            <HoverOverImageIcon image={props.image}/>
            <Message messages={props.messages}/>
        </td>
    );
}