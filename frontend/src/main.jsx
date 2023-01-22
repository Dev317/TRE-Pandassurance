import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/index.css';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
	BrowserRouter,
	Navigate,
} from 'react-router-dom';
import ShopHome from './platforms/shop/pages/Home/ShopHome';
import ValidatorHome from './platforms/validator/pages/Home/ValidatorHome';
import CraftHome from './platforms/craft/pages/CraftHome';
import CraftDashboard from './platforms/craft/pages/CraftDashboard';
import CraftPolicyManagement from './platforms/craft/pages/CraftPolicyManagement';
import CraftDocuments from './platforms/craft/pages/CraftDocuments';
import CraftSettings from './platforms/craft/pages/CraftSettings';

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
		children: [
			{ path: 'dashboard', element: <CraftDashboard /> },
			{ path: 'policymanagement', element: <CraftPolicyManagement /> },
			{ path: 'documents', element: <CraftDocuments /> },
			{ path: 'settings', element: <CraftSettings /> },
			{
				path: '',
				element: (
					<Navigate
						to="dashboard"
						replace
					/>
				),
			},
		],
	},
	{
		path: '/validator',
		element: <ValidatorHome />,
		children: [{ path: '', element: '' }],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
