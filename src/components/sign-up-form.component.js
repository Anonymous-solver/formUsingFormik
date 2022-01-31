import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import signUpSchema from "../schema/signUp.schema";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SignUp = (props) => {
	// const obj = {fname: '', password: ''}
	return (
		<div
			style={{
				textAlign: "center",
				width: "50%",
				marginLeft: "25%",
				marginTop: "5px",
				border: "1px solid gray",
				boxShadow: "1px 1px 10px gray",
				borderRadius: "10px",
				padding: "20px",
			}}
		>
			<Formik
				initialValues={{
					fname: "",
					lname: "",
					email: "",
					birthDate: "",
					sex: "Male",
					proficient: "",
					accout: [],
					password: "",
					cpassword: "",
				}}
				validationSchema={signUpSchema}
				onSubmit={(values, actions) => {
					console.log(values);
					actions.setSubmitting(false);
				}}
			>
				{(formikProps) => (
					<Form onSubmit={formikProps.handleSubmit}>
						<div className="form-group">
							<label className="form-label" htmlFor="fname">
								First Name{" "}
								<span className="text-danger">*</span>
							</label>
							<Field
								id="fname"
								name="fname"
								type="text"
								className="form-control"
							></Field>
							<div className="invalid-feedback d-block">
								<ErrorMessage name="fname" />
							</div>
						</div>

						<div className="form-group">
							<label className="form-label" htmlFor="lname">
								Last Name <span className="text-danger">*</span>
							</label>
							<Field
								id="lname"
								name="lname"
								type="text"
								className="form-control"
							></Field>
							<div className="invalid-feedback d-block">
								<ErrorMessage name="lname" />
							</div>
						</div>

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
							<label className="form-label" htmlFor="birthDate">
								Date of Birth
								<span className="text-danger">*</span>
							</label>

							<DatePicker
								selected={formikProps.values.birthDate}
								dateFormat="MMMM d, yyyy"
								className="form-control"
								name="birthDate"
								id="birthDate"
								type="text"
								onChange={(date) =>
									formikProps.setFieldValue("birthDate", date)
								}
							/>

							<div className="invalid-feedback d-block">
								<ErrorMessage name="birthDate" />
							</div>
						</div>

						<div className="form-group">
							<label className="form-label" htmlFor="sex">
								Sex <span className="text-danger">*</span>
							</label>
							<br />
							<Field as="select" name="sex">
								<option value="Male">Male</option>
								<option value="Female">Female</option>
								<option value="Others">Others</option>
							</Field>
							<div className="invalid-feedback d-block">
								<ErrorMessage name="sex" />
							</div>
						</div>
						<br />

						<div className="form-group">
							<label className="form-label" htmlFor="proficient">
								Which languge do you prefer to talk?
								<span className="text-danger">* </span>
							</label>
							<label>
								<Field
									type="radio"
									name="proficient"
									value="Bangla"
								/>
								Bangla
							</label>{" "}
							<label>
								<Field
									type="radio"
									name="proficient"
									value="English"
								/>
								English
							</label>
						</div>
						<br />

						<div id="checkbox-group">Have you any account in these sites?</div>
                        <br />
						<div role="group" aria-labelledby="checkbox-group">
							<label style={{marginRight: '5px'}}>
								<Field
									type="checkbox"
									name="account"
									value="facebook"
								/>
								Facebook
							</label>
							<label style={{marginRight: '5px'}}>
								<Field
									type="checkbox"
									name="account"
									value="twitter"
								/>
								Twitter
							</label>
							<label style={{marginRight: '5px'}}>
								<Field
									type="checkbox"
									name="account"
									value="snapchat"
								/>
								Snapchat
							</label>
						</div>
                        <br />

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

						<div className="form-group">
							<label className="form-label" htmlFor="cpassword">
								Confirm Password{" "}
								<span className="text-danger">*</span>
							</label>
							<Field
								id="cpassword"
								name="cpassword"
								type="text"
								className="form-control"
							></Field>
							<div className="invalid-feedback d-block">
								<ErrorMessage name="cpassword" />
							</div>
						</div>

						<button className="btn btn-primary" type="submit">
							SignUp
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default SignUp;
