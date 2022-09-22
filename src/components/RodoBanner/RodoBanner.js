import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkCookie, closeBanner, setCookie } from "../../data/actions";
import { Button } from "../../components";
import styles from "./rodoBanner.module.scss";

const RodoBanner = () => {
	const rodoBanner = useSelector((store) => store.rodoBanner);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkCookie());
	}, [dispatch]);

	const handleOnSetCookie = () => {
		dispatch(setCookie());
	};

	const handleOnCloseRodoBanner = () => {
		dispatch(closeBanner());
	};

	return (
		<div className={styles.wrapper} style={{ display: `${rodoBanner ? "block" : "none"}` }}>
			<div className={styles.inside}>
				<div className={styles.content}>
					<p>
						Ta strona korzysta z plików cookie "ciasteczek". To pliki tekstowe zapisywane w Twojej
						przeglądarce. To konieczne aby wykorzystać w pełni działanie przeglądarki i naszego programu.
						Dzięki nim mamy możliwość np. niewyświetlania tego baneru jeżeli zaakceptujesz Naszą plitykę.
						Brak wyrażenia zgody lub wycofanie zgody niekorzystnie wpłynie na niektóre cechy i funkcje tej
						strony.
					</p>
				</div>
				<div className={styles.buttons}>
					<Button name="Akceptuj" onClick={handleOnSetCookie} />
					<Button name="Odrzuć" onClick={handleOnCloseRodoBanner} />
				</div>
				<div className={styles.links}>
					<Link to="/pliki-cookie">Ciasteczka</Link>
					<a href="/assets/klauzula.jpg" target="blank">
						Polityka Rodo
					</a>
				</div>
			</div>
		</div>
	);
};

export default React.memo(RodoBanner);
