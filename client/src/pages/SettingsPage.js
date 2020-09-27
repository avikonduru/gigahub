import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// antd
import { Layout, Typography } from 'antd';

const { Title } = Typography;
const { Header, Content } = Layout;

const SettingsPage = (props) => {
	return (
		<Fragment>
			<Header className='site-layout-background' style={{ padding: 0 }}>
				Settings Page
			</Header>
			<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
				<div
					className='site-layout-background'
					style={{ padding: 24, textAlign: 'center' }}
				>
					Gigahub Content
				</div>
			</Content>
		</Fragment>
	);
};

SettingsPage.propTypes = {};

export default SettingsPage;
