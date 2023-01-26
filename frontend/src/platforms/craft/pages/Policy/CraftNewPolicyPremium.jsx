import { Form, Input, Radio, InputNumber, Typography } from 'antd';
import React, { useState } from 'react';

const { Text, Title } = Typography;

// Enter Premium Frequency (One Time / Annually / Monthly)
// Enter Premium Amount ($)

function CraftNewPolicyPremium() {
	const onFormChange = (values) => {
		localStorage.setItem('premium_frequency', values[0]['value']);
		localStorage.setItem('premium_amount', values[1]['value']);
	};
	return (
		<>
			<Form
				layout="vertical"
				initialValues={{
					premium_frequency: 'onetime',
					premium_amount: 100,
				}}
				onFieldsChange={(_, allFields) => {
					onFormChange(allFields);
				}}
			>
				<Form.Item
					label="Premium frequency"
					name="premium_frequency"
				>
					<Radio.Group
						size="large"
						buttonStyle="solid"
					>
						<Radio.Button value="onetime">One Time</Radio.Button>
						<Radio.Button value="monthly">Monthly</Radio.Button>
						<Radio.Button value="annually">Annually</Radio.Button>
					</Radio.Group>
				</Form.Item>
				<Form.Item
					label="Premium amount"
					name="premium_amount"
				>
					<InputNumber
						min="0"
						step="0.0001"
						stringMode
						style={{ width: '100%' }}
						placeholder="Enter the amount of premium of the policy"
					/>
				</Form.Item>
			</Form>
		</>
	);
}

export default CraftNewPolicyPremium;
