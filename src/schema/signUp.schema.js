import { string, object } from "yup";

const signUpSchema = object().shape({
	fname: string()
		.max(10, "This field must be at most 10 characters long")
		.required("This field must not be empty"),
	lname: string()
		.max(10, "This field must be at most 10 characters long")
		.required("This field must not be empty"),
	email: string()
		.trim()
		.email("This field must be a valid email")
		.required("This field must not be empty"),
	birthDate: string()
		.required("This field must not be empty"),
	sex: string()
		.max(10, "This field must be at most 10 characters long")
		.required("This field must not be empty"),
	password: string()
		.max(50, "This field must be at most 50 characters long")
		.required("This field must not be empty"),
	cpassword: string()
		.max(50, "This field must be at most 50 characters long")
		.required("This field must not be empty"),
});

export default signUpSchema;
