import React, {useEffect} from 'react';

import { useAppDispatch } from '../../../app/hooks';
import {
    fetchResultsAsync,
} from '../store/resultSlice';
import {
    fetchGroupsAsync,
} from '../store/groupSlice';

import {
    groupsSlice
} from '../store/groupSlice';

import {Row} from "./Row";
import {HeaderRow} from "./HeaderRow";
import {DisplayResult, RowData} from "../types";
import styles from '../Result.module.css'
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

interface ResultProps {
    results: DisplayResult[];
    groups: string[];
    selectedGroup: string
    loadingState: string;
}

export function Results(props: ResultProps) {
    const dispatch = useAppDispatch();

    async function handleGroupChange(eventKey: any, event: any)  {
      const selectedGroup = event.target.innerHTML;
      console.log(selectedGroup)
      if (selectedGroup === 'All') {
         dispatch(fetchResultsAsync(props.groups))
      } else {
        dispatch(groupsSlice.actions.changeGroup([selectedGroup]));
      }
      dispatch(fetchResultsAsync([selectedGroup]))
    }

    useEffect(() => {
        dispatch(fetchGroupsAsync())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchResultsAsync(props.groups))
    }, [dispatch, props.groups])

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
    <>
            <Navbar bg="light" expand="lg">
                <Container>
                  <Navbar.Brand href="#home">TestHub</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <NavDropdown title="Products" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">TestHub</NavDropdown.Item>
                        </NavDropdown>
                      <NavDropdown title="Environments" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">STAGE</NavDropdown.Item>
                      </NavDropdown>
                       <NavDropdown title="Groups" id="basic-nav-dropdown" onSelect={handleGroupChange}>
                        <NavDropdown.Item key={'All'}>All</NavDropdown.Item>
                         {props.groups.map((e, key) => {
                            return <NavDropdown.Item key={key}>{e}</NavDropdown.Item>;
                        })}
                       </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>

               <header className="App-header">
               </header>

               { ( props.loadingState === 'loading' ) &&
                    <Spinner
                              as="span"
                              animation="grow"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />
               }
               { ( props.loadingState === 'idle' ) &&
                    <span className={styles.value}>
                                {props.results.map(table)}
                    </span>
               }
    </>
    )

}