'use client';

import styles from './style.module.scss';
import { useCallback, useState } from 'react';

const MenuButton = () => {
	const [open, setOpen] = useState(false);
	const handleMenuOpen = useCallback(() => {
		setOpen(!open);
	}, [open]);
	return (
		<div
			onClick={handleMenuOpen}
			className={`${styles.menuButtonContainer} ${open && styles.act}`}
		>
			<div className={styles.menuButton}></div>
		</div>
	);
};

export default MenuButton;
