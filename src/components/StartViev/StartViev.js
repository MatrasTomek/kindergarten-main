import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../../data/actions";
import { BannerSlider } from "../../components";
import styles from "./startViev.module.scss";

const StartViev = () => {
	const news = useSelector((store) => store.news);
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	if (!news.length) {
	// 		dispatch(getAllNews());
	// 	} else {
	// 		return;
	// 	}
	// }, [news, dispatch]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.bigBanner}>
				<BannerSlider />
			</div>
			<div className={styles.inside}>
				<div className={styles.info}></div>
				<div className={styles.aboutUs}></div>
				<div className={styles.ourCadre}></div>
				<div className={styles.news}></div>
			</div>
		</div>
	);
};

export default React.memo(StartViev);
