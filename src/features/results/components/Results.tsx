import React, {useEffect} from 'react';

import { useAppDispatch } from '../../../app/hooks';
import {
    fetchAsync,
} from '../store/resultSlice';
import {Row} from "./Row";
import {HeaderRow} from "./HeaderRow";
import {DisplayResult, RowData} from "../types";
import styles from '../Result.module.css'

interface ResultProps {
    results: DisplayResult[];
}

export function Results(props: ResultProps) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAsync())
    }, [dispatch])

    const headerRow = function (row: RowData) {
        return (
            <HeaderRow
                key={0}
                name={row.name}
                columns={row.columns}/>
        )
    }

    const row = function (row: RowData, idx: number) {
        return (
            <Row
                key={idx}
                name={row.name}
                columns={row.columns}/>
        )
    }

    const table = function (group: DisplayResult, idx: number) {
        return (
            <table key={idx} className={styles.styledtable}>
                <thead>
                {group.rows.slice(0, 1).map(headerRow)}
                </thead>
                <tbody>
                {group.rows.slice(1, group.rows.length).map(row)}
                </tbody>
            </table>
        )
    }

    return (
        <span className={styles.value}>
            {props.results.map(table)}
        </span>
    )

}