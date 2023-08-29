'use client';

import styles from './page.module.scss';
import Menu from '../components/pc/Menu';
import { Dock } from '@/components/pc/Dock';
import { DockCard } from '@/components/pc/DockCard';
import { Card } from '@/components/pc/Card';
import { DockDivider } from '@/components/pc/DockDivder';

const GRADIENTS = [
	'https://products.ls.graphics/mesh-gradients/images/03.-Snowy-Mint_1-p-130x130q80.jpeg',
	'https://products.ls.graphics/mesh-gradients/images/04.-Hopbush_1-p-130x130q80.jpeg',
	'https://products.ls.graphics/mesh-gradients/images/06.-Wisteria-p-130x130q80.jpeg',
	'https://products.ls.graphics/mesh-gradients/images/09.-Light-Sky-Blue-p-130x130q80.jpeg',
	'https://products.ls.graphics/mesh-gradients/images/12.-Tumbleweed-p-130x130q80.jpeg',
	'https://products.ls.graphics/mesh-gradients/images/15.-Perfume_1-p-130x130q80.jpeg',
	null,
	'https://products.ls.graphics/mesh-gradients/images/36.-Pale-Chestnut-p-130x130q80.jpeg',
];

const Page = () => {
	return (
		<div className={styles.homeContainer}>
			<Menu />
			<p className={styles.homeContainerTitle}>Poplar&apos;s Blog</p>
			<Dock>
				{GRADIENTS.map((src, index) =>
					src ? (
						<DockCard key={src}>
							<Card src={src} />
						</DockCard>
					) : (
						<DockDivider key={index} />
					),
				)}
			</Dock>
		</div>
	);
};

export default Page;
