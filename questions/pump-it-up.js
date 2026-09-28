/* Pump It Up (2027 NC Division A) question bank.
 * Covers the circulatory and respiratory systems exactly as listed in the rules:
 * heart (atria, ventricles, aorta, four valves, blood pathway), blood, blood
 * vessels, respiratory parts, how the systems work together, and eight
 * diseases and conditions. Format notes are in geology-rocks.js.
 */
(window.QUIZ_EVENTS = window.QUIZ_EVENTS || []).push({
  id: "pump-it-up",
  name: "Pump It Up",
  icon: "🫀",
  color: "#d9546e",
  blurb: "The heart, blood, lungs, and airways, how they team up, and the diseases that affect them.",
  sections: [
    {
      topic: "The heart",
      questions: [
        { q: "What organ pumps blood all around your body?", type: "type", a: ["heart"], why: "Your heart is a strong muscle that beats about 100,000 times a day." },
        { q: "About how big is your heart?", a: "About the size of your fist", wrong: ["About the size of a pea", "About the size of your head", "About the size of a football"], why: "Your heart grows as you grow and stays about the size of your fist." },
        { q: "Where is your heart located?", a: "In your chest, between your lungs, a little to the left", wrong: ["In your stomach", "In your neck", "On the far right side of your belly"], why: "Your ribs protect your heart and lungs." },
        { q: "How many chambers does the human heart have?", a: "4", wrong: ["2", "3", "6"], why: "Two atria on top and two ventricles on the bottom." },
        { q: "The two top chambers of the heart, which receive blood coming in, are called...", a: "Atria", wrong: ["Ventricles", "Valves", "Alveoli"], why: "One is called an atrium. Two are called atria." },
        { q: "The two bottom chambers of the heart, which pump blood out, are called...", type: "type", a: ["ventricles", "ventricle"], why: "Ventricles have thick, strong muscle walls." },
        { q: "Which chamber of the heart has the thickest, strongest wall?", a: "Left ventricle", wrong: ["Right atrium", "Left atrium", "Right ventricle"], why: "The left ventricle pumps blood out to the whole body, so it has to be the strongest." },
        { q: "What is the largest artery in the body, carrying oxygen-rich blood out of the heart to the body?", type: "type", a: ["aorta"], why: "The aorta is about as wide as a garden hose." },
        { q: "The wall of muscle that separates the left and right sides of the heart is called the...", a: "Septum", wrong: ["Aorta", "Diaphragm", "Trachea"], why: "The septum keeps oxygen-rich and oxygen-poor blood from mixing." },
        { q: "Flaps inside the heart that let blood flow in only one direction are called...", type: "type", a: ["valves", "valve"], why: "The heart has four valves: tricuspid, pulmonary, mitral, and aortic." },
        { q: "How many valves does the heart have?", a: "4", wrong: ["2", "6", "1"], why: "Tricuspid, pulmonary, mitral, and aortic." },
        { q: "The 'lub-dub' sound of a heartbeat is made by...", a: "Heart valves snapping shut", wrong: ["Blood hitting the ribs", "The lungs filling with air", "The stomach growling"], why: "'Lub' is the tricuspid and mitral valves closing. 'Dub' is the aortic and pulmonary valves closing." },
        { q: "Which valve is between the right atrium and the right ventricle?", a: "Tricuspid valve", wrong: ["Mitral valve", "Aortic valve", "Pulmonary valve"], hint: "Think: 'Try before you buy.' Tricuspid on the right, bicuspid (mitral) on the left.", why: "The tricuspid valve has three flaps." },
        { q: "Which valve is between the left atrium and the left ventricle?", a: "Mitral valve", wrong: ["Tricuspid valve", "Pulmonary valve", "Aortic valve"], why: "The mitral valve has two flaps, so it's also called the bicuspid valve." },
        { q: "Which valve lets blood leave the right ventricle toward the lungs?", a: "Pulmonary valve", wrong: ["Aortic valve", "Mitral valve", "Tricuspid valve"], why: "'Pulmonary' means having to do with the lungs." },
        { q: "Which valve lets blood leave the left ventricle into the aorta?", a: "Aortic valve", wrong: ["Pulmonary valve", "Tricuspid valve", "Mitral valve"], why: "It's named after the aorta, the artery it opens into." },
        { q: "Which side of the heart pumps oxygen-poor blood to the lungs?", a: "The right side", wrong: ["The left side", "Both sides equally", "Neither side"], why: "The right side sends blood to the lungs to pick up oxygen." },
        { q: "Which side of the heart pumps oxygen-rich blood to the body?", a: "The left side", wrong: ["The right side", "The top only", "Neither side"], why: "The left side gets fresh blood from the lungs and pumps it everywhere else." },
        { q: "The heart is made of a special kind of muscle that never gets tired. It's called...", a: "Cardiac muscle", wrong: ["Skeletal muscle", "Bone", "Cartilage"], why: "'Cardiac' means having to do with the heart." },
        { q: "The blood vessels that feed the heart muscle itself with oxygen are called the...", a: "Coronary arteries", wrong: ["Pulmonary veins", "Bronchi", "Capillaries of the lungs"], why: "When a coronary artery gets blocked, it can cause a heart attack." },
        { q: "When you count heartbeats at your wrist or neck, you're taking your...", type: "type", a: ["pulse", "heart rate"], why: "Each pulse is a surge of blood pushed out by one heartbeat." },
        { q: "About how fast does a resting kid's heart usually beat?", a: "About 70 to 110 times a minute", wrong: ["About 5 times a minute", "About 400 times a minute", "Once an hour"], why: "Exercise makes it beat faster to deliver more oxygen." }
      ]
    },
    {
      topic: "Pathway of blood",
      questions: [
        { q: "Oxygen-poor blood from the body first enters which chamber of the heart?", a: "Right atrium", wrong: ["Left atrium", "Left ventricle", "Right ventricle"], why: "Big veins called the venae cavae (vena cava) bring it into the right atrium." },
        { q: "The large veins that bring oxygen-poor blood from the body back to the heart are called the...", a: "Venae cavae (vena cava)", wrong: ["Aorta", "Pulmonary arteries", "Coronary arteries"], why: "The superior vena cava drains the upper body and the inferior vena cava drains the lower body." },
        { q: "After the right atrium, blood passes through the tricuspid valve into the...", a: "Right ventricle", wrong: ["Left atrium", "Aorta", "Lungs"], why: "Right atrium, tricuspid valve, right ventricle." },
        { q: "From the right ventricle, blood goes through the pulmonary valve and the pulmonary artery to the...", a: "Lungs", wrong: ["Brain", "Stomach", "Feet"], why: "In the lungs, blood drops off carbon dioxide and picks up oxygen." },
        { q: "Oxygen-rich blood returns from the lungs to the heart through the...", a: "Pulmonary veins", wrong: ["Pulmonary arteries", "Aorta", "Vena cava"], why: "The pulmonary veins bring fresh blood into the left atrium." },
        { q: "Oxygen-rich blood from the lungs enters which chamber?", a: "Left atrium", wrong: ["Right atrium", "Right ventricle", "Left ventricle"], why: "Then it goes through the mitral valve into the left ventricle." },
        { q: "What is the last chamber blood passes through before it goes out to the body?", a: "Left ventricle", wrong: ["Right atrium", "Left atrium", "Right ventricle"], why: "The left ventricle squeezes blood through the aortic valve into the aorta." },
        { q: "Put the path of blood in order, starting from the body.", a: "Right atrium, right ventricle, lungs, left atrium, left ventricle, aorta", wrong: ["Left atrium, left ventricle, lungs, right atrium, right ventricle, aorta", "Aorta, lungs, right atrium, left ventricle, right ventricle, left atrium", "Right ventricle, right atrium, left ventricle, left atrium, lungs, aorta"], why: "Body, right side, lungs, left side, body." },
        { q: "Put the heart valves in the order blood passes through them.", a: "Tricuspid, pulmonary, mitral, aortic", wrong: ["Mitral, aortic, tricuspid, pulmonary", "Aortic, mitral, pulmonary, tricuspid", "Pulmonary, tricuspid, aortic, mitral"], hint: "Right side first, then left.", why: "Tricuspid and pulmonary on the right side, then mitral and aortic on the left." },
        { q: "The pulmonary artery is unusual because it's the only artery that carries...", a: "Oxygen-poor blood", wrong: ["No blood", "Air", "Food"], why: "It carries blood away from the heart (so it's an artery), but that blood is on its way to the lungs to get oxygen." },
        { q: "The pulmonary veins are unusual because they're the only veins that carry...", a: "Oxygen-rich blood", wrong: ["Oxygen-poor blood", "Air", "Food"], why: "They bring fresh blood from the lungs back to the heart." },
        { q: "In diagrams, oxygen-rich blood is usually colored ___ and oxygen-poor blood is usually colored blue.", type: "type", a: ["red"], why: "Real blood is always red. It's bright red with oxygen and darker red without it. Blue is just used in diagrams." },
        { q: "True or false: Blood in your veins is actually blue.", a: "False", wrong: ["True"], why: "Blood is always red. Veins can look bluish through your skin because of how light passes through skin." },
        { q: "Blood travels in two loops: one between the heart and lungs, and one between the heart and...", a: "The rest of the body", wrong: ["The stomach only", "The Moon", "The bones only"], why: "That's why it's called double circulation." }
      ]
    },
    {
      topic: "Blood",
      questions: [
        { q: "Which blood cells carry oxygen?", a: "Red blood cells", wrong: ["White blood cells", "Platelets", "Plasma"], why: "Red blood cells are packed with hemoglobin, which grabs onto oxygen." },
        { q: "The protein in red blood cells that carries oxygen and contains iron is called...", type: "type", a: ["hemoglobin", "haemoglobin"], why: "Iron in hemoglobin is why eating iron-rich foods is important." },
        { q: "What shape is a healthy red blood cell?", a: "A round disk that's thinner in the middle", wrong: ["A crescent or sickle", "A long string", "A star"], why: "The dimpled disk shape gives it lots of surface area and lets it bend through tiny capillaries." },
        { q: "Which blood cells fight germs and infections?", a: "White blood cells", wrong: ["Red blood cells", "Platelets", "Plasma"], why: "White blood cells are part of your immune system." },
        { q: "Which tiny cell pieces help your blood clot and stop bleeding?", type: "type", a: ["platelets", "platelet"], why: "Platelets clump together to plug a cut and help form a scab." },
        { q: "The yellowish liquid part of blood is called...", type: "type", a: ["plasma"], why: "Plasma is mostly water and carries nutrients, wastes, and blood cells." },
        { q: "About how much of your blood is plasma?", a: "About half (a little more than half)", wrong: ["Almost none", "All of it", "About one-tenth"], why: "Plasma is about 55% of blood. Most of the rest is red blood cells." },
        { q: "Where are new blood cells made?", a: "In the bone marrow", wrong: ["In the heart", "In the lungs", "In the stomach"], why: "Soft red marrow inside bones makes red cells, white cells, and platelets." },
        { q: "Which part of the blood carries nutrients from food and wastes around the body?", a: "Plasma", wrong: ["Platelets", "White blood cells", "Bronchi"], why: "Plasma carries dissolved sugar, salts, and wastes like carbon dioxide." },
        { q: "You scrape your knee. Which part of your blood rushes in first to form a clot?", a: "Platelets", wrong: ["Red blood cells", "Plasma", "Alveoli"], why: "Platelets stick together and to the wound to stop the bleeding." },
        { q: "You catch a cold. Which blood cells go to work fighting the germs?", a: "White blood cells", wrong: ["Red blood cells", "Platelets", "Plasma"], why: "White blood cells find and destroy invaders." },
        { q: "Which of these is NOT a part of blood?", a: "Alveoli", wrong: ["Plasma", "Platelets", "Red blood cells"], why: "Alveoli are air sacs in the lungs." }
      ]
    },
    {
      topic: "Blood vessels",
      questions: [
        { q: "Blood vessels that carry blood AWAY from the heart are called...", type: "type", a: ["arteries", "artery"], hint: "Arteries go Away.", why: "Memory trick: Arteries go Away from the heart." },
        { q: "Blood vessels that carry blood BACK to the heart are called...", type: "type", a: ["veins", "vein"], why: "Veins bring blood back toward the heart." },
        { q: "The tiniest blood vessels, where oxygen and carbon dioxide move in and out of the blood, are called...", type: "type", a: ["capillaries", "capillary"], why: "Capillary walls are only one cell thick, so gases and nutrients pass through easily." },
        { q: "Which blood vessels have thick, stretchy walls to handle high pressure from the heart?", a: "Arteries", wrong: ["Veins", "Capillaries", "Bronchioles"], why: "Each heartbeat pushes a surge of blood into the arteries." },
        { q: "Which blood vessels have little valves inside to keep blood from flowing backward?", a: "Veins", wrong: ["Arteries", "Capillaries", "Alveoli"], why: "Blood in veins moves slowly, especially up from your legs, so valves keep it moving the right way." },
        { q: "Why are capillary walls so thin?", a: "So oxygen, nutrients, and wastes can pass through easily", wrong: ["So blood can leak out", "To make them faster", "Because they are old"], why: "This is where the real exchange between blood and body cells happens." },
        { q: "Capillaries connect the smallest arteries to the smallest...", a: "Veins", wrong: ["Bones", "Alveoli", "Valves"], why: "Arteries branch into capillaries, and capillaries join together into veins." },
        { q: "Red blood cells travel through capillaries...", a: "In single file, one at a time", wrong: ["In big groups of hundreds side by side", "Backward", "They never go through capillaries"], why: "Capillaries are so narrow that red blood cells must squeeze through one by one." },
        { q: "When you feel your pulse at your wrist, what kind of blood vessel are you feeling?", a: "An artery", wrong: ["A vein", "A capillary", "A bronchiole"], why: "Arteries throb with each heartbeat." },
        { q: "Put these in the order blood flows through them after leaving the heart.", a: "Arteries, capillaries, veins", wrong: ["Veins, capillaries, arteries", "Capillaries, veins, arteries", "Arteries, veins, capillaries"], why: "Blood leaves in arteries, exchanges in capillaries, and returns in veins." }
      ]
    },
    {
      topic: "Respiratory system",
      questions: [
        { q: "Which organs let you breathe in oxygen and breathe out carbon dioxide?", type: "type", a: ["lungs", "lung"], why: "Your two lungs fill most of your chest." },
        { q: "Which gas does your body need to breathe IN?", a: "Oxygen", wrong: ["Carbon dioxide", "Helium", "Hydrogen"], why: "Your cells use oxygen to get energy from food." },
        { q: "Which waste gas do you breathe OUT?", a: "Carbon dioxide", wrong: ["Oxygen", "Helium", "Hydrogen"], why: "Carbon dioxide is made when your cells use food for energy." },
        { q: "What does your nose (nasal cavity) do to air before it reaches your lungs?", a: "Warms it, moistens it, and filters out dust", wrong: ["Freezes it", "Removes all the oxygen", "Turns it into water"], why: "Nose hairs and sticky mucus trap dust and germs." },
        { q: "The tube in the back of your throat that carries both food and air is the...", a: "Pharynx", wrong: ["Larynx", "Trachea", "Bronchus"], why: "The pharynx is your throat. Food goes on to the esophagus, and air goes to the larynx." },
        { q: "Your voice box, which holds your vocal cords, is called the...", type: "type", a: ["larynx"], why: "Air rushing past your vocal cords makes them vibrate, and that makes your voice." },
        { q: "The tube that carries air from your throat down to your lungs is the...", type: "type", a: ["trachea", "windpipe"], why: "The trachea is also called the windpipe." },
        { q: "What keeps the trachea from collapsing?", a: "C-shaped rings of cartilage", wrong: ["Bones", "Muscles only", "Air pressure alone"], why: "You can feel the ridges of these rings on the front of your neck." },
        { q: "The trachea splits into two tubes, one going into each lung. They're called...", type: "type", a: ["bronchi", "bronchus"], why: "One tube is a bronchus. Two are bronchi." },
        { q: "The bronchi branch into smaller and smaller tubes inside the lungs called...", a: "Bronchioles", wrong: ["Capillaries", "Alveoli", "Ventricles"], why: "The branching tubes look like an upside-down tree." },
        { q: "The tiny air sacs at the ends of the bronchioles, where oxygen enters the blood, are called...", type: "type", a: ["alveoli", "alveolus"], why: "Your lungs have hundreds of millions of alveoli, each wrapped in capillaries." },
        { q: "Why do the lungs have so many tiny alveoli instead of a few big sacs?", a: "To give lots of surface area for gas exchange", wrong: ["To make the lungs heavier", "To store food", "To make sound"], why: "Spread out flat, your alveoli would cover about half a tennis court." },
        { q: "How many lobes does the right lung have?", a: "3", wrong: ["2", "1", "5"], why: "The right lung has three lobes. The left has two." },
        { q: "Why does the left lung have only 2 lobes and is a little smaller?", a: "To make room for the heart", wrong: ["Because it's older", "Because it holds the stomach", "It isn't smaller"], why: "The heart tilts to the left, so the left lung has a notch for it." },
        { q: "The big dome-shaped muscle under your lungs that helps you breathe is the...", type: "type", a: ["diaphragm"], why: "When the diaphragm tightens and moves down, air rushes into your lungs." },
        { q: "When you breathe IN, what does your diaphragm do?", a: "It tightens and moves down, making room for air", wrong: ["It relaxes and moves up", "It stops moving", "It squeezes the heart"], why: "The chest gets bigger, and air flows in to fill the space." },
        { q: "When you breathe OUT, what does your diaphragm do?", a: "It relaxes and moves back up", wrong: ["It tightens and moves down", "It disappears", "It fills with air"], why: "The chest gets smaller and pushes air out." },
        { q: "Hiccups happen when which muscle suddenly twitches?", a: "Diaphragm", wrong: ["Heart", "Tongue", "Biceps"], why: "The sudden twitch pulls in air, and your vocal cords snap shut with a 'hic!'" },
        { q: "Put these in the order air travels when you breathe in.", a: "Nose, pharynx, larynx, trachea, bronchi, bronchioles, alveoli", wrong: ["Nose, trachea, larynx, pharynx, alveoli, bronchi, bronchioles", "Mouth, alveoli, bronchioles, bronchi, trachea, larynx, pharynx", "Nose, bronchi, pharynx, trachea, alveoli, larynx, bronchioles"], why: "Air goes from big tubes to smaller tubes to tiny air sacs." },
        { q: "You can breathe in through your nose or your...", type: "type", a: ["mouth"], why: "Breathing through your nose is better because it warms, moistens, and filters the air." },
        { q: "Tiny hairs that line the trachea and sweep mucus and dirt up and out of the airways are called...", a: "Cilia", wrong: ["Alveoli", "Villi", "Platelets"], why: "Cilia wave like a crowd doing 'the wave' to move mucus up so you can cough it out." },
        { q: "The flap that covers your windpipe when you swallow, so food doesn't go down the wrong way, is the...", a: "Epiglottis", wrong: ["Diaphragm", "Larynx", "Septum"], why: "If food 'goes down the wrong pipe,' the epiglottis didn't close in time, and you cough." }
      ]
    },
    {
      topic: "Working together",
      questions: [
        { q: "Where does oxygen move from the lungs into the blood?", a: "Across the walls of the alveoli into the capillaries", wrong: ["In the stomach", "Through the trachea walls", "In the heart's valves"], why: "Alveoli and capillaries both have walls just one cell thick." },
        { q: "In the lungs, carbon dioxide moves from the blood into the alveoli. Then what happens to it?", a: "You breathe it out", wrong: ["It goes to the brain", "It turns into oxygen", "It's stored in the heart"], why: "Exhaling gets rid of carbon dioxide." },
        { q: "Which blood cells pick up oxygen in the lungs and carry it to the body?", a: "Red blood cells", wrong: ["White blood cells", "Platelets", "Alveoli"], why: "Hemoglobin in red blood cells grabs the oxygen." },
        { q: "Why do your body's cells need oxygen?", a: "To release energy from food", wrong: ["To make bones", "To make blood blue", "To grow hair"], why: "Cells use oxygen to break down sugar for energy, making carbon dioxide as waste." },
        { q: "When you exercise, what happens to your breathing and heart rate?", a: "Both speed up", wrong: ["Both slow down", "Breathing stops", "Nothing changes"], why: "Hard-working muscles need more oxygen and make more carbon dioxide." },
        { q: "Why does your heart beat faster when you run?", a: "To deliver more oxygen to your muscles", wrong: ["Because it's scared", "To cool your body", "To make more carbon dioxide on purpose"], why: "The respiratory and circulatory systems speed up together." },
        { q: "The circulatory system and respiratory system work together mainly to...", a: "Bring oxygen to cells and remove carbon dioxide", wrong: ["Digest food", "Move bones", "Make hormones"], why: "Lungs trade the gases, and blood delivers them." },
        { q: "If a person's lungs are not working well, how might their heart be affected?", a: "It has to work harder to deliver oxygen", wrong: ["It would stop needing oxygen", "It would get smaller right away", "It would not be affected at all"], why: "The two systems depend on each other." },
        { q: "The exchange of oxygen and carbon dioxide between the air in the lungs and the blood is called...", a: "Gas exchange", wrong: ["Digestion", "Circulation of food", "Photosynthesis"], why: "It happens in the alveoli." },
        { q: "Gases move from where there's a lot of them to where there's less. This is called...", a: "Diffusion", wrong: ["Digestion", "Evaporation", "Pumping"], why: "Oxygen diffuses from air-filled alveoli into oxygen-poor blood." },
        { q: "Which has MORE oxygen: blood going to the lungs, or blood coming back from the lungs?", a: "Blood coming back from the lungs", wrong: ["Blood going to the lungs", "They have the same", "Neither has any oxygen"], why: "Blood picks up oxygen in the lungs." },
        { q: "Which of these habits helps keep both your heart and lungs healthy?", a: "Regular exercise and not smoking", wrong: ["Smoking", "Sitting all day", "Breathing smoky air"], why: "Exercise makes the heart and lungs stronger, and smoke damages both." }
      ]
    },
    {
      topic: "Diseases and conditions",
      questions: [
        { q: "In sickle cell anemia, red blood cells are shaped like...", a: "A crescent moon or farm sickle", wrong: ["A perfect round disk", "A star", "A square"], why: "The stiff, curved cells can get stuck in small blood vessels." },
        { q: "What causes sickle cell anemia?", a: "It is inherited through genes from both parents", wrong: ["Eating too much sugar", "Smoking", "Catching a cold"], why: "A person gets sickle cell anemia when they inherit the sickle cell gene from both parents." },
        { q: "Why do people with sickle cell anemia often feel tired and have painful episodes?", a: "The sickle cells carry less oxygen and can block blood flow", wrong: ["Their lungs are full of water", "Their heart has no valves", "They have too many platelets"], why: "Blocked blood flow causes pain, and fewer healthy red blood cells means less oxygen." },
        { q: "Which body system is mainly affected by sickle cell anemia?", a: "Circulatory system (the blood)", wrong: ["Respiratory system only", "Digestive system", "Skeletal system only"], why: "It's a disease of the red blood cells." },
        { q: "True or false: You can catch sickle cell anemia from someone who has it, like a cold.", a: "False", wrong: ["True"], why: "It's genetic. You can only be born with it." },
        { q: "Which is a treatment for sickle cell anemia?", a: "Medicines, blood transfusions, or a bone marrow transplant", wrong: ["Eating more candy", "Holding your breath", "Wearing glasses"], why: "Drinking lots of water and new gene therapies can also help." },
        { q: "In asthma, what happens to the airways?", a: "They swell, tighten, and fill with mucus", wrong: ["They get wider", "They turn into bone", "They disappear"], why: "Narrow airways make it hard to breathe, causing wheezing and coughing." },
        { q: "Things that can set off an asthma attack, like pollen, dust, smoke, or cold air, are called...", type: "type", a: ["triggers", "trigger"], why: "Avoiding triggers is one of the best ways to prevent asthma attacks." },
        { q: "A whistling sound when a person with asthma breathes is called...", a: "Wheezing", wrong: ["Hiccuping", "Snoring", "Burping"], why: "Wheezing happens when air squeezes through narrowed airways." },
        { q: "What does a 'rescue inhaler' do for someone having an asthma attack?", a: "Relaxes the muscles around the airways so they open up", wrong: ["Puts them to sleep", "Stops their heart", "Adds more mucus"], why: "Many people with asthma also use a daily controller medicine to reduce swelling." },
        { q: "Which body system is mainly affected by asthma?", a: "Respiratory system", wrong: ["Circulatory system only", "Skeletal system", "Digestive system"], why: "Asthma affects the bronchi and bronchioles." },
        { q: "Cystic fibrosis causes the body to make mucus that is...", a: "Thick and sticky", wrong: ["Thin and watery", "Bright blue", "Completely missing"], why: "The sticky mucus clogs the lungs and can trap germs, causing infections." },
        { q: "What causes cystic fibrosis?", a: "It is inherited through genes from both parents", wrong: ["Smoking", "Too much exercise", "Breathing cold air"], why: "Like sickle cell anemia, a child gets it by inheriting a gene change from both parents." },
        { q: "Which is a treatment that helps people with cystic fibrosis clear mucus from their lungs?", a: "Chest therapy, like a vibrating vest, and inhaled medicines", wrong: ["Eating ice", "Skipping meals", "Staying in bed all day"], why: "Newer medicines can also help the body make less sticky mucus." },
        { q: "Besides the lungs, cystic fibrosis also often affects which system?", a: "Digestive system", wrong: ["Skeletal system", "The hair", "The eyes only"], why: "Sticky mucus can block the pancreas, making it hard to digest food." },
        { q: "COPD stands for Chronic Obstructive ___ Disease.", type: "type", a: ["pulmonary"], why: "Pulmonary means having to do with the lungs." },
        { q: "What is the main cause of COPD?", a: "Smoking", wrong: ["Eating vegetables", "Too much sleep", "Drinking water"], why: "Long-term exposure to smoke and polluted air damages the airways and alveoli." },
        { q: "In COPD, damaged airways and alveoli make it especially hard to...", a: "Breathe air out", wrong: ["See colors", "Hear sounds", "Grow taller"], why: "Air gets trapped in the lungs, so people feel short of breath." },
        { q: "What is the best way to prevent COPD and lung cancer?", a: "Never smoke and avoid secondhand smoke", wrong: ["Eat more sugar", "Exercise less", "Stay indoors forever"], why: "Most COPD and lung cancer cases are caused by smoking." },
        { q: "Lung cancer happens when...", a: "Cells in the lungs grow out of control and form tumors", wrong: ["The heart stops", "The lungs fill with sand", "The ribs break"], why: "Tumors can crowd out healthy lung tissue." },
        { q: "Besides smoking, which invisible gas that can leak into homes from the ground is a cause of lung cancer?", a: "Radon", wrong: ["Oxygen", "Helium", "Water vapor"], why: "Radon comes from rocks and soil. Homes can be tested for it." },
        { q: "Which is a treatment for lung cancer?", a: "Surgery, chemotherapy, or radiation", wrong: ["Eating more candy", "Wearing a hat", "Drinking soda"], why: "Doctors choose treatments based on the kind and size of the cancer." },
        { q: "A stroke happens when...", a: "Blood flow to part of the brain is blocked or a blood vessel in the brain bursts", wrong: ["The lungs fill with water", "The stomach stops working", "A bone breaks"], why: "Without oxygen from blood, brain cells begin to die." },
        { q: "In the stroke warning sign 'F.A.S.T.,' what does the T stand for?", a: "Time to call 911", wrong: ["Take a nap", "Talk louder", "Touch your toes"], why: "F.A.S.T. means Face drooping, Arm weakness, Speech trouble, Time to call 911." },
        { q: "Which body parts are affected by a stroke?", a: "The brain and the blood vessels that feed it", wrong: ["Only the lungs", "Only the bones", "Only the skin"], why: "A stroke is sometimes called a 'brain attack.'" },
        { q: "A heart attack happens when...", a: "Blood flow to part of the heart muscle is blocked", wrong: ["The heart grows too big overnight", "The lungs stop breathing", "A valve falls out"], why: "It's usually caused by fatty buildup (plaque) and a clot in a coronary artery." },
        { q: "The fatty buildup inside arteries that can cause heart attacks and strokes is called...", type: "type", a: ["plaque"], why: "Plaque narrows arteries so less blood can get through." },
        { q: "Which is a common warning sign of a heart attack?", a: "Chest pain or pressure", wrong: ["Itchy toes", "Sneezing", "A runny nose"], why: "Pain can also spread to the arm, jaw, or back, with shortness of breath. Call 911." },
        { q: "Which is a treatment for a heart attack?", a: "Medicines, or a tiny tube called a stent to open the blocked artery", wrong: ["Eating a big meal", "Taking a long nap", "Holding your breath"], why: "Doctors work fast to restore blood flow to the heart muscle." },
        { q: "In congestive heart failure, the heart...", a: "Doesn't pump as well as it should", wrong: ["Has completely stopped", "Beats too slowly on purpose", "Moves to the other side of the chest"], why: "'Failure' doesn't mean the heart stopped. It means it's weaker than normal." },
        { q: "Why do people with congestive heart failure often have swollen legs and trouble breathing?", a: "Fluid backs up in the body and lungs", wrong: ["They drink too much milk", "Their bones are growing", "Their muscles are too strong"], why: "When the heart can't keep up, fluid collects in the legs and lungs." },
        { q: "Which is a treatment for congestive heart failure?", a: "Medicines like 'water pills' and eating less salt", wrong: ["Eating more salt", "Smoking", "Sitting still all day"], why: "Less salt means the body holds less extra fluid." },
        { q: "Which TWO conditions from the list are inherited through genes?", a: "Sickle cell anemia and cystic fibrosis", wrong: ["Stroke and COPD", "Lung cancer and asthma", "Heart attack and stroke"], why: "Both are genetic. Some other conditions, like asthma, can run in families too." },
        { q: "Which healthy habit helps prevent heart attacks, strokes, and heart failure?", a: "Eating healthy foods, exercising, and not smoking", wrong: ["Eating lots of salty snacks", "Watching TV all day", "Smoking"], why: "Keeping blood pressure healthy protects your heart and blood vessels." },
        { q: "Which condition from the list affects BOTH the brain and the circulatory system?", a: "Stroke", wrong: ["Asthma", "Cystic fibrosis", "COPD"], why: "A stroke is a blood vessel problem that damages the brain." }
      ]
    }
  ]
});
