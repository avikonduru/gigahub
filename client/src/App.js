import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

// Pages
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';

// Utils
import Routes from './utils/Routes';

// antd
import { Layout } from 'antd';

const StyledDiv = styled.div`
	font-family: 'Montserrat', sans-serif;
`;

function App() {
	return (
		<StyledDiv className='App'>
			<Router>
				<Layout>
					<Switch>
						<Route exact path='/signup' component={SignUpPage} />
						<Route exact path='/login' component={LogInPage} />
						<Route component={Routes} />
					</Switch>
				</Layout>
			</Router>
		</StyledDiv>
	);
}

export default App;
