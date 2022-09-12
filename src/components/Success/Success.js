import React from "react";
import { SuccessItem } from "../../components";
import { SUCCESS_ITEMS } from "../../content/success";
import styles from "./success.module.scss";

const Success = () => {
	const successItemVievs = SUCCESS_ITEMS.map((item) => <SuccessItem key={item.id} item={item} />);

	return (
		<div className={styles.wrapper}>
			<div className={styles.banner}></div>
			<div className={styles.inside}>
				<h2>Nasze Sukcesy</h2>
				<div className={styles.itemsViev}>{successItemVievs}</div>
			</div>
		</div>
	);
};

export default React.memo(Success);
