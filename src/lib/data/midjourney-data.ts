export interface ParameterOption {
  value: string;
  label: string;
  description: string;
  image?: string;
}

export interface ParameterCategory {
  id: string;
  name: string;
  description: string;
  options: ParameterOption[];
}

export const modelVersions: ParameterOption[] = [
  {
    value: "7",
    label: "Midjourney v7 (Latest)",
    description: "The latest Midjourney model with improved details and coherence"
  },
  {
    value: "6.1",
    label: "Midjourney v6.1",
    description: "Improved v6 model with better details and coherence"
  },
  {
    value: "6.0",
    label: "Midjourney v6",
    description: "Features improved prompt parsing and greater image diversity"
  },
  {
    value: "5.2",
    label: "Midjourney v5.2",
    description: "Offers enhanced detail and composition"
  },
  {
    value: "niji",
    label: "Niji Journey",
    description: "Specialized for anime and illustration styles"
  }
];

export const aspectRatios: ParameterOption[] = [
  { value: "--ar 1:1", label: "1:1 Square", description: "Perfect square format" },
  { value: "--ar 16:9", label: "16:9 Landscape", description: "Standard widescreen format" },
  { value: "--ar 9:16", label: "9:16 Portrait", description: "Tall portrait format for mobile" },
  { value: "--ar 4:3", label: "4:3", description: "Classic photo format" },
  { value: "--ar 3:4", label: "3:4", description: "Portrait orientation" },
  { value: "--ar 3:2", label: "3:2", description: "Classic DSLR format" },
  { value: "--ar 2:3", label: "2:3", description: "Portrait orientation" },
  { value: "--ar 2:1", label: "2:1 Panorama", description: "Wide panoramic format" },
  { value: "--ar 1:2", label: "1:2 Tall", description: "Very tall portrait format" },
];

