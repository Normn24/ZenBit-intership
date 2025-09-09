import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { setCredentials } from "../store/authSlice";
import { useLoginMutation } from "../store/apiSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { authValidationSchema } from "../validation/validationSchemas";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading, isSuccess, data, error }] = useLoginMutation();

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setCredentials({ token: data.accessToken }));
      navigate("/");
    }
  }, [isSuccess, data, dispatch, navigate]);
  return (
    <div className="flex h-screen bg-gray-100">
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center h-full"
        style={{ backgroundImage: `url('/login-bg.jpg')` }}
      ></div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 text-left">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-5 text-[#172234]">Login</h2>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={authValidationSchema}
            onSubmit={async (values) => {
              await login(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col space-y-5">
                {error && "data" in error && (
                  <p className="text-red-500">
                    {error.data?.message || "Wrong email or password"}
                  </p>
                )}

                <div>
                  <label
                    className="block text-black text-sm mb-1"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className={`w-full px-5 py-3 rounded-md bg-[#E0E0E0] text-[#172234] focus:outline-none ${
                      errors.email && touched.email
                        ? "border border-red-500"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div>
                  <label
                    className="block text-black text-sm mb-1"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className={`w-full px-5 py-3 rounded-md bg-[#E0E0E0] text-[#172234] focus:outline-none ${
                      errors.password && touched.password
                        ? "border border-red-500"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                  <div className="text-right mt-2.5">
                    <a href="#" className="text-sm text-[#B29F7E]">
                      Forgot password?
                    </a>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#B29F7E] text-white font-bold py-2 px-4 rounded-md hover:bg-[#b5956f] disabled:bg-gray-400"
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </button>

                <p className="text-center text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-[#B29F7E] font-bold">
                    Sign Up
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
