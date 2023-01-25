import { Form, Input, Radio, InputNumber, Typography } from 'antd';
import React, { useState } from 'react';

const { Text, Title } = Typography;

// Enter Premium Frequency (One Time / Annually / Monthly)
// Enter Premium Amount ($)

function CraftNewPolicyPremium() {
	return (
		<>
			<Form layout="vertical">
				<Form.Item label="Premium frequency">
					<Radio.Group
						defaultValue="onetime"
						size="large"
					>
						<Radio.Button value="onetime">One Time</Radio.Button>
						<Radio.Button value="monthly">Monthly</Radio.Button>
						<Radio.Button value="annually">Annually</Radio.Button>
					</Radio.Group>
				</Form.Item>
				<Form.Item label="Premium amount">
					<InputNumber
						defaultValue="100"
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
