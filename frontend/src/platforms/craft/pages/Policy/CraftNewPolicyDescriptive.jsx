import { Typography, Form, Input, Radio } from 'antd';
import React from 'react';

const { Title } = Typography;
const { TextArea } = Input;

// Select Coverage (Hospitalization, Death, Critical Illness, Disability Income, Personal Accident)
function CraftNewPolicyDescriptive() {
	return (
		<>
			<Form layout="vertical">
				<Form.Item label="Policy name">
					<Input placeholder="Enter the name of the policy" />
				</Form.Item>
				<Form.Item label="Policy category">
					<Radio.Group
						defaultValue="hospitalisation"
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
				<Form.Item label="Policy description">
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
