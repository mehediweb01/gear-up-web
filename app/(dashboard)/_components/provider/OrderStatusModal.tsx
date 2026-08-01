/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { updateOrderStatus } from "../../_actions/dashboardActions";

const STATUS = [
  "PLACED",
  "CONFIRMED",
  "PAID",
  "PICKED_UP",
  "RETURNED",
  "CANCELLED",
];

const OrderStatusModal = ({
  open,
  setOpen,
  selectedOrder,
  status,
  setStatus,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedOrder: any;
  status: string;
  setStatus: (status: string) => void;
}) => {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const handleStatusChange = async () => {
    setPending(true);
    const res = await updateOrderStatus(selectedOrder.id, status);

    if (res.success) {
      router.refresh();
      toast.success(res.message);
      setPending(false);
      setOpen(false);
    }

    setPending(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Order Status</DialogTitle>
          </DialogHeader>

          {selectedOrder && (
            <div className="space-y-4">
              <div>
                <p className="font-medium">{selectedOrder.gear.title}</p>
                <p className="text-sm text-muted-foreground">
                  {selectedOrder.customer.name}
                </p>
              </div>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full rounded-md border p-2"
              >
                {STATUS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-md border px-4 py-2"
                >
                  Cancel
                </button>

                <button
                  onClick={handleStatusChange}
                  disabled={pending}
                  className="rounded-md bg-blue-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  {pending ? "Updating..." : "Update"}
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OrderStatusModal;
