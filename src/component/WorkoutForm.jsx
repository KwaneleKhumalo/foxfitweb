import { useEffect, useState } from "react";
import { Col, Modal, Button, Form } from "react-bootstrap";

const WorkoutForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Col sm="12" className="text-center">
        <Button variant="info" onClick={handleShow}>
          New Routine
        </Button>
      </Col>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>New Routine</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Form>
            <Form.Group className="mb-5" controlId="workout">
              <Form.Label>Workout: </Form.Label>
              <Form.Control type="text" placeholder="i.e Cardio" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="i.e skiing" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="repetition">
              <Form.Label># Repetitions</Form.Label>
              <Form.Control type="number" placeholder="Max is 12" max={12} min={0} />
              <span className="text-secondary">"0" for Cardio</span>
            </Form.Group>
            <Form.Group className="mb-5" controlId="sets">
              <Form.Label># Sets:</Form.Label>
              <Form.Control type="number" placeholder="Max is 4" min={1} max={4} />
              <span className="text-secondary">"0" for Cardio</span>
            </Form.Group>

            <Form.Group className="mb-5" controlId="weights">
              <Form.Label># Weights:</Form.Label>
              <Form.Control type="number" placeholder="Weight" min={10} max={200} />
              <span className="text-secondary">"0" for Cardio</span>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WorkoutForm;
