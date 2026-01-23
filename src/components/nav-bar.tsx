import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-50 p-4 flex items-center justify-between underline-offset-8 backdrop-blur-md border-b-2">
        <h1 className="font-bold">TaskFlow</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/108624085?v=4" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>Atsawa.C</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className="px-2 py-1.5">
              <p className="text-sm font-medium truncate w-33">
                Atsawa Chakhonmettakul
              </p>
              <p className="text-xs text-muted-foreground">
                fkoo6950@gmail.com
              </p>
            </div>
            <DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              {/* <Icon name="logout" className="mr-2 h-4 w-4" /> */}
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    </>
  );
}
