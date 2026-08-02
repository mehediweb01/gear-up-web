"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { createReview } from "../_actions/reviewActions";

const ReviewCreateModal = ({ gearId }: { gearId: string }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [state, action, pending] = useActionState(
    createReview.bind(null, gearId),
    false,
  );

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message);

      function fn() {
        setOpen(false);
        router.refresh();
      }

      fn();
    }

    if (!state.success) {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <p className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          Add review
        </p>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add a review</DialogTitle>
          <DialogDescription>
            Please fill out the form below to add a review
          </DialogDescription>
        </DialogHeader>

        <form action={action} className="space-y-6">
          {/* comment */}
          <div className="space-y-2">
            <Label htmlFor="comment">Comment</Label>
            <Input
              id="comment"
              name="comment"
              type="text"
              placeholder="anything here..."
              className="border-gray-300"
            />
          </div>

          {/* rating */}
          <div className="space-y-2">
            <Label htmlFor="rating">Rating</Label>
            <Input
              id="rating"
              type="number"
              name="rating"
              placeholder="anything here..."
              className="border-gray-300"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-end pt-4 border-t">
            <button
              type="button"
              className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={pending}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              {pending ? "Adding..." : "Add Review"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewCreateModal;
