import styles from './index.module.scss';

const HomeHeader = () => {
	return (
		<div className={styles.homeHeaderContainer}>
			<div className={styles.homeHeaderContainerTip}>tip</div>
			<ul className={styles.homeHeaderContainerTopBar}>
				<li>Home</li>
				<li>about me</li>
				<li>3</li>
				<li>4</li>
				<li>5</li>
			</ul>
		</div>
	);
};

export default HomeHeader;
