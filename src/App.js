import React from "react";
import SocialCard from "./SocialCard";
import User from "./User";

const users = [
	new User(
		"John Doe",
		24,
		"Software Engineer",
		"Texas",
		"Male",
		"./images/male-1.png"
	),
	new User(
		"Harley Quinn",
		22,
		"Modeler",
		"New York",
		"Female",
		"./images/female-1.png"
	),
	new User(
		"Taylor Swift",
		32,
		"Song Writer",
		"L.A",
		"Female",
		"./images/female-2.png"
	),
	new User(
		"Toney Stark",
		27,
		"Actor",
		"California",
		"Male",
		"./images/male-2.png"
	),
];

function App() {
	return (
		<div className="app">
			{users.map((user) => (
				<SocialCard user={user} />
			))}
		</div>
	);
}

export default App;
