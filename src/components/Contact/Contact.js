import React, { useState } from "react";
import { Button, Maps } from "../../components";
import { CONTACT } from "../../content";
import styles from "./contact.module.scss";

const FORM_SEND = process.env.REACT_APP_FORM_ACTION;

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
			const form = e.target;
			const data = new FormData(form);
			const xhr = new XMLHttpRequest();
			xhr.open(form.method, form.action);
			xhr.setRequestHeader("Accept", "application/json");
			setName("");
			setMail("");
			setTitle("");
			setContent("");
			setRodo(false);
			xhr.onreadystatechange = () => {
				if (xhr.readyState !== XMLHttpRequest.DONE) return;
				if (xhr.status === 200) {
					form.reset();
					seErrorInfo("Twój mail został wysłany");
				} else {
					seErrorInfo("Przepraszamy błąd po stronie serwera - spróbuj jeszcze raz.");
				}
			};
			xhr.send(data);
		}

		setTimeout(() => {
			seErrorInfo("");
		}, [3500]);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.banner}></div>
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
					<form onSubmit={handleOnSubmit} action={`${FORM_SEND}`} method="POST">
						<div>
							<span>Imię i nazwisko (wymagane)</span>
							<input type="text" name="Imie_i_Nazwisko:" value={name} onChange={handleChangeOnName} />
						</div>

						<div>
							<span>Adres email (wymagane)</span>
							<input type="text" name="Adres_eMail:" value={mail} onChange={handleChangeOnMail} />
						</div>
						<div>
							<span>Temat</span>
							<input type="text" name="Temat:" value={title} onChange={handleChangeOnTitle} />
						</div>
						<div>
							<span>Treść wiadomości</span>
							<textarea
								name="Tresc_wiadomosci:"
								value={content}
								onChange={handleChangeOnContent}
								rows="10"
							/>
						</div>
						<div className={styles.checkbox}>
							<label htmlFor="checkedRodo">
								<input
									className={styles.input}
									type="checkbox"
									name="Rodo_potwierdzone:"
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
