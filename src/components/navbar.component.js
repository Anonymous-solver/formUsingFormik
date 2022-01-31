import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						Navbar
					</Link>
					<div
						className="collapse navbar-collapse"
						id="navbarNavAltMarkup"
					>
						<div className="navbar-nav">
							<Link
								className="nav-link active"
								aria-current="page"
								to="/login"
							>
								Login
							</Link>
							<Link className="nav-link" to="/signup">
								SignUp
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
