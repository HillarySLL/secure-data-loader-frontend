import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

import Container from '../components/Container';
import { baseUrl, tokenKey } from "../constants";
import { validateField, validateRecordToUpdate } from '../utils';

function Records() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { errors: initialErrors, success: initialSuccess } = state;

  // Crear estados para errores y éxito inicializados con la información de useLocation
  const [errors, setErrors] = useState(initialErrors || []);
  const [success, setSuccess] = useState(initialSuccess || []);

  // Restaurar los estados si cambia la información de useLocation
  useEffect(() => {
    setErrors(initialErrors || []);
    setSuccess(initialSuccess || []);
  }, [initialErrors, initialSuccess]);

  const handleNewFile = (event) => {
    event.preventDefault();
    navigate("/upload")
  }

  const sendRecordToApi = async (record) => {
    const { email, name, age } = record;
    
    const token = window.localStorage.getItem(tokenKey);

    const options = {
      method: "POST",
      body: JSON.stringify({ email, name, age }),
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      const result = await fetch(baseUrl + "/document/record", options);
      const data = await result.json();
      if(data.ok) {
        let updateErrors = errors.filter(error => error.row !== record.row);
        setErrors(updateErrors);
        setSuccess([...success, record]);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const handleRetry = async (recordRow) => {
    const recortToUpdate = errors.find(record => record.row === recordRow);
    console.log("recordToUpdate: ", recortToUpdate);
    if (validateRecordToUpdate(recortToUpdate)) {
      console.log("Success to updated ...");
      sendRecordToApi(recortToUpdate);
    }
  };

  const handleInputChange = (e, recordRow, field) => {
    const { value } = e.target;
    const updateRecords = errors.map(record => {
      if (record.row === recordRow) {
        let updateFields = { ...record, [field]: value };
        if(validateField(field, value)) {
          updateFields = { ...updateFields, details: { ...record.details, [field]: "" } };
        } else {
          let message = `El formato del campo '${field}' es inválido.`
          updateFields = { ...updateFields, details: { ...record.details, [field]: message } };
        }
        return updateFields
      }
      return record
    });
    setErrors(updateRecords);
  };

  return (
    <Container>
      <div className="flex items-center justify-end">
        <div className="flex items-center space-x-4">
          <div
            className="relative w-full rounded-lg p-4"
            role="alert"
          >
            <div role="alert" className="alert alert-success">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{ success.length } records uploaded successfully</span>
            </div>
          </div>
          <button className="btn btn-neutral" onClick={handleNewFile}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            New File
          </button>
        </div>
      </div>
      {
        errors.length ? (
          <div className="rounded-lg shadow-sm mt-4">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Row</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {errors.map(record => (
                    <tr key={record.row}>
                      <td>{record.row}</td>
                      <td>
                        <input
                          type="text"
                          value={record.name}
                          onChange={(e) => handleInputChange(e, record.row, 'name')}
                          className={`input ${record.details.name ? "border-red-500" : ""}`}
                        />
                        {record.details.name && <span className="text-red-500">{record.details.name}</span>}
                      </td>
                      <td>
                        <input
                          type="text"
                          value={record.email}
                          onChange={(e) => handleInputChange(e, record.row, 'email')}
                          className={`input ${record.details.email ? "border-red-500" : ""}`}
                        />
                        {record.details.email && <span className="text-red-500">{record.details.email}</span>}
                      </td>
                      <td>
                        <input
                          type="text"
                          value={record.age}
                          onChange={(e) => handleInputChange(e, record.row, 'age')}
                          className={`input ${record.details.age ? "border-red-500" : ""}`}
                        />
                        {record.details.age && <span className="text-red-500">{record.details.age}</span>}
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-outline"
                          onClick={() => handleRetry(record.row)}
                        >
                          Retry
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
        : (
          <div></div>
        )
      }
      
    </Container>
  );
}

export default Records;
 
