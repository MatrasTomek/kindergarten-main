import React from 'react';
import styles from './cadre.module.scss';

const Cadre = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.banner}></div>
			<div className={styles.inside}>
				<h2>Nasza kadra</h2>
				<div className={styles.title}>
					<p>
						Organ prowadzący przedszkole: Parafia Najświętszego Serca Jezusowego w Mokrzyskach osoba reprezentująca{' '}
						<span>ks Tomasz Szewczyk</span>
					</p>
				</div>
				<div className={styles.table}>
					<table>
						<tbody>
							<tr>
								<th>Dyrektor Przedszkola:</th>
								<td>Katarzyna Brożek</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className={styles.pictureItem1}>
					{/* <img src="/images/kadra/grono.jpg" alt="kadra przedszkola" /> */}
					<p>NAUCZYCIELE PRACUJĄCY W PRZEDSZKOLU:</p>
				</div>
				<div className={styles.table}>
					<table>
						<tbody>
							<tr>
								<th>Grupa Tygryski:</th>
								<td>Pani Klaudia</td>
							</tr>
							<tr>
								<th>Grupa Kangurki:</th>
								<td>Pani Anna</td>
							</tr>
							<tr>
								<th>Grupa Pingwinki:</th>
								<td>Pani Luiza i Pani Monika</td>
							</tr>
							<tr>
								<th>Grupa Ananaski:</th>
								<td>Pani Angelika</td>
							</tr>
							<tr>
								<th>Grupa Ananaski i Tygryski:</th>
								<td>Pani Ewa</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className={styles.pictureItem1}>
					{/* <img src="/images/kadra/grono.jpg" alt="kadra przedszkola" /> */}
					<p>PRZEDSZKOLE ZATRUDNIA SPECJALISTÓW:</p>
				</div>
				<div className={styles.table}>
					<table>
						<tbody>
							<tr>
								<th>J. Angielski:</th>
								<td>Pani Kasia</td>
							</tr>
							<tr>
								<th>Psycholog:</th>
								<td>Pani Weronika</td>
							</tr>
							<tr>
								<th>Logopeda:</th>
								<td>Pani Joasia</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Cadre);
