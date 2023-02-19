import React from 'react'
import { Route, Navigate } from 'react-router-dom'

const Protect_Route = ({ component: Component, ident }) => {
    return (
        ident !== false ? (
            <Component />
        ) : (
            <Navigate to="/auth" replace />
        )
    )
}

export default Protect_Route