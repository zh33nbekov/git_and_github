import React from 'react';
import Header from '../header/Header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};

export default MainLayout;
