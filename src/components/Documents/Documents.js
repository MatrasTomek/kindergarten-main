import React from "react";
import { DOCS_ABOUT_KINDERGARTEN, DOCS_ABOUT_RECRUITMENT } from "../../content/documents";
import styles from "./documents.module.scss";

const Documents = () => {
	const workDocumentsViev = DOCS_ABOUT_KINDERGARTEN.map((item) => (
		<li key={item.id}>
			<a href={`${item.path}`} target="blanc">
				{item.name}
			</a>
		</li>
	));

	const recruitmentDocumentsViev = DOCS_ABOUT_RECRUITMENT.map((item) => (
		<li key={item.id}>
			<a href={`${item.path}`} target="blanc">
				{item.name}
			</a>
		</li>
	));

	return (
		<div className={styles.wrapper}>
			<div className={styles.banner}>
				<img src="images/hist/banner.jpg" alt="widok przedszkola front" />
			</div>
			<div className={styles.inside}>
				<h2>Dokumenty</h2>
				<p>Dokumenty dotyczące pracy przedszkola:</p>
				<ul>{workDocumentsViev}</ul>
				<p>Dokumenty dotyczące rekrutacji:</p>
				<ul>{recruitmentDocumentsViev}</ul>
				<p>JAMMIK</p>
				<ul>
					<li>
						Od IX 2021 wdrożono aplikacje elektroniczną JAMMIK-przeznaczoną do ewidencji pobytu dzieci w
						Przedszkolu, którego funkcjonowanie opisuje umowa licencyjna. / do wglądu u dyrektora/
					</li>
					<li>
						Zostały zamontowane dwa urządzenia do odczytu kart zbliżeniowych UNIQE 125Mhz, QBA RFID zwanych
						dalej urządzeniami do obsługi JAMMIK.
					</li>
					<li>
						Urządzenia oraz karty posiadają odpowiednie parametry techniczne, spełniają wymagania określone
						przepisami prawa.
					</li>
					<li>
						<a href="https://www.jammik.pl/" target="blanc">
							JAMMIK
						</a>
					</li>
					<li>
						<a href="https://www.jammik.pl/index.php?ram=logowanie" target="blanc">
							Logowanie
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default React.memo(Documents);
