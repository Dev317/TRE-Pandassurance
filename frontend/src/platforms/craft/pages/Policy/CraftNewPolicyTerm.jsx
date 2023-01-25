import { Form, Input, Radio, InputNumber, Typography } from 'antd';
import React, { useState } from 'react';

const { Text, Title } = Typography;

// 2. Term (Cover X Years (Term)/ Wholelife)
// 2.a If Term = Term, enter years.
// 2.b if Term = WholeLife years = 999

function CraftNewPolicyTerm() {
	const [value, setValue] = useState(1);
	const onChange = (e) => {
		setValue(e.target.value);
		if (value === 1) {
			console.log('yes');
		} else {
			console.log('no');
		}
	};
	return (
		<>
			<Form layout="vertical">
				<Form.Item label="Term">
					<Text code>Term = Cover X (Years (Term) / whole life)</Text>
				</Form.Item>
				<Form.Item label="Is this a whole life plan?">
					<Radio.Group
						onChange={onChange}
						value={value}
					>
						<Radio value={1}>Yes</Radio>
						<Radio value={2}>No</Radio>
					</Radio.Group>
				</Form.Item>
				<Form.Item label="Enter the term of the policy">
					{value === 1 ? (
						<Input
							placeholder="999"
							disabled
						/>
					) : (
						<InputNumber
							defaultValue="1"
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
