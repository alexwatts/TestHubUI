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
import Badge from 'react-bootstrap/Badge';

interface ResultProps {
    results: DisplayResult[];
}

export function Results(props: ResultProps) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAsync())
    }, [dispatch])

    const headerRow = function (row: RowData, groupName: string) {
        return (
            <HeaderRow
                key={0}
                name={"Test Runs - " + groupName}
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
                    {headerRow(group.rows[0], group.group)}
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