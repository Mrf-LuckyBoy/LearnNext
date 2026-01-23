import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCardListProps } from "../types";
import { StatusStyles } from "@/lib/status";

export default function CardProjectList({ projects }: ProjectCardListProps) {
  return (
    <Card>
      {projects.map((item, index) => (
        <CardContent className="flex justify-between border-b-2" key={index}>
          <div className="mb-2">
            <div className="flex gap-4">
              <p className="font-medium">{item.title}</p>
              <Badge className={StatusStyles[item.status]}>{item.status}</Badge>
            </div>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs">{item.date}</p>
          </div>
        </CardContent>
      ))}
    </Card>
  );
}
