import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="text" placeholder="password" />
        <button>Login</button>
        <p>There is error</p>
        <span>
          Don&apos;t you have account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
