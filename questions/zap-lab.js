/* Zap Lab (2027 NC Division A) question bank.
 * Covers electrical energy sources, conductors and insulators, circuit parts,
 * open/closed/series/parallel circuits, voltage, current, resistance, power
 * and their units, components (lamps, diodes, LEDs, resistors, switches),
 * schematic symbols, meter readings, troubleshooting, and safety.
 * Format notes are in geology-rocks.js.
 */
(window.QUIZ_EVENTS = window.QUIZ_EVENTS || []).push({
  id: "zap-lab",
  name: "Zap Lab",
  icon: "⚡",
  color: "#e0a126",
  blurb: "Circuits, conductors and insulators, volts, amps, and ohms, schematics, meters, and safety.",
  sections: [
    {
      topic: "Electrical energy",
      questions: [
        { q: "Electricity is a form of...", a: "Energy", wrong: ["Matter", "Weather", "Gravity"], why: "Electrical energy can be changed into light, heat, sound, and motion." },
        { q: "Which of these is a common source of electrical energy?", a: "A battery", wrong: ["A rubber band", "A wooden block", "A glass of water"], why: "Batteries and wall outlets are the most common sources you'll use." },
        { q: "What kind of energy is stored inside a battery?", a: "Chemical energy", wrong: ["Sound energy", "Light energy", "Nuclear energy"], why: "Chemicals inside a battery react to push electric current through a circuit." },
        { q: "The electricity in a wall outlet usually comes from...", a: "A power plant, carried through power lines", wrong: ["A battery inside the wall", "The Moon", "Static from the carpet"], why: "Power plants use coal, natural gas, nuclear energy, water, wind, or sunlight to make electricity." },
        { q: "Which device changes sunlight directly into electricity?", a: "Solar cell (solar panel)", wrong: ["Light bulb", "Resistor", "Switch"], why: "Solar cells are a renewable power source." },
        { q: "A light bulb changes electrical energy into...", a: "Light and heat", wrong: ["Sound only", "Chemical energy", "Motion only"], why: "Old-style bulbs make lots of heat. LEDs make more light and less heat." },
        { q: "A motor changes electrical energy into...", a: "Motion", wrong: ["Light", "Chemical energy", "Sound only"], why: "Motors spin fans, toy cars, and blenders." },
        { q: "A buzzer or speaker changes electrical energy into...", a: "Sound", wrong: ["Light", "Heat only", "Motion only"], why: "The speaker vibrates to make sound waves." },
        { q: "The shock you feel after sliding across a carpet and touching a doorknob is called...", a: "Static electricity", wrong: ["Current electricity", "Solar power", "Magnetism"], why: "Static electricity is charge that builds up in one place and then jumps." },
        { q: "What is the difference between static electricity and current electricity?", a: "Static builds up in one place; current flows through a circuit", wrong: ["They are exactly the same", "Current only happens in clouds", "Static only comes from batteries"], why: "Circuits use current electricity to power devices." },
        { q: "Name one everyday device that uses electrical energy to make heat.", type: "type", a: ["toaster", "oven", "heater", "stove", "hair dryer", "space heater", "iron", "microwave", "electric blanket", "kettle"], why: "Toasters, heaters, and hair dryers use wires with high resistance that get hot." },
        { q: "Which of these is a renewable source for making electricity?", a: "Wind", wrong: ["Coal", "Oil", "Natural gas"], why: "Wind, sunlight, and flowing water will not run out." }
      ]
    },
    {
      topic: "Conductors and insulators",
      questions: [
        { q: "A material that lets electricity flow through it easily is called a...", type: "type", a: ["conductor", "conductors", "electrical conductor"], why: "Most metals are good conductors." },
        { q: "A material that does NOT let electricity flow through it easily is called an...", type: "type", a: ["insulator", "insulators", "electrical insulator"], why: "Rubber, plastic, glass, and dry wood are insulators." },
        { q: "Which of these is a good conductor?", a: "Copper", wrong: ["Rubber", "Plastic", "Glass"], why: "Copper is used in most electrical wires." },
        { q: "Which of these is a good insulator?", a: "Rubber", wrong: ["Aluminum foil", "A steel paper clip", "A copper penny"], why: "Rubber is used to cover wires and make gloves for electricians." },
        { q: "Why are electrical wires made of copper covered in plastic?", a: "Copper conducts electricity; plastic insulates to keep you safe", wrong: ["Plastic conducts and copper insulates", "To make them heavier", "To make them glow"], why: "The conductor carries current, and the insulator keeps it from escaping." },
        { q: "You test a steel paper clip in a circuit, and the bulb lights. The paper clip is a...", a: "Conductor", wrong: ["Insulator", "Battery", "Resistor only"], why: "Current flowed through the metal paper clip." },
        { q: "You test a rubber band in a circuit, and the bulb stays dark. The rubber band is an...", a: "Insulator", wrong: ["Conductor", "Energy source", "LED"], why: "No current could flow through the rubber." },
        { q: "Which group contains ONLY conductors?", a: "Copper, aluminum, iron", wrong: ["Plastic, rubber, glass", "Wood, copper, paper", "Rubber, iron, cloth"], why: "Metals are conductors." },
        { q: "Which group contains ONLY insulators?", a: "Plastic, rubber, glass", wrong: ["Copper, gold, iron", "Aluminum, wood, glass", "Silver, plastic, paper"], why: "Plastic, rubber, and glass block electric current." },
        { q: "True or false: Pencil 'lead' (graphite) can conduct electricity.", a: "True", wrong: ["False"], why: "Graphite is one of the few nonmetals that conducts electricity." },
        { q: "True or false: Water with salt or minerals in it can conduct electricity.", a: "True", wrong: ["False"], why: "That's why you should never use electrical devices near water." },
        { q: "Why do electricians wear rubber gloves?", a: "Rubber is an insulator that protects them from shocks", wrong: ["Rubber conducts electricity to them", "To keep their hands warm", "For good luck"], why: "Insulators keep electricity away from your body." },
        { q: "Which part of a plug is the conductor?", a: "The metal prongs", wrong: ["The plastic case", "The rubber cord cover", "The label"], why: "The metal prongs carry current, and the plastic around them keeps your fingers safe." },
        { q: "Is dry wood a conductor or an insulator?", a: "Insulator", wrong: ["Conductor", "Both equally", "A battery"], why: "Dry wood blocks current. Wet wood can conduct a little, which is why wet things are dangerous." }
      ]
    },
    {
      topic: "Circuit parts",
      questions: [
        { q: "A complete path that electricity flows through is called a...", type: "type", a: ["circuit", "electric circuit", "electrical circuit"], why: "Electricity needs a complete loop to flow." },
        { q: "What are the four basic parts of a simple circuit?", a: "Power source, wires, switch, and load", wrong: ["Battery, water, rubber, and glass", "Magnet, compass, wire, and nail", "Motor, tire, gas, and oil"], why: "The load is the part that uses the energy, like a bulb or motor." },
        { q: "In a circuit, the 'load' is...", a: "The part that uses the electricity, like a bulb or motor", wrong: ["The battery", "The switch", "The plastic on a wire"], why: "The load changes electrical energy into light, sound, heat, or motion." },
        { q: "What does a switch do in a circuit?", a: "Opens or closes the circuit to turn it off or on", wrong: ["Makes more electricity", "Stores energy", "Changes the color of the light"], why: "A switch makes or breaks the path for current." },
        { q: "What do wires do in a circuit?", a: "Carry electric current from one part to another", wrong: ["Store electricity", "Make light", "Stop the current"], why: "Wires are conductors that connect the parts." },
        { q: "What do we call the two ends of a battery?", a: "Positive (+) and negative (−) terminals", wrong: ["Top and bottom switches", "North and south poles", "Input and output bulbs"], why: "A circuit connects from one terminal, through the load, back to the other." },
        { q: "Which part of a circuit provides the energy that pushes current?", a: "The battery or power source", wrong: ["The bulb", "The switch", "The wire's plastic coating"], why: "The power source provides the voltage." },
        { q: "The thin wire inside an old-style (incandescent) light bulb that glows is called the...", type: "type", a: ["filament"], why: "The filament gets so hot it glows. If it breaks, the bulb 'burns out.'" },
        { q: "What does a resistor do in a circuit?", a: "Slows down (limits) the flow of current", wrong: ["Stores lots of electricity", "Makes current flow faster", "Lets current flow only backward"], why: "Resistors protect parts like LEDs from getting too much current." },
        { q: "What is special about a diode?", a: "It lets current flow in only one direction", wrong: ["It makes electricity", "It stops all current", "It changes electricity into water"], why: "A diode works like a one-way door for electric current." },
        { q: "LED stands for Light-Emitting ___.", type: "type", a: ["diode"], why: "An LED is a diode that glows. Like all diodes, it only works when connected the right way." },
        { q: "An LED has two legs. How can you usually tell which leg is positive?", a: "The positive leg is longer", wrong: ["The positive leg is shorter", "Both legs are positive", "The positive leg is blue"], why: "The longer leg (the anode) connects toward the battery's positive side." },
        { q: "You connect an LED backward in a circuit. What happens?", a: "It doesn't light", wrong: ["It glows twice as bright", "It changes color", "It plays music"], why: "Diodes only let current flow one way." },
        { q: "Why are LEDs better than old-style bulbs for saving energy?", a: "They make more light and less wasted heat", wrong: ["They don't need electricity", "They are bigger", "They make more heat"], why: "LEDs use much less energy and last much longer." }
      ]
    },
    {
      topic: "Open and closed circuits",
      questions: [
        { q: "A circuit with a complete, unbroken path so current can flow is called...", a: "A closed circuit", wrong: ["An open circuit", "A broken circuit", "A static circuit"], why: "In a closed circuit, the bulb lights." },
        { q: "A circuit with a gap or break, so current cannot flow, is called...", a: "An open circuit", wrong: ["A closed circuit", "A parallel circuit", "A short circuit"], why: "In an open circuit, the bulb stays dark." },
        { q: "When you flip a light switch OFF, the circuit becomes...", a: "Open", wrong: ["Closed", "Shorter", "Stronger"], why: "Turning a switch off opens a gap in the path." },
        { q: "When you flip a light switch ON, the circuit becomes...", a: "Closed", wrong: ["Open", "Broken", "Empty"], why: "Turning the switch on closes the gap and completes the path." },
        { q: "A bulb is connected to only ONE end of a battery with one wire. Will it light?", a: "No, there's no complete loop", wrong: ["Yes, one wire is enough", "Yes, but only at night", "Only if the bulb is new"], why: "Current must flow out of the battery, through the bulb, and back to the battery." },
        { q: "A wire connects straight from the + end to the − end of a battery, with nothing else in between. This is called a...", a: "Short circuit", wrong: ["Series circuit", "Open circuit", "Parallel circuit"], why: "Short circuits make wires and batteries dangerously hot. Never do this!" },
        { q: "Why is a short circuit dangerous?", a: "Too much current flows, making wires and batteries hot", wrong: ["No current flows at all", "It makes the bulb too bright", "It's not dangerous"], why: "Short circuits can cause burns and fires." },
        { q: "In a closed circuit, current flows...", a: "In a complete loop from the power source, through the parts, and back", wrong: ["Only halfway and then stops", "Out of the wires into the air", "Only through the switch"], why: "The loop has to be complete for current to flow." },
        { q: "A string of lights goes dark because one wire came loose. The circuit is now...", a: "Open", wrong: ["Closed", "Parallel", "Short"], why: "The loose wire made a gap in the path." }
      ]
    },
    {
      topic: "Series and parallel circuits",
      questions: [
        { q: "A circuit where all the parts are connected in one single loop is called a...", a: "Series circuit", wrong: ["Parallel circuit", "Open circuit", "Static circuit"], why: "In a series circuit, current has only one path." },
        { q: "A circuit with two or more separate paths (branches) for current is called a...", a: "Parallel circuit", wrong: ["Series circuit", "Short circuit", "Open circuit"], why: "Each branch has its own path back to the power source." },
        { q: "In a SERIES circuit, if one bulb burns out, what happens to the others?", a: "They all go out", wrong: ["They stay lit", "They get brighter", "They change color"], why: "The single path is broken, so current stops everywhere." },
        { q: "In a PARALLEL circuit, if one bulb burns out, what happens to the others?", a: "They stay lit", wrong: ["They all go out", "They blink", "They melt"], why: "The other bulbs still have their own complete paths." },
        { q: "You add more bulbs to a SERIES circuit with the same battery. What happens to their brightness?", a: "Each bulb gets dimmer", wrong: ["Each bulb gets brighter", "Nothing changes", "They all turn off"], why: "More bulbs in one loop add more resistance, so less current flows." },
        { q: "You add another bulb in PARALLEL with the same battery. What happens to the brightness of the first bulb?", a: "It stays about the same", wrong: ["It goes out", "It gets much dimmer", "It explodes"], why: "Each parallel branch gets the full battery voltage. (The battery does run down faster.)" },
        { q: "How are the lights and outlets in your house wired?", a: "In parallel", wrong: ["In series", "They aren't wired", "With diodes only"], why: "That way you can turn off one light without turning off everything." },
        { q: "Why are homes wired in parallel instead of series?", a: "So each device can be turned on and off by itself", wrong: ["So all lights go out together", "To make bulbs dimmer", "Because it uses no wire"], why: "In series, turning off one device would turn off everything." },
        { q: "Old holiday light strings went completely dark when one bulb burned out. How were they wired?", a: "In series", wrong: ["In parallel", "They had no wires", "With solar panels"], why: "One broken bulb opened the single loop." },
        { q: "Two 1.5-volt batteries are connected end to end (in series). What is their total voltage?", a: "3 volts", wrong: ["1.5 volts", "0 volts", "15 volts"], why: "Batteries in series add their voltages: 1.5 + 1.5 = 3." },
        { q: "A flashlight uses four 1.5-volt batteries in series. What is the total voltage?", a: "6 volts", wrong: ["1.5 volts", "4 volts", "10 volts"], why: "4 × 1.5 = 6 volts." },
        { q: "Which kind of circuit has only ONE path for current?", type: "type", a: ["series", "series circuit"], why: "'Series' means one after another, like a line of kids holding hands." },
        { q: "In a series circuit with 3 bulbs, you unscrew the middle bulb. What happens?", a: "All the bulbs go out", wrong: ["Only the middle bulb goes out", "The other bulbs get brighter", "Nothing happens"], why: "Removing any part of a series loop opens the whole circuit." }
      ]
    },
    {
      topic: "Voltage, current, resistance",
      questions: [
        { q: "The 'push' that makes electric current flow is called...", type: "type", a: ["voltage"], why: "Voltage is like water pressure in a hose." },
        { q: "The amount of electric charge flowing through a circuit is called...", type: "type", a: ["current", "electric current"], why: "Current is like how much water flows through a hose." },
        { q: "How much something slows down or blocks the flow of current is called...", type: "type", a: ["resistance"], why: "Resistance is like squeezing a hose to make it narrower." },
        { q: "What unit is voltage measured in?", a: "Volts (V)", wrong: ["Amps (A)", "Ohms (Ω)", "Watts (W)"], why: "A AA battery is about 1.5 volts." },
        { q: "What unit is current measured in?", a: "Amperes, or amps (A)", wrong: ["Volts (V)", "Ohms (Ω)", "Meters (m)"], why: "The unit is named after André-Marie Ampère." },
        { q: "What unit is resistance measured in?", a: "Ohms (Ω)", wrong: ["Volts (V)", "Amps (A)", "Watts (W)"], why: "The symbol Ω is the Greek letter omega." },
        { q: "What unit is electrical power measured in?", a: "Watts (W)", wrong: ["Ohms (Ω)", "Amps (A)", "Grams (g)"], why: "A 60-watt bulb uses more power than a 10-watt LED." },
        { q: "The symbol Ω stands for...", a: "Ohms", wrong: ["Volts", "Amps", "Watts"], why: "Ohms measure resistance." },
        { q: "Match the letter to its unit: 'A' stands for...", a: "Amps (current)", wrong: ["Apples", "Air", "Atoms"], why: "V is volts, A is amps, Ω is ohms, and W is watts." },
        { q: "In the water hose model, voltage is like...", a: "The water pressure pushing the water", wrong: ["The hose's color", "The amount of hose", "A leak"], why: "More pressure pushes more water, just like more voltage pushes more current." },
        { q: "If you increase the voltage in a circuit and keep the resistance the same, what happens to the current?", a: "It increases", wrong: ["It decreases", "It stays the same", "It stops"], why: "A bigger push makes more current flow." },
        { q: "If you increase the resistance in a circuit and keep the voltage the same, what happens to the current?", a: "It decreases", wrong: ["It increases", "It stays the same", "It doubles"], why: "More resistance means less current can get through." },
        { q: "A bulb gets dimmer when you add a resistor to its circuit. Why?", a: "The resistor reduces the current", wrong: ["The resistor adds voltage", "The resistor is a battery", "The bulb is afraid"], why: "Less current means less light." },
        { q: "Which kind of wire has MORE resistance?", a: "A long, thin wire", wrong: ["A short, thick wire", "They are the same", "A wire with no metal"], why: "Long and thin paths make it harder for current to flow, like a skinny straw." },
        { q: "About how much voltage does a standard AA battery have?", a: "1.5 volts", wrong: ["9 volts", "120 volts", "0.1 volts"], why: "AA, AAA, C, and D batteries are all about 1.5 volts. They're different sizes to hold more energy." },
        { q: "What is the voltage of a standard wall outlet in the United States?", a: "About 120 volts", wrong: ["1.5 volts", "9 volts", "12 volts"], why: "That's much more than a battery, which is why outlets are dangerous." },
        { q: "A 6-volt battery is connected to a 2-ohm resistor. How much current flows? (Current = Voltage ÷ Resistance)", a: "3 amps", wrong: ["12 amps", "8 amps", "4 amps"], why: "6 ÷ 2 = 3 amps. This rule is called Ohm's Law." },
        { q: "A device uses 12 volts and 2 amps. How much power does it use? (Power = Voltage × Current)", a: "24 watts", wrong: ["6 watts", "14 watts", "10 watts"], why: "12 × 2 = 24 watts." },
        { q: "The rule that connects voltage, current, and resistance (V = I × R) is called...", a: "Ohm's Law", wrong: ["Newton's Law", "Murphy's Law", "The Law of Gravity"], why: "It's named after Georg Ohm." },
        { q: "A battery rated at 9 volts is connected to a bulb. What does '9 volts' tell you?", a: "How hard the battery pushes the current", wrong: ["How long the battery lasts", "How big the battery is", "How bright the bulb is"], why: "Voltage is the push. A 9-volt battery pushes harder than a 1.5-volt battery." }
      ]
    },
    {
      topic: "Schematics and symbols",
      questions: [
        { q: "A drawing of a circuit that uses simple symbols instead of pictures is called a...", a: "Schematic diagram", wrong: ["Weather map", "Food web", "Blueprint of a house"], why: "Engineers everywhere use the same symbols so they can read each other's diagrams." },
        { q: "In a schematic, what does a zigzag line stand for?", a: "A resistor", wrong: ["A battery", "A switch", "A wire"], why: "The zigzag reminds you that current has a harder time getting through." },
        { q: "In a schematic, a long line next to a short line stands for...", a: "A battery (cell)", wrong: ["A resistor", "A bulb", "A diode"], why: "The long line is the positive (+) side and the short line is the negative (−) side." },
        { q: "In a battery symbol, which line is the positive (+) side?", a: "The longer line", wrong: ["The shorter line", "Neither", "Both"], why: "Long line = positive, short line = negative." },
        { q: "In a schematic, a circle with an X inside stands for...", a: "A lamp (light bulb)", wrong: ["A battery", "A resistor", "A meter"], why: "The X represents the filament inside the bulb." },
        { q: "In a schematic, a line with a break and a small hinged line lifted up stands for...", a: "An open switch", wrong: ["A resistor", "A battery", "A lamp"], why: "When the switch closes, the lifted line connects the gap." },
        { q: "In a schematic, a triangle pointing at a straight line stands for...", a: "A diode", wrong: ["A resistor", "A battery", "A switch"], why: "The triangle points in the direction current is allowed to flow." },
        { q: "In a schematic, a diode symbol with two little arrows pointing away from it stands for...", a: "An LED", wrong: ["A resistor", "A switch", "A battery"], why: "The arrows show light coming out." },
        { q: "In a schematic, what do straight lines stand for?", a: "Wires", wrong: ["Resistors", "Bulbs", "Batteries"], why: "Lines show how the parts are connected." },
        { q: "In a schematic, a circle with a V inside stands for...", a: "A voltmeter", wrong: ["A volcano", "A valve", "A victory"], why: "A circle with an A inside is an ammeter." },
        { q: "In a schematic, a circle with an A inside stands for...", a: "An ammeter", wrong: ["An anemometer", "A battery", "An antenna"], why: "An ammeter measures current in amps." },
        { q: "In a schematic, a circle with an M inside stands for...", a: "A motor", wrong: ["A magnet", "A meter", "A microphone"], why: "Motors change electrical energy into motion." },
        { q: "A schematic shows a battery, an open switch, and a lamp in one loop. Will the lamp light?", a: "No, the switch is open", wrong: ["Yes", "Only if you shake it", "Yes, but dimly"], why: "An open switch breaks the circuit." },
        { q: "A schematic shows two lamps side by side on separate branches, each connecting to the battery. How are they wired?", a: "In parallel", wrong: ["In series", "Not connected", "Short-circuited"], why: "Separate branches mean parallel." }
      ]
    },
    {
      topic: "Meters and measuring",
      questions: [
        { q: "What tool measures voltage?", a: "Voltmeter", wrong: ["Ammeter", "Thermometer", "Barometer"], why: "A voltmeter measures the push across a part of the circuit." },
        { q: "What tool measures current?", a: "Ammeter", wrong: ["Voltmeter", "Ohmmeter", "Speedometer"], why: "An ammeter measures how many amps flow." },
        { q: "What tool measures resistance?", a: "Ohmmeter", wrong: ["Voltmeter", "Ammeter", "Odometer"], why: "An ohmmeter measures resistance in ohms." },
        { q: "One handy tool that can measure voltage, current, AND resistance is called a...", type: "type", a: ["multimeter", "multi-meter", "multi meter"], why: "You turn a dial to choose what to measure." },
        { q: "A voltmeter is connected across a new AA battery. About what should it read?", a: "1.5 V", wrong: ["120 V", "9 V", "0 V"], why: "A reading much lower than 1.5 V means the battery is running down." },
        { q: "A voltmeter reads 0 V across a battery. What does that probably mean?", a: "The battery is dead", wrong: ["The battery is brand new", "The battery is super strong", "It's a 9-volt battery"], why: "A dead battery has no push left." },
        { q: "An ammeter must be connected so that the current flows...", a: "Through it, in series", wrong: ["Around it", "Nowhere near it", "Only through the switch"], why: "To measure how much current passes, the current has to go through the meter." },
        { q: "A voltmeter is connected...", a: "Across a part, in parallel", wrong: ["Inside the battery", "Only to the switch", "Nowhere; it floats"], why: "It compares the push on one side of a part to the other side." },
        { q: "A meter reading shows '0.25 A.' What is being measured?", a: "Current", wrong: ["Voltage", "Resistance", "Power"], why: "A stands for amps, the unit of current." },
        { q: "A meter reading shows '220 Ω.' What is being measured?", a: "Resistance", wrong: ["Voltage", "Current", "Power"], why: "Ω stands for ohms, the unit of resistance." },
        { q: "A meter reading shows '9.2 V.' What is being measured?", a: "Voltage", wrong: ["Current", "Resistance", "Power"], why: "V stands for volts." },
        { q: "On a meter, what does the unit 'mA' stand for?", a: "Milliamps (thousandths of an amp)", wrong: ["Mega-amps", "Meter amps", "Mini-atoms"], why: "1,000 milliamps = 1 amp. Small circuits often use milliamps." },
        { q: "The electricity bill for your home is based on how much energy you use, measured in...", a: "Kilowatt-hours", wrong: ["Ohms", "Volts", "Kilograms"], why: "One kilowatt-hour is using 1,000 watts for one hour." }
      ]
    },
    {
      topic: "Troubleshooting",
      questions: [
        { q: "You build a circuit, but the bulb won't light. What should you check FIRST?", a: "That all the connections are tight and the loop is complete", wrong: ["The color of the wires", "The weather outside", "Whether the table is wood"], why: "A loose connection is the most common reason a circuit doesn't work." },
        { q: "Which of these could stop a bulb from lighting?", a: "A dead battery", wrong: ["A new battery", "Tight connections", "A closed switch"], why: "Also check for a burned-out bulb, loose wires, or an open switch." },
        { q: "A bulb doesn't light. You swap in a new bulb, and it lights. What was wrong?", a: "The old bulb was burned out", wrong: ["The battery was dead", "The wires were too long", "The switch was missing"], why: "Changing one thing at a time helps you find the problem." },
        { q: "An LED won't light, but the battery is good and all wires are connected. What should you try?", a: "Flip the LED around", wrong: ["Add water", "Paint the LED", "Remove the battery"], why: "LEDs only work when connected the right way." },
        { q: "A battery in your circuit feels hot. What is the most likely problem?", a: "A short circuit", wrong: ["An open circuit", "A burned-out bulb", "Nothing, batteries are always hot"], why: "Disconnect it right away. A short circuit lets too much current flow." },
        { q: "A circuit has a battery, bulb, and switch. The bulb lights only when you press the switch down. The switch is a...", a: "Push-button (momentary) switch", wrong: ["Battery", "Resistor", "Diode"], why: "Doorbells use push-button switches." },
        { q: "Scientists and engineers fix circuits by changing one thing at a time. Why?", a: "So they know which change fixed the problem", wrong: ["Because it's more fun", "To use up batteries", "To make the circuit longer"], why: "Changing one variable at a time is a good science habit." },
        { q: "A circuit diagram shows a gap in the wire between the battery and bulb. How would you fix it?", a: "Connect the gap with a wire to close the circuit", wrong: ["Add another gap", "Remove the bulb", "Add an insulator in the gap"], why: "The circuit needs a complete loop." },
        { q: "Two bulbs in series are very dim. How could you make them brighter?", a: "Wire them in parallel or use a higher-voltage battery", wrong: ["Add three more bulbs in series", "Add a big resistor", "Use a dead battery"], why: "Parallel wiring gives each bulb the full voltage." }
      ]
    },
    {
      topic: "Electrical safety",
      questions: [
        { q: "Which is SAFE to do with electricity?", a: "Unplug things by pulling the plug, not the cord", wrong: ["Stick a fork in an outlet", "Use a hair dryer in the bathtub", "Fly a kite near power lines"], why: "Pulling the cord can damage the wires inside." },
        { q: "Why should you never use electrical devices near water, like a bathtub or pool?", a: "Water can conduct electricity and give you a deadly shock", wrong: ["Water makes devices work better", "Devices make water too cold", "There's no reason"], why: "Keep electrical devices and water far apart, and dry your hands before touching switches." },
        { q: "Why should you never stick objects into an electrical outlet?", a: "You could get a dangerous shock", wrong: ["It will make the lights brighter", "It's how you charge a phone", "It's perfectly safe"], why: "Outlets have 120 volts, enough to seriously hurt you." },
        { q: "What should you do if you see a power line on the ground?", a: "Stay far away and tell an adult to call for help", wrong: ["Pick it up", "Poke it with a stick", "Step over it"], why: "Downed power lines can still carry deadly electricity." },
        { q: "Why shouldn't you fly a kite near power lines?", a: "The kite string could carry electricity to you", wrong: ["The kite will go too high", "Birds live on power lines", "It will make it rain"], why: "Fly kites in open fields far from power lines." },
        { q: "Special outlets in kitchens and bathrooms that shut off power quickly to prevent shocks are called...", a: "GFCI outlets", wrong: ["LED outlets", "USB outlets", "Solar outlets"], why: "GFCI stands for Ground Fault Circuit Interrupter. They have TEST and RESET buttons." },
        { q: "In a home, what cuts off the electricity if too much current flows, to prevent fires?", a: "A circuit breaker or fuse", wrong: ["A light bulb", "An LED", "A switch plate cover"], why: "Circuit breakers 'trip' and fuses 'blow' to open the circuit." },
        { q: "Why is it dangerous to plug too many things into one outlet?", a: "Too much current can overheat the wires and start a fire", wrong: ["It makes things run faster", "It saves electricity", "It's never dangerous"], why: "Overloaded outlets and extension cords are a common cause of house fires." },
        { q: "What should you do with an electrical cord that is frayed, with wires showing?", a: "Stop using it and tell an adult", wrong: ["Keep using it carefully", "Wrap it in wet paper", "Touch the wires to test them"], why: "Damaged insulation can cause shocks and fires." },
        { q: "Why is it safe to do experiments with small batteries but not with wall outlets?", a: "Small batteries have low voltage; outlets have high voltage", wrong: ["Batteries have no electricity", "Outlets are made of plastic", "There's no difference"], why: "Zap Lab uses only low-voltage batteries for safety." },
        { q: "True or false: It's OK to touch a light switch with wet hands.", a: "False", wrong: ["True"], why: "Water can let electricity reach your body. Always dry your hands first." },
        { q: "Why do birds sitting on a power line usually not get shocked?", a: "Current doesn't flow through them because they touch only one wire", wrong: ["Birds are made of rubber", "Power lines have no electricity", "Birds wear gloves"], why: "Current needs a path. If a bird touched two wires or a wire and a pole, it could get shocked." }
      ]
    }
  ]
});
