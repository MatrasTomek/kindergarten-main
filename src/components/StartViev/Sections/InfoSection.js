import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./infoSection.module.scss";

const InfoSection = ({ infoItem }) => {
	const navigate = useNavigate();

	const handleGotoInfoSite = () => {
		navigate("/ogloszenia");
	};

	const infoItemViev = !infoItem ? (
		<p>Dane się ładują...</p>
	) : (
		<>
			<h3>{infoItem.title}</h3>
			<p className={styles.date}>opublikowano: {infoItem.date}</p>
		</>
	);

	return (
		<div className={styles.wrapper}>
			<div className={styles.text}>
				<h2>Ogłoszenia</h2>
				<p>Bierzące informacje, ogłoszenia i spotkania.</p>
				<Link to="/ogloszenia">
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
			<div className={styles.item} onClick={handleGotoInfoSite}>
				{infoItemViev}
			</div>
		</div>
	);
};

export default React.memo(InfoSection);
