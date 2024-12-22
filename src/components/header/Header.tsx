import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className='wrapper'>
				<div className={styles.header__wrapper}>
					<h4 className={styles.header__logo}>Git & GitHub Practice</h4>
					<div className={styles.header__actions}>
						<nav className={styles.actions__nav}>
							<ul className={styles.nav__list}>
								<li className={styles.nav__item}>
									<Link href='/' className={styles.nav__link}>
										Home
									</Link>
								</li>
								<li className={styles.nav__item}>
									<Link href='/services' className={styles.nav__link}>
										Our Services
									</Link>
								</li>
								<li className={styles.nav__item}>
									<Link href='/admin' className={styles.nav__link}>
										Admin Panel
									</Link>
								</li>
							</ul>
						</nav>
						<button className={styles.actions__button}>Contact Us</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
