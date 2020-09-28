import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// antd
import { Layout, Typography, Divider, Button } from 'antd';

// Components
import ResourceConsole from '../components/ResourceConsole';

const { Title } = Typography;
const { Header, Content } = Layout;

const DashboardPage = (props) => {
	return (
		<Fragment>
			<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
				<ResourceConsole />
				<Divider>App DashBoard</Divider>
				<div style={{ textAlign: 'right' }}>
					<Button
						type='primary'
						size='large'
						style={{ fontWeight: 'bold', borderRadius: 20 }}
					>
						Add App
					</Button>
				</div>
			</Content>
		</Fragment>
	);
};

DashboardPage.propTypes = {};

export default DashboardPage;
