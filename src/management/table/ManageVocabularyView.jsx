import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function ManageVocabularyView({ fileInput, handleFileChange, handleInsert }) {
  return (
    <>
      <Row>
        <Col>
          <h1 className="mb-4">Manage Vocabulary</h1>
        </Col>
      </Row>

      <Tabs defaultActiveKey="insert" className="dark">
        <Tab eventKey="insert" title="Insert">
          <Form className="mt-4" onSubmit={handleInsert}>
            <Form.Group as={Row}>
              <Col sm={2} className="text-center">
                <Form.Label className="mt-2">CSV File</Form.Label>
              </Col>
              <Col sm={10}>
                <Form.File custom label={fileInput.name} name="file" onChange={handleFileChange} />
              </Col>
            </Form.Group>

            <Button size="sm" variant="success" type="submit" className="float-right">
              Submit
            </Button>
          </Form>
        </Tab>
        <Tab eventKey="update" title="Update" disabled></Tab>
        <Tab eventKey="delete" title="Delete" disabled></Tab>
      </Tabs>
    </>
  );
}

export default ManageVocabularyView;
