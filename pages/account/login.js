import next from "next";
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
      <p>
        Don't have an account?
        <Link href="/account/register"> Register</Link>
      </p>

      <Link href="/" alt="Home page">
        Back to Home page
      </Link>
    </div>
  );
};

export default Login;
