import PlantCard from '@/components/ui/plantcard';
import Plant from '@/lib/models/Plant';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AddPlantCard from '@/components/ui/addPlantCard';
import CardFlip from '@/components/ui/cardFlip';

//TODO: 
// Add a button to delete plant
// Add a plant details page
// Custom plant art for each type of plant
// Modal to add plant
// Login page and supabase stuff

const succulent = new Plant(
  "Succulent",
  "Succulent",
  "2 weeks",
  "indirect sunlight",
  "4 inches",
  12
)
const cactus = new Plant(
  "Cactus",
  "Cactus",
  "3 weeks",
  "direct sunlight",
  "8 inches",
  15
)
const bonsai = new Plant(
  "Bonsai Tree",
  "Bonsai Tree",
  "3 days",
  "bright, direct sunlight",
  "6 inches",
  5
)

const plants = [succulent, cactus, bonsai]

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center p-24 bg-warmBeige min-h-screen">
      <h1 className="text-4xl font-bold text-mutedBrown mb-4">Green Thumb: Plant Tracker</h1>
        <Carousel opts={{
          align: "start",
        }} className="md:w-full lg:w-4/5 p-6 min-h-[70vh] flex items-center">
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
            <AddPlantCard plant={bonsai} />
            </div>
              
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center md:basis-1/2 lg:basis-1/3">
            <div className="h-[82%]">
              <CardFlip />
            </div>
              
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-softGreen"/>
          <CarouselNext className="bg-softGreen"/>
        </Carousel>
    </div>
  )
}