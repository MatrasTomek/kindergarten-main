import React from "react";
import { Burger, Menu } from "../index";

import styles from "./header.module.scss";

const Header = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.inside}>
				<div className={styles.logo}>LOGO / NAZWA</div>
				<div className={styles.menu}>
					<Menu />
				</div>
				<div className={styles.burger}>
					<Burger />
				</div>
			</div>
		</div>
	);
};

export default React.memo(Header);
