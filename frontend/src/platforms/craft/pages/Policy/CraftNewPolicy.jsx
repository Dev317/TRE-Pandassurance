import React, { useState } from 'react';
import { Typography, Space, Button, message, Steps, theme } from 'antd';
import CraftNewPolicyDescriptive from './CraftNewPolicyDescriptive';

const { Title } = Typography;

const steps = [
	{
		title: 'First',
		content: <CraftNewPolicyDescriptive />,
	},
	{
		title: 'Second',
		content: 'Second-content',
	},
	{
		title: 'Last',
		content: 'Last-content',
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
		//lineHeight: '260px',
		textAlign: 'center',
		color: token.colorTextTertiary,
		backgroundColor: token.colorFillAlter,
		borderRadius: token.borderRadiusLG,
		border: `1px dashed ${token.colorBorder}`,
		marginTop: 16,
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
