import TransactionsDetailContent from '../../../components/organisms/TransactionsDetailContent';
import jwt_decode from 'jwt-decode';
import { historyTransactionTypes, JwtPayloadTypes, UserTypes } from '../../../services/data-types';
import { getTransactionDetail } from '../../../services/member';

interface transactionDetailProps {
  transactionDetail: historyTransactionTypes;
}

export default function TransactionsDetail(props: transactionDetailProps) {
  const { transactionDetail } = props;
  return (
    <section className='transactions-detail overflow-auto'>
      <TransactionsDetailContent data={transactionDetail} />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    idTrx: string;
  };
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { idTrx } = params;
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
  const response = await getTransactionDetail(idTrx, jwtToken);

  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
