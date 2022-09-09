import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./newsSection.module.scss";

const NewsSection = ({ newsItem }) => {
	const navigate = useNavigate();

	const handleGotoNewsSite = () => {
		navigate("/aktualnosci");
	};

	const newsItemViev = !newsItem ? (
		<p>Dane się ładują...</p>
	) : (
		<>
			<img src={newsItem.photo} alt="" />
			<h3>{newsItem.title}</h3>
			<p className={styles.date}>opublikowano: {newsItem.date}</p>
		</>
	);

	return (
		<div className={styles.wrapper}>
			<div className={styles.item} onClick={handleGotoNewsSite}>
				{newsItemViev}
			</div>

			<div className={styles.text}>
				<h2>Aktualności</h2>
				<p>Najważniejsze sprawy Naszych dzieci i przedszkola.</p>
				<Link to="/aktualnosci">
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
		</div>
	);
};

export default React.memo(NewsSection);
