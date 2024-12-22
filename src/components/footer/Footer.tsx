import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className='wrapper'>
				<div className={styles.footer__wrapper}>
					<nav className={styles.footer__nav}>
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
				</div>
			</div>
		</div>
	);
};

export default Footer;
