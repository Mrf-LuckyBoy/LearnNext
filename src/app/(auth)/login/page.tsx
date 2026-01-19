// import LoginButton from "@/components/LoginButon";

import {
  Card,
  //   CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  //   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

// import {
//     Input
// } from "@/components/ui/input";

const GoogleIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z" />
  </svg>
);

export default function LoginPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl"> TaskFlow </h1>
        <p className="text-muted-foreground pb-4"> Manage your projects with ease</p>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-center">Welcome back</CardTitle>
            <CardDescription className="text-center">
              Sign in to continue to your dashboard
            </CardDescription>
            {/* <CardAction>Card Action</CardAction> */}
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Button
                    variant="outline"
                    className="inline-flex w-full items-center justify-center space-x-2"
                    asChild
                  >
                    <a href="#">
                      <GoogleIcon className="size-5" aria-hidden={true} />
                      <span className="text-sm font-medium">
                        Sign in with Google
                      </span>
                    </a>
                  </Button>
                  <div className="flex items-center gap-2 my-2">
                    <Separator className="flex-1" />
                    <span className="text-xs text-muted-foreground">OR</span>
                    <Separator className="flex-1" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Input type="email" placeholder="Enter your email" />
                  <Button type="submit">Continue with Email</Button>
                </div>
              </div>
            </form>
          </CardContent>
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
        <Label className="mt-4"><span className="text-muted-foreground">Need help?</span> Contact Support</Label>
      </div>
    </>
  );
}
