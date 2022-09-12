import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { SUCCESS_ITEMS } from "../../../content/success";
import styles from "./successSection.module.scss";

const SuccessSection = () => {
	const navigate = useNavigate();

	const lastSuccesViev = SUCCESS_ITEMS[0];

	const handleGoToSuccess = () => {
		navigate("/sukcesy");
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.text}>
				<h2>Nasze sukcesy</h2>
				<Link to="/sukcesy">
					Zobacz więcej
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 0 24 24"
						width="24px"
						fill="#000000"
					>
						<path d="M0 0h24v24H0z" fill="none" />
						<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
					</svg>
				</Link>
			</div>
			<div className={styles.item} onClick={handleGoToSuccess}>
				<div
					className={styles.photo}
					style={{ backgroundImage: `url(${lastSuccesViev.imagePath}/1.jpg)` }}
				></div>
				<p className={styles.date}>data: {lastSuccesViev.date}</p>
				<h3>{lastSuccesViev.title}</h3>
			</div>
		</div>
	);
};

export default React.memo(SuccessSection);
