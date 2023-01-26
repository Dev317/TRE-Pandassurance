import { Form, Input, Radio, InputNumber, Typography } from 'antd';
import React, { useState } from 'react';

const { Text, Title } = Typography;

// 2. Term (Cover X Years (Term)/ Wholelife)
// 2.a If Term = Term, enter years.
// 2.b if Term = WholeLife years = 999

function CraftNewPolicyTerm() {
	const [value, setValue] = useState(1);
	const [term, setTerm] = useState(999);
	const onChange = (e) => {
		setValue(e.target.value);
	};
	const onFormChange = (values) => {
		let isLifePlan = values[0]['value'];
		if (isLifePlan === 1) {
			setTerm(999);
			localStorage.setItem('term', 999);
		} else {
			if (values[1]['value'] == null) {
				localStorage.setItem('term', 1);
			} else {
				console.log(values[1]['value']);
				localStorage.setItem('term', values[1]['value']);
			}
		}
	};
	return (
		<>
			<Form
				layout="vertical"
				initialValues={{
					termDefault: 1,
					isLifePlan: 1,
				}}
				onFieldsChange={(_, allFields) => {
					onFormChange(allFields);
				}}
			>
				<Form.Item label="Term">
					<Text code>Term = Cover X (Years (Term) / whole life)</Text>
				</Form.Item>
				<Form.Item
					label="Is this a whole life plan?"
					name="isLifePlan"
				>
					<Radio.Group
						onChange={onChange}
						value={value}
					>
						<Radio value={1}>Yes</Radio>
						<Radio value={2}>No</Radio>
					</Radio.Group>
				</Form.Item>
				<Form.Item
					label="Enter the term of the policy"
					name="term"
				>
					{value === 1 ? (
						<Input
							placeholder="999"
							disabled
						/>
					) : (
						<InputNumber
							stringMode
							style={{ width: '100%' }}
						/>
					)}
				</Form.Item>
			</Form>
		</>
	);
}

export default CraftNewPolicyTerm;
