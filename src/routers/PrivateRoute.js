import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';


export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    return (
        <Route
            {...rest}
            component={(props) => (
                (isAuthenticated)
                    ? (
                        <>
                            <Navbar />

                            <div className='mt-5'>
                                <Component {...props} />
                            </div>
                        </>)
                    : (<Redirect to="/login" />)
            )}

        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
