import { Col, Row, TabPane } from 'reactstrap';

const NavContent=(params)=>{
	return(
		<TabPane tabId={`${params.index}`}>
			<Row>
				<Col sm='12'>
					{params.children}
				</Col>
			</Row>
		</TabPane>
	)
}

export default NavContent
