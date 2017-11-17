import React from 'react';
import { Formik } from 'formik';
import './form.css'

const Form = ({title, error, initialValues, schema, onSubmit, renderFunc}) => (
  <div>
    <div className="flex-center">
    <h1>{title}</h1>
    </div>
    <div className="flex-center">
    {error && <h3 style={{color: "red"}}>{error.data}</h3>}
    </div>
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
      render={renderFunc}
    />
  </div>
)

export default Form
