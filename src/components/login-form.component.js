import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginSchema from "../schema/login.schema";

const Login = (props) => {
	// const obj = {email: '', password: ''}
	return (
		<div
			style={{
				textAlign: "center",
				width: "50%",
				marginLeft: "25%",
				marginTop: "10%",
				border: "1px solid gray",
				boxShadow: "1px 1px 10px gray",
				borderRadius: "10px",
				padding: "20px",
			}}
		>
			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				validationSchema={loginSchema}
				onSubmit={(values, actions) => {
					console.log(values);
					actions.setSubmitting(false);
				}}
			>
				{(formikProps) => (
					<Form onSubmit={formikProps.handleSubmit}>
						<div className="form-group">
							<label className="form-label" htmlFor="email">
								Email <span className="text-danger">*</span>
							</label>
							<Field
								id="email"
								name="email"
								type="text"
								className="form-control"
							></Field>
							<div className="invalid-feedback d-block">
								<ErrorMessage name="email" />
							</div>
						</div>

						<div className="form-group">
							<label className="form-label" htmlFor="password">
								Password <span className="text-danger">*</span>
							</label>
							<Field
								id="password"
								name="password"
								type="text"
								className="form-control"
							></Field>
							<div className="invalid-feedback d-block">
								<ErrorMessage name="password" />
							</div>
						</div>

						<button className="btn btn-primary" type="submit">
							Login
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default Login;
