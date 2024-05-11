import React from 'react';
import ReactLoading from 'react-loading';

const Loader = ({ type, color }) => (
	<ReactLoading type={type} color={color} height={'1%'} width={'1%'} />
);

export default Loader;