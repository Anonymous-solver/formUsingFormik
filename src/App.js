import Navbar from "./components/navbar.component";
import { Switch, Route } from "react-router-dom";
import Login from "./components/login-form.component";
import SignUp from "./components/sign-up-form.component";

function App() {
	return (
		<>
			<Navbar></Navbar>
            
			<Switch>
				<Route path="/login" component={Login}></Route>
				<Route path="/signup" component={SignUp}></Route>
			</Switch>
		</>
	);
}

export default App;
