import Footer from './Footer';
import Profile from './Profile';
import MenuItem from './MenuItem';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

interface SideBarProps {
  activeMenu: 'overview' | 'transactions' | 'settings';
}

export default function Sidebar(props: SideBarProps) {
  const { activeMenu } = props;
  const router = useRouter();

  const onLogOut = () => {
    Cookies.remove('token');
    router.push('/sign-in');
  };

  return (
    <section className='sidebar'>
      <div className='content pt-50 pb-30 ps-30'>
        <Profile />
        <div className='menus'>
          <MenuItem href='/member' title='Overview' icon='ic-menu-overview' active={activeMenu === 'overview'} />
          <MenuItem
            href='/member/transactions'
            title='Transactions'
            icon='ic-menu-transaction'
            active={activeMenu === 'transactions'}
          />
          <MenuItem href='/member' title='Messages' icon='ic-menu-message' />
          <MenuItem href='/member' title='Card' icon='ic-menu-card' />
          <MenuItem href='/member' title='Rewards' icon='ic-menu-rewards' />
          <MenuItem
            href='/member/edit-profile'
            title='Settings'
            icon='ic-menu-settings'
            active={activeMenu === 'settings'}
          />
          <MenuItem onClick={onLogOut} title='Log Out' icon='ic-menu-logout' />
        </div>
        <Footer />
      </div>
    </section>
  );
}
