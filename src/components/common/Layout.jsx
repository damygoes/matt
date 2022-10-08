import React from "react";

const Layout = (props) => {
	return (
		<div className="py-32 px-4 sm:px-16 md:px-32 lg:py-0 border-none">
			{props.children}
		</div>
	);
};

export default Layout;
