import styles from './page.module.scss';
import MenuButton from '@/components/pc/MenuButton';

const Page = () => {
	return (
		<div className={styles.homeContainer}>
			<MenuButton />
			<p className={styles.homeContainerTitle}>Poplar&apos;s Blog</p>
		</div>
	);
};

export default Page;
