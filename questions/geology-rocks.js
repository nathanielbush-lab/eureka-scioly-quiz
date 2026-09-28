/* Geology Rocks! (2027 NC Division A) question bank.
 * Covers only the Official Rocks & Minerals List, specimen properties, uses,
 * classification, and the rock cycle.
 *
 * Question formats (used in every bank):
 *   Multiple choice: { q, a: "right answer", wrong: ["...", "...", "..."], why }
 *   True/false:      { q, a: "True", wrong: ["False"], why }
 *   Type the answer: { q, type: "type", a: ["best answer", "other accepted spelling"], why }
 *   Optional on any: hint: "...", image: "images/file.jpg", imageAlt: "..."
 * Questions are grouped into sections; the section topic appears on the
 * question and in the "Study next" list on the results screen.
 */
(window.QUIZ_EVENTS = window.QUIZ_EVENTS || []).push({
  id: "geology-rocks",
  name: "Geology Rocks!",
  icon: "🪨",
  color: "#b7793e",
  blurb: "Rocks and minerals from the official list, their properties and uses, and the rock cycle.",
  sections: [
    {
      topic: "Rock cycle",
      questions: [
        { q: "What kind of rock forms when melted rock cools and hardens?", type: "type", a: ["igneous"], why: "Igneous rocks form from magma or lava that cools. The word comes from the Latin word for fire." },
        { q: "What kind of rock forms when layers of sediment are pressed and cemented together?", type: "type", a: ["sedimentary"], why: "Sedimentary rocks form from bits of rock, shells, or plant material that pile up in layers and harden." },
        { q: "What kind of rock forms when another rock is changed by heat and pressure without melting?", type: "type", a: ["metamorphic"], why: "Metamorphic means 'changed form.' Heat and pressure deep underground change a rock's minerals and texture." },
        { q: "What do we call melted rock that is still underground?", type: "type", a: ["magma"], why: "Underground it's magma. When it comes out onto the surface, it's called lava." },
        { q: "What do we call melted rock that flows out onto Earth's surface?", a: "Lava", wrong: ["Magma", "Sediment", "Cement"], why: "Melted rock above ground is lava. The same material underground is magma." },
        { q: "Breaking rocks into smaller pieces by wind, water, ice, or plant roots is called...", type: "type", a: ["weathering"], why: "Weathering breaks rocks down. Erosion is what carries the pieces away." },
        { q: "Moving bits of rock from one place to another by wind, water, ice, or gravity is called...", a: "Erosion", wrong: ["Deposition", "Melting", "Compaction"], why: "Erosion moves sediment. Deposition is when the sediment is finally dropped off." },
        { q: "When a river slows down and drops the sand and mud it was carrying, that's called...", a: "Deposition", wrong: ["Erosion", "Weathering", "Melting"], why: "Slow water can't carry as much, so sediment settles to the bottom." },
        { q: "Which two steps turn loose sediment into sedimentary rock?", a: "Compaction and cementation", wrong: ["Melting and cooling", "Heat and pressure", "Weathering and erosion"], why: "Layers press down (compaction) and dissolved minerals glue the grains together (cementation)." },
        { q: "In the rock cycle, what happens to any rock that gets hot enough to melt?", a: "It becomes magma", wrong: ["It becomes sediment", "It becomes a fossil", "It becomes coal"], why: "Any rock that melts becomes magma. When the magma cools, it forms new igneous rock." },
        { q: "True or false: Any kind of rock can eventually change into any other kind of rock.", a: "True", wrong: ["False"], why: "That's the rock cycle. Igneous, sedimentary, and metamorphic rocks can all change into one another over time." },
        { q: "An igneous rock is broken into sand by weathering. The sand is buried and cemented. What kind of rock does it become?", a: "Sedimentary", wrong: ["Igneous", "Metamorphic", "Magma"], why: "Weathering, erosion, deposition, compaction, and cementation make sedimentary rock." },
        { q: "A sedimentary rock is buried deep and squeezed by heat and pressure, but it doesn't melt. What does it become?", a: "Metamorphic rock", wrong: ["Igneous rock", "Magma", "Sediment"], why: "Heat and pressure without melting make metamorphic rock." },
        { q: "What provides the heat that melts rock deep inside Earth?", a: "Earth's hot interior", wrong: ["The Sun", "Lightning", "Forest fires"], why: "Deep inside Earth it is hot enough to melt rock into magma." },
        { q: "What provides the energy for weathering and erosion at Earth's surface?", a: "The Sun and gravity (through wind, water, and ice)", wrong: ["Earth's core only", "The Moon only", "Magnets"], why: "The Sun drives wind and the water cycle, and gravity pulls water, ice, and rocks downhill." },
        { q: "Igneous rock that forms from lava cooling on Earth's surface is called...", a: "Extrusive", wrong: ["Intrusive", "Foliated", "Clastic"], why: "Extrusive rocks cool outside, on the surface. Basalt, obsidian, pumice, and scoria are extrusive." },
        { q: "Igneous rock that cools slowly deep inside Earth is called...", a: "Intrusive", wrong: ["Extrusive", "Chemical", "Foliated"], why: "Intrusive rocks cool inside Earth. Granite is intrusive." },
        { q: "Why do intrusive igneous rocks like granite have big crystals?", a: "The magma cooled slowly, giving crystals time to grow", wrong: ["They cooled very quickly in the air", "They were squeezed by glaciers", "They are made of glued sand"], why: "Slow cooling underground lets crystals grow large enough to see." },
        { q: "Rocks that cool very quickly from lava usually have...", a: "Tiny crystals or no crystals at all", wrong: ["Huge crystals", "Fossils inside", "Layers of sand"], why: "Fast cooling doesn't give crystals time to grow. Obsidian cooled so fast it has no crystals." },
        { q: "In undisturbed layers of sedimentary rock, where are the oldest layers?", a: "At the bottom", wrong: ["At the top", "In the middle", "They are all the same age"], why: "New layers pile on top, so the bottom layers formed first." },
        { q: "What are the layers in sedimentary rock called?", type: "type", a: ["strata", "layers", "beds"], why: "Layers of rock are called strata. Each one can show a different time in Earth's past." },
        { q: "Freezing water in a crack expands and splits a rock apart. This is an example of...", a: "Weathering", wrong: ["Cementation", "Melting", "Deposition"], why: "It's called ice wedging, a kind of physical weathering." },
        { q: "Rain that is slightly acidic slowly dissolves limestone and marble. This is called...", a: "Chemical weathering", wrong: ["Deposition", "Compaction", "Cooling"], why: "Chemical weathering changes or dissolves the minerals in rock." },
        { q: "Put these rock cycle steps in order to make sandstone.", a: "Weathering, erosion, deposition, compaction and cementation", wrong: ["Melting, cooling, erosion, deposition", "Deposition, weathering, melting, erosion", "Heat and pressure, weathering, melting"], why: "Rocks break down, the pieces move and settle, then get pressed and glued together." },
        { q: "A scientist who studies rocks, minerals, and how Earth changes is called a...", type: "type", a: ["geologist"], why: "'Geo' means Earth and 'ologist' means someone who studies it." }
      ]
    },
    {
      topic: "Rocks vs. minerals",
      questions: [
        { q: "Which of these is NOT true of a mineral?", a: "It is made by living things", wrong: ["It occurs naturally", "It is a solid", "It has an orderly crystal structure"], why: "Minerals are natural, solid, not made by living things, and have a set chemical makeup and crystal structure." },
        { q: "Granite is made of quartz, feldspar, and mica. That means granite is a...", a: "Rock", wrong: ["Mineral", "Fossil", "Metal"], why: "A rock is made of one or more minerals mixed together." },
        { q: "What is the main difference between a rock and a mineral?", a: "Rocks are made of one or more minerals", wrong: ["Minerals are always bigger than rocks", "Rocks are always shiny", "Minerals are made of rocks"], why: "Minerals are the building blocks. Rocks are mixtures of minerals (or other materials, like plant remains in coal)." },
        { q: "Which item on the official list is a mineral, not a rock?", a: "Quartz", wrong: ["Granite", "Marble", "Shale"], why: "Quartz is a mineral. Granite, marble, and shale are rocks." },
        { q: "Which item on the official list is a rock, not a mineral?", a: "Gneiss", wrong: ["Calcite", "Talc", "Galena"], why: "Gneiss is a metamorphic rock. Calcite, talc, and galena are minerals." },
        { q: "Which mineral from the list is the main ingredient in both limestone and marble?", a: "Calcite", wrong: ["Quartz", "Talc", "Pyrite"], why: "Limestone and marble are both made mostly of calcite, which is why they both fizz in acid." },
        { q: "Which three minerals make up most of granite?", a: "Quartz, feldspar, and mica", wrong: ["Talc, gypsum, and halite", "Gold, copper, and galena", "Calcite, fluorite, and pyrite"], why: "Look closely at granite: glassy gray quartz, pink or white feldspar, and flakes of dark mica." },
        { q: "Olivine, a green mineral from the list, is often found in which dark igneous rock?", a: "Basalt", wrong: ["Sandstone", "Marble", "Shale"], why: "Olivine forms in magma that makes dark rocks like basalt." },
        { q: "Which minerals on the list are 'native elements,' made of just one element?", a: "Gold, copper, and graphite", wrong: ["Quartz, calcite, and talc", "Halite, gypsum, and mica", "Galena, pyrite, and hematite"], why: "Gold and copper are pure metals, and graphite is pure carbon." }
      ]
    },
    {
      topic: "Mineral properties",
      questions: [
        { q: "What does the Mohs scale measure?", a: "How easily a mineral can be scratched", wrong: ["How heavy a mineral is", "How shiny a mineral is", "What color a mineral is"], why: "The scale goes from 1 (softest) to 10 (hardest). A harder mineral scratches a softer one." },
        { q: "The 1 to 10 scale of mineral hardness is named after Friedrich ___.", type: "type", a: ["mohs"], why: "Friedrich Mohs created the scale in 1812." },
        { q: "Which mineral from the list is the softest, a 1 on the Mohs scale?", a: "Talc", wrong: ["Quartz", "Corundum", "Calcite"], why: "Talc is so soft you can scratch it with a fingernail." },
        { q: "Which mineral from the list is the hardest, a 9 on the Mohs scale?", a: "Corundum", wrong: ["Quartz", "Feldspar", "Fluorite"], why: "Corundum is a 9. Only diamond (10) is harder." },
        { q: "What is quartz's hardness on the Mohs scale?", a: "7", wrong: ["3", "5", "9"], why: "Quartz is a 7, hard enough to scratch glass and steel." },
        { q: "What is gypsum's hardness on the Mohs scale?", a: "2", wrong: ["1", "4", "7"], why: "Gypsum is a 2, soft enough to scratch with a fingernail." },
        { q: "What is calcite's hardness on the Mohs scale?", a: "3", wrong: ["1", "6", "9"], why: "Calcite is a 3. A fingernail can't scratch it, but a steel nail can." },
        { q: "What is fluorite's hardness on the Mohs scale?", a: "4", wrong: ["2", "7", "9"], why: "Fluorite is a 4." },
        { q: "What is pink feldspar's hardness on the Mohs scale?", a: "6", wrong: ["2", "3", "9"], why: "Feldspar is a 6, just a bit harder than glass." },
        { q: "Your fingernail has a hardness of about 2.5. Which mineral can you scratch with it?", a: "Gypsum", wrong: ["Quartz", "Feldspar", "Fluorite"], why: "Gypsum (2) and talc (1) are softer than a fingernail." },
        { q: "A steel nail or glass has a hardness of about 5.5. Which mineral can scratch glass?", a: "Quartz", wrong: ["Talc", "Gypsum", "Calcite"], why: "Quartz is a 7, harder than glass. Talc, gypsum, and calcite are softer." },
        { q: "Put these minerals in order from softest to hardest.", a: "Talc, gypsum, calcite, fluorite", wrong: ["Gypsum, talc, fluorite, calcite", "Calcite, talc, gypsum, fluorite", "Fluorite, calcite, gypsum, talc"], why: "Talc 1, gypsum 2, calcite 3, fluorite 4." },
        { q: "Mineral X scratches calcite but cannot scratch fluorite. What is its hardness?", a: "Between 3 and 4", wrong: ["Less than 1", "About 7", "About 9"], hint: "Calcite is 3 and fluorite is 4.", why: "It's harder than calcite (3) and softer than fluorite (4)." },
        { q: "When you rub a mineral on a white unglazed tile, the color of its powder is called its...", type: "type", a: ["streak"], why: "Streak is often more useful than the mineral's outside color." },
        { q: "What tool do you use for a streak test?", a: "An unglazed porcelain tile (streak plate)", wrong: ["A magnet", "A steel nail", "A hand lens"], why: "The rough white tile grinds off a little powder so you can see its color." },
        { q: "Why is color often NOT the best way to identify a mineral?", a: "Many minerals come in several colors", wrong: ["Minerals have no color", "All minerals are gray", "Color only shows at night"], why: "Tiny impurities change color. Quartz can be clear, white, purple, pink, or smoky." },
        { q: "The way a mineral's surface shines or reflects light is called its...", type: "type", a: ["luster", "lustre"], why: "Luster can be metallic (like metal) or nonmetallic (glassy, pearly, greasy, dull, and more)." },
        { q: "Which mineral from the list has a METALLIC luster?", a: "Galena", wrong: ["Quartz", "Talc", "Gypsum"], why: "Galena looks like shiny gray metal." },
        { q: "A mineral with a 'vitreous' luster looks like...", a: "Glass", wrong: ["Metal", "Chalk", "Soap"], why: "Vitreous means glassy. Quartz has a vitreous luster." },
        { q: "When a mineral breaks along smooth, flat surfaces, that's called...", type: "type", a: ["cleavage"], why: "Cleavage happens along weak planes in the crystal structure." },
        { q: "When a mineral breaks unevenly instead of along flat surfaces, it's called...", a: "Fracture", wrong: ["Cleavage", "Luster", "Streak"], why: "Quartz fractures instead of cleaving." },
        { q: "Quartz and obsidian break with curved, shell-shaped surfaces. This is called...", a: "Conchoidal fracture", wrong: ["Cubic cleavage", "Sheet cleavage", "Streak"], why: "Conchoidal means 'shell-like.' People once chipped obsidian into sharp arrowheads this way." },
        { q: "Which two minerals from the list break into cube shapes?", a: "Halite and galena", wrong: ["Mica and talc", "Quartz and olivine", "Gold and copper"], why: "Halite and galena both have cubic cleavage, breaking into little cubes." },
        { q: "Which test uses a drop of weak acid, like vinegar, to see if a specimen fizzes?", a: "The acid test", wrong: ["The streak test", "The hardness test", "The magnet test"], why: "Calcite, limestone, and marble fizz because they release carbon dioxide gas." },
        { q: "Comparing how heavy a mineral is to the same amount of water is called...", a: "Specific gravity", wrong: ["Streak", "Luster", "Cleavage"], why: "Gold and galena have a high specific gravity. They feel very heavy for their size." },
        { q: "Two minerals are the same size, but one feels much heavier. Which property are you noticing?", a: "Specific gravity (density)", wrong: ["Streak", "Luster", "Cleavage"], why: "Heavy-for-its-size minerals like gold and galena have a high specific gravity." },
        { q: "Which minerals from the list glow under ultraviolet (black) light?", a: "Fluorite (and sometimes calcite)", wrong: ["Gold and copper", "Galena", "Graphite"], why: "Glowing under UV light is called fluorescence, named after fluorite." },
        { q: "Metals like gold and copper can be hammered into thin sheets without breaking. This property is called...", a: "Malleability", wrong: ["Cleavage", "Fracture", "Fluorescence"], why: "Malleable metals bend and flatten instead of shattering." }
      ]
    },
    {
      topic: "Minerals on the list",
      questions: [
        { q: "Which mineral is soft, feels soapy or greasy, and is used in baby powder?", type: "type", a: ["talc"], why: "Talc is number 1 on the Mohs scale. Ground up, it becomes talcum powder." },
        { q: "Which soft mineral is used to make drywall and plaster?", a: "Gypsum", wrong: ["Quartz", "Galena", "Corundum"], why: "Gypsum is ground and heated to make plaster and wallboard." },
        { q: "Which mineral fizzes in weak acid and breaks into slanted, box-like pieces?", a: "Calcite", wrong: ["Quartz", "Halite", "Mica"], why: "Calcite fizzes in acid. Its cleavage makes slanted boxes called rhombs." },
        { q: "Clear calcite can make one line look like two lines when you look through it. This is called...", a: "Double refraction", wrong: ["Fluorescence", "Streak", "Magnetism"], why: "Clear calcite (Iceland spar) splits light into two paths, making a double image." },
        { q: "Which mineral is the same thing as table salt?", type: "type", a: ["halite", "rock salt"], why: "Halite is sodium chloride, the salt on your dinner table and the salt spread on icy roads." },
        { q: "Which mineral forms cubes, tastes salty, and dissolves in water?", a: "Halite", wrong: ["Pyrite", "Galena", "Fluorite"], why: "Halite is salt. (Never taste an unknown mineral at a competition!)" },
        { q: "Which mineral peels into thin, flexible, see-through sheets?", type: "type", a: ["mica"], why: "Mica has perfect cleavage in one direction, so it splits like the pages of a book." },
        { q: "Mica is used in some makeup and paints to add...", a: "Sparkle and shimmer", wrong: ["Salty taste", "Magnetism", "Weight"], why: "Tiny flakes of mica reflect light and make things glitter." },
        { q: "Which mineral from the list is shiny, brass-yellow, and nicknamed 'fool's gold'?", type: "type", a: ["pyrite", "iron pyrite"], why: "Pyrite fooled some miners into thinking they'd found gold." },
        { q: "How can you tell pyrite from real gold?", a: "Pyrite leaves a greenish-black streak; gold leaves a gold-yellow streak", wrong: ["Pyrite is much heavier", "Pyrite bends when you hammer it", "Pyrite is softer than a fingernail"], why: "Pyrite is also harder (6 to 6.5) and much lighter than gold." },
        { q: "Pyrite crystals often grow in which shape?", a: "Cubes", wrong: ["Thin sheets", "Round balls", "Long needles"], why: "Pyrite often forms nearly perfect cubes." },
        { q: "What color is gold's streak?", a: "Gold-yellow", wrong: ["Greenish-black", "Reddish-brown", "White"], why: "Gold leaves a gold-yellow streak. Pyrite's is greenish-black." },
        { q: "What is North Carolina's official state mineral?", a: "Gold", wrong: ["Quartz", "Copper", "Talc"], why: "The first documented gold find in the United States was in North Carolina, at Reed Gold Mine in 1799." },
        { q: "The first documented gold discovery in the United States happened in which state?", a: "North Carolina", wrong: ["California", "Alaska", "Colorado"], why: "A boy named Conrad Reed found a gold nugget in Cabarrus County, NC, in 1799." },
        { q: "Which mineral is shiny orange-red, bends easily, and turns green over time?", a: "Copper", wrong: ["Gold", "Hematite", "Feldspar"], why: "Copper tarnishes green, like the Statue of Liberty." },
        { q: "Copper is used for electrical wires because it...", a: "Conducts electricity very well", wrong: ["Is magnetic", "Is the hardest mineral", "Glows in the dark"], why: "Copper carries electricity easily and bends without breaking." },
        { q: "Which mineral is heavy, lead-gray, metallic, and breaks into cubes?", type: "type", a: ["galena"], why: "Galena is the main ore of lead and has cubic cleavage." },
        { q: "Galena is the main ore of which metal?", a: "Lead", wrong: ["Iron", "Copper", "Aluminum"], why: "Lead from galena has been used in car batteries and weights." },
        { q: "Which mineral leaves a reddish-brown streak, even when it looks silvery-black?", type: "type", a: ["hematite"], why: "Hematite's name comes from the Greek word for blood, because of its red streak." },
        { q: "Hematite is an important ore of which metal?", a: "Iron", wrong: ["Lead", "Gold", "Copper"], why: "Iron from hematite is used to make steel for bridges, cars, and buildings." },
        { q: "Which soft, black mineral leaves marks on paper and feels greasy?", a: "Graphite", wrong: ["Galena", "Hematite", "Obsidian"], why: "Graphite is only 1 to 2 on the Mohs scale." },
        { q: "The 'lead' in a pencil is actually which mineral?", a: "Graphite", wrong: ["Galena", "Talc", "Mica"], why: "Pencils use graphite mixed with clay. There's no real lead in pencils!" },
        { q: "Graphite is made of which element?", a: "Carbon", wrong: ["Lead", "Iron", "Copper"], why: "Graphite is pure carbon, the same element as diamond, just arranged differently." },
        { q: "Rubies and sapphires are gem forms of which mineral from the list?", a: "Corundum", wrong: ["Quartz", "Olivine", "Fluorite"], why: "Red corundum is ruby. Blue and other colors are sapphire." },
        { q: "Because it's so hard, ground-up corundum (emery) is used to make...", a: "Sandpaper and nail files", wrong: ["Baby powder", "Table salt", "Pencils"], why: "Hardness makes corundum a great abrasive for grinding and polishing." },
        { q: "Which mineral from the list often forms purple or green cube or octahedron-shaped crystals?", a: "Fluorite", wrong: ["Pyrite", "Talc", "Graphite"], why: "Fluorite comes in many colors, and purple and green are common." },
        { q: "Fluorite is a source of fluoride, which is added to...", a: "Toothpaste", wrong: ["Pencils", "Drywall", "Pennies"], why: "Fluoride helps keep teeth strong." },
        { q: "Which mineral forms six-sided crystals with pointed tips, glassy luster, and a hardness of 7?", a: "Quartz", wrong: ["Calcite", "Halite", "Talc"], why: "Quartz crystals are six-sided columns ending in a point." },
        { q: "Which mineral is used to make glass and helps keep time in watches?", type: "type", a: ["quartz"], why: "Quartz sand is melted to make glass. Tiny quartz crystals vibrate at a steady rate in watches." },
        { q: "Pink feldspar breaks along two flat surfaces that meet at nearly a right angle. This shows it has...", a: "Two directions of cleavage", wrong: ["No cleavage", "Conchoidal fracture", "Cubic cleavage"], why: "Feldspar's blocky cleavage helps tell it apart from quartz, which has no cleavage." },
        { q: "Which mineral gives granite its pink color?", a: "Pink feldspar", wrong: ["Olivine", "Mica", "Hematite"], why: "Pink feldspar (potassium feldspar) colors many granites." },
        { q: "Feldspar is used to make...", a: "Porcelain, pottery, and glass", wrong: ["Pencils", "Table salt", "Baby powder"], why: "Ground feldspar helps ceramics and glass melt and harden." },
        { q: "Which glassy green mineral from the list is called peridot when it's a gemstone?", type: "type", a: ["olivine"], why: "Olivine is named for its olive-green color." },
        { q: "Which mineral group makes up the most of Earth's crust?", a: "Feldspar", wrong: ["Gold", "Talc", "Galena"], why: "Feldspars are the most common minerals in Earth's crust." }
      ]
    },
    {
      topic: "Igneous rocks",
      questions: [
        { q: "Which rock is black, shiny volcanic glass that breaks with sharp, curved edges?", type: "type", a: ["obsidian"], why: "Obsidian formed when lava cooled so fast that no crystals could grow." },
        { q: "Which light-colored igneous rock is so full of gas bubbles that it can float on water?", type: "type", a: ["pumice"], why: "Pumice formed from foamy, gassy lava. The trapped air makes it light enough to float." },
        { q: "Which dark, reddish-brown or black volcanic rock has lots of holes but usually sinks in water?", a: "Scoria", wrong: ["Pumice", "Obsidian", "Granite"], why: "Scoria has holes like pumice, but thicker walls between them make it heavier." },
        { q: "What is the main difference between pumice and scoria?", a: "Pumice is light-colored and floats; scoria is dark and usually sinks", wrong: ["Pumice has large crystals; scoria has none", "Scoria is metamorphic", "Pumice is made of salt"], why: "Both are bubbly volcanic rocks, but pumice is much lighter." },
        { q: "The holes in pumice and scoria were made by...", a: "Gas bubbles in lava", wrong: ["Worms", "Raindrops", "Tiny fossils"], why: "Gas escaping from cooling lava leaves holes called vesicles." },
        { q: "Which dark, fine-grained igneous rock makes up most of the ocean floor?", type: "type", a: ["basalt"], why: "Basalt forms from lava that cools quickly at the surface." },
        { q: "Which igneous rock has large, speckled crystals of quartz, feldspar, and mica?", type: "type", a: ["granite"], why: "Granite cooled slowly underground, so its crystals are big enough to see." },
        { q: "What is North Carolina's official state rock?", a: "Granite", wrong: ["Marble", "Obsidian", "Slate"], why: "Mount Airy, NC, has one of the largest open-face granite quarries in the world." },
        { q: "Which rock is used for kitchen countertops, monuments, and gravestones?", a: "Granite", wrong: ["Pumice", "Shale", "Scoria"], why: "Granite is hard, strong, and takes a beautiful polish." },
        { q: "Which of these is an igneous rock?", a: "Basalt", wrong: ["Sandstone", "Marble", "Shale"], why: "Basalt forms from cooled lava." },
        { q: "Which igneous rock on the list is INTRUSIVE (cooled underground)?", a: "Granite", wrong: ["Basalt", "Obsidian", "Pumice"], why: "Granite cooled slowly inside Earth. The others cooled quickly at the surface." },
        { q: "Pumice is used to...", a: "Scrub rough skin and make stonewashed jeans", wrong: ["Make pencils", "Make table salt", "Build chalkboards"], why: "Its rough, bubbly texture makes it a gentle scrubber." },
        { q: "Scoria is often sold in garden centers as...", a: "Lava rock for landscaping", wrong: ["Table salt", "Pencil lead", "Baby powder"], why: "Scoria's holes help it hold water and let air through in gardens." },
        { q: "Which igneous texture has NO crystals at all?", a: "Glassy, like obsidian", wrong: ["Coarse, like granite", "Layered, like shale", "Banded, like gneiss"], why: "Obsidian is natural glass." }
      ]
    },
    {
      topic: "Sedimentary rocks",
      questions: [
        { q: "Which sedimentary rock is made of ROUNDED pebbles cemented together?", type: "type", a: ["conglomerate"], why: "The pebbles were rounded by tumbling in water before they were cemented." },
        { q: "Which sedimentary rock is made of sand grains cemented together?", type: "type", a: ["sandstone"], why: "Sandstone is mostly quartz sand. It often feels gritty like sandpaper." },
        { q: "Which sedimentary rock forms from mud and clay and splits into thin, flat layers?", type: "type", a: ["shale"], why: "Shale is made of very fine mud particles." },
        { q: "Which sedimentary rock on the list is made of fossils and shell pieces and fizzes in acid?", a: "Fossil limestone", wrong: ["Sandstone", "Shale", "Conglomerate"], why: "Shells are made of calcite, so fossil limestone fizzes." },
        { q: "Chemical limestone forms when...", a: "Calcite comes out of water and hardens", wrong: ["Lava cools quickly", "Pebbles are cemented together", "Shale is heated"], why: "Chemical sedimentary rocks form when dissolved minerals come out of water and build up." },
        { q: "How can you tell limestone from sandstone?", a: "Limestone fizzes in acid; sandstone usually doesn't", wrong: ["Sandstone fizzes and limestone doesn't", "Limestone is always black", "Sandstone floats"], why: "Limestone is calcite, which reacts with acid. Sandstone is mostly quartz, which doesn't." },
        { q: "Bituminous coal formed from the remains of...", a: "Ancient swamp plants", wrong: ["Dinosaur bones", "Volcanic ash", "Seashells"], why: "Plants were buried and squeezed for millions of years, slowly turning into coal." },
        { q: "Bituminous coal is mostly used to...", a: "Make electricity and make steel", wrong: ["Make glass", "Make table salt", "Make pencils"], why: "Coal burns to heat water for power plants, and it's made into coke for steelmaking." },
        { q: "Which sedimentary rock on the list is black, fairly lightweight, and can burn?", a: "Bituminous coal", wrong: ["Shale", "Basalt", "Obsidian"], why: "Coal is made from plant material, so it contains lots of carbon that burns." },
        { q: "Which kind of rock is most likely to contain fossils?", a: "Sedimentary", wrong: ["Igneous", "Metamorphic", "Volcanic glass"], why: "Plants and animals get buried in sediment. Heat would destroy them in other rocks." },
        { q: "Sandstone, conglomerate, and shale are made of broken bits of other rocks. They are called...", a: "Clastic sedimentary rocks", wrong: ["Intrusive igneous rocks", "Foliated metamorphic rocks", "Minerals"], why: "Clastic means made of pieces (clasts) of other rocks." },
        { q: "Which sedimentary rock on the list is organic, made from once-living plants?", a: "Bituminous coal", wrong: ["Sandstone", "Conglomerate", "Chemical limestone"], why: "Organic rocks form from plant or animal remains." },
        { q: "Limestone is used to make...", a: "Cement and concrete", wrong: ["Pencils", "Baby powder", "Electrical wire"], why: "Limestone is heated to make lime, a key ingredient in cement." },
        { q: "Which of these is a sedimentary rock?", a: "Conglomerate", wrong: ["Granite", "Obsidian", "Gneiss"], why: "Conglomerate is cemented pebbles. Granite and obsidian are igneous; gneiss is metamorphic." }
      ]
    },
    {
      topic: "Metamorphic rocks",
      questions: [
        { q: "Marble forms when which rock is changed by heat and pressure?", a: "Limestone", wrong: ["Granite", "Sandstone", "Shale"], why: "Limestone recrystallizes into marble. Both are made of calcite." },
        { q: "Slate forms when which rock is changed by heat and pressure?", a: "Shale", wrong: ["Limestone", "Basalt", "Sandstone"], why: "Slate splits into flat sheets, great for roofs and old chalkboards." },
        { q: "Quartzite forms when which rock is changed by heat and pressure?", a: "Sandstone", wrong: ["Limestone", "Shale", "Granite"], why: "The quartz sand grains fuse together into very hard quartzite." },
        { q: "Put these rocks in order as shale gets more and more heat and pressure.", a: "Shale, slate, phyllite, schist, gneiss", wrong: ["Gneiss, schist, phyllite, slate, shale", "Shale, gneiss, slate, schist, phyllite", "Slate, shale, schist, gneiss, phyllite"], why: "With more heat and pressure, the mineral grains get bigger and eventually form bands." },
        { q: "Which metamorphic rock has a silky, satiny sheen and forms between slate and schist?", type: "type", a: ["phyllite"], why: "Tiny mica crystals give phyllite its shine." },
        { q: "Which sparkly metamorphic rock is full of shiny mica flakes lined up in layers?", type: "type", a: ["schist"], why: "Schist glitters because of its many lined-up mica flakes." },
        { q: "Which metamorphic rock has light and dark minerals in stripes, or bands?", type: "type", a: ["gneiss"], why: "Gneiss (say 'nice') has bands because pressure lined up and separated its minerals." },
        { q: "Metamorphic rocks with flat layers or stripes of minerals are called...", a: "Foliated", wrong: ["Extrusive", "Clastic", "Organic"], why: "Foliated comes from the Latin for 'leaf.' Slate, phyllite, schist, and gneiss are foliated." },
        { q: "Which metamorphic rocks on the list are NON-foliated (no layers or bands)?", a: "Marble and quartzite", wrong: ["Slate and schist", "Gneiss and phyllite", "Shale and sandstone"], why: "Marble and quartzite have interlocking crystals with no stripes." },
        { q: "How can you tell marble from quartzite?", a: "Marble fizzes in acid and is softer; quartzite doesn't fizz and is very hard", wrong: ["Quartzite fizzes and marble doesn't", "Marble floats", "Quartzite is always black"], why: "Marble is calcite (hardness 3). Quartzite is quartz (hardness 7)." },
        { q: "Chalkboards in old schools were made from which rock?", a: "Slate", wrong: ["Marble", "Granite", "Pumice"], why: "Slate splits into smooth, flat sheets." },
        { q: "Which rock is used for statues and fancy buildings, like the Lincoln Memorial?", a: "Marble", wrong: ["Shale", "Scoria", "Coal"], why: "Marble is soft enough to carve and polishes beautifully." },
        { q: "Granite can be squeezed and heated until its minerals form bands. What rock does it become?", a: "Gneiss", wrong: ["Marble", "Quartzite", "Basalt"], why: "Gneiss often forms from granite or from shale." },
        { q: "Where does metamorphism usually happen?", a: "Deep underground, where there's heat and pressure", wrong: ["On the beach", "In rivers", "In the clouds"], why: "Deep underground there's plenty of heat and pressure to change rocks." },
        { q: "What is the 'parent rock' of a metamorphic rock?", a: "The original rock before it changed", wrong: ["The oldest rock on Earth", "The biggest rock nearby", "A kind of magma"], why: "For example, limestone is the parent rock of marble." },
        { q: "Which of these is a metamorphic rock?", a: "Quartzite", wrong: ["Sandstone", "Pumice", "Conglomerate"], why: "Quartzite is sandstone that was changed by heat and pressure." }
      ]
    }
  ]
});
