import Footer from './Footer';
import Profile from './Profile';
import MenuItem from './MenuItem';

const SideBar = () => (
  <section className="sidebar">
    <div className="content pt-50 pb-30 ps-30">
      <Profile />
      <div className="menus">
        <MenuItem title="Overview" icon="overview" active />
        <MenuItem title="Transactions" icon="transaction" />
        <MenuItem title="Messages" icon="message" />
        <MenuItem title="Card" icon="card" />
        <MenuItem title="Rewards" icon="reward" />
        <MenuItem title="Settings" icon="setting" />
        <MenuItem title="Log Out" icon="logout" />
      </div>
      <Footer />
    </div>
  </section>
);

export default SideBar;
