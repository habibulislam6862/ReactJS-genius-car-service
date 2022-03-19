import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const useAuth = () => {
    const userData = useContext(AuthContext);
    return userData;
};

export default useAuth;