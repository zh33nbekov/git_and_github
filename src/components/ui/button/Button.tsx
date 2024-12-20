import React from 'react';

interface IBtnProps {
	children: React.ReactNode;
}
const Button: React.FC<IBtnProps> = ({ children }) => {
	return <button>{children}</button>;
};

export default Button;
