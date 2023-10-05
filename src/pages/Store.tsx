import StoreItem from '../components/StoreItem';
import storeItems from '../data/items.json';
import { Col, Row } from 'react-bootstrap';

export default function Store() {
	return (
		<>
			<h1>Store</h1>
			<Row md={2} xs={1} ls={3} className='g-3'>
				{storeItems.map((item) => (
					<Col key={item.id}>
						<StoreItem {...item} />
					</Col>
				))}
			</Row>
		</>
	);
}
