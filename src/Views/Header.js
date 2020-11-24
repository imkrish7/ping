import React from 'react';
import styles from '../styles/header.module.scss'
export function Header(){

	return<header className={styles.header}>
		<div className={styles.logo}>
			Ping
		</div>
		<div className={styles.title}>
				<h2 className={styles.title_text}>
					Ping Images
				</h2>
		</div>
	</header>
}