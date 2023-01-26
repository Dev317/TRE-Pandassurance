import React from 'react';
import { Typography, Space, Table, Tag } from 'antd';

const { Title } = Typography;

const columns = [
	{
		title: '#',
		dataIndex: 'id',
		key: 'id',
		sorter: (a, b) => a.id - b.id,
	},
	{
		title: 'Serial-code',
		dataIndex: 'serialcode',
		key: 'serialcode',
		sorter: (a, b) => a.id - b.id,
	},
	{
		title: 'Policy',
		dataIndex: 'policy',
		key: 'policy',
		sorter: (a, b) => a.policy.localeCompare(b.policy),
	},
	{
		title: 'Quantity',
		dataIndex: 'quantity',
		key: 'quantity',
	},
	{
		title: 'Category',
		key: 'category',
		dataIndex: 'category',
		render: (_, { category }) => (
			<>
				{category.map((category) => {
					let color = category === 'medical' ? 'green' : 'geekblue';
					return (
						<Tag
							color={color}
							key={category}
						>
							{category.toUpperCase()}
						</Tag>
					);
				})}
			</>
		),
		sorter: (a, b) => a.category[0].localeCompare(b.category[0]),
	},
	{
		title: 'Insured by',
		dataIndex: 'insurer',
		key: 'insurer',
	},
	{
		title: 'Action',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<a>View</a>
				<a>Edit</a>
				<a>Delete</a>
			</Space>
		),
	},
];
const data = [
	{
		key: 1,
		id: 1,
		serialcode: '#MED456ABC',
		policy: 'PandaCritical',
		quantity: 1,
		category: ['medical'],
		insurer: 'John Smith',
	},
	{
		key: 2,
		id: 2,
		serialcode: '#VEH324ZCP',
		policy: 'PandaCarProtect',
		quantity: 1,
		category: ['vehciular'],
		insurer: 'Jack K Burt',
	},
];

function CraftDashboard() {
	return (
		<>
			<Title>Overview</Title>
			<Table
				columns={columns}
				dataSource={data}
			/>
		</>
	);
}

export default CraftDashboard;