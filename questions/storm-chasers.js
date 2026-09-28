/* Storm Chasers (2027 NC Division A) question bank.
 * Covers the severe weather in the rules (thunderstorms, tornadoes, hurricanes,
 * blizzards, floods), how storms form, maps and forecasts, watches and
 * warnings, safety, and effects on people and the environment.
 * Format notes are in geology-rocks.js.
 */
(window.QUIZ_EVENTS = window.QUIZ_EVENTS || []).push({
  id: "storm-chasers",
  name: "Storm Chasers",
  icon: "⛈️",
  color: "#2a9bc9",
  blurb: "Thunderstorms, tornadoes, hurricanes, blizzards, and floods: how they form and how to stay safe.",
  sections: [
    {
      topic: "What causes severe weather",
      questions: [
        { q: "Severe weather is caused by changes in Earth's...", a: "Atmosphere", wrong: ["Core", "Oceans only", "Moon"], why: "Weather happens in the atmosphere, the layer of air around Earth." },
        { q: "Almost all weather, including storms, happens in which layer of the atmosphere?", a: "Troposphere", wrong: ["Stratosphere", "Mesosphere", "Thermosphere"], why: "The troposphere is the layer closest to the ground." },
        { q: "Where does the energy that powers storms mostly come from?", a: "The Sun heating Earth unevenly", wrong: ["The Moon", "Earthquakes", "Volcanoes"], why: "Uneven heating makes air rise, sink, and move, creating wind and storms." },
        { q: "Warm air tends to...", a: "Rise", wrong: ["Sink", "Freeze", "Stay still"], why: "Warm air is less dense than cold air. Rising warm, moist air builds storm clouds." },
        { q: "Cold air tends to...", a: "Sink", wrong: ["Rise", "Glow", "Evaporate"], why: "Cold air is denser, so it sinks and can push warm air up." },
        { q: "The boundary where two different air masses meet is called a...", type: "type", a: ["front", "weather front"], why: "Storms often form along fronts." },
        { q: "When a cold air mass pushes into warm, moist air, it's called a...", a: "Cold front", wrong: ["Warm front", "High pressure", "Sea breeze"], why: "Cold fronts often bring fast-building thunderstorms and sometimes tornadoes." },
        { q: "Which three ingredients do thunderstorms need?", a: "Moisture, rising unstable air, and something to lift the air", wrong: ["Snow, sand, and sunshine", "Dry air, calm winds, and high pressure", "Cold oceans, fog, and frost"], why: "Warm, humid air that rises quickly can build into a thunderstorm." },
        { q: "When air pressure is LOW, the weather is usually...", a: "Cloudy and stormy", wrong: ["Sunny and calm", "Always cold", "Dry"], why: "In low pressure, air rises, cools, and forms clouds and rain." },
        { q: "When air pressure is HIGH, the weather is usually...", a: "Clear and calm", wrong: ["Stormy", "Rainy", "Snowy"], why: "In high pressure, air sinks, which keeps clouds from forming." },
        { q: "Which conditions are most likely to lead to severe thunderstorms?", a: "Warm, humid air near the ground with cooler air above", wrong: ["Cold, dry, still air everywhere", "A clear, calm night with high pressure", "Thick fog on a cool morning"], why: "Warm, moist air rising into cold air is unstable and can build tall storm clouds." },
        { q: "A fast river of wind high in the atmosphere that helps steer storms is called the...", a: "Jet stream", wrong: ["Gulf Stream", "Sea breeze", "Trade wind"], why: "The jet stream moves storms across the country, usually from west to east." },
        { q: "Much of the warm, moist air that fuels storms in the Southeast comes from...", a: "The Gulf of Mexico and Atlantic Ocean", wrong: ["The North Pole", "The Rocky Mountains", "Deserts in Nevada"], why: "Warm oceans add lots of water vapor to the air." }
      ]
    },
    {
      topic: "Thunderstorms and lightning",
      questions: [
        { q: "Tall, towering storm clouds that make thunder, lightning, and heavy rain are called...", a: "Cumulonimbus clouds", wrong: ["Cirrus clouds", "Stratus clouds", "Fog"], why: "'Nimbus' means rain. Cumulonimbus clouds can tower more than 10 miles high." },
        { q: "The flat, spread-out top of a cumulonimbus cloud is shaped like an...", a: "Anvil", wrong: ["Umbrella", "Funnel", "Ice cream cone"], why: "The top flattens when rising air hits the top of the troposphere." },
        { q: "Put the stages of a thunderstorm in order.", a: "Cumulus (growing), mature, dissipating", wrong: ["Mature, cumulus, dissipating", "Dissipating, mature, cumulus", "Cumulus, dissipating, mature"], why: "In the mature stage, rain, lightning, and hail are strongest." },
        { q: "In which stage of a thunderstorm are rain, lightning, and hail usually strongest?", a: "Mature stage", wrong: ["Cumulus stage", "Dissipating stage", "Before any clouds form"], why: "Strong updrafts and downdrafts are both happening in the mature stage." },
        { q: "The National Weather Service calls a thunderstorm 'severe' if it has hail at least 1 inch wide, winds of at least 58 mph, or a...", a: "Tornado", wrong: ["Rainbow", "Fog bank", "Light drizzle"], why: "Severe thunderstorms can cause serious damage." },
        { q: "What is lightning?", a: "A giant spark of electricity", wrong: ["Burning gas from the Sun", "Reflected sunlight", "Glowing rain"], why: "Charges build up in storm clouds and jump to the ground, another cloud, or the air." },
        { q: "About how hot can a lightning bolt get?", a: "About 50,000°F, hotter than the surface of the Sun", wrong: ["About 100°F", "About 500°F", "About 0°F"], why: "Lightning is about five times hotter than the Sun's surface." },
        { q: "What causes thunder?", a: "Lightning heating the air so fast it expands with a boom", wrong: ["Clouds bumping into each other", "Rain hitting the ground", "Giants bowling"], why: "The super-heated air explodes outward, making a sound wave." },
        { q: "Why do you see lightning before you hear thunder?", a: "Light travels much faster than sound", wrong: ["Thunder happens later", "Your ears are slower than your eyes", "Lightning is closer"], why: "Light arrives almost instantly. Sound takes about 5 seconds to travel a mile." },
        { q: "You see lightning and count 15 seconds until you hear thunder. About how far away is the storm?", a: "About 3 miles", wrong: ["About 15 miles", "About 1 mile", "About 30 miles"], hint: "Sound travels about 1 mile every 5 seconds.", why: "15 divided by 5 is 3 miles. That's close enough to be struck!" },
        { q: "What is a good lightning safety rule?", a: "When thunder roars, go indoors", wrong: ["Stand under a tall tree", "Go swimming", "Hold up a metal pole"], why: "If you can hear thunder, you are close enough to be struck by lightning." },
        { q: "How long should you wait after the last thunder before going back outside?", a: "30 minutes", wrong: ["30 seconds", "5 minutes", "No need to wait"], why: "Lightning can strike even as a storm moves away." },
        { q: "Is it safe to shelter under a tall tree during a thunderstorm?", a: "No, lightning often strikes tall objects", wrong: ["Yes, trees block lightning", "Yes, if the tree is wet", "Only if it's a pine tree"], why: "Go inside a building or a hard-topped car instead." },
        { q: "Which places are SAFE during a thunderstorm?", a: "Inside a sturdy building or a hard-topped car with the windows up", wrong: ["A golf course", "A swimming pool", "An open field"], why: "Picnic shelters, tents, and dugouts do NOT protect you from lightning." },
        { q: "Balls of ice that fall during strong thunderstorms are called...", type: "type", a: ["hail", "hailstones", "hailstone"], why: "Hail forms when strong updrafts carry raindrops high up into freezing parts of the cloud." },
        { q: "How do hailstones grow bigger?", a: "Strong updrafts carry them up and down through the cloud, adding layers of ice", wrong: ["They roll on the ground", "Snowflakes stick to them on the ground", "They grow in the ocean"], why: "Cut a big hailstone in half and you can see rings, like an onion." },
        { q: "What kind of damage can large hail cause?", a: "Dented cars, broken windows, and ruined crops", wrong: ["It makes plants grow faster", "It cleans roofs", "No damage at all"], why: "Hail the size of golf balls or bigger can do a lot of damage." },
        { q: "A strong burst of wind rushing down and out from a thunderstorm is called a...", a: "Downburst", wrong: ["Updraft", "Sea breeze", "Rainbow"], why: "Downbursts cause straight-line wind damage that can look like a tornado hit." },
        { q: "Lightning can cause which natural hazard in dry forests?", a: "Wildfires", wrong: ["Earthquakes", "Tsunamis", "Volcanic eruptions"], why: "Lightning strikes start many wildfires, especially during droughts." }
      ]
    },
    {
      topic: "Tornadoes",
      questions: [
        { q: "A violently spinning column of air that reaches from a thunderstorm down to the ground is a...", type: "type", a: ["tornado", "twister"], why: "Tornadoes can have the fastest winds on Earth, over 200 mph." },
        { q: "A spinning funnel-shaped cloud that has NOT touched the ground is called a...", a: "Funnel cloud", wrong: ["Tornado", "Waterspout", "Anvil"], why: "Once it touches the ground, it becomes a tornado." },
        { q: "A tornado over water is called a...", type: "type", a: ["waterspout", "water spout"], why: "Waterspouts can happen off the North Carolina coast." },
        { q: "Big, long-lasting thunderstorms with a rotating updraft that often make tornadoes are called...", a: "Supercells", wrong: ["Blizzards", "Sea breezes", "Cirrus clouds"], why: "The spinning part of a supercell is called a mesocyclone." },
        { q: "A lowered, sometimes rotating cloud under a thunderstorm that can come before a tornado is called a...", a: "Wall cloud", wrong: ["Cirrus cloud", "Fog bank", "Contrail"], why: "Storm spotters watch wall clouds closely for rotation." },
        { q: "Which of these can be a warning sign that a tornado is coming?", a: "A loud roar like a freight train", wrong: ["A rainbow", "A clear blue sky", "Light snow"], why: "Other signs include a dark, greenish sky, large hail, and a rotating cloud." },
        { q: "Which scale rates how strong a tornado was, based on the damage it caused?", a: "Enhanced Fujita (EF) scale", wrong: ["Saffir-Simpson scale", "Richter scale", "Mohs scale"], why: "Tornadoes are rated from EF0 (weakest) to EF5 (strongest)." },
        { q: "On the Enhanced Fujita scale, what is the strongest rating?", a: "EF5", wrong: ["EF1", "EF10", "Category 5"], why: "EF5 tornadoes can sweep houses right off their foundations." },
        { q: "Which part of the United States gets so many tornadoes that it's nicknamed 'Tornado Alley'?", a: "The Great Plains", wrong: ["The Pacific coast", "Alaska", "New England"], why: "Warm, moist Gulf air meets cool, dry air over the Plains." },
        { q: "Which country has the most tornadoes in the world?", a: "The United States", wrong: ["Canada", "Brazil", "England"], why: "The U.S. has over 1,000 tornadoes in a typical year." },
        { q: "During a tornado warning, where is the safest place to go?", a: "The lowest floor, in a small inside room with no windows", wrong: ["Next to a big window", "Outside to watch", "The top floor"], why: "Get as many walls between you and the outside as you can, and cover your head." },
        { q: "Why are mobile homes especially unsafe during tornadoes?", a: "They can be flipped or torn apart by strong winds", wrong: ["They attract lightning", "They are too heavy", "They are always underground"], why: "People in mobile homes should go to a sturdy building or storm shelter." },
        { q: "If you're caught outside during a tornado with no shelter nearby, what should you do?", a: "Lie flat in a low spot like a ditch and cover your head", wrong: ["Hide under a highway overpass", "Run toward the tornado", "Climb a tree"], why: "Overpasses are dangerous because winds speed up under them." },
        { q: "What causes most tornado injuries?", a: "Flying debris", wrong: ["Cold air", "Rain", "Loud noise"], why: "That's why covering your head and neck is so important." },
        { q: "True or false: Hurricanes can also produce tornadoes.", a: "True", wrong: ["False"], why: "Hurricanes that come ashore in North Carolina often spin up tornadoes in their outer rain bands." },
        { q: "On weather radar, a hook-shaped curl in a storm can be a sign of...", a: "A tornado", wrong: ["A rainbow", "Clear skies", "Fog"], why: "Forecasters call it a 'hook echo.'" }
      ]
    },
    {
      topic: "Hurricanes",
      questions: [
        { q: "A huge, spinning storm that forms over warm ocean water, with winds of at least 74 mph, is a...", type: "type", a: ["hurricane", "hurricanes"], why: "In other oceans, the same kind of storm is called a typhoon or cyclone." },
        { q: "Where do hurricanes get their energy?", a: "Warm ocean water", wrong: ["Cold mountain air", "Desert sand", "Lightning"], why: "Warm water (about 80°F or warmer) gives hurricanes heat and moisture." },
        { q: "Why do hurricanes get weaker after they move over land?", a: "They lose their supply of warm ocean water", wrong: ["Trees push them back", "The land is too salty", "They run out of wind at night"], why: "Without warm water, they lose their energy source. They can still cause serious flooding inland." },
        { q: "Put the stages of a growing hurricane in order.", a: "Tropical disturbance, tropical depression, tropical storm, hurricane", wrong: ["Hurricane, tropical storm, tropical depression", "Tropical storm, tropical depression, hurricane", "Tropical depression, hurricane, tropical storm"], why: "A storm gets a name when it becomes a tropical storm (39 mph winds or more)." },
        { q: "At what stage does a storm get a name, like 'Florence'?", a: "Tropical storm (winds of 39 mph or more)", wrong: ["Tropical disturbance", "Only after it hits land", "Only when it reaches Category 5"], why: "Names make it easier to talk about and track storms." },
        { q: "The calm, clear center of a hurricane is called the...", type: "type", a: ["eye"], why: "The eye can be calm, but the strongest winds are right around it." },
        { q: "The ring of strong thunderstorms around a hurricane's eye, with the fastest winds, is called the...", a: "Eyewall", wrong: ["Rain band", "Anvil", "Front"], why: "The eyewall is the most dangerous part of a hurricane." },
        { q: "Curved lines of storms that spiral out from a hurricane's center are called...", a: "Rain bands", wrong: ["Eyewalls", "Jet streams", "Fronts"], why: "Rain bands can bring heavy rain and tornadoes far from the center." },
        { q: "Which scale rates hurricanes from Category 1 to Category 5 by wind speed?", a: "Saffir-Simpson scale", wrong: ["Enhanced Fujita scale", "Richter scale", "Beaufort scale"], why: "Category 3 and higher are called major hurricanes." },
        { q: "What is the strongest category of hurricane?", a: "Category 5", wrong: ["Category 1", "Category 10", "EF5"], why: "Category 5 hurricanes have winds of 157 mph or more." },
        { q: "In the Northern Hemisphere, which way do hurricanes spin?", a: "Counterclockwise", wrong: ["Clockwise", "They don't spin", "Up and down"], why: "Earth's rotation makes them curve that way (the Coriolis effect)." },
        { q: "Ocean water pushed onto land by a hurricane's winds is called a storm...", type: "type", a: ["surge"], why: "Storm surge is often the deadliest part of a hurricane." },
        { q: "When is Atlantic hurricane season?", a: "June 1 to November 30", wrong: ["December to February", "Only in July", "All year, equally"], why: "The busiest part of the season is usually August through October." },
        { q: "Which month is usually the peak of Atlantic hurricane season?", a: "September", wrong: ["January", "April", "December"], why: "Ocean water is warmest in late summer." },
        { q: "In 2024, Hurricane Helene caused deadly flooding and landslides in which part of North Carolina?", a: "The western mountains", wrong: ["The Outer Banks only", "No part of NC", "Only the Piedmont cities"], why: "Helene dumped huge amounts of rain on the mountains, far from the coast." },
        { q: "In 2018, Hurricane Florence set a record in North Carolina for...", a: "The most rainfall from a tropical storm", wrong: ["The most snow", "The coldest temperature", "The largest earthquake"], why: "Florence stalled and dropped more than 30 inches of rain in some places." },
        { q: "Airplanes that fly right into hurricanes to measure them are nicknamed...", a: "Hurricane Hunters", wrong: ["Storm Dodgers", "Cloud Busters", "Wind Riders"], why: "They drop instruments into the storm to measure wind, pressure, and temperature." },
        { q: "Why is a hurricane's eye dangerous to go outside in?", a: "The other side of the eyewall will hit soon, with winds from the opposite direction", wrong: ["The eye is full of lightning", "The eye is freezing cold", "The eye lasts for days"], why: "Stay inside until officials say the whole storm has passed." },
        { q: "Which part of North Carolina is most at risk from storm surge?", a: "The coast and Outer Banks", wrong: ["The mountains", "The Piedmont", "Nowhere in NC"], why: "Low, sandy barrier islands can be flooded by ocean water." },
        { q: "A hurricane's winds are strongest where?", a: "In the eyewall", wrong: ["In the eye", "Far outside the storm", "At the very top of the clouds only"], why: "The eye is calm, but the eyewall around it has the fastest winds." }
      ]
    },
    {
      topic: "Blizzards and floods",
      questions: [
        { q: "A severe winter storm with strong winds and blowing snow that makes it hard to see is a...", type: "type", a: ["blizzard"], why: "Blizzards have winds of at least 35 mph and very low visibility for 3 hours or more." },
        { q: "What makes a snowstorm a blizzard?", a: "Strong winds and blowing snow that make it very hard to see", wrong: ["Any amount of snow", "Snow with thunder", "Snow that melts right away"], why: "It's the wind and low visibility, not the amount of snow, that makes it a blizzard." },
        { q: "When blowing snow makes everything look white and you can't see where you're going, it's called a...", a: "Whiteout", wrong: ["Blackout", "Heat wave", "Rainbow"], why: "Whiteouts make driving extremely dangerous." },
        { q: "Frostbite and hypothermia are dangers of which kind of severe weather?", a: "Blizzards and extreme cold", wrong: ["Hurricanes", "Heat waves", "Droughts"], why: "Dress in layers and cover skin to stay safe in the cold." },
        { q: "What is hypothermia?", a: "When your body temperature drops dangerously low", wrong: ["A sunburn", "A broken bone", "A kind of hail"], why: "Shivering, confusion, and sleepiness are warning signs." },
        { q: "A flood that happens very quickly, within a few hours of heavy rain, is called a...", type: "type", a: ["flash flood", "flashflood"], why: "Flash floods are especially dangerous in mountains and cities." },
        { q: "What is the safety slogan for flooded roads?", a: "Turn Around, Don't Drown", wrong: ["Drive Fast, Get Past", "Float Your Boat", "Splash and Dash"], why: "You can't tell how deep water is, or whether the road underneath is washed out." },
        { q: "About how much fast-moving water can knock an adult off their feet?", a: "About 6 inches", wrong: ["About 10 feet", "About 3 feet", "Water can't knock you down"], why: "Just a foot of moving water can carry away a small car." },
        { q: "About how much moving water can carry away a small car?", a: "About 12 inches (1 foot)", wrong: ["About 10 feet", "About 50 feet", "It can't carry a car"], why: "Never drive through flooded roads." },
        { q: "Which kinds of weather can cause flooding?", a: "Hurricanes, heavy thunderstorms, and melting snow", wrong: ["Only droughts", "Only sunny days", "Only fog"], why: "Any time more water arrives than the ground and rivers can hold, flooding can happen." },
        { q: "Why do cities often flood faster than forests?", a: "Pavement and roofs don't let water soak in", wrong: ["Cities get more rain", "Trees make floods", "Cities are always in valleys"], why: "Rain runs off hard surfaces quickly into streets and storm drains." },
        { q: "Flat land next to a river that floods when the river overflows is called a...", a: "Floodplain", wrong: ["Mountain", "Desert", "Plateau"], why: "Floodplains often have rich soil, but building there is risky." },
        { q: "Which type of flooding is most common right along the coast during a hurricane?", a: "Storm surge flooding from the ocean", wrong: ["Snowmelt flooding", "Dam flooding in deserts", "Glacier flooding"], why: "Storm surge pushes ocean water onto land." }
      ]
    },
    {
      topic: "Forecasts and maps",
      questions: [
        { q: "A scientist who studies and forecasts the weather is called a...", type: "type", a: ["meteorologist"], why: "Meteorologists use data from radar, satellites, and weather stations." },
        { q: "What tool measures air pressure?", a: "Barometer", wrong: ["Thermometer", "Anemometer", "Rain gauge"], why: "A falling barometer often means a storm is coming." },
        { q: "If the barometer reading is dropping quickly, what weather is probably coming?", a: "A storm", wrong: ["Clear, calm weather", "No change", "An earthquake"], why: "Falling pressure usually means a low-pressure system is moving in." },
        { q: "What tool measures wind speed?", type: "type", a: ["anemometer"], why: "Its cups spin faster as the wind blows harder." },
        { q: "What tool shows which direction the wind is coming from?", a: "Wind vane (weather vane)", wrong: ["Anemometer", "Thermometer", "Barometer"], why: "A wind vane points into the wind." },
        { q: "What tool measures how much rain has fallen?", a: "Rain gauge", wrong: ["Barometer", "Anemometer", "Hygrometer"], why: "A rain gauge collects rain so you can measure how deep it is." },
        { q: "What do meteorologists use to 'see' rain, hail, and storms moving, even at night?", a: "Radar", wrong: ["Microscopes", "Thermometers", "Rain gauges"], why: "Radar sends out radio waves that bounce off raindrops and hail." },
        { q: "Doppler radar can also show forecasters that winds in a storm are...", a: "Spinning, which can mean a tornado", wrong: ["Salty", "Hot", "Asleep"], why: "It measures whether rain is moving toward or away from the radar." },
        { q: "On a weather radar map, which color usually shows the heaviest rain?", a: "Red (or purple)", wrong: ["Light green", "Light blue", "White"], why: "Green is light rain, yellow is moderate, and red or purple is very heavy rain or hail." },
        { q: "What do weather satellites do?", a: "Take pictures of clouds and storms from space", wrong: ["Make rain", "Stop hurricanes", "Measure earthquakes"], why: "Satellites help forecasters watch hurricanes form far out at sea." },
        { q: "Balloons that carry instruments high into the sky to measure the air are called...", a: "Weather balloons", wrong: ["Hot air balloons", "Blimps", "Party balloons"], why: "They're launched twice a day from hundreds of places around the world." },
        { q: "On a weather map, a line with blue triangles shows a...", a: "Cold front", wrong: ["Warm front", "High pressure", "Tornado"], why: "The triangles point the way the cold front is moving." },
        { q: "On a weather map, a line with red half-circles shows a...", a: "Warm front", wrong: ["Cold front", "Tornado", "Hurricane"], why: "Warm fronts often bring steady rain." },
        { q: "On a weather map, a big blue 'H' marks an area of...", a: "High pressure", wrong: ["Hurricanes", "Hail", "Heat wave"], why: "H usually means fair weather. L means low pressure, often stormy." },
        { q: "On a weather map, a red 'L' marks an area of...", a: "Low pressure", wrong: ["Lightning", "Light rain only", "Lake"], why: "Low pressure systems often bring clouds and storms." },
        { q: "The government agency in the U.S. that issues weather watches and warnings is the...", a: "National Weather Service", wrong: ["Post Office", "Department of Education", "Space Force"], why: "The National Weather Service is part of NOAA." },
        { q: "Trained volunteers who watch for and report severe weather are called...", a: "Storm spotters", wrong: ["Storm makers", "Sky painters", "Cloud counters"], why: "Their reports help forecasters warn people quickly." },
        { q: "A forecast says '80% chance of thunderstorms.' What does that mean?", a: "Storms are very likely", wrong: ["Storms are impossible", "It will rain for 80 minutes", "80 storms will happen"], why: "The higher the percentage, the more likely it is to happen." }
      ]
    },
    {
      topic: "Watches and warnings",
      questions: [
        { q: "What is the difference between a WATCH and a WARNING?", a: "A watch means conditions could produce it; a warning means it's happening or about to", wrong: ["They mean the same thing", "A watch is more dangerous", "A warning means it's over"], why: "Watch = be prepared. Warning = take action now!" },
        { q: "A tornado WATCH is issued for your county. What should you do?", a: "Be prepared and keep checking the weather", wrong: ["Go outside to look for tornadoes", "Ignore it", "Hide in the basement for a week"], why: "Know where you'll go if a warning is issued." },
        { q: "A tornado WARNING is issued for your area. What should you do?", a: "Go to your safe place right away", wrong: ["Wait to see the tornado", "Go outside and film it", "Keep playing"], why: "A warning means a tornado has been seen or shows up on radar." },
        { q: "Which is more serious: a hurricane watch or a hurricane warning?", a: "Hurricane warning", wrong: ["Hurricane watch", "They are the same", "Neither"], why: "A warning means hurricane conditions are expected soon." },
        { q: "How can people get weather warnings?", a: "Weather radio, phone alerts, TV, radio, and outdoor sirens", wrong: ["Only by looking at the sky", "By reading old newspapers", "Warnings are secret"], why: "Having more than one way to get warnings is best." },
        { q: "A special radio that turns on by itself to announce weather warnings is called a...", a: "NOAA Weather Radio", wrong: ["Walkie-talkie", "Music radio", "Ham sandwich"], why: "It's great for warnings at night when you're asleep." },
        { q: "A 'flash flood warning' means...", a: "Flash flooding is happening or about to happen, so move to higher ground", wrong: ["It might rain next month", "The flood is over", "Go play in the water"], why: "Act right away. Never walk or drive through flood water." }
      ]
    },
    {
      topic: "Safety and preparedness",
      questions: [
        { q: "Which item belongs in a family emergency kit?", a: "A flashlight with extra batteries", wrong: ["A video game console", "Ice cream", "A glass vase"], why: "Kits also need water, food that won't spoil, a first aid kit, medicines, and a battery radio." },
        { q: "About how much water should an emergency kit have for each person?", a: "About 1 gallon per person per day, for several days", wrong: ["One cup total", "No water is needed", "A full swimming pool"], why: "You need water for drinking and cleaning." },
        { q: "What kind of food belongs in an emergency kit?", a: "Canned or packaged food that won't spoil", wrong: ["Fresh milk", "Ice cream", "Raw meat"], why: "The power may be out, so food needs to keep without a refrigerator. Don't forget a can opener!" },
        { q: "What is a family emergency plan?", a: "A plan for where to go and how to find each other in an emergency", wrong: ["A vacation plan", "A plan for dinner", "A homework schedule"], why: "Pick a meeting place and practice your plan." },
        { q: "When officials order people on the coast to leave before a hurricane, it's called an...", a: "Evacuation", wrong: ["Invitation", "Celebration", "Graduation"], why: "Follow evacuation routes and leave early." },
        { q: "After a storm, what should you do if you see a power line on the ground?", a: "Stay far away and tell an adult", wrong: ["Touch it to see if it works", "Move it with a stick", "Jump over it"], why: "Downed power lines can still carry deadly electricity." },
        { q: "Why should generators only be used outdoors, away from windows?", a: "They make carbon monoxide, a deadly invisible gas", wrong: ["They are too loud", "They attract lightning", "They make it rain"], why: "Carbon monoxide has no smell or color, so it's very dangerous indoors." },
        { q: "Why is it dangerous to walk or play in flood water after a storm?", a: "It can be deep, fast, dirty, and hide sharp objects or live wires", wrong: ["It's always too cold", "It's always too salty", "It's perfectly safe"], why: "Flood water can carry sewage, chemicals, and debris." },
        { q: "Before a hurricane, why do people bring in outdoor items like lawn chairs and trash cans?", a: "Strong winds can turn them into flying objects", wrong: ["To keep them dry", "To paint them", "To hide them from neighbors"], why: "Loose objects become dangerous debris in high winds." },
        { q: "During a blizzard, where is the safest place to be?", a: "Indoors, staying warm", wrong: ["Driving to the store", "Hiking in the woods", "On the roof shoveling"], why: "If you must go out, dress in layers and cover your skin." },
        { q: "How do communities prepare for severe weather?", a: "Building shelters, planning evacuation routes, and testing warning sirens", wrong: ["Ignoring forecasts", "Turning off all radios", "Building houses on beaches without planning"], why: "Being prepared saves lives." },
        { q: "Why do some coastal homes in NC stand on tall posts (stilts)?", a: "So storm surge and flood water can flow underneath", wrong: ["To get a better view", "To keep out ants", "To be closer to the clouds"], why: "Raised homes are less likely to be flooded." },
        { q: "Why are basements not common along the North Carolina coast?", a: "The ground is low and wet and floods easily", wrong: ["People don't like basements", "Basements attract hurricanes", "The ground is too hot"], why: "Near the coast, an inside room on the lowest floor is used for tornado safety instead." }
      ]
    },
    {
      topic: "Effects on people and nature",
      questions: [
        { q: "How can severe storms affect communities?", a: "Power outages, damaged homes, closed schools, and blocked roads", wrong: ["They always improve roads", "They make schools bigger", "They have no effect"], why: "It can take weeks or months for communities to recover." },
        { q: "How can heavy rain and flooding change the land?", a: "Erosion washes away soil and can change the shape of riverbanks", wrong: ["It makes mountains taller", "It turns sand into rock right away", "It never changes the land"], why: "Fast-moving water carries away soil, sand, and rocks." },
        { q: "Hurricane waves and storm surge can wash away sand from beaches. This is called beach...", type: "type", a: ["erosion"], why: "Storms can move huge amounts of sand in just one day." },
        { q: "Strong storms can cut new channels through the Outer Banks, connecting the ocean to the sound. These channels are called...", a: "Inlets", wrong: ["Caves", "Canyons", "Volcanoes"], why: "Hurricanes have opened and closed inlets on the Outer Banks many times." },
        { q: "In the mountains, heavy rain from storms can cause...", a: "Landslides", wrong: ["Tsunamis", "Sandstorms", "Heat waves"], why: "Soaked soil can slide down steep slopes, as happened during Hurricane Helene." },
        { q: "How can storm surge harm plants near the coast?", a: "Salty ocean water can kill freshwater plants and trees", wrong: ["It makes them grow faster", "It paints them blue", "It doesn't reach plants"], why: "Salt water poisons plants that are used to fresh water." },
        { q: "How can severe weather affect animals?", a: "It can destroy their homes and food and force them to move", wrong: ["Animals are never affected", "It gives all animals more food", "It turns animals into plants"], why: "Birds' nests, burrows, and wetlands can be damaged or flooded." },
        { q: "How do strong winds affect forests?", a: "They can knock down or snap trees", wrong: ["They make trees grow faster right away", "They turn trees into rocks", "They plant new trees instantly"], why: "Fallen trees also block roads and damage power lines." },
        { q: "Can severe weather ever help the environment?", a: "Yes, rain can end droughts, and floods can spread rich soil", wrong: ["No, never", "Only blizzards help", "Only tornadoes help"], why: "Floods leave behind fertile silt, and lightning helps add nitrogen to the soil." },
        { q: "Flood water can pollute rivers and drinking water by carrying...", a: "Sewage, trash, and chemicals", wrong: ["Clean spring water only", "Sunlight", "Nothing at all"], why: "After floods, people may need to boil water or use bottled water." },
        { q: "After a storm, many trees are down and people have no power. Which weather event most likely caused it?", a: "A severe thunderstorm with strong winds", wrong: ["A calm, sunny day", "Light fog", "A gentle drizzle"], why: "Strong winds are a common cause of fallen trees and power outages." },
        { q: "Which type of severe weather covers the largest area?", a: "Hurricane", wrong: ["Tornado", "A single lightning bolt", "Hailstone"], why: "Hurricanes can be hundreds of miles wide. Tornadoes are usually much less than a mile wide." },
        { q: "Which type of severe weather has the fastest winds, even though it's smaller?", a: "The strongest tornadoes", wrong: ["Blizzards", "Floods", "Fog"], why: "EF5 tornado winds can top 200 mph." }
      ]
    }
  ]
});
