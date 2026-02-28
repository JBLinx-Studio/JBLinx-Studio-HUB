
export const gamesData = [
  {
    id: 1,
    title: "Tactical Strike: Cyber Assault",
    tagline: "Dominate the digital battlefield",
    category: "fps",
    genres: ["Cyberpunk", "Tactical", "Sci-Fi"],
    platforms: ["PC", "Mobile", "Web Browser"],
    status: "LIVE",
    releaseDate: "2024-08-15",
    price: { base: 49.99, sale: null, currency: "USD" },
    rating: 4.7,
    playerCount: "10k+",
    reviewCount: 2450,
    images: {
      hero: "https://source.unsplash.com/random/800x600/?cyberpunk",
      gallery: [
        "https://source.unsplash.com/random/400x300/?cyberpunk,city",
        "https://source.unsplash.com/random/400x300/?cyberpunk,soldier",
        "https://source.unsplash.com/random/400x300/?cyberpunk,tech"
      ]
    },
    trailer: "https://www.youtube.com/watch?v=your_trailer_id",
    description: "Engage in intense tactical battles in a neon-lit cyberpunk world. Command elite squads, strategize, and conquer the digital frontier.",
    features: ["Real-time strategy", "Cybernetic enhancements", "Multiplayer battles"],
    systemReqs: {
      min: "Intel Core i5, 8GB RAM, NVIDIA GTX 970",
      recommended: "Intel Core i7, 16GB RAM, NVIDIA RTX 2060"
    },
    dlc: [
      { name: "Elite Soldier Pack", price: "19.99", releaseDate: "2024-09-01", status: "AVAILABLE", image: "https://source.unsplash.com/random/200x150/?cyberpunk,soldier", description: "Advanced soldier equipment and exclusive cybernetic upgrades for tactical superiority." },
      { name: "Cyberpunk Arsenal", price: "29.99", releaseDate: "2024-10-15", status: "PRE-ORDER", image: "https://source.unsplash.com/random/200x150/?cyberpunk,weapons", description: "Futuristic weapons pack with plasma rifles, neural disruptors, and quantum explosives." }
    ],
    stats: {
      peakPlayers: 15000,
      averageSession: "2 hours",
      retention: "65%",
      esportsReady: true
    },
    storeLinks: {
      steam: "https://store.steampowered.com/app/your_app_id",
      gog: "https://www.gog.com/game/your_game_id",
      direct: "https://yourgame.com/buy"
    }
  },
  {
    id: 2,
    title: "Empire Conquest: Age of Kings",
    tagline: "Forge your empire, command your legions",
    category: "rts",
    genres: ["Medieval", "Strategy", "RPG"],
    platforms: ["PC", "Web Browser"],
    status: "BETA",
    releaseDate: "2024-11-01",
    price: { base: 0, sale: null, currency: "USD" },
    rating: 4.5,
    playerCount: "20k+",
    reviewCount: 1800,
    images: {
      hero: "https://source.unsplash.com/random/800x600/?medieval",
      gallery: [
        "https://source.unsplash.com/random/400x300/?medieval,castle",
        "https://source.unsplash.com/random/400x300/?medieval,knight",
        "https://source.unsplash.com/random/400x300/?medieval,battle"
      ]
    },
    trailer: "https://www.youtube.com/watch?v=your_trailer_id",
    description: "Build your kingdom, train your armies, and conquer rival empires in this epic medieval strategy game.",
    features: ["Real-time battles", "Hero customization", "Alliance system"],
    systemReqs: {
      min: "Intel Core i3, 4GB RAM, Integrated Graphics",
      recommended: "Intel Core i5, 8GB RAM, NVIDIA GTX 750"
    },
    dlc: [
      { name: "Royal Edition", price: "24.99", releaseDate: "2024-09-15", status: "AVAILABLE", image: "https://source.unsplash.com/random/200x150/?medieval,crown", description: "Royal court expansion with noble bloodlines and exclusive castle designs." },
      { name: "Kingdoms Expansion", price: "34.99", releaseDate: "2024-12-01", status: "PRE-ORDER", image: "https://source.unsplash.com/random/200x150/?medieval,kingdom", description: "Massive world expansion adding 5 new kingdoms and diplomatic systems." }
    ],
    stats: {
      peakPlayers: 25000,
      averageSession: "3 hours",
      retention: "70%",
      esportsReady: false
    },
    storeLinks: {
      steam: "https://store.steampowered.com/app/your_app_id",
      direct: "https://yourgame.com/buy"
    }
  },
  {
    id: 3,
    title: "Last Haven: Zombie Outbreak",
    tagline: "Survive the apocalypse, rebuild humanity",
    category: "survival",
    genres: ["Zombie", "Survival", "Horror"],
    platforms: ["PC", "PlayStation", "Xbox"],
    status: "EARLY_ACCESS",
    releaseDate: "2025-03-10",
    price: { base: 29.99, sale: 24.99, currency: "USD" },
    rating: 4.2,
    playerCount: "5k+",
    reviewCount: 950,
    images: {
      hero: "https://source.unsplash.com/random/800x600/?zombie",
      gallery: [
        "https://source.unsplash.com/random/400x300/?zombie,city",
        "https://source.unsplash.com/random/400x300/?zombie,survivor",
        "https://source.unsplash.com/random/400x300/?zombie,apocalypse"
      ]
    },
    trailer: "https://www.youtube.com/watch?v=your_trailer_id",
    description: "Scavenge for resources, fortify your base, and fight off hordes of zombies in this post-apocalyptic survival horror game.",
    features: ["Base building", "Zombie hordes", "Co-op multiplayer"],
    systemReqs: {
      min: "Intel Core i5, 8GB RAM, NVIDIA GTX 960",
      recommended: "Intel Core i7, 16GB RAM, NVIDIA RTX 2070"
    },
    dlc: [
      { name: "Survivor Pack", price: "14.99", releaseDate: "2024-08-20", status: "AVAILABLE", image: "https://source.unsplash.com/random/200x150/?zombie,survivor", description: "Essential survival gear and advanced crafting recipes for the apocalypse." },
      { name: "Undead Expansion", price: "19.99", releaseDate: "2025-01-10", status: "COMING_SOON", image: "https://source.unsplash.com/random/200x150/?zombie,horde", description: "New zombie types, underground bunkers, and co-op campaign missions." }
    ],
    stats: {
      peakPlayers: 8000,
      averageSession: "2.5 hours",
      retention: "60%",
      esportsReady: false
    },
    storeLinks: {
      steam: "https://store.steampowered.com/app/your_app_id",
      playstation: "https://store.playstation.com/your_game_id",
      xbox: "https://www.xbox.com/your_game_id"
    }
  },
  {
    id: 4,
    title: "Stellar Frontier: Space Odyssey",
    tagline: "Explore the cosmos, build your empire",
    category: "space",
    genres: ["Space", "Strategy", "Sci-Fi"],
    platforms: ["PC", "Mobile"],
    status: "COMING_SOON",
    releaseDate: "2025-06-20",
    price: { base: 0, sale: null, currency: "USD" },
    rating: 0,
    playerCount: "0",
    reviewCount: 0,
    images: {
      hero: "https://source.unsplash.com/random/800x600/?space",
      gallery: [
        "https://source.unsplash.com/random/400x300/?space,planet",
        "https://source.unsplash.com/random/400x300/?space,ship",
        "https://source.unsplash.com/random/400x300/?space,colony"
      ]
    },
    trailer: "https://www.youtube.com/watch?v=your_trailer_id",
    description: "Embark on an epic journey through the stars. Colonize planets, research technologies, and command fleets in this expansive space strategy game.",
    features: ["4X gameplay", "Space battles", "Tech research"],
    systemReqs: {
      min: "Intel Core i5, 8GB RAM, Integrated Graphics",
      recommended: "Intel Core i7, 16GB RAM, NVIDIA GTX 1060"
    },
    dlc: [],
    stats: {
      peakPlayers: 0,
      averageSession: "0",
      retention: "0",
      esportsReady: false
    },
    storeLinks: {
      steam: "https://store.steampowered.com/app/your_app_id",
      mobile: "https://play.google.com/store/apps/details?id=your.app.id"
    }
  }
];

export const gameStats = [
  {
    icon: "Gamepad2",
    value: "15+",
    label: "Games",
    color: "text-purple-400"
  },
  {
    icon: "Users",
    value: "150k+",
    label: "Players",
    color: "text-blue-400"
  },
  {
    icon: "Star",
    value: "4.9/5",
    label: "Rating",
    color: "text-yellow-400"
  },
  {
    icon: "Trophy",
    value: "50+",
    label: "Awards",
    color: "text-green-400"
  }
];
