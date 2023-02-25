import React, { useState } from "react";
import { AppContext, useAppContext } from "../Context/appContext";
import EditModal from "./EditModal";

const Show = () => {
  const { students, deleteStudent } = useAppContext(AppContext);

  const [rowData, setRowData] = useState({});

  const [show, setShow] = useState(false);

  const handleShow = (student) => {
    setRowData(student);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <table className="table table-striped mt-5">
        <thead className="bg-dark text-white">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <th>{student.name}</th>
              <td>{student.age}</td>
              <td>
                <div className="btn-group">
                  {/* Este es el boton de editar */}
                  <button
                    onClick={() => handleShow(student)}
                    className="btn btn-info"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>

                  {/* Este es el boton de borrar */}
                  <button
                    onClick={() => {
                      deleteStudent(student.id);
                    }}
                    className="btn btn-danger"
                  >
                    <i className="fa-sharp fa-solid fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <EditModal show={show} onClose={handleClose} rowData={rowData} />
    </>
  );
};

export default Show;
