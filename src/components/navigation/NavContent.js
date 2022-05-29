import { Col, Row, TabPane } from 'reactstrap';

const NavContent=(params)=>{
	console.log(params)
	return(
		<TabPane tabId={`'${params.index}'`} className='p-3'>
			<Row>
				<Col sm='12'>
					{params.children}
				</Col>
			</Row>
		</TabPane>
	)
}

export default NavContent
