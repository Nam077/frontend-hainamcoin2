// @flow
import React from 'react';
import { Auth, Header } from '../components';
import { AuthService } from '../services/authService';
import { useCookies } from 'react-cookie';

type Props = {};
export const UserProfile = (props: Props) => {
    const [user, setUser] = React.useState({
        name: '',
        accessToken: '',
        refreshToken: '',
        email: '',
        totalMoney: 0,
        public_key: '',
        private_key: '',
    });
    const [accessToken, setAccessToken] = useCookies(['accessToken']);
    React.useEffect(() => {
        new AuthService().getCurrentUser(accessToken.accessToken).then((res) => {
            setUser(res.data.user);
        });
    }, [accessToken]);
    return (
        <div className={'p-2 md:p-10 bg-white rounded-2xl'}>
            <Auth />
            <Header category={'User'} title={'User Profile'} />
            <div className=" mx-auto p-4 bg-white rounded-lg shadow-lg">
                <div className="mb-4 px-4 py-2 bg-gray-100 rounded-lg">
                    <p className="text-gray-700 text-base font-bold mb-2">Email: {user?.email}</p>
                    <p className="text-gray-700 text-base font-bold mb-2">Name: {user?.name}</p>
                    <p className="text-gray-700 text-base font-bold mb-2">
                        Public key:<span className={'text-red-600'}> {user?.public_key}</span>
                    </p>
                    <p className="text-gray-700 text-base font-bold mb-2">
                        Private key:<span className={'text-red-600'}> {user?.private_key}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};
