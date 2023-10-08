import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)
    if (loading) {
        return <span className="ml-80 loading loading-bars loading-lg"></span>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/signIn"></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}
export default PrivateRoute;