/* Deep Blue Sea (2027 NC Division A) question bank.
 * Covers the six ocean zones in the rules (Sunlight, Twilight, Midnight,
 * Abyssal, Trenches, Intertidal), their conditions, adaptations, the
 * representative animals, and daily vertical migration.
 * Format notes are in geology-rocks.js.
 */
(window.QUIZ_EVENTS = window.QUIZ_EVENTS || []).push({
  id: "deep-blue-sea",
  name: "Deep Blue Sea",
  icon: "🐙",
  color: "#1f6fb5",
  blurb: "Ocean zones from tide pools to trenches, the animals in each, and how they survive.",
  sections: [
    {
      topic: "The ocean zones",
      questions: [
        { q: "Put the open-ocean zones in order from the surface to the deepest.", a: "Sunlight, Twilight, Midnight, Abyssal, Trenches", wrong: ["Twilight, Sunlight, Abyssal, Midnight, Trenches", "Sunlight, Midnight, Twilight, Trenches, Abyssal", "Trenches, Abyssal, Midnight, Twilight, Sunlight"], why: "Each zone is darker, colder, and has more pressure than the one above it." },
        { q: "The Sunlight Zone's scientific name is the...", a: "Epipelagic Zone", wrong: ["Mesopelagic Zone", "Bathypelagic Zone", "Hadal Zone"], why: "'Epi' means upon, as in the top layer of the ocean." },
        { q: "The Twilight Zone's scientific name is the...", a: "Mesopelagic Zone", wrong: ["Epipelagic Zone", "Abyssopelagic Zone", "Hadal Zone"], why: "'Meso' means middle." },
        { q: "The Midnight Zone's scientific name is the...", a: "Bathypelagic Zone", wrong: ["Mesopelagic Zone", "Epipelagic Zone", "Intertidal Zone"], why: "'Bathy' means deep." },
        { q: "The Abyssal Zone's scientific name is the...", a: "Abyssopelagic Zone", wrong: ["Bathypelagic Zone", "Epipelagic Zone", "Mesopelagic Zone"], why: "'Abyss' means bottomless." },
        { q: "The ocean trenches are called the ___ Zone.", type: "type", a: ["hadal", "hadal zone"], why: "Hadal comes from Hades, the Greek god of the underworld." },
        { q: "About how deep does the Sunlight Zone go?", a: "About 200 meters (650 feet)", wrong: ["About 2 meters (6 feet)", "About 4,000 meters (13,000 feet)", "All the way to the bottom"], why: "Below about 200 meters, there isn't enough light for plants and algae to make food." },
        { q: "The Twilight Zone goes from about 200 meters down to about...", a: "1,000 meters (3,300 feet)", wrong: ["300 meters (1,000 feet)", "11,000 meters (36,000 feet)", "50 meters (160 feet)"], why: "Some dim blue light reaches the Twilight Zone, but not enough for photosynthesis." },
        { q: "Which is the first zone with NO sunlight at all?", a: "Midnight Zone", wrong: ["Sunlight Zone", "Twilight Zone", "Intertidal Zone"], why: "Below about 1,000 meters, it's completely dark except for light made by animals." },
        { q: "The Abyssal Zone reaches down to about 6,000 meters and includes most of the...", a: "Deep ocean floor", wrong: ["Beaches", "Coral reefs", "Tide pools"], why: "The flat abyssal plains cover a huge part of the ocean bottom." },
        { q: "The Trenches (Hadal Zone) are found...", a: "In deep canyons below about 6,000 meters", wrong: ["Along sandy beaches", "In the Sunlight Zone", "In rivers"], why: "Trenches are the deepest places in the ocean." },
        { q: "What is the deepest known place in the ocean?", a: "Challenger Deep in the Mariana Trench", wrong: ["The Gulf of Mexico", "The Great Barrier Reef", "Cape Hatteras"], why: "It's nearly 11,000 meters (about 36,000 feet) deep, deeper than Mount Everest is tall." },
        { q: "The zone between high tide and low tide, which is sometimes underwater and sometimes dry, is the...", type: "type", a: ["intertidal", "intertidal zone"], why: "'Inter' means between. It's the zone between the tides." },
        { q: "Which zone gets the most sunlight?", a: "Sunlight Zone", wrong: ["Twilight Zone", "Midnight Zone", "Abyssal Zone"], why: "Sunlight Zone waters are bright and warm." },
        { q: "In which zone do most ocean plants and algae live?", a: "Sunlight Zone", wrong: ["Midnight Zone", "Abyssal Zone", "Trenches"], why: "Plants and algae need sunlight to make food by photosynthesis." },
        { q: "In which zone does most ocean life live?", a: "Sunlight Zone", wrong: ["Midnight Zone", "Abyssal Zone", "Trenches"], why: "Sunlight means food from photosynthesis, which supports most ocean food webs." },
        { q: "The Midnight Zone is sometimes called 'midnight' because...", a: "It is completely dark all the time", wrong: ["Animals only come out at midnight", "It is only open at night", "It's shaped like a clock"], why: "No sunlight reaches it, day or night." },
        { q: "Which zone is sometimes called the 'Twilight Zone' because it's dim, like just after sunset?", a: "Mesopelagic Zone", wrong: ["Epipelagic Zone", "Hadal Zone", "Intertidal Zone"], why: "A little blue light reaches it, so it's like dusk all day." },
        { q: "About how much of Earth's surface is covered by ocean?", a: "About 71%", wrong: ["About 10%", "About 30%", "About 99%"], why: "Most of our planet is covered by salt water." }
      ]
    },
    {
      topic: "Light, pressure, temperature, food",
      questions: [
        { q: "As you go deeper in the ocean, what happens to the amount of sunlight?", a: "It decreases", wrong: ["It increases", "It stays the same", "It turns red"], why: "Water absorbs sunlight, so less and less reaches the deep." },
        { q: "As you go deeper in the ocean, what happens to water pressure?", a: "It increases", wrong: ["It decreases", "It stays the same", "It disappears"], why: "The weight of all the water above pushes down harder the deeper you go." },
        { q: "As you go deeper in the ocean, what usually happens to the water temperature?", a: "It gets colder", wrong: ["It gets hotter", "It stays the same", "It boils"], why: "Sunlight warms the surface. The deep ocean is near freezing." },
        { q: "About how cold is the water in the Midnight and Abyssal Zones?", a: "Just a few degrees above freezing", wrong: ["As warm as bath water", "Room temperature", "Boiling hot"], why: "Deep ocean water is about 2 to 4°C (36 to 39°F)." },
        { q: "Water pressure goes up by about one 'atmosphere' (the weight of all the air above us) for every...", a: "10 meters (33 feet) of depth", wrong: ["1 kilometer of depth", "1 centimeter of depth", "100 kilometers of depth"], why: "At the bottom of the Mariana Trench, the pressure is over 1,000 times what we feel at the surface." },
        { q: "Which zone has the greatest water pressure?", a: "Trenches (Hadal Zone)", wrong: ["Sunlight Zone", "Twilight Zone", "Intertidal Zone"], why: "It's the deepest zone, so it has the most water pushing down." },
        { q: "Which zone has the most food available?", a: "Sunlight Zone", wrong: ["Midnight Zone", "Abyssal Zone", "Trenches"], why: "Photosynthesis makes food near the surface. Deeper zones have much less." },
        { q: "Tiny drifting plant-like living things that make food using sunlight are called...", a: "Phytoplankton", wrong: ["Zooplankton", "Coral", "Squid"], why: "Phytoplankton are the base of the ocean food web and make much of Earth's oxygen." },
        { q: "Tiny drifting animals, like baby fish and krill, are called...", a: "Zooplankton", wrong: ["Phytoplankton", "Seaweed", "Barnacles"], why: "'Zoo' means animal. Zooplankton eat phytoplankton." },
        { q: "Bits of dead plankton, poop, and other material that slowly drift down to the deep sea are called 'marine...'", type: "type", a: ["snow", "marine snow"], why: "Marine snow is an important food source for deep-sea animals." },
        { q: "Why is there so little food in the deep ocean?", a: "No sunlight means no photosynthesis", wrong: ["The water is too salty", "Deep animals don't eat", "Food floats away"], why: "Deep animals depend mostly on food drifting down from above or on eating each other." },
        { q: "Why does the ocean look blue?", a: "Water absorbs red light and scatters blue light", wrong: ["It reflects blue fish", "It's full of blue paint", "The sand is blue"], why: "Red light is absorbed first, within the top few meters. Blue light travels deepest." },
        { q: "Which color of sunlight disappears first as you go deeper in the ocean?", a: "Red", wrong: ["Blue", "Green", "White"], why: "Red light is absorbed near the surface, so red animals look black in the deep." },
        { q: "Why is photosynthesis impossible in the Midnight Zone?", a: "There is no sunlight", wrong: ["The water is too salty", "There's too much oxygen", "The pressure is too low"], why: "Plants and algae need light to make food." },
        { q: "Which zone has the most changing conditions, with waves, drying out, and temperature swings?", a: "Intertidal Zone", wrong: ["Abyssal Zone", "Midnight Zone", "Trenches"], why: "Intertidal animals get pounded by waves and left in the sun and air at low tide." },
        { q: "What causes ocean tides?", a: "Mostly the Moon's gravity", wrong: ["Wind only", "Earthquakes", "Fish swimming"], why: "The Moon's gravity (with help from the Sun) pulls on Earth's oceans." },
        { q: "About how many high tides do most beaches get each day?", a: "2", wrong: ["1 each week", "10", "None"], why: "Most coasts have two high tides and two low tides about every 24 hours." },
        { q: "Pools of seawater left behind on rocky shores when the tide goes out are called...", type: "type", a: ["tide pools", "tide pool", "tidepools", "rock pools"], why: "Tide pools are great places to find crabs, sea stars, and snails." }
      ]
    },
    {
      topic: "Adaptations",
      questions: [
        { q: "A body feature or behavior that helps an animal survive in its environment is called an...", type: "type", a: ["adaptation"], why: "Big eyes, glowing lights, and hard shells are all adaptations." },
        { q: "When a living thing makes its own light, it's called...", type: "type", a: ["bioluminescence"], why: "'Bio' means life and 'luminescence' means light. Most deep-sea animals can make light." },
        { q: "Which of these is NOT a way deep-sea animals use bioluminescence?", a: "To warm themselves up", wrong: ["To lure prey", "To find mates", "To confuse predators"], why: "The light is cold light, made by a chemical reaction. It doesn't make heat." },
        { q: "Many Twilight Zone animals have lights on their bellies that match the dim light from above. This helps them...", a: "Hide their shadow from predators below", wrong: ["See the bottom", "Stay warm", "Talk to whales"], why: "This is called counterillumination, a kind of camouflage." },
        { q: "Why do many Twilight Zone animals, like lanternfish and squid, have very large eyes?", a: "To see in dim light", wrong: ["To look scary", "To keep warm", "To swim faster"], why: "Big eyes collect as much of the faint light as possible." },
        { q: "Many deep-sea animals are red or black. Why does that help?", a: "Red and black are nearly invisible where there's no red light", wrong: ["It keeps them warm", "It makes them taste bad", "It helps them float"], why: "No red light reaches the deep, so red animals look black and blend into the darkness." },
        { q: "Why do many deep-sea fish have huge mouths and stretchy stomachs?", a: "Food is rare, so they must eat whatever they find, even big prey", wrong: ["To sing louder", "To drink more water", "To scare the Sun"], why: "When a meal comes along, they can't afford to let it go." },
        { q: "Many deep-sea animals have soft, flexible, jelly-like bodies. How does this help them?", a: "It helps them handle the huge water pressure", wrong: ["It helps them fly", "It keeps them dry", "It helps them see"], why: "Bodies filled with water, without air spaces, don't get crushed by pressure." },
        { q: "Many deep-sea animals move slowly and have slow body processes. Why?", a: "To save energy where food is scarce", wrong: ["Because they are lazy", "Because the water is too hot", "Because they are babies"], why: "Using less energy means they need less food." },
        { q: "Sunlight Zone fish like tuna are often dark on top and light on the bottom. This is called...", a: "Countershading", wrong: ["Bioluminescence", "Migration", "Echolocation"], why: "From above, the dark back blends with deep water. From below, the light belly blends with the bright surface." },
        { q: "Some Twilight Zone animals are see-through (transparent). How does that help?", a: "Predators can see right through them", wrong: ["It keeps them warm", "It helps them make food", "It makes them heavier"], why: "Being transparent is a great way to hide in open water with nowhere to hide." },
        { q: "Barnacles and mussels in the Intertidal Zone close up tight at low tide. Why?", a: "To keep from drying out", wrong: ["To sleep", "To catch birds", "To make light"], why: "Holding water inside keeps them moist until the tide returns." },
        { q: "Intertidal animals like mussels and barnacles attach tightly to rocks. This helps them...", a: "Not get washed away by waves", wrong: ["Stay warm", "Find mates in the dark", "Make light"], why: "Mussels use strong threads called byssal threads, and barnacles use a natural glue." },
        { q: "Some deep-sea animals have tiny eyes or no eyes at all. Why?", a: "In total darkness, eyes aren't very useful", wrong: ["They lost them in fights", "They see with their fins", "They live in the Sunlight Zone"], why: "Instead, they rely on touch, smell, and sensing vibrations." },
        { q: "Which adaptation helps an animal hide by blending in with its surroundings?", type: "type", a: ["camouflage"], why: "Countershading, transparency, and red coloring are all kinds of camouflage." },
        { q: "True or false: Scientists think most deep-sea animals can make their own light.", a: "True", wrong: ["False"], why: "Bioluminescence is very common in the deep sea, where it's the only light there is." }
      ]
    },
    {
      topic: "Sunlight Zone animals",
      questions: [
        { q: "Which small orange and white fish lives safely among the stinging tentacles of sea anemones?", type: "type", a: ["clownfish", "clown fish", "anemonefish"], why: "A slimy mucus coating protects clownfish from the anemone's stings." },
        { q: "Clownfish and sea anemones help each other. This relationship is called...", a: "Mutualism", wrong: ["Parasitism", "Predation", "Competition"], why: "The anemone protects the clownfish, and the clownfish cleans the anemone and chases away some predators." },
        { q: "Which Sunlight Zone animal must come to the surface to breathe air through its nostrils and lays eggs on beaches?", a: "Sea turtle", wrong: ["Tuna", "Clownfish", "Lanternfish"], why: "Sea turtles are reptiles. Loggerhead sea turtles nest on North Carolina beaches." },
        { q: "Sea turtles have flat flippers instead of feet. How does this help them?", a: "It helps them swim long distances", wrong: ["It helps them climb trees", "It helps them dig tunnels underwater", "It keeps them warm"], why: "Flippers act like wings, pushing them through the water." },
        { q: "Which fast, torpedo-shaped Sunlight Zone fish can swim across whole oceans?", a: "Tuna", wrong: ["Anglerfish", "Tripod fish", "Snailfish"], why: "Tuna have streamlined bodies and powerful tails built for speed." },
        { q: "A streamlined, torpedo-like body shape helps fish like tuna...", a: "Swim fast with less effort", wrong: ["Hide in sand", "Make light", "Handle crushing pressure"], why: "Smooth shapes slip through water easily." },
        { q: "Dolphins live in the Sunlight Zone. How do they breathe?", a: "They breathe air through a blowhole", wrong: ["They breathe water with gills", "They don't need oxygen", "Through their skin only"], why: "Dolphins are mammals and must come up to breathe." },
        { q: "Dolphins find food by making clicks and listening for echoes. This is called...", type: "type", a: ["echolocation"], why: "The echoes tell them where fish are, even in murky water." },
        { q: "Which Sunlight Zone animal is a mammal?", a: "Dolphin", wrong: ["Tuna", "Clownfish", "Sea turtle"], why: "Dolphins breathe air, are warm-blooded, and feed their babies milk." },
        { q: "Which is a Sunlight Zone animal?", a: "Tuna", wrong: ["Gulper eel", "Tripod fish", "Snailfish"], why: "The others live much deeper." }
      ]
    },
    {
      topic: "Twilight Zone animals",
      questions: [
        { q: "Which small Twilight Zone fish has rows of glowing spots and swims to the surface each night to eat?", type: "type", a: ["lanternfish", "lantern fish"], why: "Lanternfish are among the most common fish on Earth." },
        { q: "Which Twilight Zone fish has a thin, silvery body shaped like a tool used for chopping, and lights on its belly?", a: "Hatchetfish", wrong: ["Anglerfish", "Tuna", "Clownfish"], why: "Its belly lights hide its shadow from predators below." },
        { q: "Hatchetfish have big eyes that point upward. Why?", a: "To spot the shadows of prey above them", wrong: ["To look at the bottom", "To see the Sun set", "To watch for tides"], why: "Prey shows up as a dark shape against the dim light above." },
        { q: "Which Twilight Zone animal has 8 arms, 2 tentacles, and can squirt ink or glowing clouds to escape?", a: "Squid", wrong: ["Sea star", "Brittle star", "Amphipod"], why: "Some deep-sea squid squirt glowing ink instead of dark ink." },
        { q: "Which is a Twilight Zone animal?", a: "Lanternfish", wrong: ["Clownfish", "Sea cucumber", "Barnacle"], why: "Lanternfish, hatchetfish, and many squid live in the Twilight Zone." },
        { q: "Why do squid in the deep sometimes squirt glowing ink instead of black ink?", a: "Black ink would be invisible in the dark", wrong: ["Glowing ink tastes better", "It keeps them warm", "It helps them breathe"], why: "A flash of glowing ink can distract a predator in the darkness." }
      ]
    },
    {
      topic: "Midnight Zone animals",
      questions: [
        { q: "Which Midnight Zone fish dangles a glowing 'fishing lure' from its head to attract prey?", type: "type", a: ["anglerfish", "angler fish", "angler"], why: "The lure glows because of bioluminescent bacteria living inside it." },
        { q: "Which Midnight Zone fish has an enormous mouth, like a pelican's pouch, and a long, whip-like tail?", a: "Gulper eel", wrong: ["Clownfish", "Tuna", "Sea star"], why: "Its giant mouth can swallow prey almost as big as itself." },
        { q: "Which Midnight Zone fish has long, needle-like teeth so big they don't fit inside its mouth?", a: "Viperfish", wrong: ["Lanternfish", "Clownfish", "Tripod fish"], why: "Viperfish also have a glowing lure to attract prey." },
        { q: "How does the anglerfish's glowing lure help it survive?", a: "It attracts prey right to its mouth", wrong: ["It keeps it warm", "It helps it swim fast", "It scares away food"], why: "In total darkness, a light is irresistible to curious prey." },
        { q: "Which is a Midnight Zone animal?", a: "Viperfish", wrong: ["Dolphin", "Mussel", "Sea turtle"], why: "Anglerfish, gulper eels, and viperfish live in the Midnight Zone." },
        { q: "Why do anglerfish often wait instead of chasing their food?", a: "Waiting saves energy where food is rare", wrong: ["They can't swim at all", "They are always asleep", "Their fins are made of rock"], why: "Sit-and-wait hunting uses much less energy than chasing." }
      ]
    },
    {
      topic: "Abyssal and Trench animals",
      questions: [
        { q: "Which Abyssal Zone fish stands on the seafloor on three long, stiff fins, facing the current to catch food?", type: "type", a: ["tripod fish", "tripodfish", "tripod"], why: "Standing tall lets it catch small animals drifting by." },
        { q: "Which Abyssal Zone animal crawls slowly across the seafloor, eating mud and marine snow?", a: "Sea cucumber", wrong: ["Tuna", "Clownfish", "Dolphin"], why: "Sea cucumbers are relatives of sea stars and help clean the ocean floor." },
        { q: "Which Abyssal Zone animal has five long, skinny, snake-like arms and a small central disk?", a: "Brittle star", wrong: ["Sea cucumber", "Squid", "Snailfish"], why: "Brittle stars can break off an arm to escape and regrow it later." },
        { q: "Which shrimp-like scavengers are found even at the bottom of the deepest ocean trenches?", a: "Amphipods", wrong: ["Clownfish", "Dolphins", "Sea turtles"], why: "Amphipods quickly swarm any food that falls to the trench floor." },
        { q: "Which fish holds the record for being found at the deepest depths, in ocean trenches?", a: "Snailfish", wrong: ["Tuna", "Clownfish", "Anglerfish"], why: "Snailfish have been filmed more than 8,000 meters deep. Their soft bodies handle huge pressure." },
        { q: "How do snailfish survive the crushing pressure of the trenches?", a: "Soft, jelly-like bodies without air-filled spaces", wrong: ["Thick metal shells", "Big lungs full of air", "They swim up every hour"], why: "Without air spaces to squeeze, the pressure doesn't crush them." },
        { q: "Most animals in the Abyssal Zone get their food by...", a: "Eating marine snow and scavenging", wrong: ["Making food from sunlight", "Eating seaweed", "Hunting birds"], why: "Food drifts down from above or comes from dead animals that sink." },
        { q: "Which is an Abyssal Zone animal?", a: "Tripod fish", wrong: ["Clownfish", "Barnacle", "Dolphin"], why: "Tripod fish, sea cucumbers, and brittle stars live on the abyssal seafloor." },
        { q: "Which is a Trench (Hadal Zone) animal?", a: "Snailfish", wrong: ["Sea turtle", "Clownfish", "Lanternfish"], why: "Snailfish and amphipods live in the deepest trenches." },
        { q: "People explore the deepest ocean using special vehicles built to handle the pressure. These are called...", a: "Submersibles", wrong: ["Hot air balloons", "Canoes", "Rockets"], why: "In 1960, the submersible Trieste first reached the bottom of the Challenger Deep." }
      ]
    },
    {
      topic: "Intertidal Zone animals",
      questions: [
        { q: "Which intertidal animal glues its head to a rock and kicks food into its mouth with its feathery legs?", a: "Barnacle", wrong: ["Sea star", "Crab", "Mussel"], why: "Barnacles are crustaceans, related to crabs and shrimp." },
        { q: "Which intertidal animal uses hundreds of tiny tube feet to move and can regrow a lost arm?", a: "Sea star", wrong: ["Barnacle", "Mussel", "Crab"], why: "Sea stars (starfish) aren't fish at all. They're echinoderms." },
        { q: "Sea stars eat mussels by...", a: "Pulling the shell open with their tube feet", wrong: ["Biting with sharp teeth", "Stinging them", "Waiting for them to die of old age"], why: "A sea star can push its stomach out of its body and into the mussel's shell to digest it." },
        { q: "Which intertidal animal has a hard shell, walks sideways, and has claws for grabbing food?", type: "type", a: ["crab", "crabs"], why: "Crabs scuttle into cracks and under rocks to hide from waves and predators." },
        { q: "Which intertidal animal has two dark shells hinged together and attaches to rocks with strong threads?", a: "Mussel", wrong: ["Crab", "Sea star", "Barnacle"], why: "Mussels filter tiny food out of the water when the tide is in." },
        { q: "Why do many crabs hide under rocks at low tide?", a: "To stay cool, damp, and safe from birds", wrong: ["To sleep until winter", "To make light", "To lay eggs on the rocks"], why: "Rocks give shade, moisture, and protection." },
        { q: "Which is an Intertidal Zone animal?", a: "Barnacle", wrong: ["Viperfish", "Tripod fish", "Lanternfish"], why: "Crabs, barnacles, sea stars, and mussels are classic intertidal animals." },
        { q: "What are the biggest challenges for animals in the Intertidal Zone?", a: "Crashing waves and drying out at low tide", wrong: ["Crushing pressure and total darkness", "No oxygen at all", "Freezing solid every night"], why: "Intertidal animals need grip, shells, and ways to stay moist." }
      ]
    },
    {
      topic: "Vertical migration",
      questions: [
        { q: "Many ocean animals swim toward the surface at night and back down to deep water during the day. This is called...", a: "Daily vertical migration", wrong: ["Hibernation", "Metamorphosis", "Photosynthesis"], why: "It's the largest migration on Earth, happening every single day." },
        { q: "Why do many animals swim UP toward the surface at night?", a: "To find food", wrong: ["To sunbathe", "To sleep", "To lay eggs on the beach"], why: "The surface waters have the most food, like plankton." },
        { q: "Why do many animals swim back DOWN to deep water during the day?", a: "To hide from predators that hunt by sight", wrong: ["To get warmer", "To find more sunlight", "To breathe air"], why: "In the dark depths, it's harder for predators to see them." },
        { q: "What signal tells many migrating animals when to swim up or down?", a: "Changes in light", wrong: ["Changes in salt", "The sound of boats", "The phase of the Moon only"], why: "Many animals follow a certain light level as it rises and falls each day." },
        { q: "Which of these animals is famous for daily vertical migration?", a: "Lanternfish", wrong: ["Barnacle", "Sea star", "Tripod fish"], why: "Lanternfish rise hundreds of meters every night to feed." },
        { q: "True or false: Daily vertical migration is the largest animal migration on Earth.", a: "True", wrong: ["False"], why: "Billions of animals move up and down in the ocean every day." },
        { q: "During the day, migrating animals like lanternfish rest in which zone?", a: "Twilight Zone", wrong: ["Intertidal Zone", "Trenches", "The beach"], why: "The dim Twilight Zone is dark enough to hide in but close enough to the food above." },
        { q: "How does daily vertical migration help the ocean store carbon?", a: "Animals eat near the surface and then carry that carbon deep when they swim down", wrong: ["It doesn't do anything", "It turns carbon into gold", "It makes the ocean warmer"], why: "Their poop and bodies move carbon from the surface to the deep sea." },
        { q: "Zooplankton rise to the surface at night to eat what?", a: "Phytoplankton", wrong: ["Rocks", "Sea turtles", "Sand"], why: "Phytoplankton grow in the sunlit surface waters." },
        { q: "If you dragged a net through the Sunlight Zone at midnight and again at noon, when would you probably catch more animals?", a: "At midnight", wrong: ["At noon", "Exactly the same both times", "Never"], why: "Many animals come up from the deep to feed at night." }
      ]
    }
  ]
});
