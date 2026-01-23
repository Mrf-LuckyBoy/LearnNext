import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginCardProps } from "../types";

export default function LoginCard({
  title,
  description,
  children,
}: LoginCardProps) {
  return (
    <>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center">
            {title || "Welcome back"}
          </CardTitle>
          <CardDescription className="text-center">
            {description || "Sign in to continue to your dashboard"}
          </CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter>
          <p className="text-xs text-muted-foreground ">
            By signing in, you agree to our{" "}
            <span className="underline underline-offset-1">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="underline underline-offset-1">
              {" "}
              Privacy Policy{" "}
            </span>
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
