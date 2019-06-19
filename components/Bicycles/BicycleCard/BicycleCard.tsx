import Link from 'next/link';
import Img from './ResponsiveImage/ResponsiveImage';

export default ({ id }) => <div className="card" width="30%">
    <div className="card-img-top" >
        <Img src={(width) => `/snowball/images/PalmaSpeedJusterteBilder-15/_resized_${width}.jpg`} />
    </div>
    <div className="card-body">
        <h5 className="card-title">Bicycle {id}</h5>
        <p className="card-text">This model of bicycle {id} is awesome!</p>
        <Link href={`/bicycle?id=${id}`}>
            <span className="btn btn-primary">Details</span>
        </Link>
    </div>
</div>;
