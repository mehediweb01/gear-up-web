"use client";

import { Edit2, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deleteGear } from "../../_actions/dashboardActions";

const GearActionButton = ({ gearId }: { gearId: string }) => {
  const router = useRouter();

  const handleAction = async (action: string) => {
    switch (action) {
      case "edit":
        break;

      case "delete":
        await deleteGear(gearId);
        toast.success("Gear deleted successfully");
        router.refresh();
        break;

      default:
        break;
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleAction("edit")}
        className="p-1.5 hover:bg-gray-100 rounded text-gray-600 hover:text-gray-900 cursor-pointer"
      >
        <Edit2 size={16} />
      </button>
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
