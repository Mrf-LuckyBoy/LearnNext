import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { List, Grid2X2, Plus } from "lucide-react";

export default function HeaderDashboard({
  isGrid,
  onViewChange,
}: {
  isGrid: boolean;
  onViewChange: (isGrid: boolean) => void;
}) {
  return (
    <>
      <div className="flex justify-between">
        <Field orientation="horizontal" className="max-w-sm">
          <Input type="search" placeholder="Search projects..." />
        </Field>
        <div className="flex justify-between gap-3">
          <ButtonGroup
            orientation="horizontal"
            aria-label="Media controls"
            className="h-fit"
          >
            <Button
              variant={isGrid ? "default" : "outline"}
              size="icon"
              onClick={() => onViewChange(true)}
            >
              <Grid2X2 />
            </Button>
            <Button
              variant={!isGrid ? "default" : "outline"}
              size="icon"
              onClick={() => onViewChange(false)}
              className={!isGrid ? "font-bold" : ""}
            >
              <List />
            </Button>
          </ButtonGroup>
          <Button>
            <Plus /> New Project
          </Button>
        </div>
      </div>
    </>
  );
}
