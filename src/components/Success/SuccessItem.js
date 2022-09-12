import React from "react";
import { Button } from "../../components";
import styles from "./successItem.module.scss";

const SuccessItem = ({ item }) => {
	const { imagePath, title, date } = item;

	return (
		<div className={styles.wrapper}>
			<div className={styles.photo} style={{ backgroundImage: `url(${imagePath}/1.jpg)` }}></div>
			<p className={styles.date}>data: {date}</p>
			<h3>{title}</h3>
			<div className={styles.button}>
				<Button name="zobacz" type="button" />
			</div>
		</div>
	);
};

export default React.memo(SuccessItem);
