import styles from './page.module.scss';
import Menu from '../components/pc/Menu';

const Page = () => {
	return (
		<div className={styles.homeContainer}>
			<Menu />
			<p className={styles.homeContainerTitle}>Poplar&apos;s Blog</p>
		</div>
	);
};

export default Page;
