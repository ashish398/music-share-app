import React from "react";
import { Row, Col, Toast } from "react-bootstrap";

const ResponseToast = (props) => {
  const { text, showToast, setShowToast } = props;
  return (
    <Row>
      <Col>
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
        >
          <Toast.Body>
            <strong className="me-auto">{text}</strong>
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
};

export default ResponseToast;
