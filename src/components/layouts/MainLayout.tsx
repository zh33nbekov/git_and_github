import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default MainLayout;
