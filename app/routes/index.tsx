import { Button } from '@mui/material';
import { useNavigate } from '@remix-run/react';
import { useEffect } from 'react';

export default function Index() {
  const navigate = useNavigate();
 
  return (
    <Button variant="outlined" onClick={() => navigate('/login')}>
      login
    </Button>
  );
}
