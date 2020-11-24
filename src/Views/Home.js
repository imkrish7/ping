
import styles from '../styles/home.module.scss'
export function Home({ img }){
	return <div className={styles.container}>
		<img className={styles.img} src={img.download_url}></img>
	</div>
}