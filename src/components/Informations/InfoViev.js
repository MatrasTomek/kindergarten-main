import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllInformations } from "../../data/actions";
import InfoItem from "./InfoItem";
import styles from "./infoViev.module.scss";

const InfoViev = () => {
	const informations = useSelector((store) => store.informations);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!informations.length) {
			dispatch(getAllInformations());
		} else {
			return;
		}
	}, [informations, dispatch]);

	const informationsViev = !informations.length ? (
		<p>Poczekaj na załodowanie danych...</p>
	) : (
		informations.map((item) => <InfoItem key={item._id} item={item} />).reverse()
	);
	return (
		<div className={styles.wrapper}>
			<div className={styles.banner}></div>
			<div className={styles.inside}>
				<h2>Ogłoszenia</h2>
				<div className={styles.newsItems}>{informationsViev}</div>
			</div>
		</div>
	);
};

export default React.memo(InfoViev);
