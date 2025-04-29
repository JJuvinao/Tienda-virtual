import { useNavigate } from 'react-router-dom';
import './stylesApi.css';

export default function Inicio() {

    const  navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRegistro = () => {
        navigate('/registro');
    }

    return (
        <div className="inicio-container">
            <h1 className="inicio-title">API Inicio</h1>
            <div className="inicio-buttons">
                <button className="inicio-button" onClick={handleLogin}>Login</button>
                <button className="inicio-button" onClick={handleRegistro}>Registro</button>
            </div>
        </div>
    );
}