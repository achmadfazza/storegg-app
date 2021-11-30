import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { JwtPayloadTypes, UserTypes } from '../../../services/data-types';

export default function Profile() {
  const IMG = process.env.NEXT_PUBLIC_IMG;
  const [user, setUser] = useState({
    avatar: '',
    username: '',
    email: '',
  });
  // Data player diambil dari token yang disimpan di cookies disimpan di jwt diambil payloadnya ambil data player
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JwtPayloadTypes = jwt_decode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      setUser(userFromPayload);
    }
  }, []);
  return (
    <div className='user text-center pb-50 pe-30'>
      <img
        src={`${IMG}/${user.avatar}`}
        width='90'
        height='90'
        className='img-fluid mb-20'
        style={{ borderRadius: 50 }}
      />
      <h2 className='fw-bold text-xl color-palette-1 m-0'>{user.username}</h2>
      <p className='color-palette-2 m-0'>{user.email}</p>
    </div>
  );
}
