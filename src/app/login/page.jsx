import { LoginForm } from "@/components/login-form"
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

import { login } from "./actions";

export default async function LoginPage() {
  const supabase = await createClient()
  
  const {data, error} = await supabase.auth.getUser()
  if (!error || data?.user) {
    redirect('/')
  }

  return (
    <div
      className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm login={login}/>
      </div>
    </div>
  );
}
