import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { signout } from './actions'
import PlantCarousel from '@/components/ui/plantCarousel'
import { Button } from '@/components/ui/button'

export default async function Page() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div className="flex flex-col items-center justify-center p-24 bg-warmBeige min-h-screen">
      <h1 className="text-4xl font-bold text-mutedBrown mb-4">Green Thumb: Plant Tracker</h1>
      <PlantCarousel />
      <form className="absolute top-4 right-4">
        <Button className="hover:cursor-pointer" formAction={signout} variant="destructive" size="sm">Sign out</Button>
      </form>
    </div>
  )
}
