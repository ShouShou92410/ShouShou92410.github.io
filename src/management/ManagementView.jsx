import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import ManageVocabulary from './table/ManageVocabulary';

function ManagementView({ tableList }) {
  return (
    <>
      <Row>
        <Col lg={2} />
        <Col lg={7}>
          <Switch>
            <Route path="/management/vocabulary">
              <ManageVocabulary />
            </Route>
            <Route path="/management">
              <ManageVocabulary />
            </Route>
          </Switch>
        </Col>
        <Col lg={2}>
          <Nav className="d-block">
            {tableList.map((table) => (
              <Nav.Link
                key={table}
                as={NavLink}
                to={`/management/${table}`}
                className="dark"
                activeClassName="active">
                {table}
              </Nav.Link>
            ))}
          </Nav>
        </Col>
      </Row>
    </>
  );
}

export default ManagementView;
