import Logo from "@/components/shared/navbar/Logo";
import Link from "next/link";
import RegisterForm from "../_components/register/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div>
            <Logo />

            <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
              Create Account
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Join GearUp and start renting gear
            </p>
          </div>

          <RegisterForm />

          {/* Sign In Link */}
          <p className="text-center text-gray-600 text-sm mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
