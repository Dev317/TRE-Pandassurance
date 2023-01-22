import { Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import '@fontsource/raleway';

import './assets/App.css';

// Here we will have all the options to swap between the platforms
function App() {
	let navigate = useNavigate();
	const craftRouteChange = () => {
		navigate('/craft');
	};
	const shopRouteChange = () => {
		navigate('/shop');
	};
	const validatorRouteChange = () => {
		navigate('/validator');
	};
	return (
		<Space
			align="center"
			style={{ width: '100%', justifyContent: 'center', height: '100vh' }}
		>
			<Button
				type="primary"
				onClick={craftRouteChange}
			>
				Craft
			</Button>
			<Button
				type="secondary"
				onClick={validatorRouteChange}
			>
				Validator
			</Button>
			<Button
				type="success"
				onClick={shopRouteChange}
			>
				Shop
			</Button>
		</Space>
	);
}

export default App;
