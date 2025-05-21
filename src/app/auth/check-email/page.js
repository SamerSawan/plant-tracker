import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server';

export default async function Page() {

  const supabase = await createClient()

  const {data, error} = await supabase.auth.getUser()
  if (!error || data?.user) {
    redirect('/')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-warmBeige px-6 text-center">
      <div className="max-w-md bg-white rounded-xl shadow-md p-8 border border-softGreen">
        <h1 className="text-3xl font-bold text-mutedBrown mb-4">Almost there! 🌱</h1>
        <p className="text-mutedBrown text-base mb-6">
          We've sent a confirmation link to your email. Please check your inbox and verify your account to continue using Green Thumb.
        </p>

        <img
          src="/email_illustration.png" // Optional cozy/pixel-style email image
          alt="Check your email"
          className="w-40 h-auto mx-auto mb-6"
        />

        <p className="text-sm text-softBlue">
          Didn’t get the email? Make sure to check your spam folder, or try signing up again.
        </p>
      </div>
    </div>
  )
}