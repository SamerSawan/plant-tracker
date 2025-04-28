export default class Plant {
    constructor(name, species, waterFrequency, sunlightPreference, height, leafCount) {
      this.name = name;
      this.species = species;
      this.waterFrequency = waterFrequency;
      this.sunlightPreference = sunlightPreference;
      this.height = height;
      this.leafCount = leafCount;
      this.lastWatered = new Date();
    }
  
    // Method to calculate time since last watering
    timeSinceLastWatering() {
      const now = new Date();
      const diff = now - this.lastWatered;
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      return `${hours} Hours, ${minutes} Minutes`;
    }
  
    // Method to water the plant
    waterPlant() {
      this.lastWatered = new Date();
    }
  }