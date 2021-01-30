import React from "react";
// import User from "./User";

const SocialMediaIcons = {
	facebook: "fab fa-facebook-f",
	instagram: "fab fa-instagram",
	twitter: "fab fa-twitter",
	youtube: "fab fa-youtube",
};

const SocialIcon = (props) => {
	return (
		<a href={props.link} className="social-media-icon">
			<i className={props.icon}></i>
		</a>
	);
};

const DetailsRow = (props) => {
	return (
		<div className="details-row">
			<span className="label">{props.label}</span>
			<span className="value">{props.value}</span>
		</div>
	);
};

const DetailsPanel = (props) => {
	/**
	 * @type User User details
	 */
	const user = props.user;

	return (
		<div className="details-panel">
			<div className="name">{user.Name}</div>
			<DetailsRow label="Age" value={user.Age} />
			<DetailsRow label="Sex" value={user.Gender} />
			<DetailsRow label="Occupation" value={user.Occupation} />
			<DetailsRow label="State" value={user.State} />
		</div>
	);
};

const SocialCard = (props) => {
	/**
	 * @type User User details
	 */
	const user = props.user;

	return (
		<div className="social-card">
			<div className="image-panel">
				<div
					className="image"
					style={{ backgroundImage: `url('${user.Image}')` }}
				></div>
			</div>

			<DetailsPanel user={user} />

			<div className="social-media-icons">
				<SocialIcon icon={SocialMediaIcons.facebook} />
				<SocialIcon icon={SocialMediaIcons.instagram} />
				<SocialIcon icon={SocialMediaIcons.twitter} />
				<SocialIcon icon={SocialMediaIcons.youtube} />
			</div>
		</div>
	);
};

export default SocialCard;
