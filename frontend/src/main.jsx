import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import ShopHome from './platforms/shop/pages/Home/ShopHome';
import ValidatorHome from './platforms/validator/pages/Home/ValidatorHome';
import CraftHome from './platforms/craft/pages/Home/CraftHome';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/shop',
		element: <ShopHome />,
		children: [{ path: '', element: '' }],
	},
	{
		path: '/craft',
		element: <CraftHome />,
		children: [{ path: '', element: '' }],
	},
	{
		path: '/validator',
		element: <ValidatorHome />,
		children: [{ path: '', element: '' }],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
