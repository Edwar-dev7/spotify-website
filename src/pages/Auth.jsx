import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import "./Auth.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      if (isLogin) {
        // Inicio de sesión
        await signInWithEmailAndPassword(auth, email, password);
        alert(`Bienvenido, ${email}`);
        navigate("/"); // redirige al home
      } else {
        // Registro
        await createUserWithEmailAndPassword(auth, email, password);
        alert(`Cuenta creada: ${email}`);
        setIsLogin(true);
      }
    } catch (error) {
      console.error("Firebase Auth Error:", error);
      alert("Error: " + error.message);
    }
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>
        {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        <input
          type="email"
          placeholder="Correo electrónico"
          {...register('email', { required: 'Correo requerido' })}
          style={styles.input}
        />
        {errors.email && <p style={styles.error}>{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Contraseña"
          {...register('password', {
            required: 'Contraseña requerida',
            minLength: { value: 6, message: 'Mínimo 6 caracteres' },
          })}
          style={styles.input}
        />
        {errors.password && <p style={styles.error}>{errors.password.message}</p>}

        <button type="submit" style={styles.button}>
          {isLogin ? 'Entrar' : 'Registrarse'}
        </button>
      </form>

      <p onClick={() => setIsLogin(!isLogin)} style={styles.toggle}>
        {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
      </p>
    </section>
  );
}

const styles = {
  section: {
    padding: '2rem',
    color: 'white',
    backgroundColor: '#181818',
    minHeight: 'calc(100vh - 64px)',
  },
  title: {
    fontSize: '1.5rem',
    color: '#1DB954',
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '400px',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  error: {
    color: 'red',
    fontSize: '0.8rem',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#1DB954',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  toggle: {
    marginTop: '1rem',
    cursor: 'pointer',
    color: '#bbb',
    fontSize: '0.9rem',
    textDecoration: 'underline',
  },
};
