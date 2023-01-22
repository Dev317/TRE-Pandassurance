import React from 'react';
import { UserOutlined, InboxOutlined } from '@ant-design/icons';
import { Menu, Layout, Typography, Input, Avatar, theme } from 'antd';

const { Header } = Layout;
const { Title } = Typography;
const { Search } = Input;

const onSearch = (value) => console.log(value);

const items = [
	{ key: 'guide', label: 'Help guides' },
	{ key: 'inbox', label: 'Inbox' },
	{
		key: 'Avatar',
		icon: (
			<Avatar
				size="medium"
				style={{ justifyContent: 'space-around' }}
				icon={<UserOutlined />}
			/>
		),
	},
];

function Navbar() {
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<Header
			style={{
				backgroundColor: colorBgContainer,
				position: 'sticky',
				top: 0,
				zIndex: 1,
				width: '100%',
				display: 'flex',
			}}
		>
			<div
				style={{
					float: 'left',
					height: 31,
					margin: '16px 24px 16px 0',
					background: colorBgContainer,
					flex: 1,
				}}
			>
				<Search
					placeholder="Search"
					allowClear
					onSearch={onSearch}
					style={{
						width: '100%',
					}}
				/>
			</div>
			<Menu
				theme="light"
				mode="horizontal"
				style={{
					justifyContent: 'right',
					flex: 1,
				}}
				items={items}
			></Menu>
		</Header>
	);
}

export default Navbar;
