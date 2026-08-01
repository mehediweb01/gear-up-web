"use client";
import { useState } from "react";
import StatusModal from "./StatusModal";

const UserStatusChange = ({
  currentStatus,
  userId,
}: {
  currentStatus: string;
  userId: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
        onClick={() => setIsOpen(true)}
      >
        Edit
      </button>
      {isOpen && (
        <StatusModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          currentStatus={currentStatus}
          userId={userId}
        />
      )}
    </>
  );
};

export default UserStatusChange;
