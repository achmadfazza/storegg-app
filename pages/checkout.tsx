import Image from 'next/image';
import CheckoutConfirm from '../components/organisms/CheckoutConfirm';
import CheckOutDetail from '../components/organisms/CheckoutDetail';
import CheckoutItem from '../components/organisms/CheckoutItem';
import { JwtPayloadTypes, UserTypes } from '../services/data-types';
import jwt_decode from 'jwt-decode';

export default function checkout() {
  return (
    <section className='checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30'>
      <div className='container-fluid'>
        <div className='logo text-md-center text-start pb-50'>
          <a className='' href='#'>
            <Image src='/icon/logo.svg' width={60} height={60} alt='logo' />
          </a>
        </div>
        <div className='title-text pt-md-50 pt-0'>
          <h2 className='text-4xl fw-bold color-palette-1 mb-10'>Checkout</h2>
          <p className='text-lg color-palette-1 mb-0'>Waktunya meningkatkan cara bermain</p>
        </div>
        <CheckoutItem />
        <hr />
        <CheckOutDetail />
        <CheckoutConfirm />
      </div>
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
    props: {},
  };
}
