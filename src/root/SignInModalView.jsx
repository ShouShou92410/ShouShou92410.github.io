import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

function SignInModalView({
  show,
  handleClose,
  handleSignInInfoChange,
  handleSignIn,
  signingIn,
  signInError
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>
      {signInError ? (
        <Alert variant="danger" className="text-center">
          <h5 className="mb-0">{signInError}</h5>
        </Alert>
      ) : (
        ''
      )}
      <Form onSubmit={handleSignIn}>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" onChange={handleSignInInfoChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" onChange={handleSignInInfoChange} />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" type="submit" disabled={signingIn}>
            {signingIn ? (
              <>
                <Spinner as="span" animation="border" size="sm" />{' '}
              </>
            ) : (
              ''
            )}
            Sign In
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default SignInModalView;
