import React from 'react';
import styles from './cadre.module.scss';

const Cadre = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.banner}></div>
			<div className={styles.inside}>
				<h2>Nasza kadra</h2>
				<div className={styles.title}>
					<p>Organ prowadzący przedszkole: ks. Tomasz Szewczyk</p>
				</div>
				<div className={styles.table}>
					<table>
						<tbody>
							<tr>
								<th>Dyrektor Przedszkola:</th>
								<td>Katarzyna Brożek</td>
							</tr>
							<tr>
								<th>Vice dyrektor:</th>
								<td>Ewa Tomana</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className={styles.pictureItem1}>
					{/* <img src="/images/kadra/grono.jpg" alt="kadra przedszkola" /> */}
					<p>Nauczyciele:</p>
				</div>
				<div className={styles.table}>
					<table>
						<tbody>
							<tr>
								<th>Oddział 1:</th>
								<td>Pani Klaudia Węgrzyn</td>
							</tr>
							<tr>
								<th>Oddział 2:</th>
								<td>Pani Natalia Nabożny</td>
							</tr>
							<tr>
								<th>Oddział 3:</th>
								<td>Pani Paulina Jarosz, Pani Luiza Biel</td>
							</tr>
							<tr>
								<th>Oddział 4:</th>
								<td>Pani Anna Chmielarz</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className={styles.pictureItem1}>{/* <img src="/images/kadra/grono.jpg" alt="kadra przedszkola" /> */}</div>
				<div className={styles.table}>
					<table>
						<tbody>
							<tr>
								<th>Psycholog:</th>
								<td>Pani Weronika Wieczorek</td>
							</tr>
							<tr>
								<th>Pedagog:</th>
								<td>Pani Luiza Bie</td>
							</tr>
							<tr>
								<th>Logopeda:</th>
								<td>Pani Klaudia Węgrzyn</td>
							</tr>
							<tr>
								<th>J. Angielski:</th>
								<td>Pani Katarzyna Gwóźdź</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className={styles.pictureItem1}>
					{/* <img src="/images/kadra/grono.jpg" alt="kadra przedszkola" /> */}
					<p>Pracownicy obsługi:</p>
				</div>
				<div className={styles.table}>
					<table>
						<tbody>
							<tr>
								<td>Krystyna Kubala - księgowa</td>
							</tr>
							<tr>
								<td>Małgorzata Bober - intendent</td>
							</tr>
							<tr>
								<td>Monika Latocha – pomoc do dzieci</td>
							</tr>
							<tr>
								<td>Katarzyna Orzeł Rudnik – pomoc do dzieci</td>
							</tr>
							<tr>
								<td>Bogusława Biga – pomoc szefa kuchni</td>
							</tr>
							<tr>
								<td>Mariola Czekała– pomoc do dzieci</td>
							</tr>
							<tr>
								<td>Joanna Niedźwiedzka – szef kuchni</td>
							</tr>
							<tr>
								<td>Oleksyk Wojciech - konserwator</td>
							</tr>
							<tr>
								<td>Magdalena Pasula - woźna</td>
							</tr>
							<tr>
								<td>Paulina Biedak - woźna</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Cadre);
