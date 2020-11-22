import React, { Component } from 'react'
// import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { authorizationAPI } from './crud'
import { withRouter } from 'react-router-dom';

import './index.scss';

class Auth extends Component {
    render() {
        return (
            <div className="auth-form">
                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values, formik) => {
                        formik.setSubmitting(false);
                        authorizationAPI(values)
                        .then(res => {
                            // save date => 
                            
                            this.props.history.push('/admin/products/')
                        })
                        .catch(er => {
                            formik.setSubmitting(true);
                        })
                    }}
                >
                    {({ touched, errors, isSubmitting }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    className={`form-control ${touched.email && errors.email ? "is-invalid" : ""
                                        }`}
                                />
                                <ErrorMessage
                                    component="div"
                                    name="email"
                                    className="invalid-feedback"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    className={`form-control ${touched.password && errors.password ? "is-invalid" : ""
                                        }`}
                                />
                                <ErrorMessage
                                    component="div"
                                    name="password"
                                    className="invalid-feedback"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Please wait..." : "Submit"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default withRouter(Auth)
