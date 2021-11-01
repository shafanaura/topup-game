import Footer from './Footer';
import Profile from './Profile';
import MenuItem from './MenuItem';

interface SideBarProps {
  activeMenu: 'overview' | 'transactions' | 'settings';
}

const SideBar = (props: SideBarProps) => {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="overview"
            active={activeMenu === 'overview'}
            href="/member"
          />
          <MenuItem
            active={activeMenu === 'transactions'}
            title="Transactions"
            icon="transaction"
            href="/member/transactions"
          />
          <MenuItem title="Messages" icon="message" href="/member" />
          <MenuItem title="Card" icon="card" href="/member" />
          <MenuItem title="Rewards" icon="reward" href="/member/" />
          <MenuItem
            active={activeMenu === 'settings'}
            title="Settings"
            icon="setting"
            href="/member/edit-profile"
          />
          <MenuItem title="Log Out" icon="logout" href="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default SideBar;
