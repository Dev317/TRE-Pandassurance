import { Typography, Form, Input, Radio } from 'antd';
import React from 'react';

const { Title } = Typography;
const { TextArea } = Input;

// Select Coverage (Hospitalization, Death, Critical Illness, Disability Income, Personal Accident)
function CraftNewPolicyDescriptive() {
	const onChange = (values) => {
		localStorage.setItem('policy_name', values[0]['value']);
		localStorage.setItem('policy_category', values[1]['value']);
		localStorage.setItem('policy_description', values[2]['value']);
	};
	return (
		<>
			<Form
				layout="vertical"
				initialValues={{
					policyCategory: 'hospitalisation',
				}}
				onFieldsChange={(_, allFields) => {
					onChange(allFields);
				}}
			>
				<Form.Item
					label="Policy name"
					name="policyName"
				>
					<Input placeholder="Enter the name of the policy" />
				</Form.Item>
				<Form.Item
					label="Policy category"
					name="policyCategory"
				>
					<Radio.Group
						size="large"
						buttonStyle="solid"
					>
						<Radio.Button value="hospitalisation">Hospitalization</Radio.Button>
						<Radio.Button value="death">Death</Radio.Button>
						<Radio.Button value="criticalIllness">Critical Illness</Radio.Button>
						<Radio.Button value="disabilityIncome">Disability Income</Radio.Button>
						<Radio.Button value="personalAccident">Personal Accident</Radio.Button>
					</Radio.Group>
				</Form.Item>
				<Form.Item
					label="Policy description"
					name="policyDescription"
				>
					<TextArea
						placeholder="Enter a description of the policy for the customers to view"
						rows={4}
					/>
				</Form.Item>
			</Form>
		</>
	);
}

export default CraftNewPolicyDescriptive;
