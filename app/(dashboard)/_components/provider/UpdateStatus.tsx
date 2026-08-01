/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import OrderStatusModal from "./OrderStatusModal";

const UpdateStatus = ({ order }: { order: any }) => {
  const [open, setOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [status, setStatus] = useState("");

  return (
    <>
      <div className="mt-3">
        <button
          disabled={order.status === "RETURNED"}
          onClick={() => {
            setSelectedOrder(order);
            setStatus(order.status);
            setOpen(true);
          }}
          className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Update Status
        </button>
      </div>
      {open && (
        <OrderStatusModal
          open={open}
          setOpen={setOpen}
          selectedOrder={selectedOrder}
          status={status}
          setStatus={setStatus}
        />
      )}
    </>
  );
};

export default UpdateStatus;
