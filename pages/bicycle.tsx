import { withRouter } from 'next/router';
import BicycleDetails from '../components/BicycleDetails/BicycleDetails';

export default withRouter(props => <BicycleDetails id={props.router.query.id} />);
