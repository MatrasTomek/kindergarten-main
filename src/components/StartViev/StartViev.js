import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../../data/actions";
import { BannerSlider } from "../../components";
import { AboutUs, InfoSection, OurCadre, SuccessSection } from "./Sections";
import styles from "./startViev.module.scss";
import NewsSection from "./Sections/NewsSection";

const StartViev = () => {
	const news = useSelector((store) => store.news);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!news.length) {
			dispatch(getAllNews());
		} else {
			return;
		}
	}, [news, dispatch]);

	const newsItem = news[news.length - 1];

	return (
		<div className={styles.wrapper}>
			<div className={styles.bigBanner}>
				<BannerSlider />
			</div>
			<div className={styles.inside}>
				<div className={styles.info}>
					<InfoSection />
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
