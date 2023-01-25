import React, { useState } from 'react';
import { Typography, Space, Button, message, Steps, theme } from 'antd';
import CraftNewPolicyDescriptive from './CraftNewPolicyDescriptive';
import CraftNewPolicyTerm from './CraftNewPolicyTerm';
import CraftNewPolicyVerifier from './CraftNewPolicyVerifier';
import CraftNewPolicyPremium from './CraftNewPolicyPremium';

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
						onClick={() => message.success('Processing complete!')}
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
