// Connect to MongoDB first (example)
// const { MongoClient } = require("mongodb");
// const uri = "mongodb://localhost:27017";
// const client = new MongoClient(uri);
// await client.connect();
// const db = client.db("ecommerce");
// const products = db.collection("products");

// OP1: insertMany() — insert all 3 documents
await products.insertMany([
  {
    "category": "Electronics",
    "product_id": "E1001",
    "name": "Smartphone X12",
    "brand": "TechCorp",
    "price": 45000,
    "specs": { "warranty_years": 2, "voltage": "5V", "features": ["5G", "OLED display", "Face ID"] },
    "stock": 50
  },
  {
    "category": "Electronics",
    "product_id": "E1002",
    "name": "Laptop Pro 15",
    "brand": "CompuTech",
    "price": 85000,
    "specs": { "warranty_years": 3, "voltage": "19V", "features": ["16GB RAM", "SSD 512GB", "Retina Display"] },
    "stock": 30
  },
  {
    "category": "Electronics",
    "product_id": "E1003",
    "name": "4K LED TV 55\"",
    "brand": "ViewMax",
    "price": 60000,
    "specs": { "warranty_years": 2, "voltage": "220V", "features": ["HDR10", "Smart TV", "WiFi"] },
    "stock": 20
  },
  {
    "category": "Clothing",
    "product_id": "C2001",
    "name": "Men's Leather Jacket",
    "brand": "Fashionista",
    "price": 12000,
    "sizes": ["S", "M", "L", "XL"],
    "colors": ["Black", "Brown"],
    "material": "Genuine Leather",
    "in_stock": true
  },
  {
    "category": "Clothing",
    "product_id": "C2002",
    "name": "Women's Winter Coat",
    "brand": "Fashionista",
    "price": 15000,
    "sizes": ["S", "M", "L"],
    "colors": ["Red", "Blue"],
    "material": "Wool",
    "in_stock": true
  },
  {
    "category": "Groceries",
    "product_id": "G3001",
    "name": "Organic Almonds",
    "brand": "NutriFarm",
    "price": 800,
    "expiry_date": "2025-05-15",
    "nutrition": { "calories_per_100g": 575, "protein_g": 21, "fat_g": 50, "carbs_g": 22 },
    "pack_size_g": 500
  },
  {
    "category": "Groceries",
    "product_id": "G3002",
    "name": "Brown Rice",
    "brand": "HealthyGrain",
    "price": 400,
    "expiry_date": "2024-11-30",
    "nutrition": { "calories_per_100g": 350, "protein_g": 7, "fat_g": 3, "carbs_g": 77 },
    "pack_size_g": 1000
  },
  {
    "category": "Groceries",
    "product_id": "G3003",
    "name": "Olive Oil",
    "brand": "PureOlive",
    "price": 1200,
    "expiry_date": "2025-06-01",
    "nutrition": { "calories_per_100g": 884, "protein_g": 0, "fat_g": 100, "carbs_g": 0 },
    "pack_size_ml": 500
  }
]);

// OP2: find() — retrieve all Electronics products with price > 20000
await products.find({ category: "Electronics", price: { $gt: 20000 } }).toArray();

// OP3: find() — retrieve all Groceries expiring before 2025-01-01
await products.find({ category: "Groceries", expiry_date: { $lt: new Date("2025-01-01") } }).toArray();

// OP4: updateOne() — add a "discount_percent" field to a specific product
await products.updateOne(
  { product_id: "E001" },
  { $set: { discount_percent: 10 } }
);

// OP5: createIndex() — create an index on category field
await products.createIndex({ category: 1 });
// Explanation: Indexing the "category" field improves query performance when filtering by category,
// which is common in e-commerce searches, allowing faster retrieval of products per category.
