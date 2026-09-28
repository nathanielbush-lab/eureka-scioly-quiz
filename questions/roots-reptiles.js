/* Roots & Reptiles (2027 NC Division A) question bank.
 * Covers the Official Specimen List (common names and which are NC state
 * symbols), plant parts, life cycles, photosynthesis, tropisms, gardening,
 * and reptile and amphibian characteristics, food, life cycles, and roles.
 * Format notes are in geology-rocks.js.
 */
(window.QUIZ_EVENTS = window.QUIZ_EVENTS || []).push({
  id: "roots-reptiles",
  name: "Roots & Reptiles",
  icon: "🦎",
  color: "#5a8f29",
  blurb: "NC trees, plants, reptiles, and amphibians from the specimen list, state symbols, and how plants grow.",
  sections: [
    {
      topic: "NC state symbols",
      questions: [
        { q: "What is North Carolina's official state tree?", a: "Pine", wrong: ["Oak", "Magnolia", "Red maple"], why: "NC's state tree is the pine, which includes loblolly, longleaf, and shortleaf pines." },
        { q: "What is North Carolina's official state wildflower?", a: "Carolina lily", wrong: ["Venus flytrap", "Kudzu", "Magnolia"], why: "The Carolina lily has nodding orange flowers with spots." },
        { q: "What is North Carolina's official state carnivorous plant?", type: "type", a: ["venus flytrap", "venus fly trap", "flytrap"], why: "Venus flytraps grow wild only in the Carolinas, mostly within about 75 miles of Wilmington, NC." },
        { q: "What is North Carolina's official state fruit?", a: "Scuppernong grape", wrong: ["Apple", "Peach", "Blueberry"], why: "The scuppernong is a bronze-green muscadine grape native to NC." },
        { q: "What is North Carolina's official state reptile?", a: "Eastern box turtle", wrong: ["American alligator", "Copperhead", "Green anole"], why: "The Eastern box turtle can close its shell up tight like a box." },
        { q: "What is North Carolina's official state frog?", a: "Pine Barrens treefrog", wrong: ["Bullfrog", "American toad", "Southern leopard frog"], why: "This bright green frog has a lavender stripe outlined in white along each side." },
        { q: "What is North Carolina's official state salamander?", a: "Marbled salamander", wrong: ["Red-backed salamander", "White-spotted slimy salamander", "Eastern glass lizard"], why: "The marbled salamander is black with bold silvery-white bands." },
        { q: "Which of these is NOT an official North Carolina state symbol?", a: "Kudzu", wrong: ["Venus flytrap", "Carolina lily", "Scuppernong grape"], why: "Kudzu is an invasive vine from Asia, definitely not a state symbol!" },
        { q: "Which reptile on the specimen list is a North Carolina state symbol?", a: "Eastern box turtle", wrong: ["Snapping turtle", "Painted turtle", "Eastern fence lizard"], why: "It's the NC state reptile." },
        { q: "Which amphibians on the specimen list are North Carolina state symbols?", a: "Pine Barrens treefrog and marbled salamander", wrong: ["Bullfrog and American toad", "Red-backed salamander and Southern leopard frog", "American toad and white-spotted slimy salamander"], why: "They're the state frog and state salamander." },
        { q: "North Carolina's state FLOWER (not wildflower) is the...", a: "Dogwood", wrong: ["Carolina lily", "Magnolia", "Crepe myrtle"], why: "Don't mix them up: the dogwood is the state flower, and the Carolina lily is the state wildflower." },
        { q: "True or false: Every kind of pine tree counts as North Carolina's state tree.", a: "True", wrong: ["False"], why: "The law names 'the pine' in general as the state tree." },
        { q: "North Carolinians are called 'Tar Heels.' The nickname comes from making tar and turpentine from which tree?", a: "Longleaf pine", wrong: ["Red maple", "Magnolia", "River birch"], why: "Tar, pitch, and turpentine from longleaf pine forests were once NC's biggest industry." }
      ]
    },
    {
      topic: "Tree identification",
      questions: [
        { q: "Which tree has star-shaped leaves with five points and spiky, ball-shaped seed pods?", type: "type", a: ["sweetgum", "sweet gum"], why: "Those spiky 'gumballs' hurt to step on barefoot!" },
        { q: "Which tree has smooth, light-gray bark and often keeps its dry, papery leaves all winter?", a: "American beech", wrong: ["River birch", "Loblolly pine", "Sweetgum"], why: "Beech bark stays smooth even on old trees. Beechnuts grow in spiny husks." },
        { q: "Which tree has peeling, papery, pinkish-tan bark and grows well along rivers and streams?", a: "River birch", wrong: ["American beech", "Magnolia", "Black gum"], why: "River birch bark curls off in thin, shaggy sheets." },
        { q: "Which tree has big, shiny, leathery evergreen leaves (often rusty underneath) and huge, fragrant white flowers?", type: "type", a: ["magnolia", "southern magnolia"], why: "Magnolias keep their leaves all year and have cone-like fruits with bright red seeds." },
        { q: "Which tree has leaves with 3 to 5 pointed, toothed lobes, red buds and twigs, and 'helicopter' seeds?", a: "Red maple", wrong: ["Sweetgum", "Oak", "Hickory"], why: "Red maple's winged seeds (samaras) spin as they fall." },
        { q: "The 'helicopter' seeds of a maple are called...", a: "Samaras", wrong: ["Acorns", "Cones", "Gumballs"], why: "The wing helps the seed spin and drift away from the parent tree." },
        { q: "Which kind of tree produces acorns?", type: "type", a: ["oak", "oaks", "oak tree"], why: "Acorns are an important food for squirrels, deer, and turkeys." },
        { q: "Which tree has compound leaves (5 to 9 leaflets on one stem) and hard nuts inside a thick husk that splits open?", a: "Hickory", wrong: ["Magnolia", "American beech", "Crepe myrtle"], why: "Some hickories, like the shagbark, have bark that peels in long strips." },
        { q: "Which tree has shiny oval leaves that turn brilliant scarlet in fall and small blue-black berries that birds love?", a: "Black gum", wrong: ["Sweetgum", "Magnolia", "Loblolly pine"], why: "Black gum is one of the first trees to turn red in the fall." },
        { q: "Which small tree has smooth, peeling bark and clusters of pink, purple, red, or white flowers all summer?", a: "Crepe myrtle", wrong: ["River birch", "American beech", "Hickory"], why: "Crepe myrtles came from Asia and are planted in yards all over NC." },
        { q: "Which tree is covered in white flowers in early spring that smell bad, and has weak branches that often split?", a: "Bradford (Callery) pear", wrong: ["Magnolia", "Crepe myrtle", "Red maple"], why: "Callery pears have become invasive, crowding out native plants in NC." },
        { q: "Why is the Bradford (Callery) pear a problem in North Carolina?", a: "It's invasive and spreads into fields and forests", wrong: ["It is poisonous to touch", "It eats insects", "It only grows underwater"], why: "Birds spread its seeds, and thorny wild pear thickets crowd out native plants." },
        { q: "Pine needles grow in little bundles. How many needles are in each bundle of an Eastern white pine?", a: "5", wrong: ["2", "3", "1"], hint: "W-H-I-T-E has five letters.", why: "White pine needles are soft and grow in bundles of five." },
        { q: "How many needles are in each bundle of a loblolly pine?", a: "3", wrong: ["1", "5", "7"], why: "Loblolly needles are 6 to 9 inches long, in bundles of three." },
        { q: "Which pine has the longest needles, up to about 18 inches, and very large cones?", a: "Longleaf pine", wrong: ["Shortleaf pine", "Eastern white pine", "Loblolly pine"], why: "Its name says it all: long leaves (needles)." },
        { q: "Which pine has short needles, 3 to 5 inches long, in bundles of 2 or 3, and small cones?", a: "Shortleaf pine", wrong: ["Longleaf pine", "Loblolly pine", "Eastern white pine"], why: "Its name says it all: short leaves (needles)." },
        { q: "Which pine is the most common pine in North Carolina and is widely grown for lumber and paper?", a: "Loblolly pine", wrong: ["Longleaf pine", "Eastern white pine", "Shortleaf pine"], why: "Loblolly pines grow fast, which makes them important to NC's timber industry." },
        { q: "Longleaf pine seedlings spend years looking like a clump of grass before they grow tall. This is called the...", a: "Grass stage", wrong: ["Cone stage", "Tadpole stage", "Flower stage"], why: "In the grass stage, the young tree builds deep roots and survives ground fires." },
        { q: "Longleaf pine forests actually need something that would harm many other forests. What?", a: "Regular low fires", wrong: ["Floods every week", "Snow all year", "No sunlight"], why: "Fires clear out competing plants, and longleaf pines are built to survive them." },
        { q: "Which trees on the list keep green leaves or needles all year (evergreen)?", a: "Pines and Southern magnolia", wrong: ["Red maple and sweetgum", "Hickory and oak", "River birch and black gum"], why: "Evergreens keep their leaves through winter. Deciduous trees drop theirs." },
        { q: "Trees that lose all their leaves in fall are called...", type: "type", a: ["deciduous"], why: "Red maple, sweetgum, hickory, and river birch are deciduous." },
        { q: "Which features of a tree does the specimen list say you should use to identify it?", a: "Leaves, bark, and seeds", wrong: ["Only its height", "Only its roots", "Only the smell of its wood"], why: "Checking all three clues makes identification much easier." }
      ]
    },
    {
      topic: "Bushes, vines, and flowers",
      questions: [
        { q: "Which vine's leaves grow in groups of three and can give you an itchy rash?", type: "type", a: ["poison ivy", "eastern poison ivy"], why: "'Leaves of three, let it be!'" },
        { q: "What causes the itchy rash from poison ivy?", a: "An oil in the plant called urushiol", wrong: ["Tiny thorns", "Pollen", "Bee stings"], why: "The oil is on the leaves, stems, and roots, even in winter." },
        { q: "Poison ivy isn't all bad. Its white berries are...", a: "Food for many birds", wrong: ["Used to make grape juice", "Deadly to all animals", "Used to make paper"], why: "Birds eat the berries and spread the seeds." },
        { q: "Which fast-growing vine from Asia is called 'the vine that ate the South'?", type: "type", a: ["kudzu"], why: "Kudzu can grow up to a foot a day in summer and cover whole trees." },
        { q: "Why was kudzu originally planted in the southern United States?", a: "To help stop soil erosion", wrong: ["To feed alligators", "To make poison", "To be the state flower"], why: "It worked too well. Kudzu spread out of control and became invasive." },
        { q: "Which evergreen vine is invasive in NC, climbs up tree trunks, and has glossy, lobed leaves?", a: "English ivy", wrong: ["Kudzu", "Poison ivy", "Scuppernong grape"], why: "English ivy can smother native plants and make trees top-heavy." },
        { q: "A plant from another part of the world that spreads quickly and harms native plants and animals is called...", type: "type", a: ["invasive", "invasive species", "invasive plant"], why: "Kudzu, English ivy, and Callery pear are invasive in NC." },
        { q: "Which plants on the specimen list are invasive in North Carolina?", a: "Kudzu, English ivy, and Callery pear", wrong: ["Venus flytrap, Carolina lily, and scuppernong", "Oak, hickory, and red maple", "Longleaf pine and magnolia"], why: "All three were brought here and now crowd out native plants." },
        { q: "Which plant catches insects in hinged leaf traps?", a: "Venus flytrap", wrong: ["Carolina lily", "English ivy", "Kudzu"], why: "When an insect touches the trigger hairs twice, the trap snaps shut." },
        { q: "What makes a Venus flytrap's trap close?", a: "An insect touching tiny trigger hairs inside the trap, usually twice", wrong: ["Loud noises", "Sunlight only", "Rain falling on it"], why: "Needing two touches helps the plant avoid closing on raindrops or debris." },
        { q: "Why does a Venus flytrap catch insects?", a: "To get nutrients missing from the poor, boggy soil where it grows", wrong: ["Because it can't make any food from sunlight", "To drink their blood", "To keep warm"], why: "It still makes its own sugar by photosynthesis. Insects give it extra nitrogen." },
        { q: "Where do Venus flytraps grow in the wild?", a: "In wet, sunny bogs and pine savannas near Wilmington, NC", wrong: ["In deserts all over the world", "On mountaintops in Asia", "Deep in the ocean"], why: "This is one of the only places on Earth where they grow naturally." },
        { q: "Which wildflower has orange, spotted, nodding flowers with petals that curve back?", type: "type", a: ["carolina lily"], why: "It's NC's state wildflower." },
        { q: "The scuppernong is a kind of which type of wild grape?", a: "Muscadine", wrong: ["Concord", "Raisin", "Kiwi"], why: "Scuppernongs have thick bronze-green skins and a sweet, musky taste." },
        { q: "A famous scuppernong vine on Roanoke Island, NC, called the 'Mother Vine,' is believed to be about how old?", a: "More than 400 years old", wrong: ["About 10 years old", "About 50 years old", "About 5,000 years old"], why: "It's thought to be one of the oldest cultivated grapevines in the United States." }
      ]
    },
    {
      topic: "Plant parts",
      questions: [
        { q: "Which plant part takes in water and minerals from the soil and holds the plant in place?", type: "type", a: ["roots", "root"], why: "Some roots, like carrots, also store food." },
        { q: "Which plant part holds the plant up and carries water and food between the roots and leaves?", type: "type", a: ["stem", "stems"], why: "Tiny tubes in the stem work like straws, moving water up and food around." },
        { q: "In which plant part does most photosynthesis happen?", a: "Leaves", wrong: ["Roots", "Seeds", "Bark"], why: "Leaves are wide and flat to catch lots of sunlight." },
        { q: "Tiny holes on leaves that let carbon dioxide in and oxygen and water vapor out are called...", a: "Stomata", wrong: ["Petals", "Roots", "Seeds"], why: "Stomata open and close like tiny mouths." },
        { q: "Which plant part makes seeds so the plant can reproduce?", a: "Flower", wrong: ["Root", "Stem", "Bark"], why: "Flowers are the reproductive parts of many plants." },
        { q: "What is the job of a flower's colorful petals?", a: "To attract pollinators like bees and butterflies", wrong: ["To absorb water", "To hold the plant up", "To store food for winter"], why: "Bright colors and sweet smells invite pollinators to visit." },
        { q: "Which flower part makes pollen?", a: "Stamen (anther)", wrong: ["Pistil", "Sepal", "Root"], why: "The stamen is the male part: a stalk (filament) topped with a pollen-making anther." },
        { q: "The sticky top of the pistil that catches pollen is called the...", a: "Stigma", wrong: ["Anther", "Sepal", "Petal"], why: "Pollen sticks to the stigma, then grows a tube down to the ovary." },
        { q: "The female part of a flower, which contains the ovary, is called the...", type: "type", a: ["pistil", "carpel"], why: "The pistil has a stigma, a style, and an ovary." },
        { q: "The small green leaf-like parts that protect a flower bud before it opens are called...", a: "Sepals", wrong: ["Petals", "Stamens", "Roots"], why: "Sepals often stay under the flower after it blooms." },
        { q: "After pollination, which part of the flower grows into a fruit?", a: "Ovary", wrong: ["Petal", "Anther", "Stem"], why: "The ovary swells into a fruit with seeds inside." },
        { q: "What is inside a seed?", a: "A tiny baby plant and stored food, inside a seed coat", wrong: ["Just water", "A tiny adult tree", "Soil"], why: "The stored food feeds the baby plant until it can make its own." },
        { q: "What is the job of a seed coat?", a: "To protect the seed", wrong: ["To make food", "To attract bees", "To soak up sunlight"], why: "It keeps the seed safe until conditions are right to sprout." },
        { q: "The green chemical in leaves that captures sunlight is called...", type: "type", a: ["chlorophyll"], why: "Chlorophyll is why most leaves are green." },
        { q: "Why do leaves of trees like red maple and sweetgum change color in the fall?", a: "The green chlorophyll breaks down, showing other colors", wrong: ["They get painted by frost", "They are sick", "They soak up red soil"], why: "As days shorten, trees stop making chlorophyll. Hidden yellows and oranges show through, and some trees, like red maple, make brand-new red colors." }
      ]
    },
    {
      topic: "Life cycles and photosynthesis",
      questions: [
        { q: "What is the process plants use to make their own food from sunlight?", type: "type", a: ["photosynthesis"], why: "'Photo' means light and 'synthesis' means putting together." },
        { q: "What three things does a plant need to make food by photosynthesis?", a: "Sunlight, water, and carbon dioxide", wrong: ["Soil, rocks, and sugar", "Oxygen, milk, and darkness", "Salt, wind, and snow"], why: "Plants use sunlight to turn water and carbon dioxide into sugar." },
        { q: "What two things does photosynthesis make?", a: "Sugar (food) and oxygen", wrong: ["Water and soil", "Carbon dioxide and salt", "Pollen and roots"], why: "Plants use the sugar and release the oxygen for us to breathe." },
        { q: "Where does a plant get the carbon dioxide it needs for photosynthesis?", a: "From the air, through its leaves", wrong: ["From the soil", "From rain", "From insects"], why: "Carbon dioxide enters through the stomata." },
        { q: "When a seed starts to sprout and grow, it's called...", type: "type", a: ["germination", "germinating", "germinate"], why: "Seeds need water, the right temperature, and air to germinate." },
        { q: "Put the stages of a flowering plant's life cycle in order.", a: "Seed, seedling, adult plant, flower, fruit with seeds", wrong: ["Flower, seed, adult plant, seedling", "Adult plant, seed, flower, seedling", "Seedling, fruit, seed, flower"], why: "Then the new seeds start the cycle again." },
        { q: "Moving pollen from one flower to another is called...", a: "Pollination", wrong: ["Germination", "Photosynthesis", "Erosion"], why: "Bees, butterflies, wind, and even bats can pollinate flowers." },
        { q: "Maple samaras spin away in the wind, and animals bury acorns. Both are examples of...", a: "Seed dispersal", wrong: ["Photosynthesis", "Pollination", "Germination"], why: "Spreading seeds away from the parent means the new plants won't have to compete with it." },
        { q: "Why is it helpful for seeds to be carried away from the parent plant?", a: "So the young plants don't compete with the parent for light and water", wrong: ["So they can find salt", "So they get colder", "So they turn into animals"], why: "Seeds that land farther away have a better chance of growing." },
        { q: "Most plants need which gas to help them make food?", a: "Carbon dioxide", wrong: ["Helium", "Oxygen only", "Neon"], why: "Animals breathe out carbon dioxide, and plants use it. Plants give off oxygen that animals breathe." },
        { q: "True or false: Plants make their own food.", a: "True", wrong: ["False"], why: "Plants are producers. They make sugar using energy from sunlight." }
      ]
    },
    {
      topic: "Plant responses",
      questions: [
        { q: "A plant on a windowsill bends toward the sunlight. This is called...", a: "Phototropism", wrong: ["Gravitropism", "Thigmotropism", "Hydrotropism"], why: "'Photo' means light and 'tropism' means turning." },
        { q: "Roots grow down and stems grow up, even if a seed is planted upside down. This is called...", a: "Gravitropism", wrong: ["Phototropism", "Thigmotropism", "Hydrotropism"], why: "Plants sense and respond to gravity." },
        { q: "A grape vine's tendrils wrap around a fence after touching it. This is called...", a: "Thigmotropism", wrong: ["Phototropism", "Gravitropism", "Hydrotropism"], why: "'Thigmo' means touch." },
        { q: "Roots growing toward a wet area in the soil is called...", a: "Hydrotropism", wrong: ["Phototropism", "Gravitropism", "Thigmotropism"], why: "'Hydro' means water." },
        { q: "A plant's growth in response to light, gravity, touch, or water is called a...", type: "type", a: ["tropism", "tropisms"], why: "Tropisms help plants find what they need to survive." },
        { q: "Why is it helpful for a stem to grow toward light?", a: "Leaves get more sunlight for photosynthesis", wrong: ["It keeps the plant cold", "It helps the roots find rocks", "It scares away insects"], why: "More light means more food for the plant." },
        { q: "Which tropism helps kudzu and English ivy climb up trees?", a: "Thigmotropism", wrong: ["Hydrotropism", "Gravitropism", "Phototropism only"], why: "Vines respond to touch by wrapping or clinging." }
      ]
    },
    {
      topic: "Gardening",
      questions: [
        { q: "What do most plants need to grow?", a: "Sunlight, water, air, soil nutrients, and space", wrong: ["Only sugar", "Only darkness", "Only salt water"], why: "Take away any one of these, and the plant will struggle." },
        { q: "A plant grown with too little light often becomes...", a: "Tall, thin, and pale", wrong: ["Short, dark green, and bushy", "Covered in flowers", "Bright red"], why: "It stretches toward any light it can find, and without enough light it can't make much chlorophyll." },
        { q: "A plant that is watered too much may...", a: "Get yellow leaves and rotting roots", wrong: ["Grow twice as fast", "Turn into a tree", "Start making fruit right away"], why: "Soggy soil keeps roots from getting air." },
        { q: "A plant that doesn't get enough water will...", a: "Wilt and droop", wrong: ["Grow taller", "Turn bright blue", "Make more flowers"], why: "Plant cells need water to stay firm." },
        { q: "What does fertilizer add to soil?", a: "Nutrients that help plants grow", wrong: ["Sunlight", "Oxygen gas", "Insects"], why: "Common fertilizers add nitrogen, phosphorus, and potassium." },
        { q: "The three numbers on a bag of fertilizer (like 10-10-10) stand for which three nutrients?", a: "Nitrogen, phosphorus, and potassium", wrong: ["Water, sugar, and salt", "Oxygen, carbon, and helium", "Iron, gold, and copper"], why: "They're often shortened to N-P-K." },
        { q: "What can happen if you add too much fertilizer?", a: "It can 'burn' the plant and turn leaf edges brown", wrong: ["The plant grows forever", "The plant turns into a flower", "Nothing, more is always better"], why: "Too much fertilizer can damage roots. Follow the directions!" },
        { q: "Two plants growing very close together will...", a: "Compete for light, water, and nutrients", wrong: ["Share perfectly and grow bigger", "Turn into one plant", "Stop needing water"], why: "That's why gardeners space plants out and pull weeds." },
        { q: "Why do gardeners pull weeds?", a: "Weeds compete with crops for water, light, and nutrients", wrong: ["Weeds are too pretty", "Weeds make the soil too rich", "Weeds scare bees"], why: "Fewer weeds means more resources for the plants you want." },
        { q: "Decayed leaves, food scraps, and plant material added to soil to feed plants is called...", type: "type", a: ["compost"], why: "Compost adds nutrients and helps soil hold water." },
        { q: "Spreading wood chips or straw around plants to keep soil moist and block weeds is called...", a: "Mulching", wrong: ["Pollinating", "Pruning", "Germinating"], why: "Mulch also keeps roots cooler in summer." },
        { q: "Growing plants, like fruits, vegetables, and flowers, in a garden is called...", a: "Horticulture", wrong: ["Astronomy", "Geology", "Meteorology"], why: "Horticulture is the science and art of gardening." }
      ]
    },
    {
      topic: "Reptiles",
      questions: [
        { q: "Which features make an animal a reptile?", a: "Dry, scaly skin, lungs, and usually eggs with leathery shells laid on land", wrong: ["Moist skin and eggs laid in water", "Feathers and wings", "Fur and milk"], why: "Snakes, lizards, turtles, and alligators are reptiles." },
        { q: "Reptiles are 'cold-blooded' (ectothermic). What does that mean?", a: "Their body temperature depends on their surroundings", wrong: ["They are always cold to touch", "They have blue blood", "They live only in snow"], why: "That's why reptiles bask in the sun to warm up." },
        { q: "Why do you often see turtles and lizards lying in the sun?", a: "To warm their bodies (basking)", wrong: ["To get a tan", "To dry their eggs", "To sleep"], why: "Being warm helps them move, digest food, and stay active." },
        { q: "Reptiles grow by shedding their skin. For snakes, this is called...", a: "Molting (shedding)", wrong: ["Metamorphosis", "Hibernating", "Germinating"], why: "Snakes often shed their skin in one piece, inside out." },
        { q: "Which large reptile has a broad, U-shaped snout and lives in eastern NC swamps and rivers?", type: "type", a: ["american alligator", "alligator", "alligators"], why: "North Carolina is the northern edge of where alligators live." },
        { q: "What decides whether baby alligators hatch as males or females?", a: "The temperature of the nest", wrong: ["The color of the eggs", "The phase of the Moon", "What the mother eats"], why: "Warmer nests tend to make males, and cooler nests make females." },
        { q: "Alligators dig 'gator holes' in wetlands. How do these help other animals?", a: "They hold water during dry times", wrong: ["They trap other animals forever", "They make lightning", "They grow trees"], why: "Fish, turtles, and birds depend on gator holes in droughts." },
        { q: "Which small lizard can change color from green to brown and has a pink throat fan called a dewlap?", type: "type", a: ["green anole", "anole", "carolina anole"], why: "Males flash their pink dewlap to show off to females and warn other males." },
        { q: "Which lizard's babies have a bright blue tail?", a: "Southeastern five-lined skink", wrong: ["Green anole", "Eastern fence lizard", "Eastern glass lizard"], why: "A bright tail draws a predator's attack away from the skink's body." },
        { q: "Some lizards, like skinks, can drop their tail to escape a predator. What happens next?", a: "The tail wiggles to distract the predator, and a new tail grows back", wrong: ["The lizard dies", "The tail turns into a snake", "The lizard turns to stone"], why: "The regrown tail is usually shorter and a different color." },
        { q: "Which legless animal on the list looks like a snake but is actually a lizard?", type: "type", a: ["eastern glass lizard", "glass lizard"], why: "Unlike snakes, it has eyelids and ear openings." },
        { q: "How can you tell the Eastern glass lizard is a lizard and not a snake?", a: "It has movable eyelids and ear openings", wrong: ["It has 8 legs", "It has feathers", "It can fly"], why: "Snakes have no eyelids and no outside ear openings." },
        { q: "Why is it called a 'glass' lizard?", a: "Its long tail breaks easily into pieces, like glass", wrong: ["It's see-through", "It lives in windows", "It's made of sand"], why: "The broken tail pieces wiggle and distract predators." },
        { q: "Which lizard has rough, spiny scales, is gray-brown, and is often seen on fences, logs, and tree trunks?", a: "Eastern fence lizard", wrong: ["Green anole", "Eastern glass lizard", "Southeastern five-lined skink"], why: "Males have bright blue patches on their bellies." },
        { q: "Which three snakes on the specimen list are venomous?", a: "Copperhead, cottonmouth, and Eastern diamondback rattlesnake", wrong: ["Black rat snake, garter snake, and kingsnake", "Hognose, brownsnake, and water snake", "Copperhead, garter snake, and kingsnake"], why: "All three are pit vipers. Never touch or bother a snake you don't know." },
        { q: "Which venomous snake has a copper-colored head and hourglass-shaped bands, and causes the most venomous snakebites in NC?", type: "type", a: ["copperhead"], why: "Copperheads blend into fallen leaves. Watch where you step and reach." },
        { q: "Which venomous water snake opens its mouth wide to show a white lining when threatened?", a: "Cottonmouth", wrong: ["Banded water snake", "Garter snake", "Black rat snake"], why: "It's also called a water moccasin. It lives in eastern NC wetlands." },
        { q: "The harmless banded water snake is often mistaken for which venomous snake?", a: "Cottonmouth", wrong: ["Copperhead", "Garter snake", "Eastern diamondback rattlesnake"], why: "Both live near water. Many harmless water snakes are killed by mistake." },
        { q: "Which is the largest venomous snake in North America?", a: "Eastern diamondback rattlesnake", wrong: ["Copperhead", "Cottonmouth", "Black rat snake"], why: "It has diamond-shaped markings and a rattle on its tail. It's very rare and endangered in NC." },
        { q: "Copperheads, cottonmouths, and rattlesnakes have heat-sensing holes on their faces. They are called...", a: "Pit vipers", wrong: ["Constrictors", "Water snakes", "Glass lizards"], why: "The pits sense body heat, helping them find warm-blooded prey in the dark." },
        { q: "Which long, black, harmless snake is a great climber and helps farmers by eating rats and mice?", a: "Black rat snake", wrong: ["Copperhead", "Cottonmouth", "Garter snake"], why: "Rat snakes squeeze their prey (constriction). They're not venomous." },
        { q: "Which harmless snake flattens its neck like a cobra, hisses, and even plays dead when threatened?", type: "type", a: ["eastern hognose snake", "hognose", "hognose snake", "eastern hognose"], why: "It rolls over with its tongue hanging out, pretending to be dead!" },
        { q: "The Eastern hognose snake uses its upturned snout to dig for its favorite food. What is it?", a: "Toads", wrong: ["Birds", "Fish", "Acorns"], why: "Hognoses are resistant to the toxins in toad skin." },
        { q: "Which black snake with white or yellow chain-like bands eats other snakes, even venomous ones?", a: "Eastern kingsnake", wrong: ["Black rat snake", "Garter snake", "Dekay's brownsnake"], why: "Kingsnakes are resistant to pit viper venom. That's why they're called 'king.'" },
        { q: "Which small, brown, harmless snake often lives in gardens and eats slugs and earthworms?", a: "Dekay's brownsnake", wrong: ["Copperhead", "Cottonmouth", "Eastern diamondback rattlesnake"], why: "Brownsnakes are small and shy, often found under logs and rocks." },
        { q: "Which common harmless snake has long stripes down its back and gives birth to live babies?", a: "Eastern garter snake", wrong: ["Eastern kingsnake", "Black rat snake", "Copperhead"], why: "Garter snakes eat earthworms, frogs, and small fish." },
        { q: "Which turtle can close its shell completely using a hinge on its bottom shell?", a: "Eastern box turtle", wrong: ["Snapping turtle", "Painted turtle", "Yellow-bellied slider"], why: "It closes up like a box, which is where it gets its name." },
        { q: "Eastern box turtles are land turtles. About how long can they live?", a: "50 years or more", wrong: ["About 2 years", "About 6 months", "About 10 days"], why: "Some box turtles have lived to be over 100!" },
        { q: "Which turtle has a large head, strong jaws, and a small bottom shell, so it can't hide inside its shell?", type: "type", a: ["snapping turtle", "snapper", "common snapping turtle"], why: "Since it can't hide, it defends itself by snapping." },
        { q: "Which turtle has a smooth dark shell with red and yellow markings on its edges and yellow stripes on its head?", a: "Painted turtle", wrong: ["Snapping turtle", "Spotted turtle", "Eastern box turtle"], why: "It looks like someone painted it!" },
        { q: "Which small turtle has a black shell sprinkled with yellow dots?", a: "Spotted turtle", wrong: ["Painted turtle", "Snapping turtle", "Eastern box turtle"], why: "Spotted turtles live in shallow wetlands and are becoming rare." },
        { q: "Which turtle has a yellow patch behind each eye and loves to bask on logs, sliding into the water when startled?", a: "Yellow-bellied slider", wrong: ["Eastern box turtle", "Snapping turtle", "Spotted turtle"], why: "'Slider' comes from how quickly it slides off its log." },
        { q: "The top part of a turtle's shell is called the carapace. The bottom part is called the...", a: "Plastron", wrong: ["Scute", "Dewlap", "Tadpole"], why: "The shell is part of the turtle's skeleton. A turtle can't crawl out of it." },
        { q: "Box turtles eat berries and mushrooms, then leave the seeds and spores in their poop. This helps...", a: "Spread seeds and spores to new places", wrong: ["Make the soil salty", "Kill the plants", "Make rain"], why: "Many animals help plants by spreading seeds." },
        { q: "How do snakes like rat snakes and kingsnakes help people?", a: "They eat rodents that damage crops and spread disease", wrong: ["They pollinate flowers", "They make honey", "They clean windows"], why: "Snakes are natural pest control." }
      ]
    },
    {
      topic: "Amphibians",
      questions: [
        { q: "Which features make an animal an amphibian?", a: "Moist skin, eggs laid in water or damp places, and a life in water and on land", wrong: ["Dry scales and leathery eggs", "Feathers", "Fur"], why: "'Amphibian' means 'double life': in water and on land." },
        { q: "Frogs and salamanders can breathe through their...", a: "Skin, as well as lungs or gills", wrong: ["Eyes", "Toes only", "Scales"], why: "That's why amphibians need to keep their skin moist." },
        { q: "What is a baby frog called?", type: "type", a: ["tadpole", "tadpoles", "pollywog"], why: "Tadpoles live in water, breathe with gills, and have tails." },
        { q: "Put the frog life cycle in order.", a: "Egg, tadpole, tadpole with legs (froglet), adult frog", wrong: ["Tadpole, egg, frog, froglet", "Frog, tadpole, egg, froglet", "Egg, froglet, frog, tadpole"], why: "This big change is called metamorphosis." },
        { q: "Why are amphibians called 'indicator species'?", a: "Their thin skin makes them sensitive to pollution, so they show if an environment is healthy", wrong: ["They point in the direction of water", "They change color with the weather", "They glow in polluted water"], why: "If frogs and salamanders disappear, something may be wrong in the habitat." },
        { q: "How can you tell a toad from a frog?", a: "Toads have dry, bumpy skin and short legs for hopping; frogs have smooth, moist skin and long legs for leaping", wrong: ["Toads have feathers", "Frogs have no legs", "Toads live only in trees"], why: "Toads can live farther from water than most frogs." },
        { q: "Which amphibian on the list has warty, dry skin and lays eggs in long strings?", a: "American toad", wrong: ["Bullfrog", "Pine Barrens treefrog", "Marbled salamander"], why: "Big bumps behind its eyes (parotoid glands) make a bad-tasting poison to protect it." },
        { q: "Which is the largest frog in North America, known for its deep 'jug-o-rum' call?", type: "type", a: ["bullfrog", "american bullfrog", "bull frog"], why: "Bullfrog tadpoles can take a year or more to become frogs." },
        { q: "Which frog is green or brown with dark round spots and a pointed snout?", a: "Southern leopard frog", wrong: ["Bullfrog", "American toad", "Pine Barrens treefrog"], why: "Its spots look like a leopard's." },
        { q: "Which bright green treefrog has a purple (lavender) stripe with a white edge along each side?", type: "type", a: ["pine barrens treefrog", "pine barrens tree frog"], why: "It's NC's state frog. It lives in boggy wetlands in the Sandhills and Coastal Plain." },
        { q: "Treefrogs have sticky, round pads on their toes. How do these help them?", a: "They help them climb and cling to plants", wrong: ["They help them swim faster", "They help them dig", "They make light"], why: "Toe pads work almost like suction cups." },
        { q: "Which salamander is black with bold white or silvery bands?", a: "Marbled salamander", wrong: ["Red-backed salamander", "White-spotted slimy salamander", "Green anole"], why: "It's NC's state salamander." },
        { q: "Marbled salamanders are unusual because they lay their eggs...", a: "On land, in dry pond beds, and wait for fall rains to flood them", wrong: ["In trees", "In the ocean", "Inside other animals"], why: "When rain fills the pond, the eggs hatch into larvae." },
        { q: "Which small salamander has no lungs and breathes only through its skin?", a: "Red-backed salamander", wrong: ["Marbled salamander", "Bullfrog", "American toad"], why: "Red-backed salamanders also lay eggs on land, and the babies hatch as tiny salamanders." },
        { q: "Which black salamander with white spots makes a very sticky slime to protect itself?", a: "White-spotted slimy salamander", wrong: ["Marbled salamander", "Red-backed salamander", "Eastern glass lizard"], why: "The slime is so sticky it's hard to wash off your hands." },
        { q: "How are salamanders different from lizards?", a: "Salamanders have moist skin with no scales; lizards have dry, scaly skin", wrong: ["Salamanders have feathers", "Lizards live only in water", "They are exactly the same"], why: "Salamanders are amphibians. Lizards are reptiles." },
        { q: "Most frogs and salamanders eat...", a: "Insects, worms, and other small animals", wrong: ["Only grass", "Only rocks", "Only sunlight"], why: "Adult amphibians are predators that help control insects." },
        { q: "Which of these is an amphibian?", a: "Red-backed salamander", wrong: ["Green anole", "Eastern glass lizard", "Copperhead"], why: "The others are reptiles." },
        { q: "Which of these is a reptile?", a: "Eastern fence lizard", wrong: ["Marbled salamander", "American toad", "Bullfrog"], why: "Lizards are reptiles. Salamanders, toads, and frogs are amphibians." }
      ]
    }
  ]
});
