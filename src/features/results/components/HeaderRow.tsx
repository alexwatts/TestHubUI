import React from "react";
import {RowProps, ColumnData} from "../types";
import {HeaderColumn} from "./HeaderColumn";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function HeaderRow(props: RowProps) {

    const headerColumn = function (column: ColumnData, idx: number) {
        return (
            <HeaderColumn
                key={idx}
                columnId={idx}
                display={column.display}
              />
        )
    }

    return (
        <Row className='border bg-secondary text-light' data-testid='header-row'>
            <Col className='fw-bold col-sm-3'>Test Runs</Col>
            {props.columns.map(headerColumn)}
        </Row>
    );

}