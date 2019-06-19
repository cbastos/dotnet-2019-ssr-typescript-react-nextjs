import Bicycles from '../components/Bicycles/Bicycles';
import { BicyclesService } from '../services/bicyclesService';

const BicyclesPage = ({ models }) => <Bicycles models={models} />;

BicyclesPage.getInitialProps = async () => {
    console.log("getInitialProps()");
    const bicyclesService = new BicyclesService();
    const models = await bicyclesService.getModels();
    return { models };
};

export default BicyclesPage;