export const stylizedParameters: ParameterCategory[] = [
  {
    id: "rendering-quality",
    name: "Rendering & Quality",
    description: "Parameters that affect the overall rendering quality and look",
    options: [
      { value: "ray traced", label: "Ray Traced", description: "Simulates light rays for realistic lighting" },
      { value: "hyper detailed", label: "Hyper Detailed", description: "Extremely high level of detail" },
      { value: "photorealistic", label: "Photorealistic", description: "Resembling actual photography" },
      { value: "8K", label: "8K Resolution", description: "Very high resolution quality" },
      { value: "HDR", label: "HDR", description: "High dynamic range for better contrast" },
      { value: "cinematic lighting", label: "Cinematic Lighting", description: "Film-like dramatic lighting" },
      { value: "unreal engine", label: "Unreal Engine", description: "Rendering style similar to Unreal Engine" },
      { value: "octane render", label: "Octane Render", description: "High-quality 3D rendering style" },
      { value: "vray", label: "V-Ray", description: "Professional rendering engine quality" },
      { value: "cinema 4D", label: "Cinema 4D", description: "3D rendering style similar to Cinema 4D" },
      { value: "blender", label: "Blender", description: "Rendering style similar to Blender outputs" },
      { value: "DSLR", label: "DSLR", description: "High quality digital camera look" },
      { value: "4K UHD", label: "4K UHD", description: "Ultra high definition quality" },
      { value: "award winning", label: "Award Winning", description: "High quality, competition standard" },
    ]
  },
  {
    id: "photography",
    name: "Photography Styles",
    description: "Parameters that mimic photography styles and techniques",
    options: [
      { value: "35mm photography", label: "35mm Photography", description: "Classic film photography look" },
      { value: "f1.8", label: "f/1.8 Aperture", description: "Shallow depth of field with background blur" },
      { value: "macro photography", label: "Macro Photography", description: "Extreme close-up photography" },
      { value: "bokeh", label: "Bokeh", description: "Pleasing out-of-focus background elements" },
      { value: "golden hour", label: "Golden Hour", description: "Warm lighting from sunrise/sunset" },
      { value: "drone shot", label: "Drone Shot", description: "Aerial perspective view" },
      { value: "fisheye lens", label: "Fisheye Lens", description: "Ultra-wide-angle lens with distortion" },
      { value: "telephoto lens", label: "Telephoto Lens", description: "Long-distance lens with compression" },
      { value: "tilt-shift", label: "Tilt-Shift", description: "Selective focus creating miniature effect" },
      { value: "polaroid", label: "Polaroid", description: "Instant film photography style" },
      { value: "lomography", label: "Lomography", description: "Experimental, vibrant film photography" },
      { value: "black and white", label: "Black & White", description: "Monochrome photography" },
      { value: "infrared photography", label: "Infrared", description: "Photography using infrared light" },
      { value: "long exposure", label: "Long Exposure", description: "Extended exposure time effects" },
      { value: "candid photography", label: "Candid", description: "Natural, unposed photography style" },
      { value: "night photography", label: "Night Photography", description: "Low-light photography techniques" },
      { value: "street photography", label: "Street Photography", description: "Documentary style urban photography" },
    ]
  },
  {
    id: "lighting-mood",
    name: "Lighting & Mood",
    description: "Parameters that control the lighting and emotional tone",
    options: [
      { value: "dramatic lighting", label: "Dramatic Lighting", description: "High contrast, emotive lighting" },
      { value: "volumetric lighting", label: "Volumetric Lighting", description: "Visible light rays in atmosphere" },
      { value: "neon lighting", label: "Neon Lighting", description: "Colorful artificial light sources" },
      { value: "dark and moody", label: "Dark and Moody", description: "Low-key lighting with shadows" },
      { value: "dreamy atmosphere", label: "Dreamy Atmosphere", description: "Soft, ethereal feeling" },
      { value: "foggy", label: "Foggy", description: "Atmospheric haze or fog effect" },
      { value: "rim lighting", label: "Rim Lighting", description: "Subject outlined with light" },
      { value: "backlit", label: "Backlit", description: "Light source behind the subject" },
      { value: "silhouette", label: "Silhouette", description: "Dark subject against bright background" },
      { value: "warm lighting", label: "Warm Lighting", description: "Reddish-yellow toned light" },
      { value: "cool lighting", label: "Cool Lighting", description: "Bluish-green toned light" },
      { value: "ethereal", label: "Ethereal", description: "Delicate, otherworldly atmosphere" },
      { value: "melancholic", label: "Melancholic", description: "Sad, contemplative mood" },
      { value: "ominous", label: "Ominous", description: "Threatening, foreboding atmosphere" },
      { value: "nostalgic", label: "Nostalgic", description: "Wistful, reminiscent mood" },
      { value: "cozy", label: "Cozy", description: "Warm, comfortable atmosphere" },
      { value: "mysterious", label: "Mysterious", description: "Enigmatic, intriguing mood" },
      { value: "glowing", label: "Glowing", description: "Emitting or reflecting light" },
      { value: "soft diffused lighting", label: "Soft Diffused", description: "Gentle, scattered light" },
      { value: "hard light", label: "Hard Light", description: "Strong, direct light causing defined shadows" },
    ]
  },
  {
    id: "artistic-styles",
    name: "Artistic Styles",
    description: "Various artistic and illustration styles",
    options: [
      { value: "digital art", label: "Digital Art", description: "Modern digital illustration style" },
      { value: "anime style", label: "Anime Style", description: "Japanese animation inspired" },
      { value: "pixel art", label: "Pixel Art", description: "Retro pixelated graphics style" },
      { value: "low poly", label: "Low Poly", description: "Stylized 3D with visible polygons" },
      { value: "watercolor", label: "Watercolor", description: "Painterly watercolor effect" },
      { value: "trending on artstation", label: "Trending on ArtStation", description: "Professional digital art quality" },
      { value: "oil painting", label: "Oil Painting", description: "Traditional oil painting technique" },
      { value: "impressionism", label: "Impressionism", description: "Focus on light, loose brushstrokes" },
      { value: "expressionism", label: "Expressionism", description: "Emotional, distorted imagery" },
      { value: "surrealism", label: "Surrealism", description: "Dreamlike, illogical scenes" },
      { value: "cubism", label: "Cubism", description: "Geometric, abstract forms" },
      { value: "pop art", label: "Pop Art", description: "Bold colors, popular imagery" },
      { value: "minimalism", label: "Minimalism", description: "Simplistic, reduced to essentials" },
      { value: "concept art", label: "Concept Art", description: "Illustration for films, games, etc." },
      { value: "steampunk", label: "Steampunk", description: "Victorian-era sci-fi aesthetic" },
      { value: "cyberpunk", label: "Cyberpunk", description: "High-tech, low-life futuristic style" },
      { value: "vaporwave", label: "Vaporwave", description: "80s-90s retro digital aesthetic" },
      { value: "art deco", label: "Art Deco", description: "Elegant 1920s-30s style" },
      { value: "art nouveau", label: "Art Nouveau", description: "Organic, flowing decorative style" },
      { value: "bauhaus", label: "Bauhaus", description: "Functional, geometric design" },
      { value: "ukiyo-e", label: "Ukiyo-e", description: "Japanese woodblock print style" },
      { value: "gothic", label: "Gothic", description: "Dark, medieval-inspired style" },
      { value: "pointillism", label: "Pointillism", description: "Composed of small, distinct dots" },
      { value: "graffiti art", label: "Graffiti Art", description: "Street art style" },
    ]
  },
  {
    id: "color-palette",
    name: "Color Palette",
    description: "Color schemes and treatments",
    options: [
      { value: "vibrant colors", label: "Vibrant Colors", description: "Bright, saturated color palette" },
      { value: "pastel colors", label: "Pastel Colors", description: "Soft, pale color palette" },
      { value: "monochromatic", label: "Monochromatic", description: "Single color with variations" },
      { value: "sepia tone", label: "Sepia Tone", description: "Reddish-brown vintage effect" },
      { value: "technicolor", label: "Technicolor", description: "Vivid, film-like color process" },
      { value: "neon colors", label: "Neon Colors", description: "Bright, fluorescent colors" },
      { value: "muted colors", label: "Muted Colors", description: "Subdued, desaturated colors" },
      { value: "earthy tones", label: "Earthy Tones", description: "Natural browns, greens, etc." },
      { value: "duotone", label: "Duotone", description: "Two-color treatment" },
      { value: "complementary colors", label: "Complementary Colors", description: "Opposite colors on color wheel" },
      { value: "analogous colors", label: "Analogous Colors", description: "Adjacent colors on color wheel" },
      { value: "triadic colors", label: "Triadic Colors", description: "Three evenly spaced colors" },
      { value: "cool colors", label: "Cool Colors", description: "Blues, greens, purples" },
      { value: "warm colors", label: "Warm Colors", description: "Reds, oranges, yellows" },
      { value: "jewel tones", label: "Jewel Tones", description: "Rich, deep colors like emerald, ruby" },
      { value: "iridescent", label: "Iridescent", description: "Rainbow-like changing colors" },
      { value: "metallic", label: "Metallic", description: "Shiny, metal-like colors" },
    ]
  },
  {
    id: "materials-textures",
    name: "Materials & Textures",
    description: "Surface qualities and material types",
    options: [
      { value: "glass", label: "Glass", description: "Transparent, reflective material" },
      { value: "marble", label: "Marble", description: "Polished stone with veins" },
      { value: "wood", label: "Wood", description: "Natural wood grain texture" },
      { value: "metal", label: "Metal", description: "Metallic surface properties" },
      { value: "fabric", label: "Fabric", description: "Cloth-like material" },
      { value: "ceramic", label: "Ceramic", description: "Clay-based material" },
      { value: "leather", label: "Leather", description: "Animal hide material" },
      { value: "paper", label: "Paper", description: "Thin, flexible material" },
      { value: "gold", label: "Gold", description: "Yellow precious metal" },
      { value: "silver", label: "Silver", description: "White precious metal" },
      { value: "crystal", label: "Crystal", description: "Clear, faceted material" },
      { value: "concrete", label: "Concrete", description: "Stone-like construction material" },
      { value: "liquid", label: "Liquid", description: "Fluid, flowing substance" },
    ]
  },
  {
    id: "time-periods",
    name: "Time Periods & Eras",
    description: "Historical and futuristic time settings",
    options: [
      { value: "prehistoric", label: "Prehistoric", description: "Before written history" },
      { value: "ancient", label: "Ancient", description: "Early civilizations" },
      { value: "medieval", label: "Medieval", description: "Middle Ages" },
      { value: "renaissance", label: "Renaissance", description: "14th-17th century revival" },
      { value: "victorian", label: "Victorian", description: "19th century England" },
      { value: "1920s", label: "1920s", description: "Art Deco, jazz age" },
      { value: "1950s", label: "1950s", description: "Mid-century modern" },
      { value: "1980s", label: "1980s", description: "Retro 80s aesthetic" },
      { value: "futuristic", label: "Futuristic", description: "Advanced future technology" },
      { value: "post-apocalyptic", label: "Post-Apocalyptic", description: "After civilization collapse" },
      { value: "dystopian", label: "Dystopian", description: "Oppressive, troubled future" },
      { value: "utopian", label: "Utopian", description: "Idealized, perfect society" },
    ]
  },
];

