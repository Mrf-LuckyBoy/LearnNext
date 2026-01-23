"use client"

import GoogleIcon from "@/components/google-icon";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation'

export default function AuthForm() {
  const router = useRouter();

  return (
    <>
      <form>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Button
              variant="outline"
              className="inline-flex w-full items-center justify-center space-x-2"
              asChild
              onClick={() => {router.push("/dashboard")}}
            >
              <a>
                <GoogleIcon className="size-5" aria-hidden={true} />
                <span className="text-sm font-medium">Sign in with Google</span>
              </a>
            </Button>
            <div className="flex items-center gap-2 my-2">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground">OR</span>
              <Separator className="flex-1" />
            </div>
          </div>
          <div className="grid gap-2">
            <Input type="email" placeholder="Enter your email" disabled />
            <Button type="submit" disabled>
              Continue with Email
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
