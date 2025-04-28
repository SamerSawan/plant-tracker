import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function PlantCard({ plant}) {
  console.log(plant); // Should log the `bonsai` object
  console.log(plant.timeSinceLastWatering());
  return (
    <Card className="w-[380px] bg-softGreen border border-softGreen">
      <CardHeader>
        <CardTitle className="text-mutedBrown"> {plant.name} </CardTitle>
        <CardDescription className=""> Here's how your {plant.species} is doing </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <Image 
          src="/pixel_art_plant.png"
          alt="Pixel Art Plant"
          width={250}
          height={250}
        />
        <div className="w-full text-mutedBrown">
          <p> Water every {plant.waterFrequency}. Time since last watering: {plant.timeSinceLastWatering()}</p>
          <p> Prefers {plant.sunlightPreference} </p>
          <p> {plant.height} tall and has {plant.leafCount} leaves. </p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <Button className="bg-goldenYellow text-mutedBrown hover:cursor-pointer hover:bg-goldenYellow hover:opacity-80"> Water Plant </Button>
      </CardFooter>
    </Card>
  )
}