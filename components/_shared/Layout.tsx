import { headerClass, logoBoxClass, logoClass, contentClass } from './Layout.style';
import MenuItem from './MenuItem/MenuItem';

export default (props) => {
    return (
        <div>
            <div className={headerClass}>
                <div className={logoBoxClass} >
                    <img src="/static/logo.png" alt="logo" className={logoClass} />
                </div>
                <div className={logoBoxClass} >
                    <h1>Shop-bre ruedas</h1>
                </div>
                <MenuItem url="/bicycles" title="Bicycles" />
                <MenuItem url="/sections/location" title="Location" />
            </div>
            <div className={contentClass}>
                {props.children}
            </div>
        </div>
    )
}
