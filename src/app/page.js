import PlantCard from '@/components/ui/plantcard'
import Plant from '@/lib/models/Plant'


const bonsai = new Plant(
  "Bonsai Tree",
  "Bonsai Tree",
  "3 days",
  "bright, direct sunlight",
  "6 inches",
  5
)
console.log("------ Page.js -------")
console.log(bonsai instanceof Plant)
console.log(bonsai.timeSinceLastWatering())
console.log("---------------------")

export default function Page() {
  // Make a basic web page for a plant tracker app
  // with a title and a description
  return (
    <div className="flex flex-col items-center justify-center p-24 bg-warmBeige">
      <h1 className="text-4xl font-bold text-mutedBrown mb-4">Plant Tracker</h1>
      <PlantCard plant={bonsai} />
    </div>
  )
}