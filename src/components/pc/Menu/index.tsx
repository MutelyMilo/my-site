'use client';
import { useTransition, animated } from '@react-spring/web';
import styles from './style.module.scss';
import { useCallback, useState } from 'react';

const Menu = () => {
	const [open, setOpen] = useState(false);
	const handleMenuOpen = useCallback(() => {
		setOpen(!open);
	}, [open]);
	const transition = useTransition(open, {
		from: {
			scale: 0,
			opacity: 0,
		},
		enter: {
			scale: 1,
			opacity: 1,
		},
		leave: {
			scale: 0,
			opacity: 0,
		},
	});
	return (
		<div className={styles.menuContainer}>
			<div
				onClick={handleMenuOpen}
				className={`${styles.menuButtonContainer} ${open && styles.act}`}
			>
				<div className={styles.menuButton}></div>
			</div>
			{transition((style, isOpen) => (
				<>
					{isOpen ? (
						<animated.ul style={style}>
							<li>1</li>
							<li>2</li>
							<li>3</li>
							<li>4</li>
							<li>5</li>
						</animated.ul>
					) : null}
				</>
			))}
		</div>
	);
};

export default Menu;
