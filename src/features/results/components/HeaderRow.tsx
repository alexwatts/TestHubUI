import React from "react";
import {RowProps, ColumnData} from "../types";
import {HeaderColumn} from "./HeaderColumn";
import styles from '../Result.module.css'

export function HeaderRow(props: RowProps) {

    const headerColumn = function (column: ColumnData, idx: number) {
        return (
            <HeaderColumn
                key={idx}
                columnId={idx}
                display={column.display}/>
        )
    }

    return (
        <tr data-testid='header-row'>
            <td  className={styles.headercolumn} >Test Runs</td>
            {props.columns.map(headerColumn)}
        </tr>
    );

}