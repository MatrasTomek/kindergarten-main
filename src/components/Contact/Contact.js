import React, { useState } from "react";
import { Button, Maps } from "../../components";
import { CONTACT } from "../../content";
import styles from "./contact.module.scss";

const Contact = () => {
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [rodo, setRodo] = useState(false);
	const [errorInfo, seErrorInfo] = useState("");

	const handleChangeOnName = (e) => {
		setName(e.target.value);
	};
	const handleChangeOnMail = (e) => {
		setMail(e.target.value);
	};
	const handleChangeOnTitle = (e) => {
		setTitle(e.target.value);
	};
	const handleChangeOnContent = (e) => {
		setContent(e.target.value);
	};
	const handleOnChangeRodo = () => {
		setRodo(true);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();

		if (name === "" || mail === "" || !rodo) {
			seErrorInfo("Wymagane pola muszą być wypełnione");
			setTimeout(() => {
				seErrorInfo("");
			}, [3500]);

			return;
		} else {
			const mailData = {
				name,
				mail,
				title,
				content,
				rodo,
			};

			setName("");
			setMail("");
			setTitle("");
			setContent("");
			setRodo(false);
		}
		seErrorInfo("Twój mail został wysłany");
		setTimeout(() => {
			seErrorInfo("");
		}, [3500]);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.banner}>
				<img src="images/hist/banner.jpg" alt="widok przedszkola front" />
			</div>
			<div className={styles.inside}>
				<h2>Kontakt</h2>
				<p>{CONTACT.name}</p>
				<p>{CONTACT.adress}</p>
				<p>Telefon: {CONTACT.phone}</p>
				<p>Mail: {CONTACT.mail}</p>
				<div className={styles.maps}>
					<Maps />
				</div>
				<div className={styles.form}>
					<form onSubmit={handleOnSubmit}>
						<div>
							<span>Imię i nazwisko (wymagane)</span>
							<input type="text" value={name} onChange={handleChangeOnName} />
						</div>

						<div>
							<span>Adres email (wymagane)</span>
							<input type="text" value={mail} onChange={handleChangeOnMail} />
						</div>
						<div>
							<span>Temat</span>
							<input type="text" value={title} onChange={handleChangeOnTitle} />
						</div>
						<div>
							<span>Treść wiadomości</span>
							<textarea value={content} onChange={handleChangeOnContent} rows="10" />
						</div>
						<div className={styles.checkbox}>
							<label htmlFor="checkedRodo">
								<input
									className={styles.input}
									type="checkbox"
									// checked={rodo}
									value={rodo}
									onChange={handleOnChangeRodo}
									id="checkedRodo"
								/>
								<span>
									Zapoznałem się z polityką <a href="/">RODO</a> i wyrażam zgodę na przetwarzanie
									danych
								</span>
							</label>
						</div>
						<Button type="submit" name="wyślij" />
					</form>
					<div className={styles.errorInfo}>{errorInfo}</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Contact);
