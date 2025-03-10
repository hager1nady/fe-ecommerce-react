import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoutesReverse(props) {
    if (localStorage.getItem("userToken") != null) {
        return <Navigate to={'/home'} />
    } else {
        return props.children
    }
}
