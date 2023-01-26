import React, { useState } from 'react';
import { Typography, Space, Button, message, Steps, theme } from 'antd';
import CraftNewPolicyDescriptive from './CraftNewPolicyDescriptive';
import CraftNewPolicyTerm from './CraftNewPolicyTerm';
import CraftNewPolicyVerifier from './CraftNewPolicyVerifier';
import CraftNewPolicyPremium from './CraftNewPolicyPremium';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const steps = [
	{
		title: 'Description',
		content: <CraftNewPolicyDescriptive />,
	},
	{
		title: 'Terms',
		content: <CraftNewPolicyTerm />,
	},
	{
		title: 'Premium',
		content: <CraftNewPolicyPremium />,
	},
	{
		title: 'Verifiers',
		content: <CraftNewPolicyVerifier />,
	},
];

function CraftNewPolicy() {
	const { token } = theme.useToken();
	const [current, setCurrent] = useState(0);
	const next = () => {
		setCurrent(current + 1);
	};
	const prev = () => {
		setCurrent(current - 1);
	};
	const items = steps.map((item) => ({
		key: item.title,
		title: item.title,
	}));
	const contentStyle = {
		color: token.colorTextTertiary,
		backgroundColor: token.colorFillAlter,
		borderRadius: token.borderRadiusLG,
		border: `1px dashed ${token.colorBorder}`,
		marginTop: 16,
		height: '50vh',
		padding: 10,
	};

	const navigate = useNavigate();
	const createNewPolicy = () => {
		let name = localStorage.getItem('policy_name');
		let category = localStorage.getItem('policy_category');
		let description = localStorage.getItem('policy_description');
		let term = localStorage.getItem('term');
		let frequency = localStorage.getItem('premium_frequency');
		let amount = localStorage.getItem('premium_amount');
		let no_of_validators = localStorage.getItem('no_of_validators');
		let validators = localStorage.getItem('validators');
		message.success('Processing complete!');
		navigate('/craft/policymanagement', {
			state: {
				name: name,
				category: category,
				description: description,
				term: term,
				frequency: frequency,
				amount: amount,
				no_of_validators: no_of_validators,
				validators: validators,
			},
		});
	};

	return (
		<>
			<Title>Create new policy</Title>
			<Steps
				labelPlacement="vertical"
				current={current}
				items={items}
			/>
			<div style={contentStyle}>{steps[current].content}</div>
			<div
				style={{
					marginTop: 24,
				}}
			>
				{current < steps.length - 1 && (
					<Button
						type="primary"
						onClick={() => next()}
					>
						Next
					</Button>
				)}
				{current === steps.length - 1 && (
					<Button
						type="primary"
						onClick={() => createNewPolicy()}
					>
						Done
					</Button>
				)}
				{current > 0 && (
					<Button
						style={{
							margin: '0 8px',
						}}
						onClick={() => prev()}
					>
						Previous
					</Button>
				)}
			</div>
		</>
	);
}

export default CraftNewPolicy;
