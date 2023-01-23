import { Typography, Form, Input, Radio } from 'antd';
import React from 'react';

const { Title } = Typography;
const { TextArea } = Input;

function CraftNewPolicyDescriptive() {
	return (
		<>
			<Form layout="vertical">
				<Form.Item label="Policy name">
					<Input placeholder="Enter the name of the policy" />
				</Form.Item>
				<Form.Item label="Policy category">
					<Radio.Group
						defaultValue="medical"
						size="large"
					>
						<Radio.Button
							value="medical"
							style={{
								backgroundColor: '#2DCE89',
								color: 'white',
							}}
						>
							Medical
						</Radio.Button>
						<Radio.Button
							value="vehicular"
							style={{
								backgroundColor: '#11CDEF',
								color: 'white',
							}}
						>
							Vehicular
						</Radio.Button>
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
