import {
	FileOutlined,
	PieChartOutlined,
	UserOutlined,
	DesktopOutlined,
	TeamOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { Layout, Space, Menu, theme, Breadcrumb } from 'antd';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;

function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label,
	};
}
const items = [
	getItem('Dashboard', '/craft/dashboard', <PieChartOutlined />),
	getItem('Policy management', '/craft/policymanagement', <DesktopOutlined />),
	getItem('Documents', '/craft/documents', <UserOutlined />),
	getItem('Settings', '/craft/settings', <TeamOutlined />),
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
						defaultSelectedKeys={['1']}
						mode="inline"
						items={items}
						onClick={({ key }) => {
							navigate(key);
						}}
					/>
				</Sider>
				<Layout className="site-layout">
					<Header
						style={{
							padding: 0,
							background: colorBgContainer,
						}}
					/>
					<Content
						style={{
							margin: '0 16px',
						}}
					>
						<Breadcrumb
							style={{
								margin: '16px 0',
							}}
						>
							<Breadcrumb.Item>User</Breadcrumb.Item>
							<Breadcrumb.Item>Bill</Breadcrumb.Item>
						</Breadcrumb>
						<MainContent />
					</Content>
					<Footer
						style={{
							textAlign: 'center',
						}}
					>
						Ant Design ©2023 Created by Ant UED
					</Footer>
				</Layout>
			</Layout>
		</Space>
	);
};

function MainContent() {
	return (
		<div>
			<Routes>
				<Route
					path="/craft"
					element={<div>Home</div>}
				></Route>
				<Route
					path="/craft/dashboard"
					element={<div>Dashboard</div>}
				></Route>
				<Route
					path="/craft/policymanagement"
					element={<div>Policy management</div>}
				></Route>
				<Route
					path="/craft/documents"
					element={<div>Documents</div>}
				></Route>
				<Route
					path="/craft/settings"
					element={<div>Settings</div>}
				></Route>
			</Routes>
		</div>
	);
}

export default CraftHome;
