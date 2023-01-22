import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById('root')).render(
	<ConfigProvider
		theme={{
			token: {
				fontFamily: 'Raleway, Inter, Avenir, Helvetica, Arial, sans-serif',
			},
		}}
	>
		<RouterProvider router={router} />
	</ConfigProvider>
);
