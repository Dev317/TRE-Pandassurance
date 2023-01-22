import React from 'react';
import { Form, Input, Button, Checkbox, Space, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

function CraftLogin() {
	const navigate = useNavigate();
	const onFinish = (values) => {
		navigate('/craft');
	};
	return (
		<Space
			align="center"
			style={{
				width: '100%',
				height: '100vh',
				justifyContent: 'center',
				flexDirection: 'column',
			}}
		>
			<Title level={2}>Pandassurance Craft</Title>
			<Form
				style={{ minWidth: '300px' }}
				onFinish={onFinish}
			>
				<Form.Item
					name="username"
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input
						prefix={<UserOutlined />}
						placeholder="Username"
						size="large"
					/>
				</Form.Item>
				<Form.Item
					name="password"
					rules={[{ required: true, message: 'Please input your Password!' }]}
				>
					<Input
						prefix={<LockOutlined />}
						type="password"
						placeholder="Password"
						size="large"
					/>
				</Form.Item>
				<Form.Item>
					<Form.Item
						name="remember"
						valuePropName="checked"
						initialValue={true}
						noStyle
					>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>
					<a
						href=""
						style={{ float: 'right' }}
					>
						Forgot password
					</a>
				</Form.Item>
				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						style={{ width: '100%' }}
					>
						Log in
					</Button>
					Or <a href="">register now!</a>
				</Form.Item>
			</Form>
		</Space>
	);
}

export default CraftLogin;
