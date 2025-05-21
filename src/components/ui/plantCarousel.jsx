'use client'

import { useState } from 'react'
import PlantCard from '@/components/ui/plantcard'
import AddPlantCard from '@/components/ui/addPlantCard'
import CardFlip from '@/components/ui/cardFlip'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Plant from '@/lib/models/Plant'

const initialPlants = [
  new Plant("/icons/succulent.png", "Succulent", "Succulent", "2 weeks", "indirect sunlight"),
  new Plant("/icons/cactus.png", "Cactus", "Cactus", "3 weeks", "direct sunlight"),
  new Plant("/icons/bonsai.png", "Bonsai Tree", "Bonsai Tree", "3 days", "bright, direct sunlight"),
]

export default function PlantCarousel() {
  const [plants, setPlants] = useState(initialPlants)

  const handleAddPlant = (img, name, species, watering, light) => {
    const newPlant = new Plant(img, name, species, watering, light)
    setPlants(prev => [...prev, newPlant])
  }

  return (
    <Carousel opts={{ align: "start" }} className="md:w-full lg:w-4/5 p-6 min-h-[70vh] flex items-center">
      <CarouselContent className="min-h-[65vh]">
        {plants.map((plant, index) => (
          <CarouselItem key={index} className="flex items-center justify-center md:basis-1/2 lg:basis-1/3">
            <div className="h-[82%]">
              <PlantCard plant={plant} />
            </div>
          </CarouselItem>
        ))}
        <CarouselItem className="flex items-center justify-center md:basis-1/2 lg:basis-1/3">
          <div className="h-[82%]">
            <AddPlantCard onClick={handleAddPlant} />
          </div>
        </CarouselItem>
        <CarouselItem className="flex items-center justify-center md:basis-1/2 lg:basis-1/3">
          <div className="h-[82%]">
            <CardFlip />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="bg-softGreen" />
      <CarouselNext className="bg-softGreen" />
    </Carousel>
  )
}
