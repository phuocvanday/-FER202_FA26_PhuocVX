import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { APP_NAME } from '../../data/menu';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, isLoggedIn, logout } = useAuth();

  return (
    <Navbar bg={theme === 'dark' ? 'dark' : 'primary'} variant="dark">
      <Container>
        <Navbar.Brand>{APP_NAME}</Navbar.Brand>
        <div className="d-flex align-items-center gap-2">
          <Button size="sm" variant="outline-light" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Tối' : '☀️ Sáng'}
          </Button>
          {isLoggedIn ? (
            <>
              <Navbar.Text className="text-white">{`Xin chào, ${user.name}`}</Navbar.Text>
              <Button size="sm" variant="light" onClick={logout}>Đăng xuất</Button>
            </>
          ) : (
            <Navbar.Text className="text-white-50">Chưa đăng nhập</Navbar.Text>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
