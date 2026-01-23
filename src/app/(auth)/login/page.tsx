import AuthBrand from "@/features/auth/components/auth-brand";
import LoginCard from "@/features/auth/components/login-card";
import FotterCard from "@/features/auth/components/footer-card";
import AuthForm from "@/features/auth/components/auth-form";

export default function LoginPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <AuthBrand />
        <LoginCard>
          <AuthForm />
        </LoginCard>
        <FotterCard />
      </div>
    </>
  );
}
