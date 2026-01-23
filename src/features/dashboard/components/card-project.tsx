import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCardProps } from "../types";
import { StatusStyles } from "@/lib/status";

export default function CardProject({
  title,
  description,
  status,
  date,
}: ProjectCardProps) {
  return (
    <>
      <Card>
        <CardHeader className="font-medium">{title}</CardHeader>
        <CardContent className="text-muted-foreground">
          <p>{description}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Badge className={StatusStyles[status]}>
            {" "}
            {status}
          </Badge>
          <p className="text-muted-foreground text-sm">{date}</p>
        </CardFooter>
      </Card>
    </>
  );
}
