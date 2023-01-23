import { Col, Row, Space, Table, Typography } from 'antd';
import React from 'react';

const { Title } = Typography;

const validators = [
	{
		name: 'Dr Robert Evans',
		organisation: 'RPPH',
	},
	{
		name: 'Dr Emily Lai',
		organisation: 'RPPH',
	},
	{
		name: 'Dr Michelle Anna',
		organisation: 'RPPH',
	},
	{
		name: 'Dr John Smith',
		organisation: 'PCH',
	},
];

const addedValidators = [];

const columns = [
	{
		title: 'Organisation',
		dataIndex: 'organisation',
		key: 'organisation',
		sorter: (a, b) => a.organisation.localeCompare(b.organisation),
	},
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		sorter: (a, b) => a.name.localeCompare(b.name),
	},
	{
		title: 'Action',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<a>View</a>
				<a>Add</a>
			</Space>
		),
	},
];

const addedColumns = [
	{
		title: 'Organisation',
		dataIndex: 'organisation',
		key: 'organisation',
		sorter: (a, b) => a.organisation.localeCompare(b.organisation),
	},
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		sorter: (a, b) => a.name.localeCompare(b.name),
	},
	{
		title: 'Action',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<a>View</a>
				<a>Delete</a>
			</Space>
		),
	},
];

function CraftNewPolicyVerifier() {
	return (
		<>
			<Row gutter={[10]}>
				<Col
					xs={24}
					sm={12}
					md={16}
					lg={16}
					xl={16}
				>
					<Title level={4}>Possible verifiers</Title>
					<Table
						columns={columns}
						dataSource={validators}
					/>
				</Col>
				<Col
					xs={24}
					sm={12}
					md={8}
					lg={8}
					xl={8}
				>
					<Title level={4}>Added verifiers</Title>
					<Table
						columns={addedColumns}
						dataSource={addedValidators}
					/>
				</Col>
			</Row>
		</>
	);
}

export default CraftNewPolicyVerifier;