export const midJourneyParameters: ParameterOption[] = [
  { value: "--quality", label: "Quality", description: "Sets rendering quality (0.25, 0.5, 1)" },
  { value: "--style", label: "Style", description: "Sets the AI's stylistic emphasis" },
  { value: "--stylize", label: "Stylize", description: "Controls artistic styling (625, 1250, 2500, etc)" },
  { value: "--chaos", label: "Chaos", description: "Increases variation in prompt interpretation (0-100)" },
  { value: "--weird", label: "Weird", description: "Increases unusual elements (0-3000)" },
  { value: "--stop", label: "Stop", description: "Stops generation at specific percentage (10-100)" },
  { value: "--tile", label: "Tile", description: "Creates seamless tileable images" },
  { value: "--seed", label: "Seed", description: "Sets specific starting noise seed (0-4294967295)" },
  { value: "--niji", label: "Niji", description: "Uses Niji model for anime-inspired images" },
  { value: "--version", label: "Version", description: "Specifies model version to use" },
  { value: "--repeat", label: "Repeat", description: "Generates multiple outputs from the same prompt" },
];

export const negativePromptOptions: string[] = [
  "bad anatomy",
  "bad proportions",
  "blurry",
  "cropped",
  "deformed",
  "disfigured",
  "duplicate",
  "error",
  "extra fingers",
  "extra limbs",
  "extra arms",
  "extra legs",
  "face",
  "human",
  "people",
  "poorly drawn face",
  "poorly drawn hands",
  "text",
  "watermark",
  "signature",
  "low quality",
  "ugly",
  "mutation",
  "mutated",
  "mutilated",
  "distortion",
  "out of frame",
  "unclear faces",
  "bad framing",
  "cut off",
  "pixelated",
  "jpeg artifacts",
  "bad shadows",
  "unnatural lighting",
  "unrealistic proportions",
  "double image",
  "out of focus",
  "grainy",
  "too dark",
  "over-exposed",
  "flat colors",
  "poor composition",
  "artificial looking",
  "amateur",
  "noisy",
];

