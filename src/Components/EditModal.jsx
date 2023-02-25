import React, { useEffect, useState } from "react";

import { AppContext, useAppContext } from "../Context/appContext";

/* Aca se esta importa todo de bootstrap */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const EditModal = ({ show, onClose, rowData }) => {
  const { updateStudent } = useAppContext(AppContext);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
  });

  const handleOnChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent(formData);
    onClose();
  };

  useEffect(() => {
    setFormData(rowData);
  }, [rowData]);

  const { name, age } = rowData;

  return (
    <>
      <form>
        <Modal show={show} onHide={onClose}>
          <Modal.Header className="bg-info text-white" closeButton>
            <Modal.Title>Update Student</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                onChange={(e) => handleOnChange("name", e.target.value)}
                defaultValue={name}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                type="number"
                onChange={(e) => handleOnChange("age", e.target.value)}
                defaultValue={age}
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  );
};

export default EditModal;
