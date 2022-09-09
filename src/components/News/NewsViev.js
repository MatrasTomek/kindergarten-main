import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../../data/actions";
import NewsItem from "./NewsItem";
import styles from "./newsViev.module.scss";

const NewsViev = () => {
	const news = useSelector((store) => store.news);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!news.length) {
			dispatch(getAllNews());
		} else {
			return;
		}
	}, [news, dispatch]);

	const newsViev = !news.length ? (
		<p>Poczekaj na załodowanie danych...</p>
	) : (
		news.map((item) => <NewsItem key={item._id} item={item} />).reverse()
	);

	return (
		<div className={styles.wrapper}>
			<div className={styles.banner}></div>
			<div className={styles.inside}>
				<h2>Aktualności</h2>
				<div className={styles.newsItems}>{newsViev}</div>
			</div>
		</div>
	);
};

export default React.memo(NewsViev);
