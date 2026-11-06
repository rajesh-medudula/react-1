import { useForm } from "react-hook-form";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";

import "./Auth.css";

export const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {authState, setAuthState, user, setUser, status, setStatus} = useAuth();

  const navigate = useNavigate();

  const onSubmit = (data) => {
   
    console.log(user.email, user.pass);

    if (data.email && data.password) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const newUser = {email: data.email, pass: data.password}
      
      if (users.find(user => user.email === data.email && user.pass === data.password) && authState === "login" ) {
        localStorage.setItem("currentEmail", JSON.stringify(data.email));
         setUser({ email: data.email, pass: data.password, isAuth: true });
        navigate("/");
      } else if (users.find(user => user.email === data.email && user.pass !== data.password) && authState === "login") {
        setStatus({message: "Invalid Email or Password"})
      } else if (users.find(user => user.email === data.email) && authState === "signup") {
        setStatus({message: "Email already exist"});
      } else if (!users.find(user => user.email === data.email) && authState === "login") {
        setStatus({message: "Account not exist!"})
      } else {
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentEmail", JSON.stringify(data.email));
         setUser({ email: data.email, pass: data.password, isAuth: true });
        navigate("/");
      }
    }
  };

  const toggleAuthState = () => {
    authState === "signup" ? setAuthState("login") : setAuthState("signup");
  };

  

  return (
      <section>
        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          <h1>{authState === "signup" ? "Sign Up" : "Login"}</h1>
          <div className="auth-form__input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              {...register("email", { required: "Email required." })}
            ></input>
            {errors.email && (
              <span className="auth-form__error">{errors.email.message}</span>
            ) || status && <span className="auth-form__error">{status.message}</span>}
          </div>

          <div className="auth-form__input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              {...register("password", {
                required: "Password required",
                minLength: {
                  value: 4,
                  message: "Password must be minimum 4 characters",
                },
                maxLength: {
                  value: 12,
                  message: "Password should be maximum 12 characters",
                },
              })}
            ></input>
            {errors.password && (
              <span className="auth-form__error">
                {errors.password.message}
              </span>
            )}
          </div>
          <button type="submit" className="auth-signup primary-btn">
           {authState === "signup" ? "Sign Up" : "Login"}
          </button>
        </form>

        <div className="divider"></div>

        <div className="auth-secondary">
          {authState === "signup" ? (
            <p>
              Already have an account?{" "}
              <span onClick={toggleAuthState}>Login</span>{" "}
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <span onClick={toggleAuthState}>Sign Up</span>
            </p>
          )}
        </div>
      </section>
  );
};
