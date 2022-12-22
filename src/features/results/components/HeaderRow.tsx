import React from "react";
import {RowProps, ColumnData} from "../types";
import {HeaderColumn} from "./HeaderColumn";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classNames from "classnames";
import styles from '../Result.module.css'

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
        <Row className='text-light flex-nowrap' data-testid='header-row'>
             <Col className={
                classNames(
                    styles.columnSize,
                    "fw-bold col-sm-3 border bg-secondary"
                )}>{props.name}
             </Col>
            {props.columns.map(headerColumn)}
        </Row>
    );

}