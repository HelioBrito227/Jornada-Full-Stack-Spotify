import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://helioBrito:toor@cluster0.e1zox.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
