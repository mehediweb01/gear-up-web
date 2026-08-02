import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CategoryCardProps } from "../../_types/categoryTypes";

const CategoryCard = ({ category }: { category: CategoryCardProps }) => {
  return (
    <div>
      <Card className="group h-full border transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
        <CardContent className="flex flex-col items-center gap-4 p-4 text-center">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold capitalize">
              {category.name}
            </h3>

            <p className="text-sm text-muted-foreground">
              {category.description ??
                `Explore all ${category.name} gear rentals.`}
            </p>
          </div>

          <Badge variant="secondary" className="mt-2">
            {category._count.gears}{" "}
            {category._count.gears === 1 ? "Gear" : "Gears"}
          </Badge>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryCard;
