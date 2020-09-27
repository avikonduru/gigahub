import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// antd
import { Layout, Row, Col, Card, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const SignUpPage = (props) => {
	return (
		<Fragment>
			<Content>
				<Row>
					<Col span={16}>col-12</Col>
					<Col span={8}>
						<Card
							style={{
								width: 400,
								borderRadius: 20,
								backgroundColor: '#727B90',
								color: 'white',
							}}
						>
							<Title level={4} style={{ color: 'white' }}>
								Welcome to
							</Title>
							<Title level={1}>gigahub</Title>
							<Title level={4}>Build with intelligence and integrity</Title>
							<div style={{ textAlign: 'left' }}>
								<ul>
									<li>
										Digitalize your company for free, no credit card required
									</li>
									<li>Access the full product catalog at your fingertips</li>
									<li>iOS, Android integration (at extra costs)</li>
									<li>Create integrated apps</li>
									<li>AI-powered data lake services</li>
									<li>Basic data analytics, and more.</li>
									<li>Build with 40+ micro-services. Learn more</li>
								</ul>
							</div>
						</Card>
					</Col>
				</Row>
			</Content>
		</Fragment>
	);
};

SignUpPage.propTypes = {};

export default SignUpPage;
