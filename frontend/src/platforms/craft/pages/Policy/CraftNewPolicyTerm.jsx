import { Form, Input, Radio, InputNumber } from 'antd';
import React from 'react';

function CraftNewPolicyTerm() {
	return (
		<>
			<Form layout="vertical">
				<Form.Item label="Term">
					{/* What should it return as ? Is it a number or a sentence*/}
					<Input placeholder="Enter the term of the policy" />
				</Form.Item>
				<Form.Item label="Premium amount">
					{/* What should it return as ? */}
					<InputNumber
						defaultValue="1"
						min="0"
						step="0.0001"
						stringMode
						style={{ width: '100%' }}
						placeholder="Enter the amount of premium of the policy"
					/>
				</Form.Item>
				<Form.Item label="Premium frequency">
					<Radio.Group
						defaultValue="monthly"
						size="large"
					>
						<Radio.Button value="monthly">Monthly</Radio.Button>
						<Radio.Button value="quarterly">Quarterly</Radio.Button>
						<Radio.Button value="semiannually">Semi-annually</Radio.Button>
						<Radio.Button value="yearly">Yearly</Radio.Button>
					</Radio.Group>
				</Form.Item>
				<Form.Item label="Policy payout">
					{/* What should it return as ? */}
					<InputNumber
						defaultValue="1"
						min="0"
						step="0.0001"
						stringMode
						style={{ width: '100%' }}
						placeholder="Enter a payout amount"
					/>
				</Form.Item>
			</Form>
		</>
	);
}

export default CraftNewPolicyTerm;
