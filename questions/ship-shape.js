/* Ship Shape (2027 NC Division A) question bank, for the written assessment.
 * Covers Archimedes' Principle, displacement, buoyancy, and flotation, plus
 * density, measuring mass and volume, and barge design ideas.
 * Format notes are in geology-rocks.js.
 */
(window.QUIZ_EVENTS = window.QUIZ_EVENTS || []).push({
  id: "ship-shape",
  name: "Ship Shape",
  icon: "⛵",
  color: "#1f9e8f",
  blurb: "Floating and sinking for the written test: buoyancy, displacement, density, and Archimedes' principle.",
  sections: [
    {
      topic: "Buoyancy",
      questions: [
        { q: "The upward push that water (or any fluid) gives an object is called the...", a: "Buoyant force", wrong: ["Gravity", "Friction", "Magnetism"], why: "Buoyancy is why things feel lighter underwater." },
        { q: "Which force pulls a boat DOWN toward the bottom?", a: "Gravity (the boat's weight)", wrong: ["Buoyancy", "Magnetism", "Wind"], why: "Gravity pulls down, and buoyancy pushes up." },
        { q: "An object floats when the buoyant force pushing up is...", a: "Equal to the object's weight", wrong: ["Less than the object's weight", "Zero", "Pushing sideways"], why: "When the forces balance, the object floats." },
        { q: "An object sinks when its weight is...", a: "More than the buoyant force the water can give it", wrong: ["Less than the buoyant force", "Exactly zero", "Equal to the buoyant force"], why: "Gravity wins, so the object goes down." },
        { q: "Why do you feel lighter in a swimming pool?", a: "The water's buoyant force pushes up on you", wrong: ["Water makes you lose weight", "Gravity turns off in water", "Pools are closer to the Moon"], why: "Your mass is the same, but the water helps hold you up." },
        { q: "The ability of an object to float is called...", type: "type", a: ["buoyancy"], why: "Objects with high buoyancy float easily." },
        { q: "A rock weighs 10 newtons in air but only 6 newtons underwater. How big is the buoyant force?", a: "4 newtons", wrong: ["16 newtons", "10 newtons", "6 newtons"], why: "10 − 6 = 4. The water pushes up with 4 newtons." },
        { q: "Why does a life jacket help you float?", a: "It adds a lot of volume without much weight, increasing buoyancy", wrong: ["It makes you heavier", "It's magnetic", "It pushes the water away forever"], why: "Life jackets are filled with foam or air." },
        { q: "Which is a 'fluid' that can make things buoyant?", a: "Both water and air", wrong: ["Only water", "Only rock", "Only ice"], why: "Hot air balloons float in air for the same reason boats float in water." },
        { q: "Buoyant force always pushes in which direction?", a: "Up", wrong: ["Down", "Sideways", "In circles"], why: "Water pushes harder on the bottom of an object than the top, so the total push is upward." },
        { q: "A submarine fills its ballast tanks with water. What happens?", a: "It becomes heavier and sinks", wrong: ["It floats higher", "It speeds up", "It stops moving forever"], why: "To rise again, it pumps the water out and fills the tanks with air." },
        { q: "How does a submarine rise back to the surface?", a: "It pushes water out of its tanks and replaces it with air", wrong: ["It adds more water", "It turns off its lights", "It drops its anchor"], why: "Less weight for the same size means the buoyant force wins." },
        { q: "Which sits higher in the water: an empty boat, or the same boat loaded with cargo?", a: "The empty boat", wrong: ["The loaded boat", "They sit at the same height", "Neither floats"], why: "The empty boat is lighter, so it needs to push aside less water to float." },
        { q: "Many fish have a gas-filled bag inside them that helps them float at the right depth. It's called a...", a: "Swim bladder", wrong: ["Gill", "Fin", "Scale"], why: "Fish add or remove gas from the swim bladder to rise or sink." }
      ]
    },
    {
      topic: "Displacement",
      questions: [
        { q: "When an object is put in water, it pushes some water out of the way. This is called...", type: "type", a: ["displacement", "displacing"], why: "The water level rises because the object takes up space." },
        { q: "You drop a toy into a glass of water. Why does the water level rise?", a: "The toy displaces (pushes aside) some water", wrong: ["The toy makes more water", "The toy melts", "The glass shrinks"], why: "The toy and water can't be in the same place at once." },
        { q: "The amount of water displaced by an object that is completely underwater is equal to the object's...", a: "Volume", wrong: ["Color", "Temperature", "Age"], why: "That's why displacement is a great way to measure volume." },
        { q: "A graduated cylinder has 50 mL of water. You drop in a rock, and the level rises to 65 mL. What is the rock's volume?", a: "15 mL", wrong: ["65 mL", "50 mL", "115 mL"], why: "65 − 50 = 15 mL. This is the water displacement method." },
        { q: "A graduated cylinder has 30 mL of water. A marble raises it to 34 mL. What is the marble's volume?", a: "4 mL (4 cm³)", wrong: ["34 mL", "30 mL", "64 mL"], why: "34 − 30 = 4 mL." },
        { q: "Why is water displacement useful for measuring a rock's volume?", a: "Rocks are oddly shaped and hard to measure with a ruler", wrong: ["Rocks dissolve in water", "Rulers don't work on rocks", "It makes the rock lighter"], why: "Displacement works for any shape." },
        { q: "One milliliter (mL) of water takes up the same space as...", a: "One cubic centimeter (cm³)", wrong: ["One liter", "One kilogram", "One meter"], why: "1 mL = 1 cm³. This makes converting easy." },
        { q: "What is the mass of 1 mL of water?", a: "About 1 gram", wrong: ["About 10 grams", "About 1 kilogram", "About 100 grams"], why: "1 mL of water has a mass of about 1 g. So 100 mL of water is about 100 g." },
        { q: "What is the mass of 250 mL of water?", a: "About 250 grams", wrong: ["About 25 grams", "About 2.5 grams", "About 2,500 grams"], why: "Each mL of water is about 1 gram." },
        { q: "A floating boat displaces an amount of water that weighs...", a: "The same as the whole boat and its cargo", wrong: ["Nothing", "Twice as much as the boat", "Half as much as the boat"], why: "A floating object displaces its own weight in water." },
        { q: "A 40-gram toy boat floats. How many grams of water does it displace?", a: "40 grams", wrong: ["0 grams", "80 grams", "20 grams"], why: "A floating object displaces water equal to its own weight." },
        { q: "You add 50 grams of cargo to a floating 20-gram boat. How much water does it displace now (if it still floats)?", a: "70 grams", wrong: ["50 grams", "20 grams", "30 grams"], why: "20 + 50 = 70 grams. More cargo means the boat sits lower and displaces more water." },
        { q: "As you add cargo to a floating barge, what happens?", a: "It sits lower in the water and displaces more water", wrong: ["It rises higher", "It displaces less water", "Nothing changes"], why: "More weight means it has to push aside more water to stay afloat." },
        { q: "A tub is filled to the very top. You gently put in a floating toy boat, and 30 mL of water spills out. What is the boat's mass?", a: "About 30 grams", wrong: ["About 3 grams", "About 300 grams", "Can't tell"], why: "It displaced 30 mL of water, which is 30 grams, equal to the boat's weight." },
        { q: "What tool is used to measure the volume of a liquid in science class?", a: "Graduated cylinder", wrong: ["Ruler", "Thermometer", "Balance"], why: "Read the bottom of the curved surface (the meniscus) at eye level." },
        { q: "When reading a graduated cylinder, you should read the bottom of the curved water surface. This curve is called the...", a: "Meniscus", wrong: ["Hull", "Keel", "Waterline"], why: "Read it at eye level for the most accurate measurement." }
      ]
    },
    {
      topic: "Archimedes' principle",
      questions: [
        { q: "Archimedes' principle says the buoyant force on an object equals the weight of the...", a: "Water (fluid) it displaces", wrong: ["Object itself, always", "Air above it", "Container"], why: "The more water an object pushes aside, the bigger the upward push." },
        { q: "Archimedes was a scientist and inventor from which ancient civilization?", a: "Ancient Greece", wrong: ["Ancient Egypt", "Ancient China", "The Aztec Empire"], why: "He lived in Syracuse, a Greek city on the island of Sicily, over 2,200 years ago." },
        { q: "According to legend, Archimedes shouted which word when he figured out displacement in his bathtub?", a: "Eureka!", wrong: ["Bingo!", "Hooray!", "Aloha!"], why: "'Eureka' means 'I have found it!' in Greek. It's also the name of this quiz app!" },
        { q: "In the famous story, Archimedes used displacement to test whether a king's crown was...", a: "Made of pure gold", wrong: ["The right color", "Too heavy to wear", "Stolen"], why: "A crown mixed with silver would displace more water than the same weight of pure gold." },
        { q: "An object displaces 80 grams of water. According to Archimedes' principle, how big is the buoyant force?", a: "Equal to the weight of 80 grams of water", wrong: ["Zero", "Equal to 8 grams", "Equal to 800 grams"], why: "Buoyant force = weight of the displaced water." },
        { q: "Two blocks are the same size, but one is wood and one is iron. When both are completely underwater, which has the larger buoyant force?", a: "They have the same buoyant force", wrong: ["The iron block", "The wooden block", "Neither has any"], why: "Same size means same volume displaced, so the same buoyant force. The iron sinks because it's heavier." },
        { q: "According to Archimedes' principle, an object will float if it can displace...", a: "Its own weight in water before it's completely underwater", wrong: ["Any amount of water", "No water", "Twice its volume in air"], why: "If it runs out of room to push water aside, it sinks." },
        { q: "A bigger boat hull can carry more cargo because...", a: "It can displace more water", wrong: ["It is heavier", "It uses less material", "It has more colors"], why: "More displaced water means a bigger buoyant force." },
        { q: "Archimedes' principle works for objects in water and in...", a: "Any fluid, including air", wrong: ["Only salt water", "Only solid ice", "Only outer space"], why: "Blimps and hot air balloons float because they displace heavy air." },
        { q: "True or false: The buoyant force on a submerged object depends on how much fluid it displaces.", a: "True", wrong: ["False"], why: "That's exactly what Archimedes' principle says." }
      ]
    },
    {
      topic: "Density and flotation",
      questions: [
        { q: "How much mass is packed into a certain amount of space is called...", type: "type", a: ["density"], why: "Density = mass ÷ volume." },
        { q: "The formula for density is...", a: "Mass ÷ volume", wrong: ["Mass × volume", "Volume ÷ mass", "Mass + volume"], why: "Density tells you how much mass is in each cubic centimeter." },
        { q: "What is the density of fresh water?", a: "About 1 gram per cubic centimeter (1 g/cm³)", wrong: ["About 10 g/cm³", "About 0.1 g/cm³", "About 100 g/cm³"], why: "It's a handy number to compare other things to." },
        { q: "Objects that are LESS dense than water will...", a: "Float", wrong: ["Sink", "Dissolve", "Explode"], why: "Wood, cork, and ice are less dense than water." },
        { q: "Objects that are MORE dense than water will...", a: "Sink", wrong: ["Float", "Evaporate", "Grow"], why: "Rocks, metal, and marbles are denser than water." },
        { q: "A block has a mass of 40 g and a volume of 50 cm³. What is its density, and will it float?", a: "0.8 g/cm³; it floats", wrong: ["1.25 g/cm³; it sinks", "90 g/cm³; it sinks", "2,000 g/cm³; it floats"], why: "40 ÷ 50 = 0.8. That's less than water's 1.0, so it floats." },
        { q: "A block has a mass of 60 g and a volume of 20 cm³. What is its density, and will it float?", a: "3 g/cm³; it sinks", wrong: ["0.33 g/cm³; it floats", "80 g/cm³; it floats", "1,200 g/cm³; it floats"], why: "60 ÷ 20 = 3. That's more than water's 1.0, so it sinks." },
        { q: "Why does ice float on water?", a: "Ice is less dense than liquid water", wrong: ["Ice is heavier than water", "Ice is hollow", "Cold things always float"], why: "Water expands when it freezes, so ice is about 0.9 g/cm³." },
        { q: "About how much of an iceberg is hidden underwater?", a: "About 90%", wrong: ["About 10%", "About 50%", "None of it"], why: "Ice is only a little less dense than water, so most of it sits below the surface. That's where 'tip of the iceberg' comes from." },
        { q: "You pour oil and water into a jar. What happens?", a: "The oil floats on top because it's less dense", wrong: ["The oil sinks to the bottom", "They mix perfectly", "The water floats on the oil"], why: "Less dense liquids float on denser ones." },
        { q: "Why is it easier to float in the ocean than in a lake?", a: "Salt water is denser than fresh water", wrong: ["The ocean is deeper", "Waves hold you up", "Lakes have no water pressure"], why: "Denser water gives a bigger buoyant force." },
        { q: "An egg sinks in a glass of fresh water. What can you add to make it float?", a: "Lots of salt", wrong: ["More fresh water", "Ice cubes", "Food coloring"], why: "Salt makes the water denser than the egg." },
        { q: "A solid lump of clay sinks. How can you make the same clay float?", a: "Shape it into a wide, hollow boat", wrong: ["Squeeze it tighter", "Paint it", "Break it into tiny crumbs"], why: "The boat shape takes up more space and displaces more water, while the mass stays the same." },
        { q: "A ball of aluminum foil sinks, but the same foil shaped into a boat floats. Why?", a: "The boat shape displaces more water", wrong: ["The foil got lighter", "The boat shape is magnetic", "The ball was a different metal"], why: "Same mass, but a bigger volume of water pushed aside means more buoyant force." },
        { q: "How can a huge steel ship float when a steel nail sinks?", a: "The ship's hollow shape holds lots of air, so it displaces a lot of water", wrong: ["Ship steel is lighter than nail steel", "Ships have magnets", "Oceans are thicker than bathwater"], why: "The ship's overall density, steel plus air inside, is less than water's." },
        { q: "Which of these will float in water?", a: "A cork", wrong: ["A marble", "A penny", "A rock"], why: "Cork is full of tiny air pockets and is much less dense than water." },
        { q: "Which of these will sink in water?", a: "A steel hex nut", wrong: ["A plastic straw sealed at both ends", "A piece of dry wood", "An empty plastic bottle with its cap on"], why: "Steel and zinc-coated metal nuts are much denser than water. That's why they make good cargo!" },
        { q: "An orange floats with its peel on but sinks when it's peeled. Why?", a: "The peel has tiny air pockets that make it less dense", wrong: ["The peel is magnetic", "Peeled oranges are hungrier", "The peel is made of plastic"], why: "The peel works like a built-in life jacket." },
        { q: "Two objects have the same mass. Object A is big and Object B is small. Which is more likely to float?", a: "Object A, the big one", wrong: ["Object B, the small one", "They'll both float the same", "Neither can float"], why: "Same mass spread over a bigger volume means a lower density." },
        { q: "A plastic bottle filled with air floats. What happens if you fill it completely with sand?", a: "It sinks", wrong: ["It floats higher", "It floats the same", "It flies away"], why: "Sand makes the bottle's mass much bigger, raising its density above water's." },
        { q: "What is it called when an object floats on the surface of a liquid?", a: "Flotation", wrong: ["Evaporation", "Condensation", "Erosion"], why: "Flotation happens when the buoyant force balances the object's weight." },
        { q: "True or false: Heavy objects always sink and light objects always float.", a: "False", wrong: ["True"], why: "It's density, not just weight, that matters. A huge ship floats, and a tiny pebble sinks." },
        { q: "A tiny steel paper clip can sometimes rest on top of water without sinking. What holds it up?", a: "Surface tension", wrong: ["Buoyancy from air bubbles", "Magnetism", "Gravity"], why: "Water's surface acts like a thin stretchy skin. Tap it and the clip sinks!" }
      ]
    },
    {
      topic: "Measuring mass",
      questions: [
        { q: "In Ship Shape, cargo is measured in which unit?", a: "Grams", wrong: ["Liters", "Meters", "Degrees"], why: "Grams measure mass. The cargo is weighed to the nearest 0.01 gram." },
        { q: "What tool measures mass?", a: "A balance or scale", wrong: ["A ruler", "A thermometer", "A graduated cylinder"], why: "A digital scale can measure to hundredths of a gram." },
        { q: "How many grams are in 1 kilogram?", a: "1,000", wrong: ["10", "100", "1,000,000"], why: "'Kilo' means thousand." },
        { q: "How many milliliters are in 1 liter?", a: "1,000", wrong: ["10", "100", "1,000,000"], why: "'Milli' means one-thousandth. A liter of water has a mass of about 1 kilogram." },
        { q: "Which is heavier: 500 grams or 0.5 kilograms?", a: "They are the same", wrong: ["500 grams", "0.5 kilograms", "Can't compare"], why: "0.5 kg × 1,000 = 500 g." },
        { q: "A scale shows 123.45 g. What does the '5' at the end stand for?", a: "5 hundredths of a gram", wrong: ["5 grams", "5 kilograms", "5 tenths of a gram"], why: "Two places after the decimal point is hundredths (0.01)." },
        { q: "Why do scientists make an estimate before testing?", a: "To make a prediction they can compare with the real result", wrong: ["To avoid doing the test", "Because guessing is always right", "To make the barge heavier"], why: "In Ship Shape, an exact estimate earns bonus points!" },
        { q: "Your barge held 213.40 g, and you estimated 200.00 g. How far off was your estimate?", a: "13.40 g", wrong: ["413.40 g", "2.34 g", "0 g"], why: "213.40 − 200.00 = 13.40 g." },
        { q: "Mass measures...", a: "How much matter is in an object", wrong: ["How much space an object takes up", "How hot an object is", "How fast an object moves"], why: "Volume measures how much space an object takes up." },
        { q: "Volume measures...", a: "How much space an object takes up", wrong: ["How much matter is in it", "How heavy it feels", "Its color"], why: "Volume is measured in mL, L, or cm³." },
        { q: "What is the volume of a box that is 10 cm long, 10 cm wide, and 2 cm tall?", a: "200 cm³", wrong: ["22 cm³", "120 cm³", "2,000 cm³"], why: "Volume = length × width × height = 10 × 10 × 2 = 200 cm³." },
        { q: "What is the volume of a box that is 15 cm × 15 cm × 2.5 cm (the Ship Shape size limit)?", a: "562.5 cm³", wrong: ["32.5 cm³", "225 cm³", "56.25 cm³"], why: "15 × 15 = 225, and 225 × 2.5 = 562.5 cm³." }
      ]
    },
    {
      topic: "Designing a barge",
      questions: [
        { q: "A barge is a boat that is usually...", a: "Flat-bottomed, used to carry heavy cargo", wrong: ["Very tall and skinny", "Built only for racing", "A kind of submarine"], why: "Barges carry things like coal, grain, and sand on rivers and canals." },
        { q: "What shape of barge usually holds the most cargo before sinking?", a: "Wide and flat, with sides tall enough to keep water out", wrong: ["Tall and narrow like a tube", "Round like a ball", "Pointed like a needle"], why: "A wide, flat hull can push aside lots of water." },
        { q: "Why should you spread cargo evenly across the barge instead of piling it in one corner?", a: "So the barge stays level and doesn't tip", wrong: ["To make it heavier", "Because corners are slippery", "It doesn't matter"], why: "An uneven load lets water pour over one low edge." },
        { q: "Why is a low, wide boat more stable than a tall, narrow one?", a: "Its weight is low and spread out, so it's harder to tip", wrong: ["It's always lighter", "It has no weight", "Tall boats are always faster"], why: "A low center of gravity helps keep a boat upright." },
        { q: "In Ship Shape, a barge counts as 'sunk' when...", a: "The top edge of the cargo area goes below the water surface", wrong: ["The first drop of water gets in", "It touches the side of the container", "It tilts even a little"], why: "Some water inside is OK, as long as the top edge stays above the surface." },
        { q: "A 15 cm × 15 cm × 2.5 cm barge could displace at most about 562 cm³ of water. About how many grams is that?", a: "About 562 grams", wrong: ["About 56 grams", "About 5,620 grams", "About 5.6 grams"], hint: "1 cm³ of water has a mass of about 1 gram.", why: "So the barge plus its cargo can't weigh more than about 562 g, or it will go under." },
        { q: "Why does the barge's own mass matter when you're trying to hold the most cargo?", a: "Every gram of barge is a gram less cargo it can hold", wrong: ["Heavier barges always hold more", "It doesn't matter at all", "The barge has no mass"], why: "Use materials wisely. Extra tape and straws add mass." },
        { q: "Why might you seal the seams of a foil barge with tape?", a: "To keep water from leaking in", wrong: ["To make it magnetic", "To make it sink faster", "To add color"], why: "Leaks let water in, which adds weight and lowers the barge." },
        { q: "A barge made of aluminum foil can float even though aluminum is denser than water. Why?", a: "Its shape traps air, so the whole barge is less dense than water", wrong: ["Aluminum is lighter than water", "Foil is magnetic", "Water pushes it sideways"], why: "It's the same reason steel ships float." },
        { q: "The part of a boat's body that sits in the water is called the...", a: "Hull", wrong: ["Mast", "Sail", "Anchor"], why: "The hull's shape decides how much water it can displace." },
        { q: "The line on a boat that shows how deep it sits in the water is called the...", a: "Waterline", wrong: ["Hemline", "Timeline", "Skyline"], why: "As you add cargo, the waterline creeps up the side of the boat." },
        { q: "The distance from the water's surface up to the top edge of a boat's side is called...", a: "Freeboard", wrong: ["Keel", "Rudder", "Anchor line"], why: "More freeboard means more room for cargo before water pours in." },
        { q: "Why do real cargo ships have markings on their hulls showing how low they can safely sit?", a: "To prevent overloading, which could sink the ship", wrong: ["For decoration", "To show the ship's age", "To measure the ocean's depth"], why: "These are called load lines, or Plimsoll lines." },
        { q: "You're adding hex nuts to your barge. What is a smart way to place them?", a: "One at a time, spread evenly from the center outward", wrong: ["All in one corner at once", "Drop them from high up", "Only on one edge"], why: "Careful, even loading keeps the barge balanced longer." },
        { q: "A boat will carry more cargo in salt water than in fresh water. Why?", a: "Salt water is denser, so it gives more buoyant force", wrong: ["Salt makes boats lighter", "Fresh water is stickier", "It won't carry more"], why: "Denser water pushes up harder for the same amount displaced." },
        { q: "Engineers test a design, see how it fails, and improve it. This cycle is called the...", a: "Engineering design process", wrong: ["Water cycle", "Rock cycle", "Life cycle"], why: "Plan, build, test, and improve!" },
        { q: "Your first barge sinks with 150 g of cargo. You make the sides taller and it holds 220 g. What did the taller sides do?", a: "Let the barge sink lower and displace more water before water came over the top", wrong: ["Made the barge lighter", "Made the water less dense", "Removed the buoyant force"], why: "Taller sides mean more volume can go underwater before it's 'sunk.'" },
        { q: "Why would a barge with a big hole in the bottom sink?", a: "Water fills it, so it can't keep water pushed aside", wrong: ["Holes are magnetic", "Holes make boats lighter", "It wouldn't sink"], why: "A boat floats only while it keeps water out of its hull." }
      ]
    },
    {
      topic: "Floating in the real world",
      questions: [
        { q: "A hot air balloon rises because...", a: "Hot air inside is less dense than the cooler air outside", wrong: ["The balloon is pulled by the Sun", "Fire pushes the ground away", "Hot air is heavier"], why: "Air is a fluid too, so buoyancy works in air." },
        { q: "Why do helium balloons float up?", a: "Helium is less dense than air", wrong: ["Helium is heavier than air", "Balloons are magnetic", "Wind always blows up"], why: "The surrounding air pushes up with a buoyant force greater than the balloon's weight." },
        { q: "A person floats more easily after taking a deep breath. Why?", a: "Air in the lungs makes the body less dense", wrong: ["Breathing makes you heavier", "Air pulls you up by magic", "It doesn't make a difference"], why: "Your lungs work a little like a life jacket." },
        { q: "The Dead Sea is so salty that people float easily on top. Why?", a: "The very salty water is much denser than a person", wrong: ["The water is very shallow", "There's no gravity there", "The water is frozen"], why: "Dense water gives a big buoyant force." },
        { q: "Why do canoes and kayaks float so well even with a person inside?", a: "Their long, hollow shape displaces a lot of water", wrong: ["They are made of rock", "They are filled with water", "They are magnetic"], why: "Their shape spreads the weight over lots of water." },
        { q: "A log floats in a river. What is true about the log?", a: "It is less dense than water", wrong: ["It is more dense than water", "It has no mass", "It displaces no water"], why: "Most wood is less dense than water." },
        { q: "Which of these works by changing buoyancy to rise and sink?", a: "A submarine", wrong: ["A bicycle", "A kite", "A skateboard"], why: "Submarines use ballast tanks." },
        { q: "True or false: An object that floats in salt water might sink in fresh water.", a: "True", wrong: ["False"], why: "Fresh water is less dense, so it gives less buoyant force." }
      ]
    }
  ]
});