export const promptStarters: ParameterOption[] = [
  { value: "A photo of", label: "A photo of", description: "Creates a realistic photographic image" },
  { value: "An illustration of", label: "An illustration of", description: "Creates a drawn or painted illustration" },
  { value: "A 3D render of", label: "A 3D render of", description: "Creates a computer-generated 3D image" },
  { value: "A painting of", label: "A painting of", description: "Creates a traditional painting style image" },
  { value: "A digital art piece showing", label: "A digital art piece showing", description: "Creates modern digital art" },
  { value: "An anime-style depiction of", label: "An anime-style depiction of", description: "Creates Japanese animation style" },
  { value: "A concept art of", label: "A concept art of", description: "Creates professional design concept visualization" },
  { value: "A cinematic shot of", label: "A cinematic shot of", description: "Creates movie-like frame with dramatic lighting" },
  { value: "An oil painting depicting", label: "An oil painting depicting", description: "Creates traditional oil painting style" },
  { value: "A watercolor sketch of", label: "A watercolor sketch of", description: "Creates soft water-based paint style" },
  { value: "A pixel art version of", label: "A pixel art version of", description: "Creates retro pixelated style" },
  { value: "A surreal interpretation of", label: "A surreal interpretation of", description: "Creates dreamlike, fantasy visuals" },
  { value: "A minimalist design of", label: "A minimalist design of", description: "Creates simple, clean design" },
]; 