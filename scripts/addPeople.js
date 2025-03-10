require("dotenv").config();
const mongoose = require("mongoose");
const Person = require("../models/Person");
const connectToDatabase = require("../db-connexion/mongoDBConnexion");

const addPeople = async () => {
  try {
    await connectToDatabase();
    const peopleArray = [
      { name: "Anderson", age: 23, favoriteFoods: ["Top gari", "Banane braisé"] },
      { name: "Elisée", age: 19, favoriteFoods: ["KFC"] },
      { name: "Grace Esther", age: 7, favoriteFoods: ["Glace", "Gateau", "Pain"] },
    ];

    // Création de plusieurs personnes
    const savedPeople = await Person.create(peopleArray);
    console.log("✅ Personnes ajoutées :", savedPeople);
  } catch (error) {
    console.error("❌ Erreur lors de l'ajout :", error.message);
  } finally {
    mongoose.connection.close();
  }
}

addPeople();
