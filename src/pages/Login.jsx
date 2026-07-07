import React from 'react';
import LoginDemo from '../components/LoginDemo';

const Login = () => {
  return (
    <main className="flex-grow flex items-center justify-center bg-slate-50 py-16 px-4">
      <div className="w-full">
        {/* Render the Login Demo Component */}
        <LoginDemo />
      </div>
    </main>
  );
};

export default Login;
