import React, { useEffect, useState } from "react";
import { BANNER_SLIDER } from "../../content/banner";
import styles from "./bannerSlider.module.scss";

const BannerSlider = () => {
	const [picIndex, setPicIndex] = useState(0);

	let index = picIndex;
	const changeIndex = () => {
		index++;
		if (index >= BANNER_SLIDER.length) {
			index = 0;
		}
		setPicIndex(index);
	};

	const slider = BANNER_SLIDER.map((item) => (
		<div key={item.id} className={styles.image} style={{ backgroundImage: `url(${item.imgPathBig})`, left: "0%" }}>
			<div className={styles.content} style={{}}>
				<p>{item.content} </p>
			</div>
		</div>
	)).reverse();

	useEffect(() => {
		const interval = setInterval(() => {
			changeIndex();
		}, 7000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	const slideShow = () => {
		slider[picIndex].props.style.opacity = "1";
		slider[picIndex].props.children.props.style.opacity = "1";
		slider[picIndex].props.children.props.style.top = "40%";
	};
	slideShow();

	const handleChangeSlide = (e) => {
		setPicIndex(e.target.id - 1);
	};

	const dots = BANNER_SLIDER.reverse().map((item) => (
		<div key={item.id} id={item.id} className={styles.dot} style={{}} onClick={handleChangeSlide}></div>
	));

	const activeDot = () => {
		dots[picIndex].props.style.backgroundColor = "rgb(180, 180, 180)";
		dots[picIndex].props.style.border = "2px solid rgb(23, 23, 184)";
	};
	activeDot();

	return (
		<div className={styles.wrapper}>
			{slider}
			<div className={styles.dots}>{dots}</div>
		</div>
	);
};

export default React.memo(BannerSlider);
