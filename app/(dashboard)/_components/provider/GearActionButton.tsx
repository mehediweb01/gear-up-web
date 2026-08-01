/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deleteGear } from "../../_actions/dashboardActions";
import { IProviderGear } from "../../_types/gearTypes";
import AddGearModal from "./AddGearModal";

const GearActionButton = ({
  gear,
  categories,
}: {
  gear: IProviderGear;
  categories: any;
}) => {
  const router = useRouter();

  const handleAction = async (action: string) => {
    switch (action) {
      case "delete":
        await deleteGear(gear.id);
        toast.success("Gear deleted successfully");
        router.refresh();
        break;

      default:
        break;
    }
  };

  return (
    <div className="flex gap-2">
      <AddGearModal isEditMode={true} gear={gear} categories={categories} />
      <button
        onClick={() => handleAction("delete")}
        className="p-1.5 hover:bg-gray-100 rounded text-gray-600 hover:text-red-600 cursor-pointer"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};

export default GearActionButton;
