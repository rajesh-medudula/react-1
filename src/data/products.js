const products = [
  {
    "id": 1,
    "title": "Wireless Noise-Canceling Headphones",
    "price": 129.99,
    "description": "Immerse yourself in your music with hybrid active noise cancellation, 40-hour battery life, and ultra-soft memory foam earcups.",
    "category": "Electronics",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "rating": {
      "rate": 4.7,
      "count": 120
    },
    "stock": 45
  },
  {
    "id": 2,
    "title": "Ergonomic Mesh Office Chair",
    "price": 189.50,
    "description": "Features dynamic lumbar support, adjustable 3D armrests, and a breathable mesh back to keep you comfortable during long work hours.",
    "category": "Furniture",
    "image": "https://images.unsplash.com/photo-1695395860906-9226cb3c4ad2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "rating": {
      "rate": 4.5,
      "count": 85
    },
    "stock": 18
  },
  {
    "id": 3,
    "title": "Stainless Steel Smart Water Bottle",
    "price": 34.95,
    "description": "A vacuum-insulated flask that tracks your hydration goals, glows to remind you to drink, and sanitizes water using built-in UV-C light.",
    "category": "Accessories",
    "image": "https://plus.unsplash.com/premium_photo-1752846974618-e14290df59c1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "rating": {
      "rate": 4.2,
      "count": 210
    },
    "stock": 64
  },
  {
    "id": 4,
    "title": "Ultra-Lightweight Running Shoes",
    "price": 85.00,
    "description": "Designed for maximum speed and shock absorption, featuring a responsive foam midsole and a breathable knit upper framework.",
    "category": "Apparel",
    "image": "https://images.unsplash.com/photo-1611080027147-a1a0b6e05168?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "rating": {
      "rate": 4.8,
      "count": 340
    },
    "stock": 92
  },
  {
    "id": 5,
    "title": "Minimalist Leather Wallet",
    "price": 45.00,
    "description": "Crafted from top-grain vegetable-tanned leather, this slim profile wallet features advanced RFID-blocking security technology.",
    "category": "Accessories",
    "image": "https://plus.unsplash.com/premium_photo-1666739389067-ff71ad748f3e?q=80&w=1003&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "rating": {
      "rate": 4.6,
      "count": 95
    },
    "stock": 110
  },
  {
    "id": 6,
    "title": "4K Ultra-Short Throw Projector",
    "price": 1499.00,
    "description": "Bring the theater home with 2500 lumens of brightness, HDR10 capability, and a massive 120-inch display projection from just inches away.",
    "category": "Electronics",
    "image": "https://images.unsplash.com/photo-1589113050289-1c654e7e305d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "rating": {
      "rate": 4.9,
      "count": 42
    },
    "stock": 7
  },
  {
    "id": 7,
    "title": "Organic Cotton Crewneck Sweatshirt",
    "price": 58.00,
    "description": "Made entirely from ethically-sourced organic cotton, featuring a classic fit, ribbed cuffs, and an ultra-soft brushed fleece interior.",
    "category": "Apparel",
    "image": "https://images.unsplash.com/photo-1759572095317-3a96f9a98e2b?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "rating": {
      "rate": 4.4,
      "count": 156
    },
    "stock": 78
  },
  {
    "id": 8,
    "title": "Professional Ceramic Non-Stick Skillet",
    "price": 65.00,
    "description": "A 10-inch hard-anodized aluminum pan featuring a toxin-free ceramic non-stick coating for effortless food release and cleanup.",
    "category": "Home & Kitchen",
    "image": "https://images.unsplash.com/photo-1688398846460-baab8638e30a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "rating": {
      "rate": 4.3,
      "count": 88
    },
    "stock": 33
  },
  {
    "id": 9,
    "title": "Mechanical RGB Gaming Keyboard",
    "price": 115.99,
    "description": "Equipped with hot-swappable tactile brown switches, per-key RGB backlighting customization, and a premium solid aluminum top plate.",
    "category": "Electronics",
    "image": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "rating": {
      "rate": 4.7,
      "count": 175
    },
    "stock": 50
  },
  {
    "id": 10,
    "title": "Smart Succulent Planter",
    "price": 28.50,
    "description": "An indoor self-watering planter featuring built-in moisture sensors and an LED grow light engineered with an automated daily timer.",
    "category": "Home & Kitchen",
    "image": "https://images.unsplash.com/photo-1663001854143-fa2ec664be27?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "rating": {
      "rate": 4.1,
      "count": 62
    },
    "stock": 125
  }
]


export const getProducts = () => {
  return products;
}

export const getProductById = (id) => {
  return products.find((item) => item.id === Number(id));
}