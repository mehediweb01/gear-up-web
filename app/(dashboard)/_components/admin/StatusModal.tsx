"use client";

type StatusModalProps = {
  isOpen: boolean;
  onClose: () => void;
  currentStatus: string;
  userId: string;
};

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { changeUserStatus } from "../../_actions/dashboardActions";

export default function StatusModal({
  isOpen,
  onClose,
  currentStatus,
  userId,
}: StatusModalProps) {
  const [status, setStatus] = useState(currentStatus.toUpperCase());
  const [pending, setPending] = useState(false);
  const router = useRouter();

  const action = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    const res = await changeUserStatus(userId, status);

    if (res.success) {
      toast.success(res.message);
      router.refresh();
      setPending(false);
      onClose();
    }

    setPending(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Update User Status</h2>

          <button
            onClick={onClose}
            className="text-2xl leading-none text-gray-500 hover:text-black"
          >
            &times;
          </button>
        </div>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">
              User Status
            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              name="status"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            >
              <option value="ACTIVE">Active</option>
              <option value="SUSPENDS">Suspended</option>
            </select>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border px-4 py-2 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              onClick={(e) => action(e)}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              {pending ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
