import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal } from "../../components";
import styles from "./successPicViev.module.scss";

const SuccesPicViev = () => {
	const picItem = useSelector((store) => store.picItem);

	const { date, title, content1, signature, imagePath, imgFolderLength } = !picItem.length ? [] : picItem[0];

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [itemId, setItemId] = useState(false);

	const itemsElements = [];

	for (let i = 1; i < imgFolderLength + 1; i++) {
		const picItem = {
			id: i,
			path: `${imagePath}/${i}.jpg`,
		};
		itemsElements.push(picItem);
	}

	const handleOpenBigPic = (e) => {
		setIsModalOpen(true);
		setItemId(Number(e.target.id));
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setItemId(false);
	};

	const picturesViev = itemsElements.map((item) => (
		<img src={item.path} key={item.id} id={item.id} alt={`zdjęcie nr: ${item.id}`} onClick={handleOpenBigPic} />
	));

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.banner}></div>
				<div className={styles.inside}>
					{!picItem.length ? (
						<p className={styles.errInfo}>Przejdź na "Nasze sukcesy" i wybierz element</p>
					) : (
						<>
							<h2>{title}</h2>
							<p>{content1}</p>
							<div className={styles.info}>
								<p>data: {date}</p>
								<p>
									<span>{signature}</span>
								</p>
							</div>
							<div className={styles.picturesViev}>{picturesViev}</div>
						</>
					)}
				</div>
			</div>
			<Modal isModalOpen={isModalOpen}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 0 24 24"
					width="24px"
					fill="#000000"
					onClick={handleCloseModal}
				>
					<path d="M0 0h24v24H0z" fill="none" />
					<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
				</svg>

				<img src={`${imagePath}/${itemId}.jpg`} alt="" />
			</Modal>
		</>
	);
};

export default React.memo(SuccesPicViev);
