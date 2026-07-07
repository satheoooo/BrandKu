import { useState } from 'react';

export const useLogin = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = (credentials) => {
    setLoading(true);
    // Simulasikan delay API call selama 1.5 detik
    setTimeout(() => {
      // Mengambil bagian sebelum '@' di email sebagai nama default untuk demo
      const name = credentials.email.split('@')[0];
      const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
      
      setUser({
        name: capitalizedName,
        email: credentials.email,
      });
      setLoading(false);
    }, 1500);
  };

  return { user, loading, login };
};
