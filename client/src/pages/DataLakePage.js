import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// antd
import { Layout, Typography } from 'antd';

const { Title } = Typography;
const { Header, Content } = Layout;

const DataLakePage = (props) => {
	return (
		<Fragment>
			<Header className='site-layout-background' style={{ padding: 0 }}>
				Data Lake Page
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

DataLakePage.propTypes = {};

export default DataLakePage;
