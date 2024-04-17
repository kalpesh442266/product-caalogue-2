import { RouterProvider } from 'react-router-dom';
import './App.css';
import { UserAuthProvider } from './contexts/UserAuthContext';
import useRouter from './routes';

const Router = () => {
  const router = useRouter();
  return (
    <RouterProvider router={router} />
  )
}

function App() {
  return (
    <UserAuthProvider>
      <Router />
    </UserAuthProvider>
  );
}



export default App;
