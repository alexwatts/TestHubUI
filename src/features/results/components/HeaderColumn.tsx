import React from "react";
import {ColumnProps} from "../types";
import Col from 'react-bootstrap/Col';

export function HeaderColumn(props: ColumnProps) {

    function formatDate(display: string) {
        const date = new Date(display);
        return (date.getDate() < 10 ? "0" + date.getDate(): date.getDate()) + '/' +
            (date.getMonth() < 10 ? "0" + (date.getMonth() + 1): date.getMonth()) + '/' +
            date.getFullYear() + ' '
            + (date.getHours() < 10 ? "0" + date.getHours(): date.getHours()) + ':'
            + (date.getMinutes() < 10 ? "0" + date.getMinutes(): date.getMinutes());
    }

    return (
        <Col data-testid={'test-run-' + props.columnId}>
            {formatDate(props.display)}
        </Col>
    );
}
