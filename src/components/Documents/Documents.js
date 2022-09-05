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
			</div>
		</div>
	);
};

export default React.memo(Documents);
