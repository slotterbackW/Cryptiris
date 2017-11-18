import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/sessionActions'
import Yup from 'yup';
import Form from '../Forms'

const initialValues = {
  email: '',
  password: '',
}

const title = "Log In"

const schema = Yup.object().shape(
  {
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(8,'Your pasword must be at least 8 characters long.').required('Required'),
  })

const renderFunc = ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group">    
      <label className="control-label">Email</label>
      <input
        type="email"
        name="email"
        className="form-control"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      {touched.email && errors.email && <div>{errors.email}</div>}
    </div>
    <div className="form-group">
      <label className="control-label">Password</label>
      <input
        type="password"
        name="password"
        className="form-control"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      {touched.password && errors.password && <div>{errors.password}</div>}
    </div>
    <div className="flex-center">
      <button className="btn" type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </div>
  </form>
)

const Login = (props) => {
    const onSubmit = (values, { setSubmitting, setErrors } ) => {
    props.dispatch(actions.login(values.email, values.password))
        setSubmitting(false)
    }
    if (props.loading) {
        return (<p>loading...</p>)
    } else {
        return (
            <div className="container">
                <Form title={title} error={props.error} initialValues={initialValues} schema={schema}
                                    onSubmit={onSubmit} renderFunc={renderFunc} />
            </div>
        )
    }
}

export default connect(
    (state) => state.session
)(Login)
