/* eslint-disable @typescript-eslint/no-explicit-any */
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Edit2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { addGear, updateGear } from "../../_actions/dashboardActions";
import { IProviderGear } from "../../_types/gearTypes";

const AddGearModal = ({
  categories,
  isEditMode = false,
  gear,
}: {
  categories: any;
  isEditMode?: boolean;
  gear?: IProviderGear;
}) => {
  const [open, setOpen] = useState(false);
  const actionGear = isEditMode
    ? updateGear.bind(null, gear?.id as string)
    : addGear;

  const [state, action, pending] = useActionState(actionGear, false);
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

  let description;

  if (isEditMode && gear?.description) {
    description = gear?.description;
  } else {
    description = "";
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        {isEditMode ? (
          <p className="p-1.5 hover:bg-gray-100 rounded text-gray-600 hover:text-gray-900 cursor-pointer">
            <Edit2 size={16} />
          </p>
        ) : (
          <p className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
            Add Gear
          </p>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditMode ? "Edit Gear" : "Add Gear"}</DialogTitle>
          <DialogDescription>
            {isEditMode
              ? "Edit your gear details"
              : "Add a new gear to your inventory"}
          </DialogDescription>
        </DialogHeader>

        <form action={action} className="space-y-6">
          {/* Gear Title */}
          <div className="space-y-2">
            <Label htmlFor="title">
              Gear Title <span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              name="title"
              defaultValue={isEditMode ? gear?.title : ""}
              placeholder="e.g., Camping Tent"
              className="border-gray-300"
            />
          </div>

          {/* description */}
          <div className="space-y-2">
            <Label htmlFor="title">Gear Description</Label>
            <Input
              id="description"
              name="description"
              defaultValue={description || ""}
              placeholder="anything here..."
              className="border-gray-300"
            />
          </div>

          {/* Brand */}
          <div className="space-y-2">
            <Label htmlFor="brand">
              Brand <span className="text-red-500">*</span>
            </Label>
            <Input
              id="brand"
              name="brand"
              defaultValue={isEditMode ? gear?.brand : ""}
              placeholder="e.g., Coleman"
              className="border-gray-300"
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category">
              Category <span className="text-red-500">*</span>
            </Label>
            <Select name="category">
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category: any) => (
                  <SelectItem
                    key={category.id}
                    value={isEditMode ? gear?.categories.id : category.id}
                  >
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price and Stock Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pricePerDay">
                Price Per Day ($) <span className="text-red-500">*</span>
              </Label>
              <Input
                id="pricePerDay"
                name="pricePerDay"
                type="number"
                defaultValue={isEditMode ? gear?.pricePerDay : ""}
                placeholder="70"
                min="0"
                step="0.01"
                className="border-gray-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="stock">
                Stock Quantity <span className="text-red-500">*</span>
              </Label>
              <Input
                id="stock"
                name="stock"
                type="number"
                placeholder="400"
                defaultValue={isEditMode ? gear?.stock : ""}
                min="0"
                className="border-gray-300"
              />
            </div>
          </div>

          {/* Image URL (Alternative) */}
          <div className="space-y-2">
            <Label htmlFor="imageUrl">Image URL (Alternative)</Label>
            <Input
              id="imageUrl"
              name="image"
              placeholder="https://example.com/image.jpg"
              className="border-gray-300"
              defaultValue={isEditMode ? gear?.image : ""}
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
              {isEditMode
                ? pending
                  ? "Updating..."
                  : "Update Gear"
                : pending
                  ? "Adding..."
                  : "Add Gear"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddGearModal;
