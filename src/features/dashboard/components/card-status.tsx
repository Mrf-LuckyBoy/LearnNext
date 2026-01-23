import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusCardProps } from "../types";

export default function CardStatus({ title, count }: StatusCardProps) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-muted-foreground text-sm">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{count}</p>
        </CardContent>
      </Card>
    </>
  );
}
