import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, Space, Typography, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const { Title } = Typography;

function CraftLogin() {
	// const [api, contextHolder] = notification.useNotification();
	// const openNotification = () => {
	// 	api['error']({
	// 		message: 'No such user or wrong password',
	// 	});
	// };

	// const [isLoggedIn, setIsLoggedIn] = useState(false);
	// const checkUserToken = () => {
	// 	const userToken = localStorage.getItem('craft-user');
	// 	if (!userToken || userToken === 'undefined') {
	// 		setIsLoggedIn(false);
	// 		return navigate('/craft/login');
	// 	}
	// 	setIsLoggedIn(true);
	// 	navigate('/craft/dashboard');
	// };

	// useEffect(() => {
	// 	checkUserToken();
	// }, [isLoggedIn]);

	// const navigate = useNavigate();
	// const loginAPI = 'https://tre-pandassurance-78ug.vercel.app/institution/';
	// const onFinish = (values) => {
	// 	axios
	// 		.get(loginAPI)
	// 		.then(function (response) {
	// 			// handle success
	// 			let users = response.data;
	// 			for (let i = 0; i < users.length; i++) {
	// 				if (users[i].adminEmail === values.email) {
	// 					setIsLoggedIn(true);
	// 					localStorage.setItem('craft-user', JSON.stringify(users[i]));
	// 					return navigate('/craft');
	// 				}
	// 			}

	// 			openNotification();
	// 		})
	// 		.catch(function (error) {
	// 			// handle error
	// 			console.log(error);
	// 		})
	// 		.then(function () {
	// 			// always executed
	// 		});
	// };
	const navigate = useNavigate();
	const onFinish = (values) => {
		console.log(values);
		navigate('/craft/dashboard');
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
					name="email"
					rules={[{ required: true, message: 'Please input your email!' }]}
				>
					<Input
						prefix={<UserOutlined />}
						placeholder="Email"
						size="large"
					/>
				</Form.Item>
				<Form.Item
					name="password"
					rules={[{ required: true, message: 'Please input your password!' }]}
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
