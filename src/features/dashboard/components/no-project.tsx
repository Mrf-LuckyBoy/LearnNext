import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";

export default function NoProject() {
  return (
    <>
      <Card>
        <CardContent className="text-center py-20">
          <p className="text-2xl"> No project found</p>
          <p className="text-sm text-muted-foreground">
            Create your first project to get started
          </p>
          <Button className="mt-4">
            <Plus /> Create Project
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
