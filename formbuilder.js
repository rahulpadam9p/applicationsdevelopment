// src/components/FormBuilder.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function FormBuilder() {
  const { register, handleSubmit } = useForm();
  const [fields, setFields] = useState([]);
  const [fieldType, setFieldType] = useState('text');

  const addField = () => {
    setFields([...fields, { type: fieldType, name: `field_${fields.length}` }]);
  };

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Send form data to backend here (e.g., axios.post)
  };

  return (
    <div>
      <h2>Form Builder</h2>
      <select value={fieldType} onChange={(e) => setFieldType(e.target.value)}>
        <option value="text">Text</option>
        <option value="number">Number</option>
        <option value="checkbox">Checkbox</option>
      </select>
      <button onClick={addField}>Add Field</button>

      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div key={index}>
            <label>{field.name}</label>
            <input type={field.type} {...register(field.name)} />
          </div>
        ))}
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default FormBuilder;
