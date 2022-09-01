import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../data/actions";
import { MENU_ITEMS } from "../../content/menu";
import styles from "./menu.module.scss";

const Menu = () => {
	const menu = useSelector((store) => store.menu);
	const dispatch = useDispatch();

	const handleSetCloseMenu = () => {
		dispatch(closeMenu());
	};

	const menuItemViev = MENU_ITEMS.map((item) => {
		return (
			<Link key={item.id} to={`${item.path}`} onClick={handleSetCloseMenu}>
				{item.name}
			</Link>
		);
	});

	return (
		<>
			<div style={{ display: `${menu ? "flex" : "none"}` }} className={styles.insideMobile}>
				{menuItemViev}
			</div>
			<div className={styles.insideDesktop}>{menuItemViev}</div>
		</>
	);
};

export default React.memo(Menu);
