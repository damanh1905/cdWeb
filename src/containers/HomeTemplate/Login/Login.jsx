import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login.module.scss";
import "./login.scss";
const Login = () => {
  const formik = useFormik({
    initialValues: {

      name: "",

      password: "",

    },

    onSubmit: (values) => {
      window.alert("Form submitted");
      console.log(values);
    },
  });

  return (
      <div className="container-Login">
<div className="Login">
          <header>Login</header>
          <section>
      <form className="infoform" onSubmit={formik.handleSubmit}>
        <label> Username </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Enter your name"
        />
        {formik.errors.name && (
          <p className="errorMsg"> {formik.errors.name} </p>
        )}

        <label> Password </label>
        <input
          type="text"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Enter your password"
        />

        <button type="submit"> Login </button>
      </form>
    </section>
    </div>
      </div>
  );
};

export default Login;