import React from 'react';
import { Typography, Space, Table, Tag, Button, Row, Col } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

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
const defaultData = [
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
	const [data, setData] = useState(defaultData);
	let navigate = useNavigate();
	const createNewPolicy = () => {
		navigate('/craft/newpolicy');
	};
	const { state } = useLocation();
	useEffect(() => {
		var currentdate = new Date();
		if (state != null) {
			const {
				name,
				category,
				description,
				term,
				frequency,
				amount,
				no_of_validators,
				validators,
			} = state; // Read values passed on state
			let temp = [...data];
			temp.push({
				key: data.length + 1,
				serialcode: '#MED123ABC',
				policy: name,
				category: [category],
				createdAt: `${currentdate.getDate()}/${
					currentdate.getMonth() + 1
				}/${currentdate.getFullYear()} ${currentdate.getHours()}:${currentdate.getMinutes()}`,
				updatedAt: `${currentdate.getDate()}/${
					currentdate.getMonth() + 1
				}/${currentdate.getFullYear()} ${currentdate.getHours()}:${currentdate.getMinutes()}`,
			});
			setData(temp);
			console.log(state);
		}
	}, []);
	return (
		<>
			<Row style={{ width: '100%', alignItems: 'baseline' }}>
				<Col
					span={12}
					align="left"
				>
					<Title>Policy Management</Title>
				</Col>
				<Col
					span={12}
					align="right"
				>
					<Button
						type="primary"
						onClick={createNewPolicy}
					>
						Create new policy
					</Button>
				</Col>
			</Row>

			<Table
				columns={columns}
				dataSource={data}
			/>
		</>
	);
}

export default CraftPolicyManagement;
