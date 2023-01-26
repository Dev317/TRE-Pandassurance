import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from './App';
import ShopHome from './platforms/shop/pages/ShopHome';
import ValidatorHome from './platforms/validator/pages/ValidatorHome';
import CraftHome from './platforms/craft/pages/CraftHome';
import CraftDashboard from './platforms/craft/pages/CraftDashboard';
import CraftPolicyManagement from './platforms/craft/pages/CraftPolicyManagement';
import CraftDocuments from './platforms/craft/pages/CraftDocuments';
import CraftSettings from './platforms/craft/pages/CraftSettings';
import CraftLogin from './platforms/craft/pages/CraftLogin';
import CraftNewPolicy from './platforms/craft/pages/Policy/CraftNewPolicy';

export const router = createBrowserRouter([
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
			// { path: 'documents', element: <CraftDocuments /> },
			// { path: 'settings', element: <CraftSettings /> },
			{ path: 'newpolicy', element: <CraftNewPolicy /> },
			{
				path: '',
				element: (
					<Navigate
						to="/craft/login"
						replace
					/>
				),
			},
		],
	},
	{
		path: '/craft/login',
		element: <CraftLogin />,
	},
	{
		path: '/validator',
		element: <ValidatorHome />,
		children: [{ path: '', element: '' }],
	},
]);
