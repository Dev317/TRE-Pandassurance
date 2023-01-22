import React from 'react';
import { Typography, Space, Table, Tag } from 'antd';

const { Title } = Typography;

const columns = [
	{
		title: 'Serial-code',
		dataIndex: 'serialcode',
		key: 'serialcode',
		sorter: (a, b) => a.serialcode - b.serialcode,
	},
	{
		title: 'Policy',
		dataIndex: 'policy',
		key: 'policy',
		sorter: (a, b) => a.policy.localeCompare(b.policy),
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
		title: 'Created at',
		dataIndex: 'createdAt',
		key: 'createdAt',
		sorter: (a, b) => a.createdAt - b.createdAt,
	},
	{
		title: 'Updated at',
		dataIndex: 'updatedAt',
		key: 'updatedAt',
		sorter: (a, b) => a.updatedAt - b.updatedAt,
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
		serialcode: '#MED456ABC',
		policy: 'PandaCritical',
		category: ['medical'],
		createdAt: '13/01/2023 12:00',
		updatedAt: '13/01/2023 12:00',
	},
	{
		key: 2,
		serialcode: '#VEH324ZCP',
		policy: 'PandaCarProtect',
		category: ['vehicular'],
		createdAt: '13/01/2023 12:00',
		updatedAt: '13/01/2023 12:00',
	},
];

function CraftPolicyManagement() {
	return (
		<>
			<Title>Policy Management</Title>
			<Table
				columns={columns}
				dataSource={data}
			/>
		</>
	);
}

export default CraftPolicyManagement;
