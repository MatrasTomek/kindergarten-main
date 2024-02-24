import React from "react";
import styles from "./cadre.module.scss";

const Cadre = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.banner}></div>
			<div className={styles.inside}>
				<h2>Nasza kadra</h2>
				<div className={styles.title}>
					<p>
						<span>ORGAN PROWADZĄCY PRZEDSZKOLE</span>
					</p>
					<p>Parafia Rzymskokatolicka w Mokrzyskach – Proboszcz ks. mgr Stanisław Tokarski</p>
				</div>
				<div className={styles.pictureItem1}>
					<img src="images/kadra/groni_i_prac.jpg" alt="grono ped. i pracownicy" />
					<p>Grono pedagogiczne i pracownicy</p>
				</div>
				<div className={styles.table}>
					<table>
						<tbody>
							<tr>
								<th>Dyrektor Przedszkola</th>
								<td>mgr Ewa Tomana</td>
							</tr>
							<tr>
								<th></th>
								<td>mgr Klaudia Węgrzyn</td>
							</tr>
							<tr>
								<th></th>
								<td>mgr Anna Chmielarz</td>
							</tr>
							<tr>
								<th></th>
								<td>mgr Emilia Niemiec</td>
							</tr>
							<tr>
								<th></th>
								<td>mgr Luiza Biel</td>
							</tr>
							<tr>
								<th></th>
								<td>mgr Paulina Jarosz</td>
							</tr>
							<tr>
								<th>Katecheci</th>
								<td>ks. mgr Stanisław Tokarski</td>
							</tr>
							<tr><th></th>
						<td>mgr Teresa Libera</td></tr>
							<tr>
								<th>J. angielski</th>
								<td>mgr Emilia Niemiec</td>
							</tr>
							<tr>
								<th>Logopeda</th>
								<td>mgr Klaudia Węgrzyn</td>
							</tr>
							<tr>
								<th>Rytmika</th>
								<td>mgr Andrzej Gicala</td>
							</tr>
							<tr>
								<th>Pedagog</th>
								<td>mgr Luiza Biel</td>
							</tr>
							<tr>
								<th>Psycholog</th>
								<td>wakat</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className={styles.pictureItem1}>
					<img src="/images/kadra/grono.jpg" alt="kadra przedszkola" />
					<p>Grono Pedagogiczne</p>
				</div>
				<div className={styles.table}>
					<table>
						<tbody>
							<tr>
								<th>Pomoc do dzieci:</th>
								<td>{""}</td>
							</tr>
							<tr>
								<th>{""}</th>
								<td>P. Monika Latocha </td>
							</tr>
							<tr>
								<th>{""}</th>
								<td>P. Mariola Czekała</td>
							</tr>
							<tr>
								<th>O sprawy finansowe dba</th>
								<td> P. Krystyna Kubala</td>
							</tr>
							<tr>
								<th>Smaczne posiłki przygotowują:</th>
								<td>{""}</td>
							</tr>
							<tr>
								<th>Szef kuchni</th>
								<td>P. Joanna Niedźwiecka</td>
							</tr>
							<tr>
								<th>pomoc w kuchni</th>
								<td>P. Bogumiła Biga</td>
							</tr>
							<tr>
								<th>O piękny ogród dba</th>
								<td>P. Magdalena Pasula</td>
							</tr>
							<tr>
								<th>O czystość i estetykę Przedszkola dba</th>
								<td>{""}</td>
							</tr>
							<tr>
								<th>{""}</th>
								<td>P. Katarzyna Orzeł – Rudnik </td>
							</tr>
							<tr>
								<th>{""}</th>
								<td>P. Paulina Biedak</td>
							</tr>
							<tr>
								<th>Konserwator</th>
								<td>P. lic. Wojciech Oleksyk</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className={styles.pictureItem1}>
					<img src="/images/kadra/prac1.jpg" alt="kadra przedszkola" />
					<p>Pracownicy</p>
				</div>
				<div className={styles.table}>
					<p>
						<span>Zatrudnieni w Publicznym Przedszkolu Parafialnym w Mokrzyskach</span>
					</p>
					<table>
						<tbody>
							<tr>
								<th>
									<span>Ks. Marian Wal</span>
								</th>
								<td>1990 – 2007</td>
							</tr>

							<tr>
								<th>P. Krystyna Biedak</th>
								<td>1990 – 2013</td>
							</tr>
							<tr>
								<th>
									<p>
										<span>S. Stanisława Wojtyczka</span>
									</p>
								</th>
								<td>1990 – 1995</td>
							</tr>
							<tr>
								<th>
									<p>
										<span>S. Teresa Słonina</span>
									</p>
								</th>
								<td> 1990 – 1991</td>
							</tr>
							<tr>
								<th>P. Bogumiła Kośmider</th>
								<td>1990 – 1992, 1994 – 1996</td>
							</tr>
							<tr>
								<th>p. Krystyna Kubala</th>
								<td>1990 –</td>
							</tr>
							<tr>
								<th>P. Bogumiła Cyran</th>
								<td>1990 – 2007</td>
							</tr>
							<tr>
								<th>P. Krystyna Lechowicz</th>
								<td>1990 – 1993</td>
							</tr>
							<tr>
								<th>P. Anna Borowiec</th>
								<td>1990 – 1991</td>
							</tr>
							<tr>
								<th>P. Halina Palej</th>
								<td>1990 – 2016</td>
							</tr>
							<tr>
								<th>P. Norbert Kubiczek</th>
								<td>1990 – 1991</td>
							</tr>
							<tr>
								<th>
									<p>
										<span>S. Małgorzata Kapłon</span>
									</p>
								</th>
								<td>1991 – 1994</td>
							</tr>
							<tr>
								<th>P. Marta Godzik</th>
								<td>1991 – 1992</td>
							</tr>
							<tr>
								<th>P. Ewa Tomana</th>
								<td>1992 -</td>
							</tr>
							<tr>
								<th>P. Grażyna Szylar- Toboła</th>
								<td> 1992 – 1994</td>
							</tr>
							<tr>
								<th>P. Cecylia Ręczak</th>
								<td>1992 – 2006</td>
							</tr>
							<tr>
								<th>P. Agata Strojny</th>
								<td>1992 – 1993</td>
							</tr>
							<tr>
								<th>P. Teresa Zachara</th>
								<td> 1992 – 1993</td>
							</tr>
							<tr>
								<th>
									<p>
										<span>S. Stanisława Szczerba</span>
									</p>
								</th>
								<td>1994 – 1995</td>
							</tr>
							<tr>
								<th>
									<p>
										<span>S. Danuta Gromada</span>
									</p>
								</th>
								<td>1995 – 1996</td>
							</tr>
							<tr>
								<th>P. Maria Turlej</th>
								<td> 1995 – 2023</td>
							</tr>
							<tr>
								<th>P. Cecylia Kuciel</th>
								<td>1995 – 2015</td>
							</tr>
							<tr>
								<th>
									<p>
										<span>S. Agata Szczygielska</span>
									</p>
								</th>
								<td>1997- 2001</td>
							</tr>
							<tr>
								<th>P. Agata Jabłońska</th>
								<td> 1997 – 1999</td>
							</tr>
							<tr>
								<th>P. Jolanta Król</th>
								<td>1997 – 1998</td>
							</tr>
							<tr>
								<th>
									<p>
										<span>S. Renata Szeląg</span>
									</p>
								</th>
								<td> 2001 – 2007</td>
							</tr>
							<tr>
								<th>P. Józefa Sury</th>
								<td> 2003 – 2004</td>
							</tr>
							<tr>
								<th>P. Beata Wolny</th>
								<td>2006 - 2022</td>
							</tr>
							<tr>
								<th>
									<span>Ks. Jan Panek</span>
								</th>
								<td>2007 – 2021</td>
							</tr>
							<tr>
								<th>
									<p>
										<span>S. Maria Kiłyk</span>
									</p>
								</th>
								<td>2007 – 2008</td>
							</tr>
							<tr>
								<th>P. Joanna Niedojadło</th>
								<td> 2007 – 2008</td>
							</tr>
							<tr>
								<th>P. Anna Palej</th>
								<td>2007 – 2009</td>
							</tr>
							<tr>
								<th>
									<p>
										<span>S. Agnieszka Boratyn</span>
									</p>
								</th>
								<td>2008 – 2009</td>
							</tr>
							<tr>
								<th>P. Bogusława Biga</th>
								<td>2008 -</td>
							</tr>
							<tr>
								<th>P. Natalia Nabożny</th>
								<td>2009 -</td>
							</tr>
							<tr>
								<th>P. Krystyna Chmielarz</th>
								<td>2010 - 2022</td>
							</tr>
							<tr>
								<th>P. Katarzyna Mazur</th>
								<td>2011 – 2012</td>
							</tr>
							<tr>
								<th>P. Joanna Niedźwiecka</th>
								<td>2011 -</td>
							</tr>
							<tr>
								<th>P. Magdalena Pasula</th>
								<td>2011 -</td>
							</tr>
							<tr>
								<th>P. Justyna Fitrzyk</th>
								<td>2012 -</td>
							</tr>
							<tr>
								<th>P. Dorota Kazek</th>
								<td>2012 – 2018</td>
							</tr>
							<tr>
								<th>P. Monika Latocha</th>
								<td>2014 -</td>
							</tr>
							<tr>
								<th>P. Klaudia Węgrzyn</th>
								<td>2015 -</td>
							</tr>
							<tr>
								<th>P. Mariola Czekała</th>
								<td>2016 -</td>
							</tr>
							<tr>
								<th>P. Joanna Pasula</th>
								<td>2017 – 2019</td>
							</tr>
							<tr>
								<th>P. Katarzyna Orzeł- Rudnik</th>
								<td>2019 -</td>
							</tr>
							<tr>
								<th>P. Katarzyna Derela- Gawenda</th>
								<td>2019 – 2021</td>
							</tr>
							<tr>
								<th>P. Andrzej Gicala</th>
								<td>2019 -</td>
							</tr>
							<tr>
								<th>P. Anna Chmielarz</th>
								<td>2019 -</td>
							</tr>
							<tr>
								<th>P. Paulina Biedak</th>
								<td>2020 -</td>
							</tr>
							<tr>
								<th>Ks. Stanisław Tokarski</th>
								<td>2022 - </td>
							</tr>
							<tr>
								<th>P. Luiza Biel</th>
								<td>2022 - </td>
							</tr>
							<tr>
								<th>P. Joanna Kazek</th>
								<td>2022 - 2023</td>
							</tr>
							<tr>
								<th>P. Emilia Niemiec</th>
								<td>2022 - </td>
							</tr>
							<tr>
								<th>P. Beata Gicala</th>
								<td>2022 - 2022</td>
							</tr>
							<tr>
								<th>P. Zuzanna Magiera</th>
								<td>01.09.2022 - 30.11.2022</td>
							</tr>
							<tr>
								<th>P. Gabriela Magiera-Kania</th>
								<td>01.12.2022 – 30.06.2023</td>
							</tr>
							<tr>
								<th>P. Teresa Libera</th>
								<td>2023 - </td>
							</tr>
							<tr>
								<th>P. Jarosz Paulina</th>
								<td>2023 - </td>
							</tr>
							<tr>
								<th>P. Oleksyk Wojciech </th>
								<td>2023 - </td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className={styles.table}>
					<p>
						<span>Dyrektorzy</span>
					</p>
					<table>
						<tbody>
							<tr>
								<th>P. Krystyna Biedak</th>
								<td>1990 – 1991</td>
							</tr>
							<tr></tr>
							<tr>
								<th>S. Małgorzata Kapłon</th>
								<td>1991 – 1994</td>
							</tr>
							<tr>
								<th>S. Stanisława Szczerba</th>
								<td>1994 – 1995</td>
							</tr>
							<tr>
								<th>P. Ewa Tomana</th>
								<td>1995 –</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Cadre);
