import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// antd
import { Layout } from 'antd';

// Pages
import DashboardPage from '../pages/DashboardPage';
import AppsPage from '../pages/AppsPage';
import QueriesPage from '../pages/QueriesPage';
import DataLakePage from '../pages/DataLakePage';
import SettingsPage from '../pages/SettingsPage';

// Components
import NavBar from '../components/NavBar';

const { Header, Content, Footer } = Layout;

const Routes = (props) => {
	return (
		<Fragment>
			<NavBar />
			<Layout className='site-layout' style={{ marginLeft: 200 }}>
				<Switch>
					<Route exact path='/' component={DashboardPage} />
					<Route exact path='/apps' component={AppsPage} />
					<Route exact path='/queries' component={QueriesPage} />
					<Route exact path='/data-lake' component={DataLakePage} />
					<Route exact path='/settings' component={SettingsPage} />
				</Switch>
			</Layout>
		</Fragment>
	);
};

Routes.propTypes = {};

export default Routes;
