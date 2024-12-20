import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<h4>Git & GitHub Practice</h4>
			<nav className={styles.header__nav}>
				<ul className={styles.nav__list}>
					<li className={styles.nav__item}>
						<Link href='/' className={styles.nav__link} />
					</li>
					<li className={styles.nav__item}>
						<Link href='/services' className={styles.nav__link} />
					</li>
					<li className={styles.nav__item}>
						<Link href='/admin' className={styles.nav__link} />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;