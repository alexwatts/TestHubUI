import React from "react";
import classNames from "classnames";
import styles from '../Result.module.css'
import {ColumnProps} from "../types";
import {HoverOverImageIcon} from "./HoverOverImageIcon";
import {Message} from "./Message";
import {Job} from "./Job";
import Row from 'react-bootstrap/Row';
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
                    "col-sm-1 border border-dark"
                )
            }>
                { (props.properties && props.properties.length > 0 ) &&
                    <Row className='mt-1 mb-1'><Col className='col-sm-12'><Job properties={props.properties}/></Col></Row>
                }
                { (props.image) &&
                    <Row className='mt-1 mb-1 '><Col className='col-sm-12'><HoverOverImageIcon image={props.image}/></Col></Row>
                }
                { (props.messages && props.messages.length > 0)  &&
                    <Row className='mt-1 mb-1 '><Col className='col-sm-12'><Message messages={props.messages}/></Col></Row>
                }
        </Col>
    );
}