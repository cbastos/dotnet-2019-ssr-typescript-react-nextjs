import Layout from '../_shared/Layout';
import BicycleCard from './BicycleCard/BicycleCard';

export default ({ models = [] }: { models: Array<{ id: number }> }) => {
  console.log("component-models", models);
  return <Layout>
    {models.map(({ id }) => <BicycleCard id={id} />)}
  </Layout>;
}
