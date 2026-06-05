import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

/**
 * ProtectedRoute 컴포넌트
 * @param {Object} props
 * @param {boolean} props.isLoggedIn - 사용자의 로그인 여부
 * @param {string} [props.redirectPath='/signin'] - 로그인이 안 되었을 때 이동할 경로
 */
const ProtectedRoute = ({ isLoggedIn, redirectPath = '/signin' }) => {
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
