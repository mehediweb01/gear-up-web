"use client";

import { Lock, Mail } from "lucide-react";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { loginAction } from "../../_actions/authActions";

const LoginForm = () => {
  const [state, action, pending] = useActionState(loginAction, false);

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message || "Successfully logged in");
    }

    if (!state.success) {
      toast.error(state.message || "Something went wrong");
    }
  }, [state]);

  return (
    <form className="space-y-4" action={action}>
      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="email"
            placeholder="you@example.com"
            name="email"
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="password"
            placeholder="••••••••"
            name="password"
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Sign In Button */}
      <button
        type="submit"
        className="w-full py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={pending}
      >
        {pending ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
};

export default LoginForm;
