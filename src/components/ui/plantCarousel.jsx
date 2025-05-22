'use client'

import { useState } from 'react'
import AddPlantCard from '@/components/ui/addPlantCard'
import CardFlip from '@/components/ui/cardFlip'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Plant from '@/lib/models/Plant'
import { use } from 'react'



const initialPlants = [
    new Plant("/icons/succulent.png", "Succulent", "Succulent", "2 weeks", "indirect sunlight"),
    new Plant("/icons/cactus.png", "Cactus", "Cactus", "3 weeks", "direct sunlight"),
    new Plant("/icons/bonsai.png", "Bonsai", "Bonsai", "7 days", "direct sunlight"),
    new Plant("/icons/succulent.png", "Succulent", "Succulent", "2 weeks", "indirect sunlight"),
    new Plant("/icons/cactus.png", "Cactus", "Cactus", "3 weeks", "direct sunlight"),
    new Plant("/icons/bonsai.png", "Bonsai", "Bonsai", "7 days", "direct sunlight")
  ]
  

export default function PlantCarousel({ iPlants }) {
  const data = use(iPlants)
  const initialPlants = data.map(
    (row) =>
      new Plant(
        `${row.image}`,
        row.name,
        row.species,
        `${row.watering_interval_days} days`,
        row.sunlight,
        row.last_watered,
        row.time_watered
      )
  )
  const [plants, setPlants] = useState(initialPlants)

  const handleAddPlant = (img, name, species, watering, light) => {
    const newPlant = new Plant(img, name, species, watering, light)
    setPlants(prev => [...prev, newPlant])
  }
  
    const basis =
      plants.length === 1
        ? "basis-full"
        : plants.length === 2
        ? "md:basis-1/2"
        : "md:basis-1/2 lg:basis-1/3";
  

  return (
    <Carousel opts={{ align: "start" }} className="md:w-full lg:w-4/5 3xl:w-3/5 min-h-[70vh] p-6 flex justify-center items-center border-2">
      <CarouselContent className="min-h-[65vh] 3xl:min-h-[50vh] w-full -ml-4">
        {plants.map((plant, index) => (
          <CarouselItem key={index} className={`pl-4 flex items-center justify-center ${basis}`}>
            <div className="h-[82%]">
              <CardFlip plant={plant} />
            </div>
          </CarouselItem>
        ))}
        <CarouselItem className={`pl-4 flex items-center justify-center ${basis}`}>
          <div className="h-[82%]">
            <AddPlantCard onClick={handleAddPlant} />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="bg-softGreen" />
      <CarouselNext className="bg-softGreen" />
    </Carousel>
  )
}
