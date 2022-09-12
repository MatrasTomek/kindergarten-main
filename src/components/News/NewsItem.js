import React, { useState } from "react";
import { Button } from "../../components";
import styles from "./newsItem.module.scss";

const NewsItem = ({ item }) => {
	const { _id, photo, title, content1, content2, date, signature } = item;

	const [contentViev, setContentViev] = useState(false);

	const splitedConten1 = content1.split(/\n/);
	const vievSplitedContent1 = splitedConten1.map((item, index) => <p key={index}>{item}</p>);

	const splitedConten2 = !content2 ? [] : content2.split(/\n/);
	const vievSplitedContent2 = splitedConten2.map((item, index) => <p key={index}>{item}</p>);

	const allContentViev = !contentViev ? (
		""
	) : (
		<div>
			<div className={styles.content}>{vievSplitedContent1}</div>
			<div className={styles.content}>{vievSplitedContent2}</div>
			<p className={styles.signature}>{signature}</p>
		</div>
	);

	const handleChangeContentViev = () => {
		setContentViev(!contentViev);
	};

	return (
		<div className={styles.wrapper}>
			<img src={photo} alt="" />
			<h3>{title}</h3>
			<p className={styles.date}>opublikowano: {date}</p>
			<div className={styles.button}>
				<Button name={!contentViev ? "zobacz" : "zwiń"} onClick={handleChangeContentViev} />
			</div>
			{allContentViev}
		</div>
	);
};

export default React.memo(NewsItem);
