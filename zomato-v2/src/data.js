export const restaurants = [
  {
    id: 1,
    name: "Spice Garden",
    cuisine: "North Indian, Mughlai",
    category: ["Biryani", "North Indian", "Dining", "order-online"],
    rating: 4.5, reviews: 2341, delivery: 28, cost: 350, veg: false,
    badge: "Bestseller", discount: "20% off above ₹299",
    emoji: "🍛", bg: "linear-gradient(135deg,#ffecd2,#fcb69f)",
    locality: "Navrangpura",
    menu: {
      Starters: [
        { id: "s1_1", name: "Chicken Tikka", price: 299, desc: "Marinated chicken grilled in tandoor", veg: false },
        { id: "s1_2", name: "Paneer Tikka", price: 249, desc: "Spiced cottage cheese grilled to perfection", veg: true },
        { id: "s1_3", name: "Seekh Kebab", price: 279, desc: "Minced mutton kebabs on skewers", veg: false },
      ],
      "Main Course": [
        { id: "s1_4", name: "Butter Chicken", price: 349, desc: "Creamy tomato-based chicken curry", veg: false },
        { id: "s1_5", name: "Dal Makhani", price: 249, desc: "Slow-cooked black lentils with butter", veg: true },
        { id: "s1_6", name: "Paneer Butter Masala", price: 299, desc: "Rich cottage cheese in buttery gravy", veg: true },
      ],
      Biryani: [
        { id: "s1_7", name: "Chicken Dum Biryani", price: 399, desc: "Slow-cooked fragrant rice with chicken", veg: false },
        { id: "s1_8", name: "Veg Biryani", price: 299, desc: "Aromatic basmati rice with vegetables", veg: true },
      ],
      Breads: [
        { id: "s1_9", name: "Butter Naan", price: 49, desc: "Soft leavened bread baked in tandoor", veg: true },
        { id: "s1_10", name: "Laccha Paratha", price: 59, desc: "Layered whole wheat flatbread", veg: true },
      ],
    },
  },
  {
    id: 2,
    name: "Pizza Paradise",
    cuisine: "Italian, Pizza, Pasta",
    category: ["Pizza", "Dining", "order-online"],
    rating: 4.3, reviews: 1892, delivery: 25, cost: 500, veg: false,
    badge: "Popular", discount: "Buy 1 Get 1 Free",
    emoji: "🍕", bg: "linear-gradient(135deg,#a1c4fd,#c2e9fb)",
    locality: "Bodakdev",
    menu: {
      "Classic Pizzas": [
        { id: "s2_1", name: "Margherita", price: 299, desc: "Classic tomato sauce with mozzarella", veg: true },
        { id: "s2_2", name: "Farmhouse", price: 359, desc: "Loaded with capsicum, onion & mushroom", veg: true },
        { id: "s2_3", name: "Chicken BBQ", price: 429, desc: "Smoky BBQ sauce with grilled chicken", veg: false },
        { id: "s2_4", name: "Pepperoni Feast", price: 469, desc: "Double pepperoni with extra cheese", veg: false },
      ],
      Pasta: [
        { id: "s2_5", name: "Penne Arrabbiata", price: 249, desc: "Spicy tomato pasta with herbs", veg: true },
        { id: "s2_6", name: "Chicken Alfredo", price: 329, desc: "Creamy white sauce pasta with chicken", veg: false },
      ],
      "Sides & Drinks": [
        { id: "s2_7", name: "Garlic Bread", price: 149, desc: "Toasted bread with garlic butter", veg: true },
        { id: "s2_8", name: "Coke (500ml)", price: 79, desc: "Chilled Coca-Cola", veg: true },
      ],
    },
  },
  {
    id: 3,
    name: "Burger Barn",
    cuisine: "Burgers, American, Wraps",
    category: ["Burger", "order-online"],
    rating: 4.1, reviews: 987, delivery: 20, cost: 300, veg: false,
    badge: null, discount: "15% off on first order",
    emoji: "🍔", bg: "linear-gradient(135deg,#d4fc79,#96e6a1)",
    locality: "Satellite",
    menu: {
      "Signature Burgers": [
        { id: "s3_1", name: "Classic Beef Burger", price: 259, desc: "Juicy beef patty with lettuce & tomato", veg: false },
        { id: "s3_2", name: "Crispy Chicken Burger", price: 229, desc: "Fried chicken with coleslaw & pickles", veg: false },
        { id: "s3_3", name: "Veggie Delight", price: 199, desc: "Spiced veggie patty with fresh veggies", veg: true },
        { id: "s3_4", name: "Double Smash Burger", price: 349, desc: "Double smashed patties with special sauce", veg: false },
      ],
      Sides: [
        { id: "s3_5", name: "Loaded Fries", price: 169, desc: "Cheese sauce, jalapeños & crispy onion", veg: true },
        { id: "s3_6", name: "Onion Rings", price: 129, desc: "Beer-battered crispy onion rings", veg: true },
      ],
      Beverages: [
        { id: "s3_7", name: "Chocolate Shake", price: 149, desc: "Thick creamy chocolate milkshake", veg: true },
        { id: "s3_8", name: "Fresh Lime Soda", price: 89, desc: "Refreshing lime with sparkling water", veg: true },
      ],
    },
  },
  {
    id: 4,
    name: "Wok & Roll",
    cuisine: "Chinese, Pan-Asian, Thai",
    category: ["Chinese", "order-online"],
    rating: 4.4, reviews: 1543, delivery: 35, cost: 400, veg: false,
    badge: "Trending", discount: null,
    emoji: "🥡", bg: "linear-gradient(135deg,#fbc2eb,#a6c1ee)",
    locality: "Vastrapur",
    menu: {
      Starters: [
        { id: "s4_1", name: "Spring Rolls (6 pcs)", price: 189, desc: "Crispy rolls with vegetable filling", veg: true },
        { id: "s4_2", name: "Chicken Dim Sum", price: 229, desc: "Steamed dumplings with soy dip", veg: false },
        { id: "s4_3", name: "Manchurian Balls", price: 199, desc: "Fried balls in spicy manchurian sauce", veg: true },
      ],
      "Rice & Noodles": [
        { id: "s4_4", name: "Chicken Fried Rice", price: 249, desc: "Wok-tossed rice with egg & chicken", veg: false },
        { id: "s4_5", name: "Veg Hakka Noodles", price: 209, desc: "Stir-fried noodles with fresh veggies", veg: true },
        { id: "s4_6", name: "Pad Thai", price: 279, desc: "Thai-style noodles with peanuts & lime", veg: false },
      ],
      Mains: [
        { id: "s4_7", name: "Kung Pao Chicken", price: 319, desc: "Spicy stir-fry with peanuts & chilli", veg: false },
        { id: "s4_8", name: "Tofu in Black Bean", price: 269, desc: "Silken tofu in savory black bean sauce", veg: true },
      ],
    },
  },
  {
    id: 5,
    name: "Dosa Diner",
    cuisine: "South Indian, Tamil Nadu, Kerala",
    category: ["South Indian", "Dining", "order-online"],
    rating: 4.6, reviews: 3102, delivery: 22, cost: 200, veg: true,
    badge: "Pure Veg", discount: "Free Sambar with every order",
    emoji: "🥘", bg: "linear-gradient(135deg,#f6d365,#fda085)",
    locality: "Gurukul",
    menu: {
      Dosas: [
        { id: "s5_1", name: "Masala Dosa", price: 129, desc: "Crispy dosa with spiced potato filling", veg: true },
        { id: "s5_2", name: "Onion Rava Dosa", price: 149, desc: "Crispy rava dosa with onion & jeera", veg: true },
        { id: "s5_3", name: "Ghee Roast Dosa", price: 169, desc: "Golden dosa smeared with pure ghee", veg: true },
        { id: "s5_4", name: "Set Dosa (3 pcs)", price: 119, desc: "Soft spongy dosas served with chutneys", veg: true },
      ],
      "Idli & Vada": [
        { id: "s5_5", name: "Idli (4 pcs)", price: 89, desc: "Steamed rice cakes with sambar & chutney", veg: true },
        { id: "s5_6", name: "Medu Vada (2 pcs)", price: 99, desc: "Crispy lentil donuts with sambar", veg: true },
      ],
      "Rice Meals": [
        { id: "s5_7", name: "South Indian Thali", price: 199, desc: "Full meal with rice, sambar, rasam & more", veg: true },
        { id: "s5_8", name: "Curd Rice", price: 99, desc: "Cooling yogurt rice with tempering", veg: true },
      ],
    },
  },
  {
    id: 6,
    name: "Sweet Tooth",
    cuisine: "Desserts, Ice Cream, Cakes",
    category: ["Desserts", "Cafe", "Christmas", "order-online"],
    rating: 4.7, reviews: 2765, delivery: 40, cost: 250, veg: true,
    badge: "Top Rated", discount: "Free dessert on orders above ₹500",
    emoji: "🍨", bg: "linear-gradient(135deg,#84fab0,#8fd3f4)",
    locality: "Prahalad Nagar",
    menu: {
      "Ice Cream": [
        { id: "s6_1", name: "Belgian Choco Tub", price: 399, desc: "Premium Belgian chocolate ice cream 500ml", veg: true },
        { id: "s6_2", name: "Sundae Special", price: 199, desc: "3 scoops with hot fudge & nuts", veg: true },
        { id: "s6_3", name: "Kulfi Sticks (4 pcs)", price: 149, desc: "Traditional Indian frozen dessert", veg: true },
      ],
      "Cakes & Pastries": [
        { id: "s6_4", name: "Tiramisu", price: 259, desc: "Classic Italian coffee dessert", veg: true },
        { id: "s6_5", name: "Gulab Jamun (6 pcs)", price: 149, desc: "Soft milk dumplings in sugar syrup", veg: true },
        { id: "s6_6", name: "Cheesecake Slice", price: 199, desc: "New York style baked cheesecake", veg: true },
      ],
    },
  },
  {
    id: 7,
    name: "Biryani House",
    cuisine: "Biryani, Mughlai, Kebabs",
    category: ["Biryani", "Dining", "Buffet", "order-online"],
    rating: 4.8, reviews: 4211, delivery: 45, cost: 500, veg: false,
    badge: "#1 Biryani", discount: "10% off on all orders",
    emoji: "🍚", bg: "linear-gradient(135deg,#a18cd1,#fbc2eb)",
    locality: "Bodakdev",
    menu: {
      Biryani: [
        { id: "s7_1", name: "Hyderabadi Dum Biryani", price: 449, desc: "Authentic slow-cooked biryani with saffron", veg: false },
        { id: "s7_2", name: "Lucknowi Biryani", price: 429, desc: "Subtle spiced biryani with tender meat", veg: false },
        { id: "s7_3", name: "Veg Dum Biryani", price: 349, desc: "Fragrant rice with mixed vegetables", veg: true },
        { id: "s7_4", name: "Egg Biryani", price: 369, desc: "Biryani with spiced boiled eggs", veg: false },
      ],
      Sides: [
        { id: "s7_5", name: "Raita", price: 79, desc: "Cooling yogurt with cucumber & spices", veg: true },
        { id: "s7_6", name: "Mirchi Ka Salan", price: 99, desc: "Spiced green chilli curry", veg: true },
      ],
    },
  },
  {
    id: 8,
    name: "Green Bowl",
    cuisine: "Healthy, Salads, Juices",
    category: ["Healthy", "Cafe", "Dining", "order-online"],
    rating: 4.2, reviews: 876, delivery: 30, cost: 450, veg: true,
    badge: "Healthy", discount: null,
    emoji: "🥗", bg: "linear-gradient(135deg,#fccb90,#d57eeb)",
    locality: "Vastrapur",
    menu: {
      Salads: [
        { id: "s8_1", name: "Caesar Salad", price: 299, desc: "Romaine, croutons, parmesan & dressing", veg: true },
        { id: "s8_2", name: "Greek Salad", price: 279, desc: "Fresh veggies with feta & olives", veg: true },
        { id: "s8_3", name: "Quinoa Power Bowl", price: 349, desc: "Quinoa with roasted veggies & tahini", veg: true },
      ],
      "Smoothies & Juices": [
        { id: "s8_4", name: "Green Detox", price: 199, desc: "Spinach, cucumber, ginger & lemon", veg: true },
        { id: "s8_5", name: "Berry Blast", price: 229, desc: "Mixed berries with almond milk", veg: true },
      ],
    },
  },
  {
    id: 9,
    name: "The Rooftop Bar",
    cuisine: "Cocktails, Bar Food, Continental",
    category: ["Nightlife", "Dining", "Luxury"],
    rating: 4.5, reviews: 1823, delivery: 0, cost: 1200, veg: false,
    badge: "Nightlife", discount: "Happy Hours 6–9 PM",
    emoji: "🍸", bg: "linear-gradient(135deg,#434343,#000000)",
    locality: "Satellite",
    menu: {
      Cocktails: [
        { id: "s9_1", name: "Mojito", price: 399, desc: "Refreshing rum cocktail with lime & mint", veg: true },
        { id: "s9_2", name: "Old Fashioned", price: 499, desc: "Classic whiskey cocktail with bitters", veg: true },
        { id: "s9_3", name: "Margarita", price: 449, desc: "Tequila cocktail with lime & salt rim", veg: true },
      ],
      "Bar Bites": [
        { id: "s9_4", name: "Cheese Nachos", price: 349, desc: "Crispy nachos with jalapeños & dips", veg: true },
        { id: "s9_5", name: "Chicken Wings (6 pcs)", price: 449, desc: "Spicy BBQ glazed chicken wings", veg: false },
        { id: "s9_6", name: "Bruschetta", price: 299, desc: "Toasted bread with tomato & basil", veg: true },
      ],
    },
  },
  {
    id: 10,
    name: "Club Enigma",
    cuisine: "Bar, Lounge, DJ Nights",
    category: ["Nightlife"],
    rating: 4.3, reviews: 2104, delivery: 0, cost: 1500, veg: false,
    badge: "Top Club", discount: "No cover charge before 9 PM",
    emoji: "🎶", bg: "linear-gradient(135deg,#1a1a2e,#16213e)",
    locality: "C G Road",
    menu: {
      Beverages: [
        { id: "s10_1", name: "Signature Cocktail", price: 549, desc: "House special cocktail of the night", veg: true },
        { id: "s10_2", name: "Beer Pint", price: 299, desc: "Chilled draft beer on tap", veg: true },
        { id: "s10_3", name: "Mocktail Selection", price: 249, desc: "Assorted non-alcoholic mocktails", veg: true },
      ],
      Snacks: [
        { id: "s10_4", name: "Platter for 2", price: 799, desc: "Mixed starters platter for sharing", veg: false },
        { id: "s10_5", name: "Cheese Board", price: 599, desc: "Artisan cheeses with crackers & fruits", veg: true },
      ],
    },
  },
  {
    id: 11,
    name: "The Grand Buffet",
    cuisine: "Multi-Cuisine, Buffet, Continental",
    category: ["Buffet", "Dining", "Luxury", "Christmas"],
    rating: 4.6, reviews: 3456, delivery: 0, cost: 1800, veg: false,
    badge: "All-You-Can-Eat", discount: "20% off on weekday lunch",
    emoji: "🍽️", bg: "linear-gradient(135deg,#f093fb,#f5576c)",
    locality: "Thaltej",
    menu: {
      "Live Counters": [
        { id: "s11_1", name: "Tandoor Live Station", price: 0, desc: "Included in buffet — Naan, Tikkas, Kebabs", veg: false },
        { id: "s11_2", name: "Pasta Live Station", price: 0, desc: "Included in buffet — Fresh pasta cooked to order", veg: true },
      ],
      "Buffet Packages": [
        { id: "s11_3", name: "Lunch Buffet (per person)", price: 799, desc: "Full spread — starters, mains, desserts", veg: false },
        { id: "s11_4", name: "Dinner Buffet (per person)", price: 1099, desc: "Premium dinner spread with live counters", veg: false },
        { id: "s11_5", name: "Weekend Brunch (per person)", price: 999, desc: "Unlimited brunch with beverages", veg: false },
      ],
    },
  },
  {
    id: 12,
    name: "Cafe Picasso",
    cuisine: "Cafe, Continental, Desserts",
    category: ["Cafe", "Dining", "Christmas", "Luxury"],
    rating: 4.5, reviews: 1987, delivery: 35, cost: 800, veg: true,
    badge: "Instagrammable", discount: "Free coffee with any meal",
    emoji: "☕", bg: "linear-gradient(135deg,#667eea,#764ba2)",
    locality: "Navrangpura",
    menu: {
      "All-Day Breakfast": [
        { id: "s12_1", name: "Eggs Benedict", price: 349, desc: "Poached eggs on English muffin with hollandaise", veg: false },
        { id: "s12_2", name: "Avocado Toast", price: 299, desc: "Sourdough with avocado, cherry tomatoes & feta", veg: true },
        { id: "s12_3", name: "French Toast", price: 249, desc: "Thick brioche with maple syrup & berries", veg: true },
      ],
      Beverages: [
        { id: "s12_4", name: "Flat White", price: 199, desc: "Double espresso with steamed micro-foam milk", veg: true },
        { id: "s12_5", name: "Matcha Latte", price: 229, desc: "Japanese matcha with oat milk", veg: true },
        { id: "s12_6", name: "Cold Brew", price: 219, desc: "12-hour cold steeped coffee", veg: true },
      ],
    },
  },
];

export const questions = [
  {
    id: 1,
    title: "Popular cuisines near me",
    infos: [
      "Bakery food near me • ", "Beverages food near me • ", "Biryani food near me • ",
      "Burger food near me • ", "Chinese food near me • ", "Desserts food near me • ",
      "Ice Cream food near me • ", "North Indian food near me • ", "Pizza food near me • ",
      "South Indian food near me • ", "Street food near me • ",
    ],
  },
  {
    id: 2,
    title: "Popular restaurant types near me",
    infos: [
      "Cafés near me • ", "Casual Dining near me • ", "Dessert Parlors near me • ",
      "Fine Dining near me • ", "Food Trucks near me • ", "Quick Bites near me • ",
      "Sweet Shops near me • ",
    ],
  },
  {
    id: 3,
    title: "Top Restaurant Chains",
    infos: ["KFC • ", "Paradise Biryani • ", "Pizza Hut • ", "Wow Momo • ", "Dominos • "],
  },
];

export default questions;
