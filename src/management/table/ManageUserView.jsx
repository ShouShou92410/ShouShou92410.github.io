import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Alert from 'react-bootstrap/Alert';

function ManageUserView() {
  return (
    <>
      <Row>
        <Col>
          <h1 className="mb-4">Manage User</h1>
        </Col>
      </Row>

      <Alert variant={'warning'} className="text-center mt-2">
        <Alert.Heading>Please use the Firebase console to manage the user.</Alert.Heading>
        Will have the functionality on the back-end in the future.
      </Alert>
      <Tabs defaultActiveKey="insert" className="dark">
        <Tab eventKey="insert" title="Insert">
          <Form className="mt-4">
            <Form.Group as={Row}>
              <Col sm={2} className="text-center">
                <Form.Label className="mt-2">Email</Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control type="email" name="email" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={2} className="text-center">
                <Form.Label className="mt-2">Password</Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control type="password" name="password" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={2} className="text-center">
                <Form.Label className="mt-2">User Name</Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control type="text" name="userName" />
              </Col>
            </Form.Group>
          </Form>
          <Button variant="primary" type="submit" className="float-right">
            Insert
          </Button>
        </Tab>
        <Tab eventKey="update" title="Update">
          <Form className="mt-4">
            <Form.Group as={Row}>
              <Col sm={2} className="text-center">
                <Form.Label className="mt-2">Email</Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control type="email" name="email" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={2} className="text-center">
                <Form.Label className="mt-2">Password</Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control type="password" name="password" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={2} className="text-center">
                <Form.Label className="mt-2">User Name</Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control type="text" name="userName" />
              </Col>
            </Form.Group>

            <Button variant="warning" type="submit" className="float-right">
              Update
            </Button>
          </Form>
        </Tab>
        <Tab eventKey="delete" title="Delete">
          <Form className="mt-4">
            <Form.Group as={Row}>
              <Col sm={2} className="text-center">
                <Form.Label className="mt-2">ID</Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control type="text" name="id" />
              </Col>
            </Form.Group>

            <Button variant="danger" type="submit" className="float-right">
              Delete
            </Button>
          </Form>
        </Tab>
      </Tabs>
    </>
  );
}

export default ManageUserView;
