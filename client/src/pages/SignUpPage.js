import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// antd
import { Layout, Row, Col, Card, Typography, Form, Input, Button } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const StyledTitle = styled.div`
	font-family: 'Comfortaa', cursive;
`;

const SignUpPage = (props) => {
	const [form] = Form.useForm();
	return (
		<Fragment>
			<Content style={{ backgroundColor: '#05042C' }}>
				<Row>
					<Col span={16}>
						<div
							style={{
								marginTop: 50,
								marginBottom: 100,
								display: 'inline-block',
							}}
						>
							<Title level={2} style={{ color: 'white' }}>
								Registration
							</Title>
							<Title level={4} style={{ color: 'white', marginTop: -10 }}>
								To register, please take the time to fill out the information
								below.
							</Title>
							<Card
								style={{
									width: 900,
									borderRadius: 20,
									backgroundColor: '#05042C',
									borderColor: '#05042C',
									color: 'white',
									marginTop: 10,
								}}
							>
								<Form form={form} layout='vertical' size='large'>
									<Form.Item
										label={
											<label
												style={{
													color: 'white',
													fontSize: 17,
													fontWeight: 'bold',
												}}
											>
												First Name
											</label>
										}
										required
									>
										<Input
											placeholder='Enter your first name'
											style={{
												borderRadius: 10,
												backgroundColor: '#727B90',
												borderColor: '#727B90',
												color: 'white',
											}}
										/>
									</Form.Item>
									<Form.Item
										label={
											<label
												style={{
													color: 'white',
													fontSize: 17,
													fontWeight: 'bold',
												}}
											>
												Last Name
											</label>
										}
										required
									>
										<Input
											placeholder='Enter your last name'
											style={{
												borderRadius: 10,
												backgroundColor: '#727B90',
												borderColor: '#727B90',
												color: 'white',
											}}
										/>
									</Form.Item>
									<Form.Item
										label={
											<label
												style={{
													color: 'white',
													fontSize: 17,
													fontWeight: 'bold',
												}}
											>
												Email
											</label>
										}
										required
									>
										<Input
											placeholder='Enter your email'
											style={{
												borderRadius: 10,
												backgroundColor: '#727B90',
												borderColor: '#727B90',
												color: 'white',
											}}
										/>
									</Form.Item>
									<Form.Item
										label={
											<label
												style={{
													color: 'white',
													fontSize: 17,
													fontWeight: 'bold',
												}}
											>
												Password
											</label>
										}
										required
									>
										<Input.Password
											placeholder='Enter a password'
											bordered={false}
											style={{
												borderRadius: 10,
												backgroundColor: '#727B90',
												borderColor: '#727B90',
												color: 'white',
											}}
										/>
									</Form.Item>
									<Form.Item
										label={
											<label
												style={{
													color: 'white',
													fontSize: 17,
													fontWeight: 'bold',
												}}
											>
												Enter your Subdomain
											</label>
										}
										required
									>
										<Input
											placeholder='Enter a new subdomain'
											suffix='.gigahub.io'
											bordered={false}
											style={{
												borderRadius: 10,
												backgroundColor: '#727B90',
												borderColor: '#727B90',
												color: 'white',
											}}
										/>
									</Form.Item>
									<Form.Item
										label={
											<label
												style={{
													color: 'white',
													fontSize: 17,
													fontWeight: 'bold',
												}}
											>
												What should be the purpose of gigahub?
											</label>
										}
										required
									>
										<Input.TextArea
											placeholder='Tell us your purpose for using gigahub'
											rows={5}
											bordered={false}
											style={{
												borderRadius: 10,
												backgroundColor: '#727B90',
												borderColor: '#727B90',
												color: 'white',
											}}
										/>
									</Form.Item>
									<Form.Item>
										<Button
											ghost
											style={{
												borderRadius: 10,
												fontSize: 17,
												fontWeight: 'bold',
											}}
										>
											Submit
										</Button>
									</Form.Item>
								</Form>
							</Card>
						</div>
					</Col>
					<Col span={8}>
						<Card
							style={{
								width: 400,
								borderRadius: 20,
								backgroundColor: '#727B90',
								borderColor: '#727B90',
								color: 'white',
								marginTop: 50,
								display: 'inline-block',
							}}
						>
							<div style={{ marginBottom: 30 }}>
								<Title level={4} style={{ color: 'white', marginBottom: -40 }}>
									Welcome to
								</Title>
								<Title level={1} style={{ color: 'white' }}>
									<StyledTitle>gigahub</StyledTitle>
								</Title>
								<Title level={4} style={{ color: 'white', marginTop: -10 }}>
									Build with intelligence and integrity
								</Title>
							</div>

							<div style={{ textAlign: 'left', fontWeight: 'bold' }}>
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
