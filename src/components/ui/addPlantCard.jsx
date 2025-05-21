'use client'

import { useState } from 'react'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const plantIcons = [
  { id: "/icons/bonsai.png", label: "Bonsai" },
  { id: "/icons/cactus.png", label: "Cactus" },
  { id: "/icons/succulent.png", label: "Succulent" },
  { id: "/icons/flower.png", label: "Flower" },
]

export default function AddPlantCard({ onClick }) {
  const [open, setOpen] = useState(false)

  const [image, setImage] = useState(plantIcons[0].id)
  const [name, setName] = useState("")
  const [species, setSpecies] = useState("")
  const [wateringInterval, setWateringInterval] = useState("")
  const [sunlight, setSunlight] = useState("")

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-[380px] h-full">
        <Card className="w-[380px] flex flex-col items-center justify-center border-3 border-softGreen h-full bg-opacity-0 cursor-pointer hover:bg-softGreen/20 transition">
          <CardHeader className="w-full flex flex-col items-center">
            <CardTitle className="text-mutedBrown">Add a New Plant</CardTitle>
            <CardDescription>Click to add a new plant to your collection</CardDescription>
          </CardHeader>
          <CardFooter className="flex items-center justify-center" />
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a new plant</DialogTitle>
          <DialogDescription>
            Fill out the details below to add a plant to your collection.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={e => {
            e.preventDefault()
            onClick(image, name, species, wateringInterval, sunlight)
            setOpen(false)
          }}
          className="space-y-4 mt-4"
        >
          <div className="grid gap-2">
            <label className="text-sm font-medium text-mutedBrown">Plant Icon</label>
            <div className="flex gap-4 flex-wrap">
              {plantIcons.map((icon) => (
                <label key={icon.id} className="cursor-pointer flex flex-col items-center">
                  <input
                    type="radio"
                    name="image"
                    value={icon.id}
                    checked={image === icon.id}
                    onChange={() => setImage(icon.id)}
                    className="sr-only peer"
                  />
                  <div className={`w-24 h-24 rounded-lg bg-[#F2E6D5] flex items-center justify-center transition-all duration-300 border-2 ${
                    image === icon.id ? "border-softGreen ring-4 ring-softGreen/40" : "border-transparent"
                  }`}>
                    <img src={icon.id} alt={icon.label} className="w-14 h-14" />
                  </div>
                  <span className="text-xs mt-1 text-mutedBrown">{icon.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium text-mutedBrown">Plant Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="bg-inputBg border border-softGreen rounded-md px-3 py-2"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="species" className="text-sm font-medium text-mutedBrown">Species</label>
            <input
              type="text"
              id="species"
              value={species}
              onChange={e => setSpecies(e.target.value)}
              required
              className="bg-inputBg border border-softGreen rounded-md px-3 py-2"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="wateringInterval" className="text-sm font-medium text-mutedBrown">Watering Interval</label>
            <input
              type="text"
              id="wateringInterval"
              value={wateringInterval}
              onChange={e => setWateringInterval(e.target.value)}
              placeholder="e.g., 3 days"
              required
              className="bg-inputBg border border-softGreen rounded-md px-3 py-2"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="sunlight" className="text-sm font-medium text-mutedBrown">Sunlight Preference</label>
            <input
              type="text"
              id="sunlight"
              value={sunlight}
              onChange={e => setSunlight(e.target.value)}
              placeholder="e.g., indirect sunlight"
              required
              className="bg-inputBg border border-softGreen rounded-md px-3 py-2"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-green-600 text-white rounded-md py-2 hover:bg-green-700 transition"
            >
              Add Plant
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
