import Logo from "@/components/shared/navbar/Logo";
import Link from "next/link";
import LoginForm from "../_components/login/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col justify-center items-center gap-4 my-8">
            <Logo />
            <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
              Sign In
            </h1>
          </div>

          <LoginForm />

          <p className="text-center text-gray-600 text-sm mt-6">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
