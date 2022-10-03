import React from "react";
import { Link } from "react-router-dom";
import { CONTACT, FOOTER_COMPONENTS } from "../../content";
import styles from "./footer.module.scss";

const Footer = () => {
	const { about, contact, education } = FOOTER_COMPONENTS;
	const { name, adress, phone, mail } = CONTACT;
	return (
		<div className={styles.wrapper}>
			<div className={styles.inside}>
				<div className={styles.components}>
					<div className={styles.about}>
						<h3>{about}</h3>
						<div>
							<p></p>
							<Link to="/kadra">Nasza Kadra</Link>
							<Link to="/patronka">Nasza Patronka</Link>
							<Link to="/sukcesy">Sukcesy</Link>
							<Link to="/dokumenty">Dokumenty</Link>
						</div>
					</div>
					<div className={styles.contact}>
						<h3>{contact}</h3>
						<div>
							<p>{name}</p>
							<p>{adress}</p>
							<p>{phone}</p>
							<a href={`mailto:${mail}`} target="blank">
								{mail}
							</a>
						</div>
						<div className={styles.socials}>
							<a href="https://www.facebook.com/przedszkolemokrzyska/" target="blank">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
								</svg>
							</a>
						</div>
					</div>
					<div className={styles.education}>
						<h3>{education}</h3>
						<div>
							<p>
								Od IX 2021 wdrożono aplikacje elektroniczną JAMMIK-przeznaczoną do ewidencji pobytu
								dzieci w Przedszkolu.
							</p>
							<a href="https://www.jammik.pl/" target="blanc">
								JAMMIK
							</a>
							<a href="https://www.jammik.pl/index.php?ram=logowanie" target="blanc">
								Logowanie
							</a>
						</div>
					</div>
				</div>
				<div className={styles.politics}>
					<Link to="/pliki-cookie">Ciasteczka</Link>
					<a href="/klauzula.jpg" target="blank">
						Polityka Rodo
					</a>
				</div>
				<div className={styles.copyrights}>
					<p>&copy; 2022 Publiczne Przedszkole Parafialne w Mokrzyskach</p>

					<a href="https://www.developerweb.pl/" target="blanc">
						{" "}
						madeBy: developerweb.pl
					</a>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Footer);
