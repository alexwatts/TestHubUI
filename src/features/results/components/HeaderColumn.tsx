import React from "react";
import {ColumnProps} from "../types";
import styles from '../Result.module.css'
import classNames from "classnames";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function HeaderColumn(props: ColumnProps) {

    function formatDate(display: string) {
        const date = new Date(display);
        return (date.getDate() < 10 ? "0" + date.getDate(): date.getDate()) + '/' +
            (date.getMonth() < 10 ? "0" + (date.getMonth() + 1): date.getMonth()) + '/' +
            date.getFullYear();
    }

    function formatTime(display: string) {
        const date = new Date(display);
        return ((date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ':'
                + (date.getMinutes() < 10 ? "0" + date.getMinutes(): date.getMinutes()));
    }

    return (
        <Col
            className={
                classNames(
                    styles.headerValue,
                    styles.columnSize,
                    'col-sm-1 border bg-secondary'
                )
            }>
            <Row><Col className='fw-bold'>{formatDate(props.display)}</Col></Row>
            <Row><Col className='fw-bold'>{formatTime(props.display)}</Col></Row>
        </Col>
    );
}
