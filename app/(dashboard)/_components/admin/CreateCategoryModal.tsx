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
import { createCategory } from "../../_actions/dashboardActions";

const CreateCategoryModal = () => {
  const [open, setOpen] = useState(false);

  const [state, action, pending] = useActionState(createCategory, false);
  const router = useRouter();

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      const fn = () => {
        setOpen(false);
        router.refresh();
      };
      fn();
      toast.success(state.message);
    }

    if (state.error) {
      toast.error(state.error);
    }
  }, [state, router]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <p className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          Add Category
        </p>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
          <DialogDescription>Add a new category</DialogDescription>
        </DialogHeader>

        <form action={action} className="space-y-6">
          {/* name */}
          <div className="space-y-2">
            <Label htmlFor="name">
              Category Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="category name..."
              className="border-gray-300"
              required
            />
          </div>

          {/* description */}
          <div className="space-y-2">
            <Label htmlFor="title">Category Description</Label>
            <Input
              id="description"
              name="description"
              placeholder="anything here..."
              className="border-gray-300"
              required={false}
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
              {pending ? "Adding Category..." : "Add Category"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCategoryModal;
