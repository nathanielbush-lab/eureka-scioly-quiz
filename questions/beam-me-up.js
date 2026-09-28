/* Beam Me Up (2027 NC Division A) question bank, for the written test.
 * Covers the nature of light and its interactions (reflection, refraction,
 * absorption, transmission, scattering) and the eye parts listed in the rules:
 * ciliary muscle, conjunctiva, cornea, iris, lens, optic nerve, photoreceptors
 * (rods and cones), pupil, retina, sclera, vitreous humor.
 * Format notes are in geology-rocks.js.
 */
(window.QUIZ_EVENTS = window.QUIZ_EVENTS || []).push({
  id: "beam-me-up",
  name: "Beam Me Up",
  icon: "🔦",
  color: "#8a5cd6",
  blurb: "Light and mirrors for the written test: reflection, refraction, color, and the parts of the eye.",
  sections: [
    {
      topic: "Light basics",
      questions: [
        { q: "Light is a form of...", a: "Energy", wrong: ["Matter", "Sound", "Gravity"], why: "Light energy can travel through empty space, even all the way from the Sun." },
        { q: "What is our most important natural source of light?", a: "The Sun", wrong: ["The Moon", "A mirror", "A lake"], why: "The Moon doesn't make light. It reflects sunlight." },
        { q: "Objects that make their own light, like the Sun, fire, and a flashlight, are called...", a: "Luminous", wrong: ["Reflective", "Opaque", "Transparent"], why: "Objects that don't make their own light can only be seen when light bounces off them." },
        { q: "Why can we see the Moon at night?", a: "It reflects light from the Sun", wrong: ["It makes its own light", "It's on fire", "It reflects light from city lights"], why: "The Moon is not luminous. It's lit up by the Sun." },
        { q: "How does light travel?", a: "In straight lines", wrong: ["In circles", "In zigzags", "Only around corners"], why: "That's why you can't see around a corner, and why shadows form." },
        { q: "How fast does light travel?", a: "About 186,000 miles every second", wrong: ["About 60 miles per hour", "About the speed of sound", "About 1 mile per day"], why: "Light is the fastest thing in the universe. It could circle Earth about 7 times in one second." },
        { q: "Why do we see lightning before we hear thunder?", a: "Light travels much faster than sound", wrong: ["Thunder happens later", "Our eyes are closer to the sky", "Sound travels faster than light"], why: "Light reaches you almost instantly. Sound is much slower." },
        { q: "A shadow forms when...", a: "An object blocks light", wrong: ["Light bends around an object", "An object makes its own light", "Light turns into sound"], why: "Light travels in straight lines, so it can't curve around to fill in the dark area." },
        { q: "When is your shadow the shortest on a sunny day?", a: "Around noon, when the Sun is highest", wrong: ["At sunrise", "At sunset", "At midnight"], why: "When the Sun is high overhead, light hits you from above, making a short shadow." },
        { q: "Can light travel through empty space, where there is no air?", a: "Yes", wrong: ["No", "Only at night", "Only if it's red light"], why: "Sunlight crosses about 93 million miles of space to reach Earth. Sound can't travel through space." },
        { q: "A beam of light that shows the path light travels, often drawn as a line with an arrow, is called a light...", type: "type", a: ["ray", "rays", "beam"], why: "Ray diagrams help predict where light will go." },
        { q: "White sunlight is actually made of...", a: "All the colors of the rainbow mixed together", wrong: ["Only white", "Only yellow", "Only blue and red"], why: "A prism can split white light into all its colors." },
        { q: "A triangle-shaped piece of glass that splits white light into a rainbow of colors is called a...", type: "type", a: ["prism"], why: "The prism bends each color a slightly different amount." },
        { q: "What are the colors of the rainbow, in order?", a: "Red, orange, yellow, green, blue, indigo, violet", wrong: ["Red, yellow, orange, blue, green, violet, indigo", "Blue, green, red, yellow, violet, orange, indigo", "Violet, red, green, blue, orange, yellow, indigo"], why: "Remember ROY G. BIV!" },
        { q: "About how long does it take sunlight to reach Earth?", a: "About 8 minutes", wrong: ["About 1 second", "About 8 days", "About 1 year"], why: "Even at 186,000 miles per second, the 93-million-mile trip takes about 8 minutes." },
        { q: "Which travels faster through air: light or sound?", type: "type", a: ["light"], why: "Light is almost a million times faster than sound." },
        { q: "Light that our eyes can see is called...", a: "Visible light", wrong: ["X-rays", "Radio waves", "Ultraviolet light"], why: "Visible light is just a small part of all the kinds of light. We can't see X-rays or radio waves." }
      ]
    },
    {
      topic: "Reflection",
      questions: [
        { q: "When light bounces off a surface, it's called...", type: "type", a: ["reflection", "reflect", "reflecting"], why: "Mirrors reflect almost all the light that hits them." },
        { q: "Which surface reflects light best, making a clear image?", a: "A smooth, shiny mirror", wrong: ["A rough brick wall", "A black T-shirt", "A piece of carpet"], why: "Smooth surfaces reflect light in one neat direction." },
        { q: "The Law of Reflection says the angle of incidence equals the...", a: "Angle of reflection", wrong: ["Angle of refraction", "Speed of light", "Color of the light"], why: "Light bounces off a mirror at the same angle it hits it." },
        { q: "A light beam hits a flat mirror at an angle of 30° from the normal line. At what angle does it reflect?", a: "30°", wrong: ["60°", "90°", "15°"], why: "The angle in equals the angle out." },
        { q: "A light beam hits a flat mirror at 45° from the normal. At what angle does it reflect?", a: "45°", wrong: ["90°", "30°", "0°"], why: "Angle of incidence = angle of reflection." },
        { q: "The imaginary line drawn straight out from a mirror at a right angle (90°), used to measure angles of light, is called the...", a: "Normal", wrong: ["Horizon", "Axis", "Equator"], why: "Both the angle of incidence and the angle of reflection are measured from the normal." },
        { q: "The light ray that comes in and hits the mirror is called the...", a: "Incident ray", wrong: ["Reflected ray", "Refracted ray", "Normal"], why: "The ray that bounces off is the reflected ray." },
        { q: "If you shine a flashlight straight at a mirror (along the normal, at 0°), where does the light go?", a: "Straight back toward the flashlight", wrong: ["Off to the side at 90°", "Into the mirror", "Nowhere"], why: "The angle in is 0°, so the angle out is 0°: straight back." },
        { q: "What tool is used to measure angles when aiming light with mirrors?", type: "type", a: ["protractor"], why: "Protractors measure angles in degrees." },
        { q: "When you look in a flat mirror, your image is...", a: "Reversed left to right", wrong: ["Upside down", "Twice as big", "In a different color"], why: "Raise your right hand, and your reflection seems to raise its left." },
        { q: "The word AMBULANCE is often written backward on the front of ambulances. Why?", a: "So drivers can read it correctly in their rearview mirrors", wrong: ["It's a spelling mistake", "It looks cool", "To confuse people"], why: "Mirrors reverse images left to right, so the backward word looks correct in a mirror." },
        { q: "A tube with two mirrors that lets you see over walls or out of a submarine is called a...", a: "Periscope", wrong: ["Telescope", "Microscope", "Kaleidoscope"], why: "Each mirror is tilted at 45° to bounce the light around corners." },
        { q: "Rough surfaces, like paper, scatter reflected light in many directions. This is called...", a: "Diffuse reflection", wrong: ["Refraction", "Absorption", "A mirror image"], why: "That's why you can't see your face in a piece of paper, even though it reflects light." },
        { q: "A mirror that curves inward, like the inside of a spoon, is called...", a: "Concave", wrong: ["Convex", "Flat", "Transparent"], why: "Concave mirrors can focus light, like in flashlights and makeup mirrors." },
        { q: "A mirror that bulges outward, like the back of a spoon, is called...", a: "Convex", wrong: ["Concave", "Flat", "Opaque"], why: "Convex mirrors show a wide view, so they're used as car side mirrors and store security mirrors." },
        { q: "In Beam Me Up, light bounces off four mirrors to reach a target. Each time it bounces, the light is being...", a: "Reflected", wrong: ["Refracted", "Absorbed completely", "Transmitted"], why: "Each mirror reflects the beam in a new direction." },
        { q: "You want to turn a light beam exactly 90° with one flat mirror. At what angle should the light hit the mirror, measured from the normal?", a: "45°", wrong: ["90°", "0°", "30°"], why: "45° in plus 45° out makes a 90° turn." },
        { q: "You tilt a mirror by 10°. How much does the reflected beam's direction change?", a: "20°", wrong: ["10°", "5°", "It doesn't change"], hint: "Both the angle in and the angle out change.", why: "Tilting the mirror changes both angles, so the beam swings twice as far. Small tilts make big moves across a room!" },
        { q: "A kaleidoscope makes colorful repeating patterns using...", a: "Mirrors that reflect light back and forth", wrong: ["Lenses that absorb light", "Batteries and bulbs", "Magnets"], why: "Two or three mirrors inside reflect the colored bits many times." },
        { q: "A light beam hits a mirror at 60° from the normal. What is the total angle between the incoming beam and the reflected beam?", a: "120°", wrong: ["60°", "30°", "180°"], why: "60° on one side of the normal plus 60° on the other side equals 120°." },
        { q: "Why do bicycles have reflectors?", a: "They bounce car headlights back so drivers can see the bike", wrong: ["They make their own light", "They make the bike faster", "They absorb light"], why: "Reflectors don't glow. They send light back toward its source." }
      ]
    },
    {
      topic: "Refraction",
      questions: [
        { q: "When light bends as it passes from one material into another, like from air into water, it's called...", type: "type", a: ["refraction", "refract", "refracting"], why: "Light changes speed when it enters a new material, and that makes it bend." },
        { q: "Why does a pencil in a glass of water look bent or broken?", a: "Light refracts as it passes between water and air", wrong: ["The water really bends the pencil", "The glass is a mirror", "The pencil absorbs the water"], why: "The pencil is straight. The light coming from it bends." },
        { q: "Why does light bend when it goes from air into water?", a: "It changes speed", wrong: ["It changes color", "It gets heavier", "It stops completely"], why: "Light travels slower in water and glass than in air." },
        { q: "What does a magnifying glass use to make things look bigger?", a: "A lens that refracts light", wrong: ["A mirror", "A prism that absorbs light", "A shadow"], why: "A magnifying glass is a convex lens that bends light toward a point." },
        { q: "A lens that is thicker in the middle than at the edges is called...", a: "Convex", wrong: ["Concave", "Flat", "Opaque"], why: "Convex lenses bring light rays together (converge)." },
        { q: "A lens that is thinner in the middle than at the edges is called...", a: "Concave", wrong: ["Convex", "Round", "Magnifying"], why: "Concave lenses spread light rays apart (diverge)." },
        { q: "Rainbows form when sunlight is refracted and reflected by...", a: "Raindrops", wrong: ["Clouds of dust", "Snowflakes on the ground", "Smoke"], why: "Each raindrop acts like a tiny prism." },
        { q: "To see a rainbow, where should the Sun be?", a: "Behind you", wrong: ["In front of you", "Directly overhead", "The Sun must be down"], why: "Sunlight goes past you, into the raindrops, and bounces back to your eyes." },
        { q: "A swimming pool often looks shallower than it really is. Why?", a: "Refraction bends light coming up from the bottom", wrong: ["The water is magnified", "Water absorbs the bottom", "Pools are painted to trick you"], why: "Always check the depth sign before jumping in!" },
        { q: "Which of these uses lenses to refract light?", a: "Eyeglasses", wrong: ["A flat mirror", "A brick", "A black shirt"], why: "Glasses bend light so it focuses correctly in your eye." },
        { q: "Telescopes and microscopes both use what to bend light and make things look bigger?", a: "Lenses", wrong: ["Batteries", "Magnets", "Speakers"], why: "Some telescopes also use curved mirrors." },
        { q: "A prism splits white light into colors because...", a: "Each color refracts (bends) a slightly different amount", wrong: ["The prism paints the light", "The prism absorbs white", "The prism makes new colors"], why: "Violet bends the most and red bends the least. This spreading out is called dispersion." }
      ]
    },
    {
      topic: "Absorption, transmission, scattering",
      questions: [
        { q: "When light passes through a material, it's called...", a: "Transmission", wrong: ["Reflection", "Absorption", "Refraction"], why: "Clear glass transmits almost all the light that hits it." },
        { q: "When a material takes in light and turns it into heat, it's called...", a: "Absorption", wrong: ["Reflection", "Transmission", "Scattering"], why: "Dark surfaces absorb more light and get warmer." },
        { q: "When light bounces off tiny particles and spreads out in many directions, it's called...", a: "Scattering", wrong: ["Refraction", "Absorption", "Reflection off a mirror"], why: "Scattering is why the sky is blue and why you can see a flashlight beam in fog." },
        { q: "A material that lets almost all light pass through, so you can see clearly through it, is called...", a: "Transparent", wrong: ["Translucent", "Opaque", "Luminous"], why: "Clear glass, clean water, and air are transparent." },
        { q: "A material that lets some light through, but you can't see clearly through it, is called...", a: "Translucent", wrong: ["Transparent", "Opaque", "Reflective"], why: "Wax paper, frosted glass, and tissue paper are translucent." },
        { q: "A material that blocks all light from passing through is called...", a: "Opaque", wrong: ["Transparent", "Translucent", "Luminous"], why: "Wood, metal, and cardboard are opaque. They make dark shadows." },
        { q: "Which material is translucent?", a: "Wax paper", wrong: ["Clear window glass", "A brick", "Aluminum foil"], why: "Some light gets through wax paper, but images are blurry." },
        { q: "Which material is opaque?", a: "A wooden door", wrong: ["Clear plastic wrap", "Air", "Frosted glass"], why: "No light passes through the wood." },
        { q: "Why does a black T-shirt feel hotter in the sun than a white one?", a: "Black absorbs most light; white reflects most light", wrong: ["Black reflects more light", "White absorbs more heat", "Black shirts are thicker"], why: "Absorbed light turns into heat." },
        { q: "Why does a red apple look red?", a: "It reflects red light and absorbs the other colors", wrong: ["It absorbs red light", "It makes its own red light", "It transmits all colors"], why: "We see the color that an object reflects to our eyes." },
        { q: "A leaf looks green because it...", a: "Reflects green light and absorbs most other colors", wrong: ["Absorbs green light", "Makes green light", "Is transparent"], why: "Plants absorb red and blue light for photosynthesis." },
        { q: "What color does an object look if it reflects ALL colors of light?", a: "White", wrong: ["Black", "Red", "Clear"], why: "White reflects all colors. Black absorbs all colors." },
        { q: "What color does an object look if it absorbs ALL colors of light?", a: "Black", wrong: ["White", "Blue", "Rainbow"], why: "No light bounces back to your eyes." },
        { q: "Why is the sky blue on a clear day?", a: "Air scatters blue sunlight more than other colors", wrong: ["It reflects the ocean", "Air is painted blue", "The Sun is blue"], why: "Blue light bounces around the sky the most, so blue comes at us from every direction." },
        { q: "Why are sunsets often red and orange?", a: "Sunlight passes through more air, which scatters away the blue", wrong: ["The Sun turns red at night", "Clouds are on fire", "The Moon reflects red light"], why: "At sunset, light travels a long path through the air. Mostly reds and oranges make it through." },
        { q: "Why can you see a flashlight beam in fog or dusty air, but not in clean air?", a: "The tiny drops or dust scatter light toward your eyes", wrong: ["Fog makes light", "Dust is luminous", "Clean air blocks light"], why: "Without particles to scatter it, the beam goes straight past you." },
        { q: "Clear glass mostly ___ light.", a: "Transmits", wrong: ["Absorbs", "Blocks", "Creates"], why: "Most light passes right through clear glass. A little is reflected." },
        { q: "When light hits a mirror, most of it is...", a: "Reflected", wrong: ["Absorbed", "Transmitted", "Refracted into colors"], why: "Mirrors have a shiny metal coating on the back that reflects light." },
        { q: "Sunglasses make things look darker because they...", a: "Absorb some of the light", wrong: ["Make their own dark light", "Reflect all light", "Speed up the light"], why: "Less light reaches your eyes, which protects them from glare." },
        { q: "Light hits a window. Some goes through, some bounces off, and some turns into heat. Which three things happened?", a: "Transmission, reflection, and absorption", wrong: ["Refraction, scattering, and diffusion only", "Nothing happened", "Only absorption"], why: "Most materials do more than one of these at the same time." }
      ]
    },
    {
      topic: "Parts of the eye",
      questions: [
        { q: "The clear, dome-shaped front of the eye that bends light as it enters is the...", type: "type", a: ["cornea"], why: "The cornea does most of the eye's light bending. It has no blood vessels." },
        { q: "Which part of the eye does the MOST bending (refracting) of light?", a: "Cornea", wrong: ["Iris", "Sclera", "Optic nerve"], why: "The lens fine-tunes the focus, but the cornea does most of the bending." },
        { q: "The colored part of your eye is called the...", type: "type", a: ["iris"], why: "The iris is a ring of muscle that changes the size of the pupil." },
        { q: "The black opening in the center of the eye that lets light in is the...", type: "type", a: ["pupil"], why: "The pupil looks black because light goes in and doesn't come back out." },
        { q: "What happens to your pupils when you walk into a dark room?", a: "They get bigger (dilate) to let in more light", wrong: ["They get smaller", "They close completely", "They change color"], why: "The iris opens the pupil wider in dim light." },
        { q: "What happens to your pupils in bright sunlight?", a: "They get smaller to let in less light", wrong: ["They get bigger", "They turn white", "They stay exactly the same"], why: "Smaller pupils protect the inside of your eye from too much light." },
        { q: "Which part of the eye controls how much light gets in by changing the pupil's size?", a: "Iris", wrong: ["Retina", "Sclera", "Vitreous humor"], why: "The iris works like the aperture of a camera." },
        { q: "The clear, flexible part behind the pupil that focuses light onto the back of the eye is the...", type: "type", a: ["lens"], why: "The lens changes shape to focus on near or far objects." },
        { q: "Which muscle changes the shape of the lens so you can focus on near or far objects?", a: "Ciliary muscle", wrong: ["Iris", "Optic nerve", "Sclera"], why: "The ciliary muscle tightens or relaxes to make the lens rounder or flatter." },
        { q: "When you look at something up close, the ciliary muscle makes the lens...", a: "Rounder (thicker)", wrong: ["Flatter", "Disappear", "Change color"], why: "A rounder lens bends light more, which is needed to focus on close objects." },
        { q: "The tough, white outer layer of the eye is called the...", type: "type", a: ["sclera"], why: "The sclera protects the eye and gives it shape. It's the 'white of the eye.'" },
        { q: "The thin, clear layer covering the white of the eye and the inside of the eyelids is the...", a: "Conjunctiva", wrong: ["Cornea", "Retina", "Lens"], why: "When the conjunctiva gets red and swollen, it's called conjunctivitis, or pinkeye." },
        { q: "Pinkeye (conjunctivitis) is swelling of which part of the eye?", a: "Conjunctiva", wrong: ["Retina", "Optic nerve", "Lens"], why: "Pinkeye makes the white of the eye look pink or red." },
        { q: "The clear, jelly-like material that fills the inside of the eyeball and keeps it round is the...", a: "Vitreous humor", wrong: ["Iris", "Optic nerve", "Conjunctiva"], why: "Light passes through the vitreous humor on its way to the retina." },
        { q: "The layer at the back of the eye where images form and light is sensed is the...", type: "type", a: ["retina"], why: "The retina is lined with millions of light-sensing cells called photoreceptors." },
        { q: "Light-sensing cells in the retina are called...", a: "Photoreceptors", wrong: ["Neurons in the iris", "Platelets", "Alveoli"], why: "'Photo' means light. Rods and cones are the two kinds of photoreceptors." },
        { q: "Which photoreceptors let you see colors?", type: "type", a: ["cones", "cone"], why: "Cones work best in bright light. Most people have three kinds, for red, green, and blue light." },
        { q: "Which photoreceptors help you see in dim light, but only in shades of gray?", type: "type", a: ["rods", "rod"], why: "Rods are very sensitive to light. That's why it's hard to see colors at night." },
        { q: "Which kind of photoreceptor does the retina have MORE of?", a: "Rods", wrong: ["Cones", "They have the same number", "Neither; the retina has none"], why: "The retina has about 120 million rods and about 6 million cones." },
        { q: "Why is it hard to tell colors apart in a dark room?", a: "Cones need bright light; rods only see shades of gray", wrong: ["Colors disappear at night", "The iris turns off", "The cornea closes"], why: "In dim light, your rods do most of the work." },
        { q: "Which part carries signals from the retina to the brain?", type: "type", a: ["optic nerve"], why: "The brain turns those signals into the pictures you see." },
        { q: "The spot on the retina where the optic nerve leaves the eye has no photoreceptors. It's called the...", a: "Blind spot", wrong: ["Iris", "Pupil", "Focus point"], why: "Your brain fills in the missing spot, so you usually don't notice it." },
        { q: "The image formed on your retina is actually...", a: "Upside down", wrong: ["Right side up and twice as big", "In black and white only", "Sideways"], why: "The lens flips the image. Your brain flips it back." },
        { q: "Put these in the order light travels through the eye.", a: "Cornea, pupil, lens, vitreous humor, retina", wrong: ["Retina, lens, pupil, cornea, vitreous humor", "Lens, cornea, retina, pupil, vitreous humor", "Pupil, retina, cornea, lens, vitreous humor"], why: "Then the optic nerve carries the signals to the brain." },
        { q: "Which organ actually 'sees' the image and makes sense of it?", a: "The brain", wrong: ["The cornea", "The iris", "The eyelid"], why: "The eye collects light, but the brain turns the signals into pictures." },
        { q: "Which part of the eye is most like the film or sensor in a camera?", a: "Retina", wrong: ["Iris", "Cornea", "Sclera"], why: "Both capture the image that comes through the lens." },
        { q: "Which part of the eye is like a camera's lens cover that changes size to let in more or less light?", a: "Iris and pupil", wrong: ["Retina", "Optic nerve", "Vitreous humor"], why: "The iris opens and closes the pupil like a camera's aperture." },
        { q: "People who can see close things clearly but far things look blurry are...", a: "Nearsighted", wrong: ["Farsighted", "Colorblind", "Night-blind"], why: "Nearsighted people wear glasses with concave lenses." },
        { q: "People who can see far things clearly but close things look blurry are...", a: "Farsighted", wrong: ["Nearsighted", "Colorblind", "Blind"], why: "Farsighted people wear glasses with convex lenses." },
        { q: "Some people have trouble telling certain colors apart, like red and green. This is called color blindness, and it involves which photoreceptors?", a: "Cones", wrong: ["Rods", "Iris muscles", "Ciliary muscles"], why: "One kind of cone may be missing or work differently." },
        { q: "Why should you never look directly at the Sun?", a: "Its strong light can permanently damage your retina", wrong: ["It makes your eyes change color", "It's perfectly safe", "It makes you sneeze forever"], why: "Even during an eclipse, you need special eclipse glasses." },
        { q: "Which eye part is NOT on the Beam Me Up list?", a: "Eyebrow", wrong: ["Sclera", "Conjunctiva", "Vitreous humor"], why: "Know all 11: ciliary muscle, conjunctiva, cornea, iris, lens, optic nerve, rods and cones, pupil, retina, sclera, vitreous humor." }
      ]
    }
  ]
});
