import React from "react";
import {Column} from "./Column";
import {ColumnData} from "../types";
import BootstrapRow from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface RowProps {
  name: string
  columns: ColumnData[]
}

export function Row(props: RowProps) {

    const column = function (column: ColumnData, idx: number) {
        return (
            <Column
                key={idx}
                columnId={idx}
                display={column.display}
                image={column.image}
                messages={column.messages}
                properties={column.properties} />
        )
    }

    return (
        <BootstrapRow className=''>
          <Col className="col-sm-3 border border-dark">{props.name}</Col>
          {props.columns.map(column)}
        </BootstrapRow>
    );

}
