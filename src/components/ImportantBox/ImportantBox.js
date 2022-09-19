import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBoxInformations } from "../../data/actions";
import { Button, Modal } from "../../components";
import styles from "./importantBox.module.scss";

const ImportantBox = () => {
	const boxInformation = useSelector((store) => store.boxInfo);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBoxInformations());
	}, [dispatch]);

	const [isVisible, setIsVisibie] = useState(true);

	const handleCloseBoxInfo = () => {
		setIsVisibie(false);
	};

	const boxInformationViev = !boxInformation.length ? (
		""
	) : (
		<div className={styles.info}>
			<h2>{boxInformation[0].title}</h2>
			<p className={styles.date}>dodano: {boxInformation[0].date}</p>
			<p className={styles.content}>{boxInformation[0].content}</p>
			<p className={styles.sign}>{boxInformation[0].signature}</p>
		</div>
	);

	return (
		<div
			className={styles.wrapper}
			style={{ display: `${!boxInformation.length || !isVisible ? "none" : "block"}` }}
		>
			<div className={styles.inside}>{boxInformationViev}</div>
			<div className={styles.button}>
				<Button name="zamknij" type="button" onClick={handleCloseBoxInfo} />
			</div>
		</div>
	);
};

export default React.memo(ImportantBox);
