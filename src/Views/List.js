import styles from '../styles/list.module.scss'
export function List({ imageList }){

	return <ul className={styles.list}>
			{
				imageList.map(image=>{
					return <li key={image.id} className={styles.list_item}>
						<img className={styles.img} src={image.download_url} />
					</li>
				})
			}
	</ul>
}