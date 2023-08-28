import React from 'react';

interface HomeContainerProps {
	children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeContainerProps) => {
	return <section>{children}</section>;
};

export default HomeLayout;
