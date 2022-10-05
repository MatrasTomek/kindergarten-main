import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { delPicItem, setPicItem } from "../../data/actions";
import { Button } from "../../components";
import styles from "./successItem.module.scss";

const SuccessItem = ({ item }) => {
	const { imagePath, title, date, content1 } = item;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleOpenSelectedItemsViev = () => {
		dispatch(delPicItem());
		dispatch(setPicItem(item));
		navigate("/sukcesy-element");
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.photo} style={{ backgroundImage: `url(${imagePath}/1.jpg)` }}></div>
			<p className={styles.date}>data: {date}</p>
			<h3>{title}</h3>
			<p>{content1}</p>
			<div className={styles.button}>
				<Button name="zobacz" type="button" onClick={handleOpenSelectedItemsViev} />
			</div>
		</div>
	);
};

export default React.memo(SuccessItem);
