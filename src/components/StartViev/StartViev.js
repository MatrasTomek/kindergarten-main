import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews, getAllInformations } from "../../data/actions";
import { BannerSlider } from "../../components";
import { AboutUs, InfoSection, OurCadre, SuccessSection } from "./Sections";
import styles from "./startViev.module.scss";
import NewsSection from "./Sections/NewsSection";

const StartViev = () => {
	const news = useSelector((store) => store.news);
	const informations = useSelector((store) => store.informations);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!news.length) {
			dispatch(getAllNews());
		} else {
			return;
		}
	}, [news, dispatch]);

	useEffect(() => {
		if (!informations.length) {
			dispatch(getAllInformations());
		} else {
			return;
		}
	}, [informations, dispatch]);

	const newsItem = news[news.length - 1];
	const informationItem = informations[informations.length - 1];

	return (
		<div className={styles.wrapper}>
			<div className={styles.bigBanner}>
				<BannerSlider />
			</div>
			<div className={styles.inside}>
				<div className={styles.info}>
					<InfoSection infoItem={informationItem} />
				</div>
				<div className={styles.aboutUs}>
					<AboutUs />
				</div>
				<div className={styles.ourCadre}>
					<OurCadre />
				</div>
				<div className={styles.news}>
					<NewsSection newsItem={newsItem} />
				</div>
				<div className={styles.success}>
					<SuccessSection />
				</div>
			</div>
		</div>
	);
};

export default React.memo(StartViev);
