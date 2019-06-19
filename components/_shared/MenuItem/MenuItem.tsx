import Link from 'next/link';
import { itemClass } from './MenuItem.style';

export default ({ title, url }) => {
    return <Link href={url}>
        <a className={itemClass}>
            <span>{title}</span>
        </a>
    </Link>
}
