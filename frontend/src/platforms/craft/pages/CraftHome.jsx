import {
	PoweroffOutlined,
	PieChartOutlined,
	FileOutlined,
	DesktopOutlined,
	SettingOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { Layout, Space, Menu, theme, Breadcrumb } from 'antd';
import { Route, Routes, useNavigate, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Dashboard from './CraftDashboard';
import PolicyManagement from './CraftPolicyManagement';
import Documents from './CraftDocuments';
import Settings from './CraftSettings';
const { Header, Footer, Sider, Content } = Layout;

const items = [
	{ label: 'Dashboard', key: '/craft/dashboard', icon: <PieChartOutlined /> },
	{ label: 'Policy management', key: '/craft/policymanagement', icon: <DesktopOutlined /> },
	{ label: 'Documents', key: '/craft/documents', icon: <FileOutlined /> },
	{ label: 'Settings', key: '/craft/settings', icon: <SettingOutlined /> },
	{ label: 'Signout', key: '/craft/login', icon: <PoweroffOutlined />, danger: true },
];

const CraftHome = () => {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	const navigate = useNavigate();
	return (
		<Space
			direction="vertical"
			style={{
				width: '100%',
				minHeight: '100vh',
			}}
			size={[0, 48]}
		>
			<Layout
				style={{
					minHeight: '100vh',
				}}
			>
				<Sider
					collapsible
					collapsed={collapsed}
					onCollapse={(value) => setCollapsed(value)}
				>
					<div
						style={{
							height: 32,
							margin: 16,
							background: 'rgba(255, 255, 255, 0.2)',
						}}
					/>
					<Menu
						theme="dark"
						defaultSelectedKeys={['/craft/dashboard']}
						mode="inline"
						items={items}
						onClick={({ key }) => {
							navigate(key);
							console.log(key);
						}}
					/>
				</Sider>
				<Layout className="site-layout">
					<Navbar />
					<Content
						style={{
							margin: '2em',
						}}
					>
						<Outlet />
					</Content>
				</Layout>
			</Layout>
		</Space>
	);
};

export default CraftHome;
