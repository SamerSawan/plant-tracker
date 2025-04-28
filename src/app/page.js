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

const plants = [succulent]

export default function Page() {
  // Make a basic web page for a plant tracker app
  // with a title and a description
  return (
    <div className="flex flex-col items-center justify-center p-24 bg-warmBeige">
      <h1 className="text-4xl font-bold text-mutedBrown mb-4">Plant Tracker</h1>
      <Carousel opts={{
        align: "start",
      }} className="w-full">
        <CarouselContent>
          {plants.map((plant, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <PlantCard plant={plant} />
            </CarouselItem>
          ))}
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <AddPlantCard plant={bonsai} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="bg-softGreen"/>
        <CarouselNext className="bg-softGreen"/>
      </Carousel>
      <button className="fixed bottom-8 right-8 bg-goldenYellow text-mutedBrown p-4 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-goldenYellow/80 transition hover:cursor-pointer">
        +
      </button>
    </div>
  )
}