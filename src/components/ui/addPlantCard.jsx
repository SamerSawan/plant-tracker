import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  export default function AddPlantCard({ onAddPlant }) {
    return (
      <Card
        className="flex flex-col items-center justify-center border-2 border-softGreen h-full bg-opacity-0 cursor-pointer hover:bg-softGreen/20 transition"
        onClick={onAddPlant} // Make the entire card clickable
      >
        <CardHeader className="w-full flex flex-col items-center">
          <CardTitle className="text-mutedBrown">Add a New Plant</CardTitle>
          <CardDescription>Click to add a new plant to your collection</CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center justify-center"></CardFooter>
      </Card>
    )
}