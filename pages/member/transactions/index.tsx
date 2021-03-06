import Sidebar from '../../../components/organisms/SideBar';
import TransactionContent from '../../../components/organisms/TransactionContent';
import { JwtPayloadTypes, UserTypes } from '../../../services/data-types';
import jwt_decode from 'jwt-decode';

export default function transactions() {
  return (
    <section className='transactions overflow-auto'>
      <Sidebar activeMenu='transactions' />
      <TransactionContent />
    </section>
  );
}
interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}
export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
