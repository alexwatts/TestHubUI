import React, {useEffect} from 'react';

import { useAppDispatch } from '../../../app/hooks';
import {
    fetchAsync,
} from '../store/resultSlice';
import {Row} from "./Row";
import {HeaderRow} from "./HeaderRow";
import {DisplayResult, RowData} from "../types";
import styles from '../Result.module.css'
import Container from 'react-bootstrap/Container';

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
                <Container>
                    {group.rows.slice(0, 1).map(headerRow)}
                    {group.rows.slice(1, group.rows.length).map(row)}
                </Container>
        )
    }

    return (
        <span className={styles.value}>
            {props.results.map(table)}
        </span>
    )

}