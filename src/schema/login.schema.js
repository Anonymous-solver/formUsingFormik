import { string, object } from "yup";

const loginSchema = object().shape({
	email: string()
		.trim()
		.email("This field must be a valid email")
		.required("This field must not be empty"),
	password: string()
		.max(50, "This field must be at most 50 characters long")
		.required("This field must not be empty"),
});

export default loginSchema;
