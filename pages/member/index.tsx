import OverView from '../../components/organisms/Overview';
import SideBar from '../../components/organisms/SideBar';
import { JwtPayloadTypes, UserTypes } from '../../services/data-types';
import jwt_decode from 'jwt-decode';

export default function Member() {
  return (
    <section className='overview overflow-auto'>
      <SideBar activeMenu='overview' />
      <OverView />
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
  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const payload: JwtPayloadTypes = jwt_decode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
  return {
    props: {
      user: userFromPayload,
    },
  };
}
