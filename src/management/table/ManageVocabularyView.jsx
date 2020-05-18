import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Alert from 'react-bootstrap/Alert';

function ManageVocabularyView({ formInput, handleFormChange, handleSubmit }) {
  return (
    <>
      <Row>
        <Col>
          <h1 className="mb-4">Manage Vocabulary</h1>
        </Col>
      </Row>

      <Tabs defaultActiveKey="insert" className="dark">
        <Tab eventKey="insert" title="Insert">
          <Form className="mt-4" onSubmit={handleSubmit}>
            <Form.Group as={Row}>
              <Col sm={2} className="text-center">
                <Form.Label className="mt-2">Chinese</Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  name="chinese"
                  value={formInput.chinese || ''}
                  onChange={handleFormChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={2} className="text-center">
                <Form.Label className="mt-2">English</Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  name="english"
                  value={formInput.english || ''}
                  onChange={handleFormChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={2} className="text-center">
                <Form.Label className="mt-2">Kanji</Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  name="kanji"
                  value={formInput.kanji || ''}
                  onChange={handleFormChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={2} className="text-center">
                <Form.Label className="mt-2">Gojuuon</Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  name="gojuuon"
                  value={formInput.gojuuon || ''}
                  onChange={handleFormChange}
                />
              </Col>
            </Form.Group>

            <Button variant="primary" type="submit" className="float-right">
              Insert
            </Button>
          </Form>
        </Tab>
        <Tab eventKey="update" title="Update">
          <Alert variant={'warning'} className="text-center mt-2">
            <Alert.Heading>Not finish.</Alert.Heading>
            Consider a table with rows of record to interact with.
          </Alert>

          <Form className="mt-4">
            <Form.Group as={Row}>
              <Col sm={2} className="text-center">
                <Form.Label className="mt-2">ID</Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control type="text" name="id" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={2} className="text-center">
                <Form.Label className="mt-2">Chinese</Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control type="text" name="chinese" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={2} className="text-center">
                <Form.Label className="mt-2">English</Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control type="text" name="english" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={2} className="text-center">
                <Form.Label className="mt-2">Kanji</Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control type="text" name="kanji" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={2} className="text-center">
                <Form.Label className="mt-2">Gojuuon</Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control type="text" name="gojuuon" />
              </Col>
            </Form.Group>

            <Button variant="warning" type="submit" className="float-right">
              Update
            </Button>
          </Form>
        </Tab>
        <Tab eventKey="delete" title="Delete">
          <Alert variant={'warning'} className="text-center mt-2">
            <Alert.Heading>Not finish.</Alert.Heading>
            Consider a table with rows of record to interact with.
          </Alert>

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

export default ManageVocabularyView;
