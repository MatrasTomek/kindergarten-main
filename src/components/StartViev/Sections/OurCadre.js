import React from "react";
import { Link } from "react-router-dom";
import styles from "./ourCadre.module.scss";

const OurCadre = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.text}>
				<h2>Nasi nauczyciele</h2>
				<p>
					Nasza kadra to zespół uśmiechniętych, zaangażowanych, wykształconych nauczycieli, specjalistów i
					instruktorów. Swoją pasją codziennie inspirują przedszkolaki do odkrywania świata, rozwijania swoich
					umiejętności i talentów.
				</p>
				<Link to="/kadra">
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
			<div className={styles.item}></div>
		</div>
	);
};

export default React.memo(OurCadre);
