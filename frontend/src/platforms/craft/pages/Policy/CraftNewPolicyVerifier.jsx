import {
	Col,
	Row,
	Space,
	Table,
	InputNumber,
	Typography,
	Form,
	Select,
	notification,
	Popconfirm,
} from 'antd';
import React, { useState } from 'react';

const { Title } = Typography;

// 5. Data Validators (Enter Validator Public Key/ User ID)
// 6. Multi Sig Settings (Enter Number of validators required for Multi-Sig)

const options = [
	{
		value: '12345678',
		label: 'Jack Smith from RRPH',
	},
	{
		value: '11223344',
		label: 'Lucy Miles from PCH',
	},
	{
		value: '22334455',
		label: 'Tom Jackson from RRPH',
	},
];

const onSearch = (value) => {
	console.log('search:', value);
};
const openNotification = () => {
	notification.open({
		message: 'Maximum verifiers added based on signatures',
	});
};

function CraftNewPolicyVerifier() {
	const startData = [];
	const [addedVerifier, setAddedVerifier] = useState(startData);
	const [countOfSignatures, setCountOfSignatures] = useState(1);
	const [count, setCount] = useState(0);

	const onChange = (value) => {
		console.log(`selected ${value}`);
		localStorage.setItem('validators', JSON.stringify(addedVerifier));
	};

	const handleDelete = (key) => {
		const newData = addedVerifier.filter((item) => item.key !== key);
		setAddedVerifier(newData);
	};

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
					<Popconfirm
						title="Sure to delete?"
						onConfirm={() => handleDelete(record.key)}
					>
						<a>Delete</a>
					</Popconfirm>
				</Space>
			),
		},
	];

	const onInputNumber = (value) => {
		setCountOfSignatures(value);
	};
	const [api, contextHolder] = notification.useNotification();
	const openNotification = () => {
		api['error']({
			message: 'Maximum number of required signatures',
		});
	};

	const onSourceChange = (value, option) => {
		if (addedVerifier.length === countOfSignatures) {
			openNotification();
			return;
		}
		let info = option?.label.split(' from ');
		let newData = [...addedVerifier];
		newData.push({ key: count, organisation: info[1], name: info[0] });
		setAddedVerifier(newData);
		setCount(count + 1);
	};
	const onFormChange = (values) => {
		localStorage.setItem('no_of_validators', values[0]['value']);
		localStorage.setItem('validators', JSON.stringify(addedVerifier));
	};
	return (
		<>
			{contextHolder}
			<Form
				layout="vertical"
				initialValues={{
					noOfValidators: countOfSignatures,
				}}
				onFieldsChange={(_, allFields) => {
					onFormChange(allFields);
				}}
			>
				<Form.Item
					label="Number of validators required for Multi-signature"
					name="noOfValidators"
				>
					<InputNumber
						placeholder="Enter number"
						min={1}
						onChange={onInputNumber}
					/>
				</Form.Item>
				<Form.Item
					label="Search verifiers"
					name="search"
				>
					<Select
						showSearch
						placeholder="Select a verifier"
						optionFilterProp="children"
						onChange={onChange}
						onSearch={onSearch}
						onSelect={onSourceChange}
						filterOption={(input, option) =>
							(option?.label ?? '').toLowerCase().includes(input.toLowerCase()) ||
							(option?.value ?? '').toLowerCase().includes(input.toLowerCase())
						}
						options={options}
					/>
				</Form.Item>
				<Form.Item label="Added verifiers">
					<Table
						columns={addedColumns}
						dataSource={addedVerifier}
						size="small"
					/>
				</Form.Item>
			</Form>
		</>
	);
}

export default CraftNewPolicyVerifier;
