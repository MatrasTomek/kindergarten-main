import React from "react";
import styles from "./patroness.module.scss";

const Patroness = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.banner}></div>
			<div className={styles.inside}>
				<h2>O Naszej patronce</h2>
				<p>
					<span>Błogosławiona Karolina Kózkówna</span>
				</p>
				<div className={styles.pictureItemFloat}>
					<img src="images/patronka/patr1.jpg" alt="rysunek bł. Karoliny na tle przedszkola" />
				</div>
				<p>
					Urodziła się w podtarnowskiej wsi Wał-Ruda 2 sierpnia 1898 r. jako czwarte z jedenaściorga dzieci.
					Pięć dni później otrzymała chrzest w kościele parafialnym w Radłowie. Jej rodzice posiadali
					niewielkie gospodarstwo. Pracowała z nimi na roli. Wzrastała w atmosferze żywej i autentycznej
					wiary, która wyrażała się we wspólnej rodzinnej modlitwie wieczorem i przy posiłkach, w codziennym
					śpiewaniu Godzinek, częstym przystępowaniu do sakramentów i uczestniczeniu we Mszy także w dzień
					powszedni. Ich uboga chata była nazywana „kościółkiem”. Krewni i sąsiedzi gromadzili się tam często
					na wspólne czytanie Pisma świętego, żywotów świętych i religijnych czasopism.{" "}
				</p>

				<p>
					Wielkim Poście śpiewano tam Gorzkie Żale, a w okresie Bożego Narodzenia – kolędy. Od najmłodszych
					lat ukochała modlitwę i starała się wzrastać w miłości Bożej. Nie rozstawała się z otrzymanym od
					matki różańcem – modliła się nie tylko w ciągu dnia, ale i w nocy. We wszystkim była posłuszna
					rodzicom, z miłością i troską opiekowała się licznym młodszym rodzeństwem. W 1906 roku rozpoczęła
					naukę w ludowej szkole podstawowej, którą ukończyła w 1912 roku. Potem uczęszczała jeszcze na tzw.
					naukę dopełniającą trzy razy w tygodniu. Uczyła się chętnie i bardzo dobrze, z religii otrzymywała
					zawsze wzorowe oceny, była pracowita i obowiązkowa.
				</p>
				<p>
					Duży wpływ na duchowy rozwój Karoliny miał jej wuj, Franciszek Borzęcki, bardzo religijny i
					zaangażowany w działalność apostolską i społeczną. Karolina pomagała mu w prowadzeniu świetlicy i
					biblioteki, do której przychodziły często osoby dorosłe i młodzież. Prowadzono tam kształcące
					rozmowy, śpiewano pieśni religijne i patriotyczne, deklamowano utwory wieszczów.
				</p>
				<p>
					Karolina była urodzoną katechetką. Nie poprzestawała na tym, że poznała jakąś prawdę wiary lub
					usłyszała ważne słowo; zawsze spieszyła, by przekazać je innym. Katechizowała swoje rodzeństwo i
					okoliczne dzieci, śpiewała z nimi pieśni religijne, odmawiała różaniec i zachęcała do życia wg
					Bożych przykazań. Wrażliwa na potrzeby bliźnich, chętnie zajmowała się chorymi i starszymi.
					Odwiedzała ich, oddając im różne posługi i czytając pisma religijne. Przygotowywała w razie potrzeby
					na przyjęcie Wiatyku ( Komunii świętej).
				</p>
				<p>
					Zginęła w wieku zaledwie 17 lat, na początku I wojny światowej, 18 listopada 1914 roku. Carski
					żołnierz uprowadził ją przemocą i bestialsko zamordował, gdy broniła się pragnąc zachować
					dziewictwo. Po kilku dniach, 4 grudnia 1914 r., w pobliskim lesie znaleziono jej zmasakrowane
					zwłoki. Tragedia jej śmierci nie miała ludzkich świadków. Pogrzeb Karoliny był wielką manifestacją
					okolicznej ludności, która z wielkim przekonaniem mówiła, że uczestniczy w pogrzebie męczennicy.
					Pochowano ją w parafialnym kościele we wsi Zabawa. W 1987 r. Papież Jan Paweł II w Tarnowie
					beatyfikował Karolinę. Stała się patronką Ruchu Czystych Serc. Jest patronką diecezji rzeszowskiej,
					a także Katolickiego Stowarzyszenia Młodzieży oraz od 1.10.1990 roku Patronką Naszego Publicznego
					Przedszkola Parafialnego w Mokrzyskach.
				</p>
				<div className={styles.picturesItemsMany}>
					<img src="images/patronka/patr2.jpg" alt="przedszkolaki w domu bł Karoliny" />
					<img src="images/patronka/patr3.jpg" alt="przedszkolaki w domu bł Karoliny" />
					<img src="images/patronka/patr5.jpg" alt="przedszkolaki w domu bł Karoliny" />
					<img src="images/patronka/patr6.jpg" alt="przedszkolaki w domu bł Karoliny" />
					<img src="images/patronka/patr7.jpg" alt="przedszkolaki w domu bł Karoliny" />
					<img src="images/patronka/patr8.jpg" alt="przedszkolaki w domu bł Karoliny" />
					<img src="images/patronka/patr9.jpg" alt="przedszkolaki w domu bł Karoliny" />
				</div>
			</div>
		</div>
	);
};

export default React.memo(Patroness);
