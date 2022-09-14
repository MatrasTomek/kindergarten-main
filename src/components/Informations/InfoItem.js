import React, { useState } from "react";
import { Button } from "../../components";
import styles from "./infoItem.module.scss";

const InfoItem = ({ item }) => {
	const { title, content, date, signature } = item;

	const [contentViev, setContentViev] = useState(false);

	const splitedConten1 = content.split(/\n/);
	const vievSplitedContent1 = splitedConten1.map((item, index) => <p key={index}>{item}</p>);

	const allContentViev = !contentViev ? (
		""
	) : (
		<div>
			<div className={styles.content}>{vievSplitedContent1}</div>

			<p className={styles.signature}>{signature}</p>
		</div>
	);

	const handleChangeContentViev = () => {
		setContentViev(!contentViev);
	};

	return (
		<div className={styles.wrapper}>
			<h3>{title}</h3>
			<p className={styles.date}>opublikowano: {date}</p>
			<div className={styles.button}>
				<Button name={!contentViev ? "zobacz" : "zwiń"} onClick={handleChangeContentViev} />
			</div>
			{allContentViev}
		</div>
	);
};

export default React.memo(InfoItem);
