import {Header, SideBar} from 'components'

const SiteLayout = ({ children }) => (
    <div className='app__panel'>
        <Header />
        <SideBar />
        <div className='panel__main'>
            {children}
        </div>
    </div>
);

export default SiteLayout;