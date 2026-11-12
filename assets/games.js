const GAMES=[
 {id:'snake',title:'Snake',cat:'arcade',catLabel:'Arcade',color:'#6ac100',icon:'🐍',diff:'Easy',time:'2–5 min',desc:'Eat food, grow longer and survive as long as you can in the timeless arcade classic.',help:'Arrow keys / WASD / swipe buttons. Eat the red food. Avoid walls and your own tail.'},
 {id:'g2048',title:'2048',cat:'puzzle',catLabel:'Puzzle',color:'#1366ff',icon:'🔢',diff:'Hard',time:'5–15 min',desc:'Slide numbered tiles, merge matching numbers and try to reach the legendary 2048 tile.',help:'Arrow keys or WASD to slide tiles. Merge equal numbers. Game ends when no moves remain.'},
 {id:'memory',title:'Memory Match',cat:'brain',catLabel:'Brain',color:'#00a896',icon:'🧠',diff:'Medium',time:'2–4 min',desc:'Flip cards and find all 8 matching pairs in as few moves as you can.',help:'Tap a card to flip it. Match all 8 pairs. Fewer moves and faster time is better.'},
 {id:'breakout',title:'Breakout',cat:'arcade',catLabel:'Arcade',color:'#ff4d1c',icon:'🧱',diff:'Medium',time:'3–6 min',desc:'Move the paddle, bounce the ball and smash every brick. Don\'t let the ball fall.',help:'Mouse, finger drag, or ← → keys move the paddle. Clear all bricks to win. You have 3 lives.'},
 {id:'flappy',title:'Flappy Jump',cat:'arcade',catLabel:'Arcade',color:'#ffb800',icon:'🐦',diff:'Hard',time:'1–3 min',desc:'Tap to flap through the gaps. One tap too late and it\'s game over — how far can you go?',help:'Click, tap, or press Space to flap. Pass through pipe gaps to score.'},
 {id:'ttt',title:'Tic Tac Toe',cat:'classic',catLabel:'Classic',color:'#111827',icon:'❌',diff:'Easy',time:'1–2 min',desc:'Play X against the computer. Get three in a row before the computer blocks you.',help:'You are X. Tap any empty square. First to make 3 in a row wins.'},
 {id:'mine',title:'Minesweeper',cat:'puzzle',catLabel:'Puzzle',color:'#ff2e7e',icon:'💣',diff:'Hard',time:'5–10 min',desc:'Reveal safe squares and deduce where the 10 hidden mines are hiding.',help:'Click/tap to reveal — your first tap is always safe. Numbers show nearby mines. Use the Flag Mode button below the board to flag suspected mines. Avoid all 10 mines.'},
{id:'pong',title:'Pong Classic',cat:'arcade',catLabel:'Arcade',color:'#0ea5e9',icon:'🏓',diff:'Medium',time:'3–6 min',desc:'The original video game. Move your paddle, beat the computer — first to 7 wins.',help:'Move mouse / finger, or ↑ ↓ keys, to control the left paddle. First to 7 points wins.',eng:'pong'},
 {id:'whack',title:'Whack-a-Mole',cat:'arcade',catLabel:'Arcade',color:'#84cc16',icon:'🔨',diff:'Easy',time:'1 min',desc:'Moles pop up for 30 seconds — whack as many as you can.',help:'Click the mole as fast as you can. 30 seconds on the clock.',eng:'target',cfg:{icon:'🦫',speed:750,secs:30}},
 {id:'balloonpop',title:'Balloon Pop Party',cat:'arcade',catLabel:'Arcade',color:'#ec4899',icon:'🎈',diff:'Easy',time:'1 min',desc:'Pop balloons before they vanish — but never pop the bomb balloon.',help:'Click balloons to score. The 💣 balloon costs 2 points.',eng:'target',cfg:{icon:'🎈',bad:'💣',speed:650,secs:30}},
 {id:'zombietap',title:'Zombie Tap Defense',cat:'action',catLabel:'Action',color:'#365314',icon:'🧟',diff:'Medium',time:'1 min',desc:'Tap the zombies to defend your base. Do not tap the survivors!',help:'Click zombies to score. The 🧑 survivor costs 2 points.',eng:'target',cfg:{icon:'🧟',bad:'🧑',speed:700,secs:30}},
 {id:'duckhunt',title:'Duck Hunt',cat:'action',catLabel:'Action',color:'#0284c7',icon:'🦆',diff:'Medium',time:'1 min',desc:'Ducks flash across the range — tap them before they escape.',help:'Click each duck quickly. Faster ducks later in the round.',eng:'target',cfg:{icon:'🦆',speed:600,secs:30}},
 {id:'goalkeeper',title:'Goalkeeper Challenge',cat:'sports',catLabel:'Sports',color:'#16a34a',icon:'🧤',diff:'Medium',time:'1 min',desc:'Shots come at your goal — dive to the right square and save them.',help:'Click the square where the ⚽ appears to save it. 30 seconds.',eng:'target',cfg:{icon:'⚽',speed:800,secs:30}},
 {id:'fruittap',title:'Fruit Tap Rush',cat:'arcade',catLabel:'Arcade',color:'#f97316',icon:'🍓',diff:'Easy',time:'1 min',desc:'Tap the fruit, dodge the rotten one — a 30-second reflex rush.',help:'Click fruit to score. The 🤢 rotten fruit costs 2 points.',eng:'target',cfg:{icon:'🍓',bad:'🤢',speed:680,secs:30}},
 {id:'catchstars',title:'Catch the Stars',cat:'arcade',catLabel:'Arcade',color:'#7c3aed',icon:'⭐',diff:'Easy',time:'2–4 min',desc:'Slide your basket and catch falling stars. Miss three and it is over.',help:'Move with mouse, finger or arrow keys. Catch stars, avoid missing them — 3 misses ends the game.',eng:'catch',cfg:{icon:'⭐',basket:'🧺',rate:55,speed:2.4}},
 {id:'applecatch',title:'Apple Harvest',cat:'arcade',catLabel:'Arcade',color:'#dc2626',icon:'🍎',diff:'Medium',time:'2–4 min',desc:'Harvest falling apples in your crate — faster than Catch the Stars.',help:'Move with mouse, finger or arrow keys. Catch apples; 3 misses ends the harvest.',eng:'catch',cfg:{icon:'🍎',basket:'🧺',rate:46,speed:3}},
 {id:'coincatch',title:'Coin Catcher',cat:'action',catLabel:'Action',color:'#b45309',icon:'🪙',diff:'Medium',time:'2–4 min',desc:'Catch gold coins in your chest — but bombs cost you a life.',help:'Move with mouse, finger or arrow keys. Coins score; 💣 bombs and missed coins cost lives.',eng:'catch',cfg:{icon:'🪙',bad:'💣',basket:'💰',rate:48,speed:2.8}},
 {id:'heli',title:'Helicopter Rescue',cat:'action',catLabel:'Action',color:'#0369a1',icon:'🚁',diff:'Medium',time:'2–4 min',desc:'Pilot under falling supplies and catch them in the rescue net.',help:'Move with mouse, finger or arrow keys. Catch supply crates; 3 misses ends the rescue.',eng:'catch',cfg:{icon:'📦',basket:'🚁',rate:50,speed:2.7}},
 {id:'asteroid',title:'Asteroid Dodge',cat:'action',catLabel:'Action',color:'#334155',icon:'☄️',diff:'Hard',time:'2–5 min',desc:'Weave your ship through an asteroid field. How long can you survive?',help:'Arrow keys or on-screen buttons move your ship in all directions. Avoid every asteroid.',eng:'dodge',cfg:{icon:'🚀',obs:'☄️',rate:38,speed:3.2}},
 {id:'meteor',title:'Meteor Shower',cat:'action',catLabel:'Action',color:'#7f1d1d',icon:'🌠',diff:'Hard',time:'2–5 min',desc:'A denser, faster asteroid field for expert pilots.',help:'Arrow keys or buttons move your UFO. Survive the shower as long as you can.',eng:'dodge',cfg:{icon:'🛸',obs:'🔥',rate:30,speed:3.8}},
 {id:'submarine',title:'Submarine Dive',cat:'action',catLabel:'Action',color:'#0e7490',icon:'🐠',diff:'Medium',time:'2–5 min',desc:'Dodge mines and rocks on the ocean floor in your little submarine.',help:'Arrow keys or buttons move in all directions. Avoid the mines.',eng:'dodge',cfg:{icon:'🛥️',obs:'💣',rate:42,speed:2.7,bg:'#082f49'}},
 {id:'spaceshoot',title:'Space Shooter',cat:'action',catLabel:'Action',color:'#4c1d95',icon:'👾',diff:'Medium',time:'2–5 min',desc:'Blast waves of invaders before they break through your line.',help:'Arrow keys move, Space or click fires. Do not let invaders land — you have 3 hull points.',eng:'shooter'},
 {id:'dinorun',title:'Dino Runner',cat:'arcade',catLabel:'Arcade',color:'#a16207',icon:'🦖',diff:'Medium',time:'1–3 min',desc:'Jump the cacti and run as far as your little legs can carry you.',help:'Space, ↑, tap, or the Jump button. One hit ends the run.',eng:'jump',cfg:{icon:'🦖',obs:'🌵',speed:4.4,rate:105}},
 {id:'frogjump',title:'Frog Leap',cat:'arcade',catLabel:'Arcade',color:'#15803d',icon:'🐸',diff:'Medium',time:'1–3 min',desc:'A higher, floatier jump — hop over every log on the pond path.',help:'Space, ↑, tap, or the Jump button to leap the logs.',eng:'jump',cfg:{icon:'🐸',obs:'🪵',speed:4,grav:0.6,jump:14.5,rate:115,bg:'#dcfce7'}},
 {id:'cardodge',title:'Traffic Racer',cat:'racing',catLabel:'Racing',color:'#b91c1c',icon:'🚗',diff:'Medium',time:'2–5 min',desc:'Switch lanes, dodge traffic and rack up the metres.',help:'← → keys, tap left/right of the road, or the buttons to change lane. Avoid other cars.',eng:'race',cfg:{icon:'🏎️',obs:'🚙',speed:3.2,rate:52}},
 {id:'bikerush',title:'Bike Rush',cat:'racing',catLabel:'Racing',color:'#c2410c',icon:'🏍️',diff:'Hard',time:'2–5 min',desc:'Faster traffic, tighter gaps — a racer for quick thumbs.',help:'← → keys or taps to change lane. Avoid the trucks.',eng:'race',cfg:{icon:'🏍️',obs:'🚚',speed:4.2,rate:44}},
 {id:'boatrace',title:'Boat Slalom',cat:'racing',catLabel:'Racing',color:'#0e7490',icon:'⛵',diff:'Easy',time:'2–5 min',desc:'A gentler race — steer your boat between the buoys and rocks.',help:'← → keys or taps to change lane. Avoid the rocks.',eng:'race',cfg:{icon:'⛵',obs:'🪨',speed:2.6,rate:58}},
 {id:'f1dash',title:'Formula Dash',cat:'racing',catLabel:'Racing',color:'#991b1b',icon:'🏁',diff:'Hard',time:'2–5 min',desc:'Top-speed lane racing. Blink and you crash.',help:'← → keys or taps to change lane at full speed. Avoid rival cars.',eng:'race',cfg:{icon:'🏎️',obs:'🚗',speed:5,rate:40}},
 {id:'horserace',title:'Horse Gallop',cat:'racing',catLabel:'Racing',color:'#92400e',icon:'🐎',diff:'Medium',time:'2–5 min',desc:'Gallop down the track and dodge the hay bales and fences.',help:'← → keys or taps to change lane. Avoid the obstacles.',eng:'race',cfg:{icon:'🐎',obs:'🌾',speed:3.4,rate:50}},
 {id:'penalty',title:'Penalty Shootout',cat:'sports',catLabel:'Sports',color:'#15803d',icon:'⚽',diff:'Easy',time:'2 min',desc:'Five penalties against the computer keeper. Pick your corner wisely.',help:'Click a target zone to shoot. The keeper dives to a random zone — outsmart him 5 times.',eng:'penalty'},
 {id:'basketball',title:'Basketball Shot',cat:'sports',catLabel:'Sports',color:'#ea580c',icon:'🏀',diff:'Medium',time:'2–3 min',desc:'Stop the power bar in the sweet spot to sink each shot.',help:'Press Stop when the marker is inside the green zone. Closer to the middle = more points. 5 shots.',eng:'timing',cfg:{icon:'🏀',zone:[44,56],speed:1.3,btn:'🏀 Shoot!',zoneLabel:'SWISH ZONE'}},
 {id:'archery',title:'Archery Target',cat:'sports',catLabel:'Sports',color:'#166534',icon:'🏹',diff:'Medium',time:'2–3 min',desc:'Five arrows, one moving aim — land them all in the gold.',help:'Press Stop when the aim crosses the gold zone. 5 arrows.',eng:'timing',cfg:{icon:'🏹',zone:[45,55],speed:1.5,btn:'🏹 Release!',zoneLabel:'GOLD'}},
 {id:'bowling',title:'Bowling Alley',cat:'sports',catLabel:'Sports',color:'#1d4ed8',icon:'🎳',diff:'Medium',time:'2–3 min',desc:'Line up the perfect throw and knock the pins down.',help:'Press Stop inside the green zone for a strike line. 5 throws.',eng:'timing',cfg:{icon:'🎳',zone:[40,60],speed:1.2,btn:'🎳 Bowl!',zoneLabel:'STRIKE LINE'}},
 {id:'golf',title:'Mini Golf Putt',cat:'sports',catLabel:'Sports',color:'#16a34a',icon:'⛳',diff:'Easy',time:'2–3 min',desc:'Judge the power just right — too soft or too hard and you miss the hole.',help:'Press Stop inside the green zone for the perfect putt power. 5 putts.',eng:'timing',cfg:{icon:'⛳',zone:[38,62],speed:0.9,btn:'⛳ Putt!',zoneLabel:'PERFECT POWER'}},
 {id:'cricket',title:'Cricket Timing Shot',cat:'sports',catLabel:'Sports',color:'#065f46',icon:'🏏',diff:'Medium',time:'2–3 min',desc:'Time your swing as the marker sweeps — sweet-spot hits score big.',help:'Press Stop inside the green zone to time the shot. 5 balls.',eng:'timing',cfg:{icon:'🏏',zone:[43,57],speed:1.6,btn:'🏏 Swing!',zoneLabel:'SWEET SPOT'}},
 {id:'darts',title:'Darts Master',cat:'sports',catLabel:'Sports',color:'#9f1239',icon:'🎯',diff:'Hard',time:'2–3 min',desc:'A tiny bullseye zone and a fast-moving aim. Five darts — good luck.',help:'Press Stop inside the small green zone to hit the bull. 5 darts.',eng:'timing',cfg:{icon:'🎯',zone:[47,53],speed:1.7,btn:'🎯 Throw!',zoneLabel:'BULL'}},
 {id:'sniper',title:'Sniper Timing',cat:'action',catLabel:'Action',color:'#3f3f46',icon:'🎯',diff:'Hard',time:'2–3 min',desc:'Hold your nerve and stop the drifting scope dead on target.',help:'Press Stop inside the small zone. 5 shots, faster scope than Darts.',eng:'timing',cfg:{icon:'🔭',zone:[46,54],speed:2,btn:'🔭 Fire!',zoneLabel:'TARGET'}},
 {id:'reaction',title:'Reaction Test',cat:'brain',catLabel:'Brain',color:'#0d9488',icon:'⚡',diff:'Easy',time:'1–2 min',desc:'Wait for green, then tap as fast as humanly possible. Measures real milliseconds.',help:'Tap to arm, wait for the pad to turn green, then tap instantly. Early taps restart the wait.',eng:'reaction'},
 {id:'boxing',title:'Boxing Reflex',cat:'sports',catLabel:'Sports',color:'#b45309',icon:'🥊',diff:'Easy',time:'1–2 min',desc:'A reaction test with a boxer twist — strike the pad the instant it flashes.',help:'Tap to start, wait for green, then strike fast. Measures your reflex time.',eng:'reaction'},
 {id:'cookie',title:'Cookie Clicker',cat:'arcade',catLabel:'Arcade',color:'#b45309',icon:'🍪',diff:'Easy',time:'Open-ended',desc:'Click the cookie, buy upgrades and auto-bakers, and watch the numbers fly.',help:'Click the cookie to earn. Spend cookies on stronger clicks and auto-bakers.',eng:'clicker',cfg:{icon:'🍪',label:'Cookies'}},
 {id:'miner',title:'Diamond Miner',cat:'arcade',catLabel:'Arcade',color:'#0891b2',icon:'💎',diff:'Easy',time:'Open-ended',desc:'Mine diamonds click by click, then hire drills to dig for you.',help:'Click the gem to mine. Buy upgrades and auto-drills with your diamonds.',eng:'clicker',cfg:{icon:'💎',label:'Diamonds'}},
 {id:'simon',title:'Simon Colors',cat:'brain',catLabel:'Brain',color:'#7c3aed',icon:'🎨',diff:'Medium',time:'2–5 min',desc:'Watch the colour sequence grow, then repeat it from memory.',help:'Press Start, watch the pads flash, then tap them back in the same order.',eng:'simon'},
 {id:'simonpro',title:'Simon Pro — 6 Pads',cat:'brain',catLabel:'Brain',color:'#581c87',icon:'🌈',diff:'Hard',time:'3–6 min',desc:'Six pads, longer sequences — the memory master version of Simon.',help:'Press Start, watch carefully, then repeat the sequence on six pads.',eng:'simon',cfg:{pads:['🟥','🟦','🟩','🟨','🟪','🟧']}},
 {id:'bombdefuse',title:'Bomb Defuse Sequence',cat:'action',catLabel:'Action',color:'#7f1d1d',icon:'💣',diff:'Hard',time:'2–5 min',desc:'Memorise the flashing wire order and repeat it to defuse the bomb.',help:'Watch the numbered sequence flash, then tap the pads in the same order.',eng:'simon',cfg:{pads:['1️⃣','2️⃣','3️⃣','4️⃣']}},
 {id:'memanimals',title:'Memory Animals',cat:'brain',catLabel:'Brain',color:'#059669',icon:'🦁',diff:'Easy',time:'2–4 min',desc:'Find all 8 animal pairs hiding under the cards.',help:'Tap cards to flip them and match all 8 animal pairs.',eng:'memgrid',cfg:{items:['🦁','🐼','🦊','🐸','🦉','🐙','🦋','🐢'],cols:4}},
 {id:'memspace',title:'Memory Space — 12 Pairs',cat:'brain',catLabel:'Brain',color:'#312e81',icon:'🚀',diff:'Hard',time:'4–7 min',desc:'A bigger 24-card board with 12 space pairs to find.',help:'Tap cards to flip them and match all 12 space pairs.',eng:'memgrid',cfg:{items:['🚀','🪐','⭐','🌙','☄️','🛸','👽','🔭','🌍','☀️','🌌','🛰️'],cols:6}},
 {id:'memfood',title:'Memory Food',cat:'brain',catLabel:'Brain',color:'#ea580c',icon:'🍔',diff:'Easy',time:'2–4 min',desc:'Match 8 tasty pairs — burgers, pizza, sushi and more.',help:'Tap cards to flip them and match all 8 food pairs.',eng:'memgrid',cfg:{items:['🍔','🍕','🍣','🌮','🍩','🍦','🥑','🍿'],cols:4}},
 {id:'memsport',title:'Memory Sports',cat:'brain',catLabel:'Brain',color:'#0369a1',icon:'🏆',diff:'Medium',time:'2–4 min',desc:'Eight sports pairs to match, from football to archery.',help:'Tap cards to flip them and match all 8 sports pairs.',eng:'memgrid',cfg:{items:['⚽','🏀','🎾','🏏','🥊','🏹','🚴','🏊'],cols:4}},
 {id:'memocean',title:'Memory Ocean',cat:'brain',catLabel:'Brain',color:'#0e7490',icon:'🐠',diff:'Easy',time:'2–4 min',desc:'Match the sea creatures hiding under the waves.',help:'Tap cards to flip them and match all 8 ocean pairs.',eng:'memgrid',cfg:{items:['🐠','🐙','🦈','🐬','🦀','🐳','🦑','🐡'],cols:4}},
 {id:'memnum',title:'Memory Numbers',cat:'brain',catLabel:'Brain',color:'#334155',icon:'🔟',diff:'Medium',time:'2–4 min',desc:'Number pairs instead of pictures — a sterner memory test.',help:'Tap cards to flip them and match all 8 number pairs.',eng:'memgrid',cfg:{items:['11','22','33','44','55','66','77','88'],cols:4}},
 {id:'mathadd',title:'Math Sprint: Addition',cat:'brain',catLabel:'Brain',color:'#2563eb',icon:'➕',diff:'Easy',time:'2–3 min',desc:'Ten quick addition questions against your own speed and accuracy.',help:'Read each question and click the correct answer. 10 questions.',eng:'quiz',cfg:{q:[['What is 27 + 48?',['65','75','85','72'],1],['What is 136 + 289?',['415','425','435','405'],1],['What is 59 + 67?',['116','126','136','122'],1],['What is 450 + 378?',['818','828','838','808'],1],['What is 93 + 58?',['141','151','161','131'],1],['What is 204 + 197?',['391','401','411','381'],1],['What is 76 + 85?',['151','161','171','141'],1],['What is 999 + 1?',['1000','990','1001','999'],0],['What is 345 + 456?',['791','801','811','781'],1],['What is 18 + 24 + 30?',['62','72','82','70'],1]]}},
 {id:'mathmul',title:'Math Sprint: Multiplication',cat:'brain',catLabel:'Brain',color:'#7c3aed',icon:'✖️',diff:'Medium',time:'2–3 min',desc:'Ten multiplication questions — tables knowledge put to the test.',help:'Read each question and click the correct product. 10 questions.',eng:'quiz',cfg:{q:[['What is 7 × 8?',['54','56','64','48'],1],['What is 12 × 6?',['66','72','84','60'],1],['What is 9 × 9?',['81','72','99','90'],0],['What is 15 × 4?',['45','50','60','70'],2],['What is 23 × 3?',['69','63','79','66'],0],['What is 11 × 11?',['111','121','131','101'],1],['What is 8 × 125?',['800','900','1000','925'],2],['What is 14 × 5?',['60','70','75','80'],1],['What is 19 × 2?',['36','38','42','28'],1],['What is 25 × 16?',['350','375','400','425'],2]]}},
 {id:'capitals',title:'World Capitals Quiz',cat:'brain',catLabel:'Brain',color:'#0369a1',icon:'🌍',diff:'Medium',time:'2–3 min',desc:'From Paris to Canberra — how many world capitals do you know?',help:'Pick the capital city for each country. 10 questions.',eng:'quiz',cfg:{q:[['Capital of Japan?',['Seoul','Tokyo','Beijing','Bangkok'],1],['Capital of Australia?',['Sydney','Melbourne','Canberra','Perth'],2],['Capital of Canada?',['Toronto','Ottawa','Vancouver','Montreal'],1],['Capital of Brazil?',['Rio de Janeiro','São Paulo','Brasília','Salvador'],2],['Capital of Egypt?',['Cairo','Alexandria','Giza','Luxor'],0],['Capital of Germany?',['Munich','Hamburg','Berlin','Frankfurt'],2],['Capital of Pakistan?',['Karachi','Lahore','Islamabad','Peshawar'],2],['Capital of Spain?',['Barcelona','Madrid','Seville','Valencia'],1],['Capital of Turkey?',['Istanbul','Ankara','Izmir','Antalya'],1],['Capital of Kenya?',['Mombasa','Nairobi','Kisumu','Nakuru'],1]]}},
 {id:'flags',title:'Flag Quiz',cat:'brain',catLabel:'Brain',color:'#dc2626',icon:'🚩',diff:'Easy',time:'2–3 min',desc:'Recognise the country from its flag emoji.',help:'Look at the flag and pick the right country. 10 questions.',eng:'quiz',cfg:{q:[['🇵🇰 is the flag of…',['India','Pakistan','Bangladesh','Turkey'],1],['🇬🇧 is the flag of…',['USA','Australia','United Kingdom','Canada'],2],['🇯🇵 is the flag of…',['China','Japan','South Korea','Vietnam'],1],['🇫🇷 is the flag of…',['Italy','France','Belgium','Netherlands'],1],['🇧🇷 is the flag of…',['Argentina','Mexico','Brazil','Chile'],2],['🇨🇦 is the flag of…',['Canada','USA','Denmark','Austria'],0],['🇹🇷 is the flag of…',['Greece','Turkey','Tunisia','Algeria'],1],['🇮🇳 is the flag of…',['Pakistan','Nepal','India','Sri Lanka'],2],['🇩🇪 is the flag of…',['Germany','Belgium','Austria','Poland'],0],['🇸🇦 is the flag of…',['UAE','Qatar','Oman','Saudi Arabia'],3]]}},
 {id:'animalquiz',title:'Animal Quiz',cat:'brain',catLabel:'Brain',color:'#15803d',icon:'🦒',diff:'Easy',time:'2–3 min',desc:'Fastest land animal? Largest mammal? Test your animal knowledge.',help:'Pick the correct answer for each animal question. 10 questions.',eng:'quiz',cfg:{q:[['Fastest land animal?',['Lion','Cheetah','Horse','Gazelle'],1],['Largest land animal?',['Hippo','African elephant','Giraffe','Rhino'],1],['Which animal sleeps standing up?',['Cow','Horse','Pig','Goat'],1],['A baby frog is called a…',['Cub','Pup','Tadpole','Kit'],2],['Which bird cannot fly but swims?',['Ostrich','Penguin','Kiwi','Emu'],1],['How many legs does a spider have?',['6','8','10','12'],1],['Which animal is called the ship of the desert?',['Horse','Camel','Donkey','Llama'],1],['The only mammal that can fly is the…',['Bat','Squirrel','Owl','Bee'],0],['A group of wolves is a…',['Herd','Flock','Pack','Swarm'],2],['Which sea animal has 8 arms?',['Squid','Octopus','Starfish','Jellyfish'],1]]}},
 {id:'science',title:'Science Quiz',cat:'brain',catLabel:'Brain',color:'#0f766e',icon:'🔬',diff:'Medium',time:'2–3 min',desc:'Planets, water, gravity and gases — everyday science questions.',help:'Pick the correct answer for each science question. 10 questions.',eng:'quiz',cfg:{q:[['Chemical symbol for water?',['O2','CO2','H2O','H2'],2],['Planet closest to the Sun?',['Venus','Mercury','Mars','Earth'],1],['Gas that plants absorb?',['Oxygen','Nitrogen','Carbon dioxide','Helium'],2],['How many bones in an adult human?',['186','206','226','250'],1],['Force that pulls objects to Earth?',['Magnetism','Friction','Gravity','Inertia'],2],['Hottest planet in our solar system?',['Mars','Mercury','Venus','Jupiter'],2],['What do bees produce?',['Milk','Silk','Honey','Wax only'],2],['Unit of force is the…',['Joule','Newton','Watt','Pascal'],1],['Ice is water in which state?',['Gas','Liquid','Solid','Plasma'],2],['Which organ pumps blood?',['Liver','Brain','Heart','Lung'],2]]}},
 {id:'gk',title:'General Knowledge Quiz',cat:'brain',catLabel:'Brain',color:'#9333ea',icon:'🧩',diff:'Medium',time:'2–3 min',desc:'A mixed bag — history, sports, geography and everyday facts.',help:'Pick the correct answer. 10 mixed questions.',eng:'quiz',cfg:{q:[['How many continents are there?',['5','6','7','8'],2],['Who painted the Mona Lisa?',['Van Gogh','Picasso','Da Vinci','Rembrandt'],2],['Largest ocean on Earth?',['Atlantic','Indian','Arctic','Pacific'],3],['How many players in a football team on the pitch?',['9','10','11','12'],2],['First month of the year?',['December','January','March','June'],1],['Currency of Japan?',['Won','Yuan','Yen','Ringgit'],2],['Tallest mountain on Earth?',['K2','Everest','Kilimanjaro','Denali'],1],['How many sides does a hexagon have?',['5','6','7','8'],1],['Which language is most spoken worldwide by native speakers?',['English','Hindi','Spanish','Mandarin Chinese'],3],['Freezing point of water is…',['0°C','10°C','-10°C','32°C'],0]]}},
 {id:'sportsquiz',title:'Sports Quiz',cat:'sports',catLabel:'Sports',color:'#0369a1',icon:'🏅',diff:'Medium',time:'2–3 min',desc:'Football, cricket, the Olympics and more sporting knowledge.',help:'Pick the correct answer for each sports question. 10 questions.',eng:'quiz',cfg:{q:[['How long is a football match (regular time)?',['80 min','90 min','100 min','120 min'],1],['In cricket, a score of 100 by a batter is a…',['Half-century','Century','Duck','Sixer'],1],['Olympic rings count?',['4','5','6','7'],1],['In tennis, zero points is called…',['Love','Duck','Nil','Ace'],0],['Basketball hoop height is…',['2.5 m','3.05 m','3.5 m','2.8 m'],1],['Which country invented chess (earliest form)?',['China','India','Persia','Egypt'],1],['A marathon is about…',['26 km','32 km','42 km','50 km'],2],['In golf, one under par is a…',['Bogey','Birdie','Eagle','Albatross'],1],['Boxing ring shape?',['Circle','Square','Triangle','Hexagon'],1],['World Cup football is held every…',['2 years','3 years','4 years','5 years'],2]]}},
 {id:'vocab',title:'Vocabulary Quiz',cat:'word',catLabel:'Word',color:'#7c2d12',icon:'📖',diff:'Medium',time:'2–3 min',desc:'What does "rapid" mean? Sharpen your English word power.',help:'Pick the word with the closest meaning. 8 questions.',eng:'quiz',cfg:{q:[['"Rapid" means…',['Slow','Fast','Quiet','Weak'],1],['"Ancient" means…',['New','Very old','Broken','Shiny'],1],['"Generous" means…',['Selfish','Giving freely','Angry','Careful'],1],['"Brave" means…',['Afraid','Courageous','Lazy','Proud'],1],['Opposite of "ancient"?',['Old','Modern','Antique','Historic'],1],['"Tiny" means…',['Huge','Very small','Loud','Heavy'],1],['"Victory" means…',['Defeat','Win','Journey','Battle'],1],['Opposite of "brave"?',['Bold','Cowardly','Strong','Calm'],1]]}},
 {id:'spelling',title:'Spelling Bee',cat:'word',catLabel:'Word',color:'#9a3412',icon:'🐝',diff:'Medium',time:'2–3 min',desc:'Pick the correctly spelled word — harder than it looks.',help:'Choose the correctly spelled option. 8 questions.',eng:'quiz',cfg:{q:[['Which spelling is correct?',['Occured','Occurred','Ocurred','Occurrred'],1],['Which spelling is correct?',['Necesary','Neccessary','Necessary','Necessery'],2],['Which spelling is correct?',['Accomodate','Accommodate','Acommodate','Accommmodate'],1],['Which spelling is correct?',['Seperate','Separate','Seprate','Seperatte'],1],['Which spelling is correct?',['Goverment','Government','Governence','Govermant'],1],['Which spelling is correct?',['Tommorrow','Tomorrow','Tommorow','Toomorrow'],1],['Which spelling is correct?',['Definitely','Definately','Definitly','Defenitely'],0],['Which spelling is correct?',['Enviroment','Envirnoment','Environment','Environmant'],2]]}},
 {id:'sayings',title:'Complete the Saying',cat:'word',catLabel:'Word',color:'#713f12',icon:'💬',diff:'Easy',time:'2–3 min',desc:'Finish the famous proverbs and sayings.',help:'Pick the correct ending for each saying. 8 questions.',eng:'quiz',cfg:{q:[['"Actions speak louder than…"',['words','music','silence','thoughts'],0],['"Practice makes…"',['perfect','problems','prizes','peace'],0],['"A stitch in time saves…"',['seven','eight','nine','ten'],2],['"Honesty is the best…"',['policy','answer','habit','choice'],0],['"Too many cooks spoil the…"',['soup','broth','meal','kitchen'],1],['"When in Rome, do as the…"',['tourists do','Romans do','kings do','locals say'],1],['"Better late than…"',['early','never','sorry','always'],1],['"The early bird catches the…"',['fish','train','worm','bus'],2]]}},
 {id:'anagram',title:'Word Scramble',cat:'word',catLabel:'Word',color:'#be185d',icon:'🔤',diff:'Medium',time:'3–5 min',desc:'Unscramble the jumbled letters into real English words.',help:'Look at the scrambled letters and type the real word, then press Check.',eng:'anagram',cfg:{words:['PLANET','GARDEN','WINDOW','ORANGE','BRIDGE','SILVER','TIGER','SCHOOL','FRIEND','MARKET']}},
 {id:'anagramfood',title:'Food Scramble',cat:'word',catLabel:'Word',color:'#c2410c',icon:'🍕',diff:'Easy',time:'3–5 min',desc:'Every scrambled word is something you can eat or drink.',help:'Unscramble each food word and type it, then press Check.',eng:'anagram',cfg:{words:['BANANA','CHEESE','CARROT','COFFEE','MUFFIN','SALMON','PAPAYA','WALNUT','YOGURT','LEMON']}},
 {id:'anagramgeo',title:'Geography Scramble',cat:'word',catLabel:'Word',color:'#0f766e',icon:'🗺️',diff:'Medium',time:'3–5 min',desc:'Countries and places, all scrambled up.',help:'Unscramble each place name and type it, then press Check.',eng:'anagram',cfg:{words:['FRANCE','BRAZIL','CANADA','EGYPT','TURKEY','NORWAY','MEXICO','JAPAN','SPAIN','INDIA']}},
 {id:'hangman',title:'Hangman: Animals',cat:'word',catLabel:'Word',color:'#44403c',icon:'🐘',diff:'Medium',time:'2–4 min',desc:'Guess the animal letter by letter before your 6 lives run out.',help:'Tap letters to guess the hidden animal. Wrong letters cost a life — you have 6.',eng:'hangman',cfg:{words:['ELEPHANT','GIRAFFE','PENGUIN','DOLPHIN','OCTOPUS','CHEETAH','RACCOON','BUFFALO']}},
 {id:'hangcountry',title:'Hangman: Countries',cat:'word',catLabel:'Word',color:'#57534e',icon:'🌏',diff:'Hard',time:'2–4 min',desc:'Guess the country before your lives run out.',help:'Tap letters to guess the hidden country. Wrong letters cost a life — you have 6.',eng:'hangman',cfg:{words:['PAKISTAN','AUSTRALIA','GERMANY','ARGENTINA','THAILAND','PORTUGAL','ETHIOPIA','COLOMBIA']}},
 {id:'typing',title:'Typing Sprint',cat:'word',catLabel:'Word',color:'#1e40af',icon:'⌨️',diff:'Medium',time:'1–3 min',desc:'Type the sentence perfectly and get your real words-per-minute score.',help:'Type the sentence exactly as shown. Your WPM is calculated when you finish.',eng:'typing',cfg:{texts:['The quick brown fox jumps over the lazy dog near the river bank.','Practice every day and your typing speed will grow faster than you expect.','A journey of a thousand miles begins with a single step forward.','Good games are easy to learn and hard to master completely.']}},
 {id:'wordle',title:'Word Guess — 5 Letters',cat:'word',catLabel:'Word',color:'#166534',icon:'🟩',diff:'Medium',time:'2–4 min',desc:'Guess the hidden 5-letter word in 6 tries with colour clues.',help:'Type a 5-letter word and press Guess. Green = right letter, right place. Yellow = right letter, wrong place.',eng:'wordle',cfg:{words:['APPLE','BRAVE','CHAIR','DREAM','EAGLE','FLAME','GRAPE','HOUSE','LIGHT','MUSIC','PLANT','RIVER','STONE','TIGER','WATER','SMILE','BEACH','CLOUD','PIZZA','TRAIN']}},
 {id:'seqnum',title:'Number Sequences',cat:'brain',catLabel:'Brain',color:'#155e75',icon:'🔢',diff:'Medium',time:'2–4 min',desc:'Spot the pattern and find the next number in each sequence.',help:'Work out the pattern and pick the next number.',eng:'seq',cfg:{q:[['2, 4, 8, 16, … ?',['20','24','32','64'],2],['1, 1, 2, 3, 5, 8, … ?',['11','12','13','15'],2],['100, 90, 81, 73, … ?',['66','65','64','60'],0],['3, 6, 11, 18, 27, … ?',['36','38','40','35'],1],['1, 4, 9, 16, 25, … ?',['30','32','36','49'],2],['5, 10, 20, 40, … ?',['50','60','80','100'],2],['81, 27, 9, 3, … ?',['1','2','0','6'],0],['2, 3, 5, 7, 11, … ?',['12','13','15','17'],1]]}},
 {id:'evenodd',title:'Even or Odd Rush',cat:'brain',catLabel:'Brain',color:'#0e7490',icon:'⚖️',diff:'Easy',time:'1 min',desc:'Numbers flash up — tap Even or Odd as fast as you can for 30 seconds.',help:'Tap Even or Odd for each number. Correct +1, wrong −1. 30 seconds.',eng:'reflex',cfg:{secs:30,gen:()=>{const n=2+Math.floor(Math.random()*98);return{q:''+n,opts:['Even','Odd'],a:n%2===0?0:1};}}},
 {id:'tfmath',title:'True or False Math',cat:'brain',catLabel:'Brain',color:'#7e22ce',icon:'✔️',diff:'Medium',time:'1 min',desc:'Equations appear — some are wrong. Judge each one in 30 seconds.',help:'Tap True if the equation is correct, False if not. Correct +1, wrong −1.',eng:'reflex',cfg:{secs:30,gen:()=>{const a=2+Math.floor(Math.random()*12),b=2+Math.floor(Math.random()*12);const real=a+b;const show=Math.random()<0.5?real:real+(Math.random()<0.5?1:-1)*(1+Math.floor(Math.random()*3));return{q:a+' + '+b+' = '+show,opts:['True','False'],a:show===real?0:1};}}},
 {id:'primehunt',title:'Prime Hunt',cat:'brain',catLabel:'Brain',color:'#86198f',icon:'🎯',diff:'Hard',time:'1 min',desc:'Is it prime or not? Decide fast — the clock only gives you 30 seconds.',help:'Tap Prime if the number has exactly two divisors, Not Prime otherwise.',eng:'reflex',cfg:{secs:30,gen:()=>{const primes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47];const comps=[4,6,8,9,10,12,14,15,16,18,20,21,22,24,25,27,28,33,35,39,45,49];const p=Math.random()<0.5;const n=p?primes[Math.floor(Math.random()*primes.length)]:comps[Math.floor(Math.random()*comps.length)];return{q:''+n,opts:['Prime','Not Prime'],a:p?0:1};}}},
 {id:'stroop',title:'Color Stroop Test',cat:'brain',catLabel:'Brain',color:'#be123c',icon:'🌈',diff:'Hard',time:'1 min',desc:'The word says one colour, the ink says another. Tap the INK colour.',help:'Ignore what the word says — tap the button matching the colour of the ink. 30 seconds.',eng:'stroop',cfg:{}},
 {id:'colormatch',title:'Word Color Match',cat:'brain',catLabel:'Brain',color:'#a21caf',icon:'🎨',diff:'Hard',time:'1 min',desc:'The reverse Stroop: tap the colour the WORD names, not the ink.',help:'Tap the button matching what the word SAYS, ignoring its ink colour. 30 seconds.',eng:'stroop',cfg:{mode:'word'}},
 {id:'oddone',title:'Odd One Out',cat:'puzzle',catLabel:'Puzzle',color:'#4d7c0f',icon:'🔍',diff:'Easy',time:'2–3 min',desc:'Twenty-five lookalikes and one impostor. Find it, ten rounds in a row.',help:'Tap the one emoji that is different from all the others. 10 rounds.',eng:'odd',cfg:{same:'🍎',odd:'🍏',rounds:10}},
 {id:'spotcat',title:'Spot the Cat',cat:'puzzle',catLabel:'Puzzle',color:'#a16207',icon:'🐱',diff:'Easy',time:'2–3 min',desc:'One cat hides among the dogs. Ten rounds of seek-and-find.',help:'Tap the single cat hiding among the dogs. 10 rounds.',eng:'odd',cfg:{same:'🐶',odd:'🐱',rounds:10}},
 {id:'numguess',title:'Guess the Number',cat:'puzzle',catLabel:'Puzzle',color:'#1e3a8a',icon:'❓',diff:'Easy',time:'1–3 min',desc:'The computer hides a number from 1 to 100. Binary-search your way to it.',help:'Type a guess and press Guess. Hints tell you higher or lower. Fewest tries wins.',eng:'numguess'},
 {id:'rps',title:'Rock Paper Scissors',cat:'classic',catLabel:'Classic',color:'#57534e',icon:'✂️',diff:'Easy',time:'2–3 min',desc:'First to 5 against the computer in the timeless hand game.',help:'Pick rock, paper or scissors each round. First to 5 round-wins takes the match.',eng:'rps'},
 {id:'diceduel',title:'Dice Duel',cat:'classic',catLabel:'Classic',color:'#b91c1c',icon:'🎲',diff:'Easy',time:'2–4 min',desc:'Roll against the computer — the higher roll banks its points. First to 30.',help:'Press Roll. Higher roll scores its own value. First to 30 points wins.',eng:'dice',cfg:{target:30}},
 {id:'dice100',title:'Dice Race to 100',cat:'classic',catLabel:'Classic',color:'#7f1d1d',icon:'🎯',diff:'Easy',time:'4–7 min',desc:'The long version of Dice Duel — first to 100 points.',help:'Press Roll. Higher roll scores its own value. First to 100 wins.',eng:'dice',cfg:{target:100}},
 {id:'higherlower',title:'Higher or Lower',cat:'classic',catLabel:'Classic',color:'#6d28d9',icon:'🃏',diff:'Easy',time:'2–4 min',desc:'Guess whether the next card beats the current one. How long is your streak?',help:'Look at the current card and guess if the next is higher or lower. Wrong guess ends the run.',eng:'hl'},
 {id:'coinflip',title:'Coin Flip Streak',cat:'classic',catLabel:'Classic',color:'#a16207',icon:'🪙',diff:'Easy',time:'Open-ended',desc:'Call the coin flip right again and again — build the longest streak you can.',help:'Guess heads or tails before each flip. A wrong call resets your streak.',eng:'coin'},
 {id:'cardwar',title:'Card War',cat:'classic',catLabel:'Classic',color:'#7e22ce',icon:'⚔️',diff:'Easy',time:'3–6 min',desc:'Battle cards against the computer until one side captures the whole deck.',help:'Press Draw Battle Card. The higher card wins a card from the loser. Capture all 52 to win.',eng:'war'},
 {id:'blackjack',title:'Blackjack 21',cat:'classic',catLabel:'Classic',color:'#14532d',icon:'♠️',diff:'Medium',time:'2–4 min',desc:'Beat the dealer to 21 without going bust in this casino classic.',help:'Hit for another card or Stand to hold. Dealer draws to 17. Closest to 21 without busting wins.',eng:'blackjack'},
 {id:'connect4',title:'Connect Four',cat:'classic',catLabel:'Classic',color:'#1d4ed8',icon:'🔴',diff:'Medium',time:'3–6 min',desc:'Drop discs and connect four before the computer does.',help:'Click a column to drop your red disc. The computer blocks and attacks — connect 4 to win.',eng:'connect4'},
 {id:'ttt4',title:'Tic Tac Toe 4×4',cat:'classic',catLabel:'Classic',color:'#374151',icon:'⭕',diff:'Medium',time:'2–4 min',desc:'A bigger board: get 4 in a row on a 4×4 grid against the computer.',help:'You are X. Tap an empty square. Four in a row — across, down or diagonal — wins.',eng:'tttx',cfg:{n:4,need:4}},
 {id:'tttconnect3',title:'Grid Three — 4×4, 3 to Win',cat:'classic',catLabel:'Classic',color:'#4b5563',icon:'❎',diff:'Easy',time:'2–3 min',desc:'On a wide 4×4 board you only need 3 in a row — quicker and trickier.',help:'You are X. Tap an empty square. Three in a row anywhere wins.',eng:'tttx',cfg:{n:4,need:3}},
 {id:'ttt2p',title:'Tic Tac Toe: 2 Players',cat:'classic',catLabel:'Classic',color:'#111827',icon:'👥',diff:'Easy',time:'1–2 min',desc:'Pass-and-play against a friend on the same screen.',help:'Take turns tapping empty squares — X first, then O. Three in a row wins.',eng:'tttx',cfg:{n:3,need:3,twoP:true}},
 {id:'reversi',title:'Reversi Mini',cat:'classic',catLabel:'Classic',color:'#166534',icon:'⚫',diff:'Hard',time:'4–8 min',desc:'Outflank and flip discs on a 6×6 board. Most discs at the end wins.',help:'Tap a square that outflanks white discs to flip them. The CPU plays white. Most discs when no moves remain wins.',eng:'reversi'},
 {id:'lightsout',title:'Lights Out',cat:'puzzle',catLabel:'Puzzle',color:'#854d0e',icon:'💡',diff:'Hard',time:'3–8 min',desc:'Tap a light and its neighbours toggle too. Turn every light off.',help:'Tapping a cell toggles it and its up/down/left/right neighbours. Turn all 25 lights off.',eng:'lights'},
 {id:'sliding',title:'Sliding Puzzle',cat:'puzzle',catLabel:'Puzzle',color:'#0f766e',icon:'🧩',diff:'Medium',time:'2–6 min',desc:'Slide the tiles into order — 1 to 8 — using the one empty space.',help:'Click a tile next to the empty space to slide it. Arrange 1–8 in order to solve.',eng:'sliding'},
 {id:'hanoi',title:'Tower of Hanoi',cat:'puzzle',catLabel:'Puzzle',color:'#92400e',icon:'🗼',diff:'Medium',time:'3–6 min',desc:'Move the whole stack of 4 discs to peg 3 — never put a big disc on a small one.',help:'Click a peg to pick its top disc, then click another peg to drop it. A perfect game takes 15 moves.',eng:'hanoi'},
 {id:'sudoku4',title:'Sudoku 4×4',cat:'puzzle',catLabel:'Puzzle',color:'#1e40af',icon:'🔷',diff:'Medium',time:'3–6 min',desc:'The friendly mini Sudoku: every row, column and 2×2 box needs 1–4.',help:'Tap an empty cell, then tap a number. Wrong numbers flash red and count as errors.',eng:'sudoku'},
 {id:'flood',title:'Color Flood',cat:'puzzle',catLabel:'Puzzle',color:'#db2777',icon:'🌊',diff:'Medium',time:'2–5 min',desc:'Flood the whole board one colour at a time, starting from the corner.',help:'Tap a colour button to change the top-left region. Spread it across the whole board in 16 moves.',eng:'flood',cfg:{n:8,max:16}},
 {id:'floodpro',title:'Color Flood Pro — 12×12',cat:'puzzle',catLabel:'Puzzle',color:'#9d174d',icon:'🎆',diff:'Hard',time:'4–8 min',desc:'A bigger board and the same tight move limit for flood masters.',help:'Tap a colour button to change the top-left region. Flood all 144 cells in 22 moves.',eng:'flood',cfg:{n:12,max:22}},
 {id:'maze',title:'Maze Runner',cat:'puzzle',catLabel:'Puzzle',color:'#365314',icon:'🧭',diff:'Medium',time:'1–3 min',desc:'A fresh maze every game. Reach the flag in as few moves as you can.',help:'Arrow keys, WASD or the buttons move you. Reach the 🏁 at the bottom-right.',eng:'maze',cfg:{n:11}},
 {id:'mazepro',title:'Maze Master — 17×17',cat:'puzzle',catLabel:'Puzzle',color:'#1a2e05',icon:'🌀',diff:'Hard',time:'3–6 min',desc:'A much bigger maze with longer dead ends. True navigation test.',help:'Arrow keys, WASD or the buttons move you. Reach the 🏁 at the bottom-right.',eng:'maze',cfg:{n:17}},
 {id:'snaketurbo',title:'Snake Turbo',cat:'arcade',catLabel:'Arcade',color:'#65a30d',icon:'🐍',diff:'Hard',time:'2–5 min',desc:'Classic Snake at double speed. Same rules, half the thinking time.',help:'Arrow keys / WASD / buttons. Eat food, avoid walls and yourself — at turbo speed.',eng:'snake2',cfg:{speed:80}},
 {id:'snakewrap',title:'Snake: Wrap World',cat:'arcade',catLabel:'Arcade',color:'#059669',icon:'🌍',diff:'Medium',time:'2–5 min',desc:'Walls cannot kill you here — pass through one side and out the other.',help:'Arrow keys / WASD / buttons. You wrap around the edges; only your own body is deadly.',eng:'snake2',cfg:{speed:120,wrap:true}},
 {id:'snakewalls',title:'Snake: Wall Trap',cat:'arcade',catLabel:'Arcade',color:'#78716c',icon:'🧱',diff:'Hard',time:'2–5 min',desc:'Grey wall blocks split the arena. Thread the gaps and do not get trapped.',help:'Arrow keys / WASD / buttons. Grey blocks are deadly walls — plan your route.',eng:'snake2',cfg:{speed:125,walls:[[10,4],[10,5],[10,6],[10,13],[10,14],[10,15],[4,10],[5,10],[14,10],[15,10]]}},
 {id:'rocketflap',title:'Rocket Flight',cat:'arcade',catLabel:'Arcade',color:'#4338ca',icon:'🚀',diff:'Hard',time:'1–3 min',desc:'Pilot a rocket through the asteroid gates in this Flappy-style flight.',help:'Click, tap or press Space to thrust. Pass through the purple gates to score.',eng:'flappy2',cfg:{icon:'🚀',pipe:'#7c3aed',bg:'#1e1b4b'}},
 {id:'beeflap',title:'Bee Flight',cat:'arcade',catLabel:'Arcade',color:'#a16207',icon:'🐝',diff:'Medium',time:'1–3 min',desc:'A gentler flight with wider gates — buzz the bee through the vines.',help:'Click, tap or press Space to flap. Wider gates than Rocket Flight.',eng:'flappy2',cfg:{icon:'🐝',pipe:'#16a34a',bg:'#fefce8',gap:150,speed:2.3}},
 {id:'breakoutturbo',title:'Breakout Turbo',cat:'arcade',catLabel:'Arcade',color:'#c2410c',icon:'🔥',diff:'Hard',time:'3–6 min',desc:'Six rows of bricks and a faster ball — Breakout for experts.',help:'Mouse, finger or click to launch. Clear all 48 bricks with 3 lives.',eng:'breakout2',cfg:{rows:6,speed:4.4}},
 {id:'piano',title:'Piano Tiles',cat:'arcade',catLabel:'Arcade',color:'#111827',icon:'🎹',diff:'Medium',time:'1–3 min',desc:'Tap the falling tiles before they hit the bottom. Three misses ends the song.',help:'Click each falling tile before it leaves the screen. Miss 3 and the song ends.',eng:'tiles'},
 {id:'bubblepop',title:'Bubble Pop',cat:'puzzle',catLabel:'Puzzle',color:'#0284c7',icon:'🫧',diff:'Easy',time:'3–6 min',desc:'Click connected bubbles of the same colour to pop them in big chains.',help:'Click any bubble in a group of 2+ same-colour neighbours. Bigger groups score far more.',eng:'pop',cfg:{n:8,colors:4}},
 {id:'gemcrush',title:'Gem Crush',cat:'puzzle',catLabel:'Puzzle',color:'#9333ea',icon:'💠',diff:'Medium',time:'3–6 min',desc:'A 10×10 field of gems — chain the biggest colour groups you can find.',help:'Click a gem in a group of 2+ same-colour neighbours to crush the whole group.',eng:'pop',cfg:{n:10,colors:5}},
 {id:'stacktower',title:'Stack Tower',cat:'arcade',catLabel:'Arcade',color:'#b45309',icon:'🏗️',diff:'Medium',time:'2–4 min',desc:'Drop moving blocks onto the tower — overhangs get sliced off.',help:'Click Drop (or tap the canvas) when the moving block lines up. Misalignment shrinks the next block.',eng:'stack',cfg:{speed:3.2}},
 {id:'blockdrop',title:'Block Drop Pro',cat:'arcade',catLabel:'Arcade',color:'#7c2d12',icon:'🧱',diff:'Hard',time:'2–4 min',desc:'Stack Tower at double pace — precision or a very short tower.',help:'Click Drop when the fast block lines up. Overhangs are sliced away.',eng:'stack',cfg:{speed:5}},
];
const grid=document.getElementById('gameGrid');
function renderGrid(){
 grid.innerHTML=GAMES.map(g=>`<article class="card" data-title="${g.title.toLowerCase()}" data-search="${(g.title+' '+g.catLabel+' '+g.cat+' '+g.desc).toLowerCase()}" data-cat="${g.cat}">
  <div class="thumb" style="background:${g.color}"><span class="big">${g.icon}</span><b>${g.catLabel.toUpperCase()}</b></div>
  <div class="card-body"><h3>${g.title}</h3><p>${g.desc}</p>
  <div class="meta"><span class="tag">${g.diff}</span><span class="tag">${g.time}</span><span class="tag">Free • No Download</span></div>
  <a class="btn btn-orange play" href="/games/${g.id}.html">▶ Play Now</a></div></article>`).join('');
}
if(grid)renderGrid();

let cleanup=null, paused=false, currentId='snake';
const stage=document.getElementById('stage');
var _pills=document.getElementById('pills');
if(_pills)_pills.addEventListener('click',e=>{
 if(!e.target.matches('.pill'))return;
 document.querySelectorAll('.pill').forEach(p=>p.classList.remove('active')); e.target.classList.add('active');
 filterGames();
});
var _srch=document.getElementById('search');
if(_srch)_srch.addEventListener('input',filterGames);
function filterGames(){
 const q=document.getElementById('search').value.trim().toLowerCase();
 const f=document.querySelector('.pill.active').dataset.f; let vis=0;
 document.querySelectorAll('.card').forEach(c=>{
   const ok=(f==='all'||c.dataset.cat===f)&&(!q||c.dataset.search.includes(q));
   c.style.display=ok?'':'none'; if(ok)vis++;
 });
 document.getElementById('noResult').style.display=vis?'none':'block';
}
var _rb=document.getElementById('restartBtn');
if(_rb)_rb.addEventListener('click',()=>openGame(currentId,true));
var _pb2=document.getElementById('pauseBtn');
if(_pb2)_pb2.addEventListener('click',function(){paused=!paused;this.textContent=paused?'▶ Resume':'⏸ Pause';});

function setStage(html){ if(cleanup){try{cleanup()}catch(e){} cleanup=null;} paused=false; var _pb=document.getElementById('pauseBtn'); if(_pb)_pb.textContent='⏸ Pause'; stage.innerHTML=html; }
function hud(items){return `<div class="hud">${items.map(i=>`<span>${i}</span>`).join('')}</div>`}
function openGame(id,stay){
 const g=GAMES.find(x=>x.id===id); if(!g)return; currentId=id;
 var _pt=document.getElementById('playerTitle'); if(_pt)_pt.textContent='Game Player — '+g.title;
 var _pd=document.getElementById('playerDesc'); if(_pd)_pd.textContent=g.help;
 var _np=document.getElementById('nowPlaying'); if(_np)_np.textContent='Now Playing: '+g.title;
 if(!stay){var _pl=document.getElementById('player'); if(_pl)_pl.scrollIntoView({behavior:'smooth'});}
 const classicMap={snake:initSnake,memory:initMemory,g2048:init2048,breakout:initBreakout,flappy:initFlappy,ttt:initTTT,mine:initMine};
 if(classicMap[id])classicMap[id]();else initGeneric(id);
}

/* SNAKE */
function initSnake(){
 setStage(`${hud(['Score: <b id="sScore">0</b>','Best: <b id="sBest">0</b>','Speed: Normal'])}<canvas id="cv" width="400" height="400"></canvas><p class="help">Press Start, then steer with arrow keys / WASD.</p><button class="pbtn primary" id="sStart">▶ Start Game</button><div class="touch"><button data-d="left">←</button><button data-d="up">↑</button><button data-d="down">↓</button><button data-d="right">→</button></div>`);
 const ctx=stage.querySelector('#cv').getContext('2d'), N=20, S=20;
 let snake,dir,queue,food,score=0,best=0,timer=null,alive=false,running=false;
 function place(){ // food never lands on the snake's body
  const free=[]; for(let x=0;x<N;x++)for(let y=0;y<N;y++) if(!snake.some(p=>p.x===x&&p.y===y)) free.push({x,y});
  food=free[Math.floor(Math.random()*free.length)];
 }
 function turn(d){ // queue turns, but never allow a 180° reversal into your own neck
  const last=queue.length?queue[queue.length-1]:dir;
  if(!last||(d.x!==-last.x||d.y!==-last.y)&&(d.x!==last.x||d.y!==last.y)&&queue.length<3) queue.push(d);
 }
 function draw(){ctx.fillStyle='#0f172a';ctx.fillRect(0,0,400,400);ctx.fillStyle='#ef4444';ctx.fillRect(food.x*S+2,food.y*S+2,16,16);snake.forEach((p,i)=>{ctx.fillStyle=i?'#22c55e':'#bbf7d0';ctx.fillRect(p.x*S+1,p.y*S+1,18,18)});}
 function reset(){snake=[{x:9,y:10},{x:8,y:10},{x:7,y:10}];dir={x:1,y:0};queue=[];score=0;alive=true;place();stage.querySelector('#sScore').textContent=0;draw();}
 function step(){ if(paused||!alive)return; if(queue.length)dir=queue.shift(); const h={x:snake[0].x+dir.x,y:snake[0].y+dir.y};
  const willEat=h.x===food.x&&h.y===food.y;
  const body=willEat?snake:snake.slice(0,-1); // the tail cell you are leaving is not a collision
  if(h.x<0||h.y<0||h.x>=N||h.y>=N||body.some(p=>p.x===h.x&&p.y===h.y)){alive=false;running=false;best=Math.max(best,score);stage.querySelector('#sBest').textContent=best;alertInStage('Game Over! Score: '+score+' — press Start to play again.');clearInterval(timer);timer=null;return;}
  snake.unshift(h); if(willEat){score+=10;stage.querySelector('#sScore').textContent=score;place();}else snake.pop(); draw();}
 function start(){reset();clearInterval(timer);timer=setInterval(step,130);running=true;}
 const DIRS={arrowup:{x:0,y:-1},w:{x:0,y:-1},arrowdown:{x:0,y:1},s:{x:0,y:1},arrowleft:{x:-1,y:0},a:{x:-1,y:0},arrowright:{x:1,y:0},d:{x:1,y:0}};
 const kd=e=>{if(/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)||e.target.isContentEditable)return; const k=e.key.toLowerCase(); if(DIRS[k]){if(!running)start(); turn(DIRS[k]); e.preventDefault();} if(k===' ')e.preventDefault();};
 document.addEventListener('keydown',kd);
 stage.querySelector('#sStart').onclick=start;
 stage.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>{const d=b.dataset.d; if(!running)start(); turn(d==='up'?{x:0,y:-1}:d==='down'?{x:0,y:1}:d==='left'?{x:-1,y:0}:{x:1,y:0});});
 reset(); cleanup=()=>{clearInterval(timer);document.removeEventListener('keydown',kd);};
}
function alertInStage(msg){const p=document.createElement('p');p.className='help';p.style.color='#fca5a5';p.style.fontWeight='900';p.textContent=msg;stage.appendChild(p);}

/* MEMORY */
function initMemory(){
 const em=['🍎','🍌','🍇','🍓','🍊','🍉','🥝','🍒']; let cards=[...em,...em].sort(()=>Math.random()-.5),done=0,moves=0,lock=false,first=null,flipTimer=null;
 setStage(`${hud(['Moves: <b id="mMoves">0</b>','Pairs: <b id="mPairs">0</b> / 8'])}<div class="mem">${cards.map((c,i)=>`<button data-i="${i}">?</button>`).join('')}</div><p class="help">Find all 8 pairs.</p>`);
 stage.querySelectorAll('.mem button').forEach(btn=>btn.onclick=()=>{
  if(paused||lock||btn.classList.contains('open')||btn.classList.contains('done'))return;
  const i=+btn.dataset.i; btn.textContent=cards[i]; btn.classList.add('open');
  if(first===null){first={i,btn};return;}
  moves++; stage.querySelector('#mMoves').textContent=moves;
  if(cards[first.i]===cards[i]){first.btn.classList.add('done');btn.classList.add('done');done++;stage.querySelector('#mPairs').textContent=done;first=null;if(done===8)alertInStage('🎉 You win in '+moves+' moves! Press Restart to play again.');}
  else{lock=true;const f=first;first=null;flipTimer=setTimeout(()=>{f.btn.textContent='?';btn.textContent='?';f.btn.classList.remove('open');btn.classList.remove('open');lock=false;flipTimer=null;},650);}
 }); cleanup=()=>{if(flipTimer)clearTimeout(flipTimer);};
}

/* 2048 */
function init2048(){
 let b=Array(16).fill(0),score=0,over=false,won=false;
 setStage(`${hud(['Score: <b id="gScore">0</b>'])}<div class="g2048" id="gBoard"></div><p class="help">Use arrow keys / WASD. On mobile, use the buttons below.</p><div class="touch always"><button data-m="left">←</button><button data-m="up">↑</button><button data-m="down">↓</button><button data-m="right">→</button></div>`);
 const board=stage.querySelector('#gBoard');
 const colors={0:'#334155',2:'#fef3c7',4:'#fde68a',8:'#f59e0b',16:'#f97316',32:'#ef4444',64:'#dc2626',128:'#facc15',256:'#eab308',512:'#22c55e',1024:'#0ea5e9',2048:'#ff4d1c'};
 function add(){const e=b.map((v,i)=>v?null:i).filter(v=>v!==null); if(e.length)b[e[Math.floor(Math.random()*e.length)]]=Math.random()<.9?2:4;}
 function draw(){board.innerHTML=b.map(v=>`<div style="background:${colors[v]||'#7c3aed'};color:${v<=4&&v?'#0f172a':'#fff'}">${v||''}</div>`).join(''); stage.querySelector('#gScore').textContent=score;}
 function slide(row){row=row.filter(Boolean); for(let i=0;i<row.length-1;i++){if(row[i]===row[i+1]){row[i]*=2;score+=row[i];row.splice(i+1,1);}} return [...row,...Array(4-row.length).fill(0)];}
 function move(dir){ if(over||paused)return; const old=b.join(','); let nb=Array(16).fill(0);
  const idx=(i,j)=>dir==='left'?i*4+j:dir==='right'?i*4+(3-j):dir==='up'?j*4+i:(3-j)*4+i;
  for(let i=0;i<4;i++){const line=[0,1,2,3].map(j=>b[idx(i,j)]); const s=slide(line); for(let j=0;j<4;j++)nb[idx(i,j)]=s[j];}
  b=nb; if(b.join(',')!==old){add();draw();
   if(!won&&b.includes(2048)){won=true;alertInStage('🎉 You made the 2048 tile! Keep going for a higher score, or press Restart.');}
   if(!can()){over=true;alertInStage('Game Over! Final score: '+score);}}}
 function can(){if(b.includes(0))return true; for(let i=0;i<4;i++)for(let j=0;j<4;j++){const v=b[i*4+j]; if(j<3&&b[i*4+j+1]===v)return true; if(i<3&&b[(i+1)*4+j]===v)return true;} return false;}
 const kd=e=>{if(/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)||e.target.isContentEditable)return; const k=e.key.toLowerCase(); const m={arrowleft:'left',a:'left',arrowright:'right',d:'right',arrowup:'up',w:'up',arrowdown:'down',s:'down'}[k]; if(m){e.preventDefault();move(m);}};
 document.addEventListener('keydown',kd);
 stage.querySelectorAll('[data-m]').forEach(x=>x.onclick=()=>move(x.dataset.m));
 add();add();draw(); cleanup=()=>document.removeEventListener('keydown',kd);
}

/* BREAKOUT */
function initBreakout(){
 setStage(`${hud(['Score: <b id="bScore">0</b>','Lives: <b id="bLives">3</b>'])}<canvas id="bcv" width="480" height="360"></canvas><p class="help">Move mouse / finger / ← → keys. Click canvas to launch the ball.</p>`);
 const cv=stage.querySelector('#bcv'),ctx=cv.getContext('2d'); let px=190,bx=240,by=330,dx=3,dy=-3,score=0,lives=3,raf,started=false,over=false;
 let bricks=[]; for(let r=0;r<5;r++)for(let c=0;c<8;c++)bricks.push({x:12+c*57,y:30+r*24,w:50,h:16,on:true,c:['#ef4444','#f59e0b','#22c55e','#3b82f6','#ec4899'][r]});
 function draw(){ctx.fillStyle='#0f172a';ctx.fillRect(0,0,480,360); bricks.forEach(br=>{if(br.on){ctx.fillStyle=br.c;ctx.fillRect(br.x,br.y,br.w,br.h);}}); ctx.fillStyle='#fff';ctx.fillRect(px,340,100,12); ctx.beginPath();ctx.arc(bx,by,8,0,7);ctx.fill();
  if(!paused&&started&&!over){bx+=dx;by+=dy; if(bx<8){bx=8;dx=Math.abs(dx);} if(bx>472){bx=472;dx=-Math.abs(dx);} if(by<8){by=8;dy=Math.abs(dy);}
   if(dy>0&&by>=332&&by<=352&&bx>px-8&&bx<px+108){const rel=Math.max(-1,Math.min(1,(bx-(px+50))/50)); dx=4*rel; dy=-Math.sqrt(Math.max(4,25-dx*dx)); by=332;} // edge hits rebound at a sharper angle
   for(const br of bricks){if(br.on&&bx+8>br.x&&bx-8<br.x+br.w&&by+8>br.y&&by-8<br.y+br.h){br.on=false;dy*=-1;score+=10;stage.querySelector('#bScore').textContent=score;break;}} // one brick per frame, so the ball can't tunnel through two
   if(by>368){lives--;stage.querySelector('#bLives').textContent=lives; if(lives<=0){over=true;alertInStage('Game Over! Score: '+score+' — press Restart to play again.');} else {bx=px+50;by=330;dx=3;dy=-3;started=false;}}
   else if(bricks.every(b=>!b.on)){over=true;alertInStage('🎉 You cleared all bricks! Score: '+score);}}
  raf=requestAnimationFrame(draw);}
 const mm=e=>{const r=cv.getBoundingClientRect(); const x=(e.touches?e.touches[0].clientX:e.clientX)-r.left; px=Math.max(0,Math.min(380,x*(480/r.width)-50)); if(!started&&!over){bx=px+50;by=330;}};
 cv.addEventListener('mousemove',mm); cv.addEventListener('touchmove',mm,{passive:true}); cv.addEventListener('click',()=>{if(!over)started=true;});
 const kd=e=>{if(/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)||e.target.isContentEditable)return; if(e.key==='ArrowLeft'){px=Math.max(0,px-24);e.preventDefault();} if(e.key==='ArrowRight'){px=Math.min(380,px+24);e.preventDefault();} if(e.key===' '){e.preventDefault(); if(!over)started=true;}};
 document.addEventListener('keydown',kd); draw(); cleanup=()=>{cancelAnimationFrame(raf);document.removeEventListener('keydown',kd);};
}

/* FLAPPY */
function initFlappy(){
 setStage(`${hud(['Score: <b id="fScore">0</b>'])}<canvas id="fcv" width="400" height="480"></canvas><button class="pbtn primary" id="fStart">▶ Start / Flap</button><p class="help">Click the canvas, tap Start, or press Space.</p>`);
 const cv=stage.querySelector('#fcv'),ctx=cv.getContext('2d'); let y=220,v=0,pipes=[],score=0,raf,run=false,frame=0;
 function reset(){y=220;v=0;pipes=[];score=0;frame=0;run=true;stage.querySelector('#fScore').textContent=0;}
 function loop(){ctx.fillStyle='#7dd3fc';ctx.fillRect(0,0,400,480);ctx.fillStyle='#22c55e';ctx.fillRect(0,440,400,40);
  if(run&&!paused){v+=0.45;y+=v; if(y<16){y=16;v=0;} frame++; if(frame%95===0)pipes.push({x:400,top:60+Math.random()*220,passed:false});
   pipes.forEach(p=>{p.x-=2.6; if(!p.passed&&p.x+52<110){p.passed=true;score++;stage.querySelector('#fScore').textContent=score;}});
   pipes=pipes.filter(p=>p.x>-60);
   // collision uses the bird's real radius (16px), not a single point — no more unfair deaths at the pipe edge
   if(y>424||pipes.some(p=>110+16>p.x&&110-16<p.x+52&&(y-16<p.top||y+16>p.top+130))){run=false;alertInStage('Game Over! Score: '+score+' — tap Start / Flap to try again.');}}
  ctx.fillStyle='#16a34a'; pipes.forEach(p=>{ctx.fillRect(p.x,0,52,p.top);ctx.fillRect(p.x,p.top+130,52,480);});
  ctx.fillStyle='#facc15';ctx.beginPath();ctx.arc(110,y,16,0,7);ctx.fill();ctx.fillStyle='#0f172a';ctx.fillRect(118,y-3,4,4);
  raf=requestAnimationFrame(loop);}
 function flap(){if(!run)reset(); v=-7.5;}
 cv.addEventListener('pointerdown',flap); stage.querySelector('#fStart').onclick=flap;
 const kd=e=>{if(/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)||e.target.isContentEditable)return; if(e.key===' '){e.preventDefault();flap();}}; document.addEventListener('keydown',kd);
 loop(); cleanup=()=>{cancelAnimationFrame(raf);document.removeEventListener('keydown',kd);};
}

/* TIC TAC TOE */
function initTTT(){
 let board=Array(9).fill(''),turn='X',done=false;
 setStage(`${hud(['You: X','Computer: O','Status: <b id="tStatus">Your move</b>'])}<div class="ttt">${board.map((_,i)=>`<button data-i="${i}"></button>`).join('')}</div>`);
 const btns=[...stage.querySelectorAll('.ttt button')];
 function win(b){const L=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]; return L.find(l=>b[l[0]]&&b[l[0]]===b[l[1]]&&b[l[1]]===b[l[2]]);}
 function end(msg){done=true;stage.querySelector('#tStatus').textContent=msg;alertInStage(msg+' — Press Restart for a new game.');}
 function ai(){const empty=board.map((v,i)=>v?null:i).filter(v=>v!==null); if(!empty.length||done)return;
  // win if possible, block if needed, else centre/random
  let pick=null; for(const mark of ['O','X']){for(const i of empty){board[i]=mark; if(win(board)){pick=i;board[i]='';break;} board[i]='';} if(pick!==null)break;}
  if(pick===null)pick=board[4]===''?4:empty[Math.floor(Math.random()*empty.length)];
  board[pick]='O'; btns[pick].textContent='O';}
 btns.forEach(b=>b.onclick=()=>{const i=+b.dataset.i; if(paused||done||board[i])return; board[i]='X';b.textContent='X';
  if(win(board))return end('🎉 You win!'); if(board.every(Boolean))return end('Draw!');
  ai(); if(win(board))return end('Computer wins!'); if(board.every(Boolean))return end('Draw!'); stage.querySelector('#tStatus').textContent='Your move';});
 cleanup=()=>{};
}

/* MINESWEEPER */
function initMine(){
 const MINES=10; let mines=null,revealed=new Set(),flagMode=false,dead=false,wonGame=false;
 setStage(`${hud(['Mines: 10','Revealed: <b id="mnR">0</b> / 71'])}<div class="mine">${Array.from({length:81},(_,i)=>`<button data-i="${i}"></button>`).join('')}</div><button class="pbtn" id="flagBtn">🚩 Flag Mode: OFF</button><p class="help">Tap to reveal — your first tap is always safe. Turn Flag Mode ON, then tap a square to flag a suspected mine.</p>`);
 const btns=[...stage.querySelectorAll('.mine button')];
 stage.querySelector('#flagBtn').onclick=function(){flagMode=!flagMode;this.textContent='🚩 Flag Mode: '+(flagMode?'ON':'OFF');this.classList.toggle('primary',flagMode);};
 function neighbors(i){const x=i%9,y=Math.floor(i/9),out=[]; for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){if(!dx&&!dy)continue; const nx=x+dx,ny=y+dy; if(nx>=0&&nx<9&&ny>=0&&ny<9)out.push(ny*9+nx);} return out;}
 function placeMines(safe){ // mines are placed on the first click, away from that square and its neighbours
  mines=new Set(); const banned=new Set([safe,...neighbors(safe)]);
  while(mines.size<MINES){const m=Math.floor(Math.random()*81); if(!banned.has(m))mines.add(m);}
 }
 function count(i){return neighbors(i).filter(n=>mines.has(n)).length;}
 function reveal(i){if(revealed.has(i)||dead||wonGame)return; const b=btns[i]; if(b.textContent==='🚩')return; // flags are respected, including during flood-fill
  revealed.add(i); b.classList.add('open');
  if(mines.has(i)){b.textContent='💣';dead=true;alertInStage('💥 Boom! You hit a mine. Press Restart to try again.'); mines.forEach(m=>{if(btns[m].textContent!=='🚩')btns[m].textContent='💣';}); return;}
  const c=count(i); b.textContent=c||''; stage.querySelector('#mnR').textContent=revealed.size;
  if(c===0)neighbors(i).forEach(reveal);
  if(revealed.size===71){wonGame=true;alertInStage('🎉 You cleared the board! You win!');}}
 btns.forEach(b=>b.onclick=()=>{const i=+b.dataset.i; if(paused||dead||wonGame)return; if(flagMode){if(!revealed.has(i))b.textContent=b.textContent==='🚩'?'':'🚩';return;} if(b.textContent==='🚩')return; if(!mines)placeMines(i); reveal(i);});
 cleanup=()=>{};
}


/* ===== GENERIC ENGINES for the extended catalogue ===== */
function initGeneric(id){const g=GAMES.find(x=>x.id===id);if(!g)return;const E={target:engTarget,catch:engCatch,dodge:engDodge,race:engRace,shooter:engShooter,pong:engPong,jump:engJump,timing:engTiming,reaction:engReaction,quiz:engQuiz,simon:engSimon,memgrid:engMemgrid,anagram:engAnagram,hangman:engHangman,typing:engTyping,numguess:engNumguess,rps:engRPS,dice:engDice,hl:engHL,connect4:engConnect4,tttx:engTTTX,reversi:engReversi,lights:engLights,sliding:engSliding,hanoi:engHanoi,sudoku:engSudoku,flood:engFlood,maze:engMaze,snake2:engSnake2,flappy2:engFlappy2,breakout2:engBreakout2,tiles:engTiles,stroop:engStroop,reflex:engReflex,odd:engOdd,pop:engPop,stack:engStack,penalty:engPenalty,coin:engCoin,war:engWar,blackjack:engBlackjack,wordle:engWordle,seq:engSeq,clicker:engClicker}[g.eng];if(E)E(g);}
function rand(a){return a[Math.floor(Math.random()*a.length)];}
function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}

function engTarget(g){const c=g.cfg||{};const secs=c.secs||30,size=c.size||9;let score=0,time=secs,cur=-1,t1,t2,over=false;
 setStage(`${hud(['Score: <b id="tSc">0</b>','Time: <b id="tTm">'+secs+'</b>s'])}<div style="display:grid;grid-template-columns:repeat(3,84px);gap:10px">${Array.from({length:size},(_,i)=>`<button data-i="${i}" style="height:84px;border-radius:14px;border:0;font-size:38px;background:#1e293b;cursor:pointer;color:#fff"></button>`).join('')}</div><p class="help">${g.help}</p>`);
 const btns=[...stage.querySelectorAll('button[data-i]')];
 function spawn(){btns.forEach(b=>{b.textContent='';b.style.background='#1e293b';});cur=Math.floor(Math.random()*size);const bad=c.bad&&Math.random()<0.22;btns[cur].textContent=bad?c.bad:c.icon;btns[cur].dataset.bad=bad?'1':'';btns[cur].style.background=bad?'#7f1d1d':'#334155';}
 btns.forEach(b=>b.onclick=()=>{if(paused||over||+b.dataset.i!==cur)return;if(b.dataset.bad){score=Math.max(0,score-2);}else{score+=(c.pts||1);}stage.querySelector('#tSc').textContent=score;spawn();});
 spawn();
 t1=setInterval(()=>{if(paused||over)return;spawn();},c.speed||800);
 t2=setInterval(()=>{if(paused||over)return;time--;stage.querySelector('#tTm').textContent=time;if(time<=0){over=true;clearInterval(t1);clearInterval(t2);alertInStage('Time up! Final score: '+score+' — press Restart to play again.');}},1000);
 cleanup=()=>{clearInterval(t1);clearInterval(t2);};}
function engCatch(g){const c=g.cfg||{};setStage(`${hud(['Score: <b id="cSc">0</b>','Lives: <b id="cLv">3</b>'])}<canvas width="400" height="440"></canvas><p class="help">${g.help}</p><div class="touch"><button data-m="l">←</button><button data-m="r">→</button></div>`);
 const cv=stage.querySelector('canvas'),ctx=cv.getContext('2d');let px=170,items=[],score=0,lives=3,raf,frame=0,over=false;
 function loop(){ctx.fillStyle=c.bg||'#0f172a';ctx.fillRect(0,0,400,440);ctx.font='34px serif';ctx.fillText(c.basket||'🧺',px,428);
  if(!paused&&!over){frame++;if(frame%(c.rate||55)===0){const bad=c.bad&&Math.random()<0.2;items.push({x:20+Math.random()*350,y:-20,bad,sp:(c.speed||2.4)+Math.random()*1.4});}
   items.forEach(it=>{it.y+=it.sp;ctx.fillText(it.bad?c.bad:c.icon,it.x,it.y);});
   items=items.filter(it=>{if(it.y>400&&it.y<440&&Math.abs(it.x-px)<46){if(it.bad){lives--;}else{score+=(c.pts||1);}stage.querySelector('#cSc').textContent=score;stage.querySelector('#cLv').textContent=lives;if(lives<=0){over=true;alertInStage('Game over! Score: '+score+' — press Restart.');}return false;}if(it.y>448){if(!it.bad){lives--;stage.querySelector('#cLv').textContent=lives;if(lives<=0){over=true;alertInStage('Game over! Score: '+score+' — press Restart.');}}return false;}return true;});}
  raf=requestAnimationFrame(loop);}
 const mv=e=>{const r=cv.getBoundingClientRect();const x=(e.touches?e.touches[0].clientX:e.clientX)-r.left;px=Math.max(0,Math.min(360,x*(400/r.width)-20));};
 cv.addEventListener('mousemove',mv);cv.addEventListener('touchmove',mv,{passive:true});
 const kd=e=>{if(e.key==='ArrowLeft')px=Math.max(0,px-26);if(e.key==='ArrowRight')px=Math.min(360,px+26);};document.addEventListener('keydown',kd);
 stage.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{px=b.dataset.m==='l'?Math.max(0,px-40):Math.min(360,px+40);});
 loop();cleanup=()=>{cancelAnimationFrame(raf);document.removeEventListener('keydown',kd);};}
function engDodge(g){const c=g.cfg||{};setStage(`${hud(['Score: <b id="dSc">0</b>'])}<canvas width="400" height="440"></canvas><p class="help">${g.help}</p><div class="touch"><button data-m="l">←</button><button data-m="u">↑</button><button data-m="d">↓</button><button data-m="r">→</button></div>`);
 const cv=stage.querySelector('canvas'),ctx=cv.getContext('2d');let px=185,py=380,obs=[],score=0,raf,frame=0,over=false;
 function loop(){ctx.fillStyle=c.bg||'#020617';ctx.fillRect(0,0,400,440);ctx.font='32px serif';ctx.fillText(c.icon,px,py+30);
  if(!paused&&!over){frame++;score=Math.floor(frame/10);stage.querySelector('#dSc').textContent=score;if(frame%(c.rate||38)===0)obs.push({x:Math.random()*360,y:-30,sp:(c.speed||3)+Math.random()*2});
   obs.forEach(o=>{o.y+=o.sp;ctx.fillText(c.obs,o.x,o.y+26);if(Math.abs(o.x-px)<30&&Math.abs(o.y-py)<30){over=true;alertInStage('Crash! Score: '+score+' — press Restart.');}});
   obs=obs.filter(o=>o.y<450);}
  raf=requestAnimationFrame(loop);}
 const kd=e=>{const k=e.key;if(k==='ArrowLeft')px=Math.max(0,px-24);if(k==='ArrowRight')px=Math.min(365,px+24);if(k==='ArrowUp')py=Math.max(0,py-24);if(k==='ArrowDown')py=Math.min(405,py+24);if(k.startsWith('Arrow'))e.preventDefault();};document.addEventListener('keydown',kd);
 stage.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{const m=b.dataset.m;if(m==='l')px=Math.max(0,px-34);if(m==='r')px=Math.min(365,px+34);if(m==='u')py=Math.max(0,py-34);if(m==='d')py=Math.min(405,py+34);});
 loop();cleanup=()=>{cancelAnimationFrame(raf);document.removeEventListener('keydown',kd);};}
function engRace(g){const c=g.cfg||{};setStage(`${hud(['Distance: <b id="rSc">0</b>m'])}<canvas width="360" height="460"></canvas><p class="help">${g.help}</p><div class="touch"><button data-m="l">←</button><button data-m="r">→</button></div>`);
 const cv=stage.querySelector('canvas'),ctx=cv.getContext('2d');let lane=1,obs=[],dist=0,raf,frame=0,over=false;const LX=[50,155,260];
 function loop(){ctx.fillStyle='#1f2937';ctx.fillRect(0,0,360,460);ctx.strokeStyle='#facc15';ctx.setLineDash([24,18]);ctx.lineDashOffset=frame*4;[120,240].forEach(x=>{ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,460);ctx.stroke();});ctx.setLineDash([]);
  ctx.font='40px serif';ctx.fillText(c.icon,LX[lane],420);
  if(!paused&&!over){frame++;dist+=c.speed||3;stage.querySelector('#rSc').textContent=Math.floor(dist);
   if(frame%(c.rate||52)===0)obs.push({lane:Math.floor(Math.random()*3),y:-50});
   obs.forEach(o=>{o.y+=c.speed||3;ctx.fillText(c.obs,LX[o.lane],o.y+40);if(o.lane===lane&&o.y>340&&o.y<420){over=true;alertInStage('Crash! You covered '+Math.floor(dist)+'m — press Restart.');}});
   obs=obs.filter(o=>o.y<480);}
  raf=requestAnimationFrame(loop);}
 const kd=e=>{if(e.key==='ArrowLeft'){lane=Math.max(0,lane-1);e.preventDefault();}if(e.key==='ArrowRight'){lane=Math.min(2,lane+1);e.preventDefault();}};document.addEventListener('keydown',kd);
 cv.addEventListener('pointerdown',e=>{const r=cv.getBoundingClientRect();lane=(e.clientX-r.left)<r.width/2?Math.max(0,lane-1):Math.min(2,lane+1);});
 stage.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{lane=b.dataset.m==='l'?Math.max(0,lane-1):Math.min(2,lane+1);});
 loop();cleanup=()=>{cancelAnimationFrame(raf);document.removeEventListener('keydown',kd);};}
function engShooter(g){setStage(`${hud(['Score: <b id="shSc">0</b>','Hull: <b id="shLv">3</b>'])}<canvas width="400" height="440"></canvas><p class="help">${g.help}</p><div class="touch"><button data-m="l">←</button><button data-m="f">🔥</button><button data-m="r">→</button></div>`);
 const cv=stage.querySelector('canvas'),ctx=cv.getContext('2d');let px=180,shots=[],foes=[],score=0,lives=3,raf,frame=0,over=false;
 function fire(){if(!over)shots.push({x:px+14,y:370});}
 function loop(){ctx.fillStyle='#020617';ctx.fillRect(0,0,400,440);ctx.font='32px serif';ctx.fillText('🚀',px,412);
  if(!paused&&!over){frame++;if(frame%55===0)foes.push({x:Math.random()*360,y:-30});
   shots.forEach(s=>{s.y-=7;ctx.fillStyle='#facc15';ctx.fillRect(s.x,s.y,4,12);});
   foes.forEach(f=>{f.y+=1.7;ctx.fillText('👾',f.x,f.y+28);if(f.y>390){lives--;stage.querySelector('#shLv').textContent=lives;f.y=9999;if(lives<=0){over=true;alertInStage('Ship destroyed! Score: '+score+' — press Restart.');}}});
   shots=shots.filter(s=>s.y>-14);foes=foes.filter(f=>f.y<450);
   shots.forEach(s=>{foes.forEach(f=>{if(Math.abs(s.x-f.x-12)<24&&Math.abs(s.y-f.y-12)<24){f.y=9999;s.y=-99;score+=10;stage.querySelector('#shSc').textContent=score;}});});
   foes=foes.filter(f=>f.y<450);}
  raf=requestAnimationFrame(loop);}
 const kd=e=>{if(e.key==='ArrowLeft')px=Math.max(0,px-22);if(e.key==='ArrowRight')px=Math.min(360,px+22);if(e.key===' '){e.preventDefault();fire();}};document.addEventListener('keydown',kd);
 cv.addEventListener('pointerdown',e=>{const r=cv.getBoundingClientRect();px=Math.max(0,Math.min(360,(e.clientX-r.left)*(400/r.width)-18));fire();});
 stage.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{const m=b.dataset.m;if(m==='l')px=Math.max(0,px-34);if(m==='r')px=Math.min(360,px+34);if(m==='f')fire();});
 loop();cleanup=()=>{cancelAnimationFrame(raf);document.removeEventListener('keydown',kd);};}
function engPong(g){setStage(`${hud(['You: <b id="pYou">0</b>','CPU: <b id="pCpu">0</b>'])}<canvas width="440" height="320"></canvas><p class="help">${g.help}</p>`);
 const cv=stage.querySelector('canvas'),ctx=cv.getContext('2d');let py=120,cy=120,bx=220,by=160,dx=3.4,dy=2.6,you=0,cpu=0,raf;
 function loop(){ctx.fillStyle='#0f172a';ctx.fillRect(0,0,440,320);ctx.fillStyle='#fff';ctx.fillRect(8,py,10,64);ctx.fillRect(422,cy,10,64);ctx.beginPath();ctx.arc(bx,by,8,0,7);ctx.fill();
  if(!paused){cy+=Math.max(-3.1,Math.min(3.1,(by-32)-cy));bx+=dx;by+=dy;if(by<8||by>312)dy*=-1;
   if(bx<26&&by>py&&by<py+64){dx=Math.abs(dx)*1.03;} if(bx>414&&by>cy&&by<cy+64){dx=-Math.abs(dx)*1.03;}
   if(bx<-10){cpu++;stage.querySelector('#pCpu').textContent=cpu;bx=220;by=160;dx=3.4;} if(bx>450){you++;stage.querySelector('#pYou').textContent=you;bx=220;by=160;dx=-3.4;if(you>=7)alertInStage('You win the match 7 points! Press Restart for a rematch.');}}
  raf=requestAnimationFrame(loop);}
 const mv=e=>{const r=cv.getBoundingClientRect();py=Math.max(0,Math.min(256,((e.touches?e.touches[0].clientY:e.clientY)-r.top)*(320/r.height)-32));};
 cv.addEventListener('mousemove',mv);cv.addEventListener('touchmove',mv,{passive:true});
 const kd=e=>{if(e.key==='ArrowUp'){py=Math.max(0,py-20);e.preventDefault();}if(e.key==='ArrowDown'){py=Math.min(256,py+20);e.preventDefault();}};document.addEventListener('keydown',kd);
 loop();cleanup=()=>{cancelAnimationFrame(raf);document.removeEventListener('keydown',kd);};}
function engJump(g){const c=g.cfg||{};setStage(`${hud(['Score: <b id="jSc">0</b>'])}<canvas width="440" height="260"></canvas><button class="pbtn primary" id="jBtn">⤒ Jump</button><p class="help">${g.help}</p>`);
 const cv=stage.querySelector('canvas'),ctx=cv.getContext('2d');let y=196,vy=0,obs=[],score=0,raf,frame=0,over=false;const GY=196;
 function loop(){ctx.fillStyle=c.bg||'#fef9c3';ctx.fillRect(0,0,440,260);ctx.fillStyle='#78716c';ctx.fillRect(0,232,440,28);ctx.font='36px serif';ctx.fillText(c.icon,50,y);
  if(!paused&&!over){vy+=(c.grav||0.75);y+=vy;if(y>=GY){y=GY;vy=0;}frame++;score=Math.floor(frame/12);stage.querySelector('#jSc').textContent=score;
   if(frame%(c.rate||105)===0)obs.push({x:450});
   obs.forEach(o=>{o.x-=(c.speed||4.4);ctx.fillText(c.obs,o.x,232);if(o.x>42&&o.x<88&&y>GY-26){over=true;alertInStage('Tripped! Score: '+score+' — press Restart.');}});
   obs=obs.filter(o=>o.x>-40);}
  raf=requestAnimationFrame(loop);}
 function jump(){if(y>=GY&&!over)vy=-(c.jump||13);}
 stage.querySelector('#jBtn').onclick=jump;cv.addEventListener('pointerdown',jump);
 const kd=e=>{if(e.key===' '||e.key==='ArrowUp'){e.preventDefault();jump();}};document.addEventListener('keydown',kd);
 loop();cleanup=()=>{cancelAnimationFrame(raf);document.removeEventListener('keydown',kd);};}

function engTiming(g){const c=g.cfg||{};const zone=c.zone||[42,58],rounds=c.rounds||5;let pos=0,dir=1,round=1,total=0,raf,locked=false;
 setStage(`${hud(['Round: <b id="tmR">1</b>/'+rounds,'Points: <b id="tmP">0</b>'])}<canvas width="440" height="150"></canvas><button class="pbtn primary" id="tmBtn">${c.btn||'⏺ Stop!'}</button><p class="help">${g.help}</p>`);
 const ctx=stage.querySelector('canvas').getContext('2d');
 function draw(){ctx.fillStyle='#0f172a';ctx.fillRect(0,0,440,150);ctx.fillStyle='#14532d';ctx.fillRect(30+zone[0]*3.8,55,((zone[1]-zone[0])*3.8),40);ctx.fillStyle='#22c55e';ctx.font='bold 13px sans-serif';ctx.fillText(c.zoneLabel||'SWEET SPOT',30+zone[0]*3.8+4,48);ctx.fillStyle='#e2e8f0';ctx.fillRect(30,55,380,40);ctx.fillStyle='#14532d';ctx.fillRect(30+zone[0]*3.8,55,(zone[1]-zone[0])*3.8,40);ctx.fillStyle='#ef4444';ctx.fillRect(30+pos*3.8-3,42,6,66);ctx.font='30px serif';ctx.fillText(c.icon||'🎯',30+pos*3.8-14,135);}
 function loop(){if(!paused&&!locked){pos+=dir*(c.speed||1.1);if(pos>=100||pos<=0)dir*=-1;pos=Math.max(0,Math.min(100,pos));}draw();raf=requestAnimationFrame(loop);}
 stage.querySelector('#tmBtn').onclick=()=>{if(locked||paused)return;locked=true;let pts=0;const mid=(zone[0]+zone[1])/2;if(pos>=zone[0]&&pos<=zone[1])pts=Math.max(40,100-Math.round(Math.abs(pos-mid)*4));total+=pts;stage.querySelector('#tmP').textContent=total;alertInStage(pts?('Great timing! +'+pts+' points.'):'Missed the zone — 0 points.');
  setTimeout(()=>{if(round>=rounds){alertInStage('Finished! Total: '+total+' / '+(rounds*100)+' — press Restart to play again.');return;}round++;stage.querySelector('#tmR').textContent=round;locked=false;pos=0;},900);};
 loop();cleanup=()=>cancelAnimationFrame(raf);}
function engReaction(g){let state='wait',t0=0,tries=[];
 setStage(`${hud(['Best: <b id="rxB">—</b>','Tries: <b id="rxT">0</b>'])}<button id="rxPad" style="width:min(340px,90%);height:210px;border-radius:16px;border:0;font-size:21px;font-weight:900;background:#334155;color:#fff;cursor:pointer">Tap to start — wait for GREEN, then tap fast!</button><p class="help">${g.help}</p>`);
 const pad=stage.querySelector('#rxPad');let timer=null;
 pad.onclick=()=>{if(paused)return;
  if(state==='wait'){state='armed';pad.style.background='#b91c1c';pad.textContent='Wait for green…';timer=setTimeout(()=>{state='go';t0=performance.now();pad.style.background='#16a34a';pad.textContent='TAP!';},900+Math.random()*2600);}
  else if(state==='armed'){clearTimeout(timer);state='wait';pad.style.background='#334155';pad.textContent='Too soon! Tap to try again.';}
  else if(state==='go'){const ms=Math.round(performance.now()-t0);tries.push(ms);state='wait';pad.style.background='#334155';pad.textContent=ms+' ms — tap to go again';stage.querySelector('#rxT').textContent=tries.length;stage.querySelector('#rxB').textContent=Math.min(...tries)+' ms';}};
 cleanup=()=>{if(timer)clearTimeout(timer);};}
function engQuiz(g){const qs=shuffle(g.cfg.q).slice(0,10);let i=0,score=0;
 setStage(`${hud(['Question: <b id="qN">1</b>/'+qs.length,'Score: <b id="qS">0</b>'])}<div class="box" style="width:min(520px,100%);text-align:left"><h3 id="qQ" style="margin-top:0"></h3><div id="qOpts" style="display:grid;gap:8px"></div><p class="help" id="qMsg"></p></div>`);
 function show(){if(i>=qs.length){stage.querySelector('#qQ').textContent='Quiz complete!';stage.querySelector('#qOpts').innerHTML='';stage.querySelector('#qMsg').textContent='You scored '+score+' / '+qs.length+'. Press Restart to play again with shuffled questions.';return;}
  stage.querySelector('#qN').textContent=i+1;stage.querySelector('#qQ').textContent=qs[i][0];stage.querySelector('#qMsg').textContent='';
  stage.querySelector('#qOpts').innerHTML=qs[i][1].map((o,j)=>`<button class="pbtn" data-j="${j}" style="text-align:left">${o}</button>`).join('');
  stage.querySelectorAll('#qOpts button').forEach(b=>b.onclick=()=>{const j=+b.dataset.j;if(j===qs[i][2]){score++;stage.querySelector('#qS').textContent=score;stage.querySelector('#qMsg').textContent='✅ Correct!';}else{stage.querySelector('#qMsg').textContent='❌ Correct answer: '+qs[i][1][qs[i][2]];}setTimeout(()=>{i++;show();},850);});}
 show();cleanup=()=>{};}
function engSimon(g){const c=g.cfg||{};const pads=c.pads||['🟥','🟦','🟩','🟨'];let seq=[],idx=0,accept=false,round=0;
 setStage(`${hud(['Round: <b id="smR">0</b>'])}<div style="display:grid;grid-template-columns:repeat(${pads.length>4?3:2},84px);gap:10px">${pads.map((p,i)=>`<button data-i="${i}" style="height:84px;font-size:40px;border-radius:14px;border:0;background:#1e293b;cursor:pointer">${p}</button>`).join('')}</div><button class="pbtn primary" id="smGo">▶ Start</button><p class="help" id="smMsg">${g.help}</p>`);
 const btns=[...stage.querySelectorAll('button[data-i]')];let timers=[];
 function flash(i,on){btns[i].style.background=on?'#facc15':'#1e293b';}
 function playSeq(){accept=false;stage.querySelector('#smMsg').textContent='Watch the sequence…';seq.forEach((s,k)=>{timers.push(setTimeout(()=>flash(s,true),500+k*550));timers.push(setTimeout(()=>flash(s,false),850+k*550));});timers.push(setTimeout(()=>{accept=true;idx=0;stage.querySelector('#smMsg').textContent='Your turn — repeat it!';},600+seq.length*550));}
 stage.querySelector('#smGo').onclick=()=>{seq=[];round=0;next();};
 function next(){round++;stage.querySelector('#smR').textContent=round;seq.push(Math.floor(Math.random()*pads.length));playSeq();}
 btns.forEach(b=>b.onclick=()=>{if(!accept||paused)return;const i=+b.dataset.i;flash(i,true);setTimeout(()=>flash(i,false),180);
  if(i===seq[idx]){idx++;if(idx===seq.length){accept=false;stage.querySelector('#smMsg').textContent='✅ Round cleared!';timers.push(setTimeout(next,800));}}
  else{accept=false;stage.querySelector('#smMsg').textContent='❌ Wrong pad! You reached round '+round+'. Press Start to retry.';}});
 cleanup=()=>timers.forEach(clearTimeout);}
function engMemgrid(g){const c=g.cfg||{};const items=c.items;const cols=c.cols||4;let cards=shuffle([...items,...items]),done=0,moves=0,lock=false,first=null,ft=null;
 setStage(`${hud(['Moves: <b id="mgM">0</b>','Pairs: <b id="mgP">0</b>/'+items.length])}<div style="display:grid;grid-template-columns:repeat(${cols},64px);gap:9px">${cards.map((x,i)=>`<button data-i="${i}" style="height:64px;border-radius:12px;border:0;font-size:28px;background:#1e293b;color:#fff;cursor:pointer">?</button>`).join('')}</div><p class="help">${g.help}</p>`);
 stage.querySelectorAll('button[data-i]').forEach(btn=>btn.onclick=()=>{if(paused||lock||btn.dataset.done||btn.classList.contains('open'))return;const i=+btn.dataset.i;btn.textContent=cards[i];btn.classList.add('open');btn.style.background='#f8fafc';btn.style.color='#0f172a';
  if(first===null){first={i,btn};return;}moves++;stage.querySelector('#mgM').textContent=moves;
  if(cards[first.i]===cards[i]){first.btn.dataset.done='1';btn.dataset.done='1';first.btn.style.background='#0d9488';btn.style.background='#0d9488';first.btn.style.color='#fff';btn.style.color='#fff';done++;stage.querySelector('#mgP').textContent=done;first=null;if(done===items.length)alertInStage('🎉 All pairs found in '+moves+' moves! Press Restart.');}
  else{lock=true;const f=first;first=null;ft=setTimeout(()=>{[f.btn,btn].forEach(b=>{b.textContent='?';b.classList.remove('open');b.style.background='#1e293b';b.style.color='#fff';});lock=false;},620);}});
 cleanup=()=>{if(ft)clearTimeout(ft);};}
function engAnagram(g){const words=shuffle(g.cfg.words);let i=0,score=0;
 setStage(`${hud(['Word: <b id="anN">1</b>/'+words.length,'Score: <b id="anS">0</b>'])}<div style="font-size:40px;letter-spacing:8px;font-weight:900" id="anW"></div><div style="display:flex;gap:8px"><input id="anIn" placeholder="Your answer" style="padding:11px 14px;border-radius:10px;border:1.5px solid #334155;background:#0f172a;color:#fff;text-transform:uppercase"><button class="pbtn primary" id="anGo">Check</button></div><p class="help" id="anMsg">${g.help}</p>`);
 function show(){if(i>=words.length){stage.querySelector('#anMsg').textContent='Done! Score: '+score+' / '+words.length+'. Press Restart.';stage.querySelector('#anW').textContent='🏁';return;}
  let s=shuffle(words[i].split('')).join('');if(s===words[i])s=shuffle(words[i].split('')).join('');
  stage.querySelector('#anW').textContent=s;stage.querySelector('#anN').textContent=i+1;stage.querySelector('#anIn').value='';}
 stage.querySelector('#anGo').onclick=()=>{const v=stage.querySelector('#anIn').value.trim().toUpperCase();if(v===words[i]){score++;stage.querySelector('#anS').textContent=score;stage.querySelector('#anMsg').textContent='✅ Correct!';}else stage.querySelector('#anMsg').textContent='❌ It was '+words[i]+'.';i++;setTimeout(show,700);};
 show();cleanup=()=>{};}
function engHangman(g){const word=rand(g.cfg.words);let lives=6,guessed=new Set(),over=false;
 setStage(`${hud(['Lives: <b id="hmL">6</b>'])}<div id="hmW" style="font-size:34px;letter-spacing:10px;font-weight:900"></div><div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;max-width:480px">${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(l=>`<button class="pbtn" data-l="${l}" style="padding:8px 11px">${l}</button>`).join('')}</div><p class="help" id="hmMsg">${g.help}</p>`);
 function draw(){stage.querySelector('#hmW').textContent=word.split('').map(ch=>guessed.has(ch)?ch:'_').join('');stage.querySelector('#hmL').textContent=lives;
  if(word.split('').every(ch=>guessed.has(ch))){over=true;stage.querySelector('#hmMsg').textContent='🎉 You guessed "'+word+'"! Press Restart.';}
  else if(lives<=0){over=true;stage.querySelector('#hmMsg').textContent='❌ The word was "'+word+'". Press Restart.';}}
 stage.querySelectorAll('[data-l]').forEach(b=>b.onclick=()=>{if(over||paused||b.disabled)return;const l=b.dataset.l;b.disabled=true;b.style.opacity='.35';guessed.add(l);if(!word.includes(l))lives--;draw();});
 draw();cleanup=()=>{};}
function engTyping(g){const texts=g.cfg.texts;const txt=rand(texts);let started=null;
 setStage(`${hud(['Time: <b id="tyT">0</b>s','WPM: <b id="tyW">0</b>'])}<div class="box" style="width:min(540px,100%)"><p style="font-size:18px;margin:0" id="tyTxt">${txt}</p></div><textarea id="tyIn" rows="3" placeholder="Start typing the sentence above…" style="width:min(540px,100%);padding:12px;border-radius:12px;border:1.5px solid #334155;background:#0f172a;color:#fff;font:inherit"></textarea><p class="help">${g.help}</p>`);
 const inp=stage.querySelector('#tyIn');let iv=null;
 inp.addEventListener('input',()=>{if(!started){started=Date.now();iv=setInterval(()=>{const s=Math.floor((Date.now()-started)/1000);stage.querySelector('#tyT').textContent=s;const words=inp.value.trim().split(/\s+/).filter(Boolean).length;stage.querySelector('#tyW').textContent=s>2?Math.round(words/(s/60)):0;},500);}
  if(inp.value.trim()===txt){clearInterval(iv);const s=Math.max(1,(Date.now()-started)/1000);alertInStage('✅ Perfect! '+Math.round(txt.split(' ').length/(s/60))+' WPM in '+Math.round(s)+'s. Press Restart for a new sentence.');}});
 cleanup=()=>{if(iv)clearInterval(iv);};}
function engNumguess(g){const target=1+Math.floor(Math.random()*100);let tries=0,over=false;
 setStage(`${hud(['Tries: <b id="ngT">0</b>','Range: 1–100'])}<div style="display:flex;gap:8px"><input id="ngIn" type="number" min="1" max="100" placeholder="Your guess" style="padding:11px 14px;border-radius:10px;border:1.5px solid #334155;background:#0f172a;color:#fff;width:150px"><button class="pbtn primary" id="ngGo">Guess</button></div><p class="help" id="ngMsg">${g.help}</p>`);
 stage.querySelector('#ngGo').onclick=()=>{if(over)return;const v=+stage.querySelector('#ngIn').value;if(!v||v<1||v>100){stage.querySelector('#ngMsg').textContent='Enter a number from 1 to 100.';return;}tries++;stage.querySelector('#ngT').textContent=tries;
  if(v===target){over=true;stage.querySelector('#ngMsg').textContent='🎉 Correct! The number was '+target+', found in '+tries+' tries. Press Restart.';}
  else stage.querySelector('#ngMsg').textContent=v<target?'📈 Too low — go higher.':'📉 Too high — go lower.';};
 cleanup=()=>{};}
function engRPS(g){let you=0,cpu=0;const names={rock:'🪨 Rock',paper:'📄 Paper',scissors:'✂️ Scissors'};const beats={rock:'scissors',paper:'rock',scissors:'paper'};
 setStage(`${hud(['You: <b id="rpY">0</b>','CPU: <b id="rpC">0</b>','First to 5'])}<div style="display:flex;gap:10px">${Object.keys(names).map(k=>`<button class="pbtn" data-k="${k}" style="font-size:17px;padding:14px 18px">${names[k]}</button>`).join('')}</div><p class="help" id="rpMsg">${g.help}</p>`);
 stage.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{if(you>=5||cpu>=5)return;const mine=b.dataset.k, theirs=rand(Object.keys(names));let msg='CPU picked '+names[theirs]+'. ';
  if(mine===theirs)msg+='Draw!';else if(beats[mine]===theirs){you++;msg+='You win the round!';}else{cpu++;msg+='CPU wins the round.';}
  stage.querySelector('#rpY').textContent=you;stage.querySelector('#rpC').textContent=cpu;
  if(you>=5)msg+=' 🎉 You win the match! Press Restart.';if(cpu>=5)msg+=' CPU wins the match. Press Restart.';
  stage.querySelector('#rpMsg').textContent=msg;});
 cleanup=()=>{};}

function engDice(g){const c=g.cfg||{};const target=c.target||30;let you=0,cpu=0,over=false;
 setStage(`${hud(['You: <b id="dcY">0</b>','CPU: <b id="dcC">0</b>','First to '+target])}<div style="font-size:64px" id="dcFace">🎲</div><button class="pbtn primary" id="dcGo">🎲 Roll Both Dice</button><p class="help" id="dcMsg">${g.help}</p>`);
 const faces=['⚀','⚁','⚂','⚃','⚄','⚅'];
 stage.querySelector('#dcGo').onclick=()=>{if(over)return;const a=1+Math.floor(Math.random()*6),b=1+Math.floor(Math.random()*6);stage.querySelector('#dcFace').textContent=faces[a-1]+' vs '+faces[b-1];
  if(a>b){you+=a;}else if(b>a){cpu+=b;}
  stage.querySelector('#dcY').textContent=you;stage.querySelector('#dcC').textContent=cpu;
  let msg=a>b?('You win the roll +'+a+'.'):b>a?('CPU wins the roll +'+b+'.'):'Tie — nobody scores.';
  if(you>=target){over=true;msg+=' 🎉 You reach '+target+' first — you win! Press Restart.';}if(cpu>=target){over=true;msg+=' CPU reaches '+target+' first. Press Restart.';}
  stage.querySelector('#dcMsg').textContent=msg;};
 cleanup=()=>{};}
function engHL(g){let cur=1+Math.floor(Math.random()*13),score=0,streak=0,over=false;const disp=v=>v===1?'A':v===11?'J':v===12?'Q':v===13?'K':''+v;
 setStage(`${hud(['Score: <b id="hlS">0</b>','Streak: <b id="hlK">0</b>'])}<div style="font-size:70px" id="hlCard">🂡</div><div style="font-size:26px;font-weight:900">Current card: <span id="hlCur"></span></div><div style="display:flex;gap:10px"><button class="pbtn primary" data-g="higher">⬆ Higher</button><button class="pbtn primary" data-g="lower">⬇ Lower</button></div><p class="help" id="hlMsg">${g.help}</p>`);
 stage.querySelector('#hlCur').textContent=disp(cur);
 stage.querySelectorAll('[data-g]').forEach(b=>b.onclick=()=>{if(over)return;const next=1+Math.floor(Math.random()*13);const guess=b.dataset.g;let ok=next!==cur&&((guess==='higher'&&next>cur)||(guess==='lower'&&next<cur));
  if(next===cur){stage.querySelector('#hlMsg').textContent='Same value ('+disp(next)+') — no points, card stays in play.';cur=next;stage.querySelector('#hlCur').textContent=disp(cur);return;}
  if(ok){score+=10;streak++;stage.querySelector('#hlMsg').textContent='✅ Right! Next card was '+disp(next)+'.';}else{streak=0;over=true;stage.querySelector('#hlMsg').textContent='❌ Wrong — next card was '+disp(next)+'. Final score: '+score+'. Press Restart.';}
  stage.querySelector('#hlS').textContent=score;stage.querySelector('#hlK').textContent=streak;cur=next;stage.querySelector('#hlCur').textContent=disp(cur);});
 cleanup=()=>{};}
function engConnect4(g){let b=Array.from({length:6},()=>Array(7).fill(0)),over=false;
 setStage(`${hud(['You: 🔴','CPU: 🟡'])}<div style="display:grid;grid-template-columns:repeat(7,52px);gap:6px;background:#1d4ed8;padding:10px;border-radius:14px">${b.flatMap((row,r)=>row.map((_,col)=>`<button data-c="${col}" style="height:52px;border-radius:50%;border:0;background:#e2e8f0;cursor:pointer;font-size:26px" data-r="${r}"></button>`)).join('')}</div><p class="help" id="c4Msg">${g.help}</p>`);
 const btns=[...stage.querySelectorAll('button[data-c]')];
 function win(bb,p){for(let r=0;r<6;r++)for(let c2=0;c2<7;c2++){if(bb[r][c2]!==p)continue;for(const[dr,dc]of[[0,1],[1,0],[1,1],[1,-1]]){let ok=true;for(let k=1;k<4;k++){const rr=r+dr*k,cc=c2+dc*k;if(rr<0||rr>5||cc<0||cc>6||bb[rr][cc]!==p){ok=false;break;}}if(ok)return true;}}return false;}
 function drop(col,p){for(let r=5;r>=0;r--)if(!b[r][col]){b[r][col]=p;return r;}return -1;}
 function draw(){btns.forEach(bt=>{const r=+bt.dataset.r,c2=+bt.dataset.c;bt.textContent=b[r][c2]===1?'🔴':b[r][c2]===2?'🟡':'';});}
 function aiCol(){for(let c2=0;c2<7;c2++){const bb=b.map(r=>[...r]);for(let r=5;r>=0;r--)if(!bb[r][c2]){bb[r][c2]=2;if(win(bb,2))return c2;bb[r][c2]=0;break;}}
  for(let c2=0;c2<7;c2++){const bb=b.map(r=>[...r]);for(let r=5;r>=0;r--)if(!bb[r][c2]){bb[r][c2]=1;if(win(bb,1))return c2;bb[r][c2]=0;break;}}
  const open=[0,1,2,3,4,5,6].filter(c2=>!b[0][c2]);return rand(open);}
 btns.forEach(bt=>bt.onclick=()=>{if(over||paused)return;const col=+bt.dataset.c;if(b[0][col])return;drop(col,1);draw();
  if(win(b,1)){over=true;stage.querySelector('#c4Msg').textContent='🎉 You win — four in a row! Press Restart.';return;}
  if(b[0].every(v=>v)){over=true;stage.querySelector('#c4Msg').textContent='Board full — draw! Press Restart.';return;}
  drop(aiCol(),2);draw();
  if(win(b,2)){over=true;stage.querySelector('#c4Msg').textContent='CPU wins this time. Press Restart.';}});
 draw();cleanup=()=>{};}
function engTTTX(g){const c=g.cfg||{};const N=c.n||3,need=c.need||3,twoP=!!c.twoP;let board=Array(N*N).fill(''),turn='X',done=false;
 setStage(`${hud(['Status: <b id="txS">X to move</b>'])}<div style="display:grid;grid-template-columns:repeat(${N},${N>3?64:84}px);gap:7px">${board.map((_,i)=>`<button data-i="${i}" style="height:${N>3?64:84}px;font-size:32px;font-weight:900;border-radius:12px;border:0;background:#f8fafc;color:#0f172a;cursor:pointer"></button>`).join('')}</div><p class="help">${g.help}</p>`);
 const btns=[...stage.querySelectorAll('button[data-i]')];
 function isWin(p){const lines=[];for(let r=0;r<N;r++)for(let c2=0;c2<=N-need;c2++)lines.push(Array.from({length:need},(_,k)=>r*N+c2+k));for(let c2=0;c2<N;c2++)for(let r=0;r<=N-need;r++)lines.push(Array.from({length:need},(_,k)=>(r+k)*N+c2));for(let r=0;r<=N-need;r++)for(let c2=0;c2<=N-need;c2++){lines.push(Array.from({length:need},(_,k)=>(r+k)*N+c2+k));lines.push(Array.from({length:need},(_,k)=>(r+k)*N+(N-1-c2-k)));}
  return lines.some(l=>l.every(i=>board[i]===p));}
 function aiMove(){const empty=board.map((v,i)=>v?null:i).filter(v=>v!==null);if(!empty.length)return;
  for(const mark of['O','X']){for(const i of empty){board[i]=mark;const w=isWin(mark);board[i]='';if(w){board[i]='O';btns[i].textContent='O';return;}}}
  const pick=empty.includes(4)&&N===3?4:rand(empty);board[pick]='O';btns[pick].textContent='O';}
 btns.forEach(bt=>bt.onclick=()=>{const i=+bt.dataset.i;if(paused||done||board[i])return;board[i]=turn;bt.textContent=turn;
  if(isWin(turn)){done=true;stage.querySelector('#txS').textContent=turn+' wins!';alertInStage('🎉 '+turn+' wins! Press Restart.');return;}
  if(board.every(Boolean)){done=true;stage.querySelector('#txS').textContent='Draw!';alertInStage('Draw! Press Restart.');return;}
  if(twoP){turn=turn==='X'?'O':'X';stage.querySelector('#txS').textContent=turn+' to move';}
  else{aiMove();if(isWin('O')){done=true;stage.querySelector('#txS').textContent='CPU wins!';alertInStage('Computer wins! Press Restart.');return;}if(board.every(Boolean)){done=true;stage.querySelector('#txS').textContent='Draw!';alertInStage('Draw! Press Restart.');return;}stage.querySelector('#txS').textContent='Your move';}});
 cleanup=()=>{};}
function engReversi(g){const N=6;let b=Array.from({length:N},()=>Array(N).fill(0));b[2][2]=2;b[3][3]=2;b[2][3]=1;b[3][2]=1;let over=false;
 const DIRS=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
 function flips(bb,r,c2,p){let out=[];for(const[dr,dc]of DIRS){const line=[];let rr=r+dr,cc=c2+dc;while(rr>=0&&rr<N&&cc>=0&&cc<N&&bb[rr][cc]===3-p){line.push([rr,cc]);rr+=dr;cc+=dc;}if(line.length&&rr>=0&&rr<N&&cc>=0&&cc<N&&bb[rr][cc]===p)out=out.concat(line);}return out;}
 function moves(bb,p){const m=[];for(let r=0;r<N;r++)for(let c2=0;c2<N;c2++)if(!bb[r][c2]&&flips(bb,r,c2,p).length)m.push([r,c2]);return m;}
 setStage(`${hud(['You ⚫: <b id="rvY">2</b>','CPU ⚪: <b id="rvC">2</b>'])}<div style="display:grid;grid-template-columns:repeat(6,52px);gap:5px;background:#166534;padding:10px;border-radius:14px">${Array.from({length:36},(_,i)=>`<button data-i="${i}" style="height:52px;border-radius:10px;border:0;background:#15803d;cursor:pointer;font-size:26px"></button>`).join('')}</div><p class="help" id="rvMsg">${g.help}</p>`);
 const btns=[...stage.querySelectorAll('button[data-i]')];
 function draw(){btns.forEach((bt,i)=>{const r=Math.floor(i/N),c2=i%N;bt.textContent=b[r][c2]===1?'⚫':b[r][c2]===2?'⚪':'';});const flat=b.flat();stage.querySelector('#rvY').textContent=flat.filter(v=>v===1).length;stage.querySelector('#rvC').textContent=flat.filter(v=>v===2).length;}
 function finish(){over=true;const flat=b.flat(),y=flat.filter(v=>v===1).length,cp=flat.filter(v=>v===2).length;stage.querySelector('#rvMsg').textContent=(y>cp?'🎉 You win ':'CPU wins ')+y+'–'+cp+'. Press Restart.';}
 function place(r,c2,p){flips(b,r,c2,p).forEach(([rr,cc])=>b[rr][cc]=p);b[r][c2]=p;draw();}
 function cpuTurn(){const m=moves(b,2);if(!m.length){if(!moves(b,1).length)finish();else stage.querySelector('#rvMsg').textContent='CPU has no move — your turn again.';return;}
  m.sort((a,z)=>flips(b,z[0],z[1],2).length-flips(b,a[0],a[1],2).length);place(m[0][0],m[0][1],2);
  if(!moves(b,1).length&&!moves(b,2).length)finish();else if(!moves(b,1).length){stage.querySelector('#rvMsg').textContent='You have no legal move — CPU plays again.';setTimeout(cpuTurn,600);}}
 btns.forEach(bt=>bt.onclick=()=>{if(over||paused)return;const i=+bt.dataset.i,r=Math.floor(i/N),c2=i%N;if(b[r][c2]||!flips(b,r,c2,1).length){stage.querySelector('#rvMsg').textContent='That square flips nothing — pick a highlighted legal move.';return;}place(r,c2,1);setTimeout(cpuTurn,350);});
 draw();cleanup=()=>{};}
function engLights(g){const N=5;let b=Array(25).fill(0),moves=0;
 function scramble(){b=Array(25).fill(0);for(let k=0;k<7;k++)toggle(Math.floor(Math.random()*25),true);moves=0;}
 function toggle(i,silent){const r=Math.floor(i/N),c2=i%N;[[0,0],[1,0],[-1,0],[0,1],[0,-1]].forEach(([dr,dc])=>{const rr=r+dr,cc=c2+dc;if(rr>=0&&rr<N&&cc>=0&&cc<N)b[rr*N+cc]^=1;});if(!silent){moves++;draw();if(b.every(v=>!v))alertInStage('🎉 All lights out in '+moves+' moves! Press Restart.');}}
 setStage(`${hud(['Moves: <b id="loM">0</b>','Goal: all dark'])}<div style="display:grid;grid-template-columns:repeat(5,54px);gap:7px">${b.map((_,i)=>`<button data-i="${i}" style="height:54px;border-radius:12px;border:0;cursor:pointer;font-size:22px"></button>`).join('')}</div><p class="help">${g.help}</p>`);
 const btns=[...stage.querySelectorAll('button[data-i]')];
 function draw(){btns.forEach((bt,i)=>{bt.textContent=b[i]?'💡':'';bt.style.background=b[i]?'#facc15':'#1e293b';});stage.querySelector('#loM').textContent=moves;}
 btns.forEach(bt=>bt.onclick=()=>{if(!paused)toggle(+bt.dataset.i);});
 scramble();draw();cleanup=()=>{};}
function engSliding(g){let b=[1,2,3,4,5,6,7,8,0],moves=0;
 function shuffleB(){b=[1,2,3,4,5,6,7,8,0];let blank=8;for(let k=0;k<60;k++){const r=Math.floor(blank/3),c2=blank%3;const opts=[];if(r>0)opts.push(blank-3);if(r<2)opts.push(blank+3);if(c2>0)opts.push(blank-1);if(c2<2)opts.push(blank+1);const p=rand(opts);[b[blank],b[p]]=[b[p],b[blank]];blank=p;}moves=0;}
 setStage(`${hud(['Moves: <b id="slM">0</b>'])}<div style="display:grid;grid-template-columns:repeat(3,76px);gap:8px">${b.map((_,i)=>`<button data-i="${i}" style="height:76px;border-radius:12px;border:0;font-size:28px;font-weight:900;cursor:pointer"></button>`).join('')}</div><p class="help">${g.help}</p>`);
 const btns=[...stage.querySelectorAll('button[data-i]')];
 function draw(){btns.forEach((bt,i)=>{bt.textContent=b[i]||'';bt.style.background=b[i]?'#f8fafc':'#1e293b';bt.style.color='#0f172a';});stage.querySelector('#slM').textContent=moves;}
 btns.forEach(bt=>bt.onclick=()=>{if(paused)return;const i=+bt.dataset.i,blank=b.indexOf(0);const r=Math.floor(i/3),c2=i%3,br=Math.floor(blank/3),bc=blank%3;if(Math.abs(r-br)+Math.abs(c2-bc)!==1)return;[b[i],b[blank]]=[b[blank],b[i]];moves++;draw();if(b.join(',')==='1,2,3,4,5,6,7,8,0')alertInStage('🎉 Puzzle solved in '+moves+' moves! Press Restart.');});
 shuffleB();draw();cleanup=()=>{};}
function engHanoi(g){let pegs=[[4,3,2,1],[],[]],moves=0,sel=null,won=false;
 setStage(`${hud(['Moves: <b id="hnM">0</b>','Goal: stack on peg 3'])}<div style="display:flex;gap:14px;align-items:flex-end">${pegs.map((_,p)=>`<button data-p="${p}" style="width:110px;min-height:170px;border-radius:12px;border:2px solid #334155;background:#0f172a;color:#fff;cursor:pointer;display:flex;flex-direction:column-reverse;align-items:center;gap:5px;padding:10px"></button>`).join('')}</div><p class="help">${g.help}</p>`);
 const btns=[...stage.querySelectorAll('button[data-p]')];
 function draw(){btns.forEach((bt,p)=>{bt.innerHTML=pegs[p].map(d=>`<span style="display:block;background:#f59e0b;color:#0f172a;border-radius:6px;padding:4px 0;width:${30+d*18}px;font-weight:900">${d}</span>`).join('')+`<span style="opacity:.6;font-size:12px">Peg ${p+1}${sel===p?' • selected':''}</span>`;bt.style.borderColor=sel===p?'#facc15':'#334155';});stage.querySelector('#hnM').textContent=moves;}
 btns.forEach(bt=>bt.onclick=()=>{if(won||paused)return;const p=+bt.dataset.p;
  if(sel===null){if(pegs[p].length)sel=p;}
  else if(sel===p)sel=null;
  else{const d=pegs[sel][pegs[sel].length-1];const top=pegs[p][pegs[p].length-1];if(top===undefined||d<top){pegs[p].push(pegs[sel].pop());moves++;if(pegs[2].length===4){won=true;draw();alertInStage('🎉 Solved in '+moves+' moves (perfect is 15)! Press Restart.');return;}}sel=null;}
  draw();});
 draw();cleanup=()=>{};}

function engSudoku(g){const data=[
 {p:[[1,0,3,0],[0,4,0,2],[2,0,4,0],[0,3,0,1]],s:[[1,2,3,4],[3,4,1,2],[2,1,4,3],[4,3,2,1]]},
 {p:[[0,2,0,4],[3,0,1,0],[0,1,0,3],[4,0,2,0]],s:[[1,2,3,4],[3,4,1,2],[2,1,4,3],[4,3,2,1]]},
 {p:[[2,0,1,0],[0,3,0,2],[0,2,3,0],[3,0,0,4]],s:[[2,4,1,3],[1,3,4,2],[4,2,3,1],[3,1,2,4]]}];
 const pick=data[Math.floor(Math.random()*data.length)];const P=pick.p,S=pick.s;let sel=null,errors=0;
 setStage(`${hud(['Errors: <b id="sdE">0</b>'])}<div style="display:grid;grid-template-columns:repeat(4,58px);gap:6px">${Array.from({length:16},(_,i)=>{const r=Math.floor(i/4),c2=i%4;return `<button data-i="${i}" data-fixed="${P[r][c2]?1:0}" style="height:58px;border-radius:10px;border:0;font-size:24px;font-weight:900;cursor:pointer;background:${P[r][c2]?'#e2e8f0':'#1e293b'};color:${P[r][c2]?'#0f172a':'#facc15'}">${P[r][c2]||''}</button>`;}).join('')}</div><div style="display:flex;gap:8px">${[1,2,3,4].map(n=>`<button class="pbtn" data-n="${n}" style="font-size:18px">${n}</button>`).join('')}</div><p class="help">${g.help}</p>`);
 const btns=[...stage.querySelectorAll('button[data-i]')];
 btns.forEach(bt=>bt.onclick=()=>{if(bt.dataset.fixed==='1')return;sel=+bt.dataset.i;btns.forEach(x=>x.style.outline='');bt.style.outline='3px solid #facc15';});
 stage.querySelectorAll('[data-n]').forEach(nb=>nb.onclick=()=>{if(sel===null||paused)return;const r=Math.floor(sel/4),c2=sel%4,n=+nb.dataset.n;const bt=btns[sel];
  if(n===S[r][c2]){bt.textContent=n;bt.dataset.fixed='1';bt.style.background='#bbf7d0';if(btns.every(x=>x.dataset.fixed==='1'))alertInStage('Sudoku solved with '+errors+' errors! Press Restart.');}
  else{errors++;stage.querySelector('#sdE').textContent=errors;bt.textContent=n;bt.style.background='#fecaca';setTimeout(()=>{if(bt.dataset.fixed!=='1'){bt.textContent='';bt.style.background='#1e293b';}},600);}});
 cleanup=()=>{};}
function engFlood(g){const c=g.cfg||{};const N=c.n||8,COLS=['#ef4444','#3b82f6','#22c55e','#facc15','#a855f7','#f97316'];const maxMoves=c.max||16;let b=[],moves=0,over=false;
 function gen(){b=Array.from({length:N*N},()=>Math.floor(Math.random()*4));}
 setStage(`${hud(['Moves: <b id="flM">0</b>/'+maxMoves])}<div style="display:grid;grid-template-columns:repeat(${N},${N>8?30:38}px);gap:3px" id="flB"></div><div style="display:flex;gap:8px">${COLS.slice(0,4).map((col,i)=>`<button data-col="${i}" style="width:46px;height:46px;border-radius:50%;border:3px solid #fff;background:${col};cursor:pointer"></button>`).join('')}</div><p class="help">${g.help}</p>`);
 const board=stage.querySelector('#flB');
 function draw(){board.innerHTML=b.map(v=>`<div style="height:${N>8?30:38}px;border-radius:6px;background:${COLS[v]}"></div>`).join('');stage.querySelector('#flM').textContent=moves;}
 stage.querySelectorAll('[data-col]').forEach(bt=>bt.onclick=()=>{if(over||paused)return;const target=+bt.dataset.col,cur=b[0];if(target===cur)return;
  const seen=new Set([0]),stack=[0];while(stack.length){const i=stack.pop();b[i]=target;const r=Math.floor(i/N),c2=i%N;[[1,0],[-1,0],[0,1],[0,-1]].forEach(([dr,dc])=>{const rr=r+dr,cc=c2+dc,ni=rr*N+cc;if(rr>=0&&rr<N&&cc>=0&&cc<N&&!seen.has(ni)&&b[ni]===cur){seen.add(ni);stack.push(ni);}});}
  moves++;draw();
  if(b.every(v=>v===target)){over=true;alertInStage('🎉 Whole board flooded in '+moves+' moves! Press Restart.');}
  else if(moves>=maxMoves){over=true;alertInStage('Out of moves! Press Restart to try again.');}});
 gen();draw();cleanup=()=>{};}
function engMaze(g){const c=g.cfg||{};const N=c.n||11;let grid=[],px=0,py=0,moves=0,over=false,t0=Date.now();
 function gen(){grid=Array.from({length:N},()=>Array(N).fill(1));const stack=[[0,0]];grid[0][0]=0;
  while(stack.length){const[cx,cy]=stack[stack.length-1];const opts=[[2,0],[-2,0],[0,2],[0,-2]].map(([dx,dy])=>[cx+dx,cy+dy,dx,dy]).filter(([nx,ny])=>nx>=0&&nx<N&&ny>=0&&ny<N&&grid[ny][nx]===1);
   if(!opts.length){stack.pop();continue;}const[nx,ny,dx,dy]=rand(opts);grid[cy+dy/2][cx+dx/2]=0;grid[ny][nx]=0;stack.push([nx,ny]);}
  grid[N-1][N-1]=0;}
 setStage(`${hud(['Moves: <b id="mzM">0</b>','Goal: 🏁 bottom-right'])}<div id="mzB" style="display:grid;gap:2px"></div><div class="touch always"><button data-m="l">←</button><button data-m="u">↑</button><button data-m="d">↓</button><button data-m="r">→</button></div><p class="help">${g.help}</p>`);
 const board=stage.querySelector('#mzB');const cell=Math.max(20,Math.min(34,Math.floor(340/N)));
 board.style.gridTemplateColumns=`repeat(${N},${cell}px)`;
 function draw(){board.innerHTML=grid.map((row,y)=>row.map((v,x)=>`<div style="height:${cell}px;border-radius:4px;background:${x===N-1&&y===N-1?'#22c55e':v?'#1e293b':'#e2e8f0'};display:grid;place-items:center;font-size:${cell-6}px">${x===px&&y===py?'🧍':x===N-1&&y===N-1?'🏁':''}</div>`).join('')).join('');stage.querySelector('#mzM').textContent=moves;}
 function move(dx,dy){if(over||paused)return;const nx=px+dx,ny=py+dy;if(nx<0||nx>=N||ny<0||ny>=N||grid[ny][nx])return;px=nx;py=ny;moves++;draw();
  if(px===N-1&&py===N-1){over=true;alertInStage('🎉 Escaped in '+moves+' moves and '+Math.round((Date.now()-t0)/1000)+'s! Press Restart for a new maze.');}}
 const kd=e=>{const mm={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]}[e.key]||{w:[0,-1],s:[0,1],a:[-1,0],d:[1,0]}[e.key.toLowerCase()];if(mm){e.preventDefault();move(mm[0],mm[1]);}};
 document.addEventListener('keydown',kd);
 stage.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{const d={l:[-1,0],r:[1,0],u:[0,-1],d:[0,1]}[b.dataset.m];move(d[0],d[1]);});
 gen();draw();cleanup=()=>document.removeEventListener('keydown',kd);}
function engSnake2(g){const c=g.cfg||{};setStage(`${hud(['Score: <b id="s2S">0</b>'])}<canvas width="400" height="400"></canvas><button class="pbtn primary" id="s2Go">▶ Start</button><div class="touch"><button data-d="l">←</button><button data-d="u">↑</button><button data-d="d">↓</button><button data-d="r">→</button></div><p class="help">${g.help}</p>`);
 const ctx=stage.querySelector('canvas').getContext('2d'),N=20,S=20;let snake,dir,queue,food,score=0,timer=null,alive=false,running=false;
 const walls=c.walls||[];
 function isWall(x,y){return walls.some(w=>w[0]===x&&w[1]===y);}
 function place(){const free=[];for(let x=0;x<N;x++)for(let y=0;y<N;y++)if(!snake.some(p=>p.x===x&&p.y===y)&&!isWall(x,y))free.push({x,y});food=rand(free);}
 function turn(d){const last=queue.length?queue[queue.length-1]:dir;if(!last||(d.x!==-last.x||d.y!==-last.y)&&(d.x!==last.x||d.y!==last.y)&&queue.length<3)queue.push(d);}
 function draw(){ctx.fillStyle='#0f172a';ctx.fillRect(0,0,400,400);ctx.fillStyle='#64748b';walls.forEach(w=>ctx.fillRect(w[0]*S+1,w[1]*S+1,18,18));ctx.fillStyle='#ef4444';ctx.fillRect(food.x*S+2,food.y*S+2,16,16);snake.forEach((p,i)=>{ctx.fillStyle=i?'#22c55e':'#bbf7d0';ctx.fillRect(p.x*S+1,p.y*S+1,18,18);});}
 function reset(){snake=[{x:9,y:10},{x:8,y:10},{x:7,y:10}];dir={x:1,y:0};queue=[];score=0;alive=true;place();stage.querySelector('#s2S').textContent=0;draw();}
 function step(){if(paused||!alive)return;if(queue.length)dir=queue.shift();let h={x:snake[0].x+dir.x,y:snake[0].y+dir.y};
  if(c.wrap){h.x=(h.x+N)%N;h.y=(h.y+N)%N;}
  const willEat=h.x===food.x&&h.y===food.y;const body=willEat?snake:snake.slice(0,-1);
  if((!c.wrap&&(h.x<0||h.y<0||h.x>=N||h.y>=N))||isWall(h.x,h.y)||body.some(p=>p.x===h.x&&p.y===h.y)){alive=false;running=false;alertInStage('Game Over! Score: '+score+' — press Start to retry.');clearInterval(timer);timer=null;return;}
  snake.unshift(h);if(willEat){score+=10;stage.querySelector('#s2S').textContent=score;place();}else snake.pop();draw();}
 function start(){reset();clearInterval(timer);timer=setInterval(step,c.speed||130);running=true;}
 const DIRS={arrowup:{x:0,y:-1},w:{x:0,y:-1},arrowdown:{x:0,y:1},s:{x:0,y:1},arrowleft:{x:-1,y:0},a:{x:-1,y:0},arrowright:{x:1,y:0},d:{x:1,y:0}};
 const kd=e=>{if(/INPUT|TEXTAREA/.test(e.target.tagName))return;const k=e.key.toLowerCase();if(DIRS[k]){if(!running)start();turn(DIRS[k]);e.preventDefault();}};
 document.addEventListener('keydown',kd);stage.querySelector('#s2Go').onclick=start;
 stage.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>{if(!running)start();turn({l:{x:-1,y:0},r:{x:1,y:0},u:{x:0,y:-1},d:{x:0,y:1}}[b.dataset.d]);});
 reset();cleanup=()=>{clearInterval(timer);document.removeEventListener('keydown',kd);};}
function engFlappy2(g){const c=g.cfg||{};setStage(`${hud(['Score: <b id="f2S">0</b>'])}<canvas width="400" height="480"></canvas><button class="pbtn primary" id="f2Go">▶ Start / Flap</button><p class="help">${g.help}</p>`);
 const cv=stage.querySelector('canvas'),ctx=cv.getContext('2d');let y=220,v=0,pipes=[],score=0,raf,run=false,frame=0;
 function reset(){y=220;v=0;pipes=[];score=0;frame=0;run=true;stage.querySelector('#f2S').textContent=0;}
 function loop(){ctx.fillStyle=c.bg||'#1e1b4b';ctx.fillRect(0,0,400,480);ctx.fillStyle='#334155';ctx.fillRect(0,440,400,40);
  if(run&&!paused){v+=0.45;y+=v;if(y<16){y=16;v=0;}frame++;if(frame%(c.gapRate||95)===0)pipes.push({x:400,top:60+Math.random()*220,passed:false});
   pipes.forEach(p=>{p.x-=(c.speed||2.6);if(!p.passed&&p.x+52<110){p.passed=true;score++;stage.querySelector('#f2S').textContent=score;}});
   pipes=pipes.filter(p=>p.x>-60);
   if(y>424||pipes.some(p=>110+16>p.x&&110-16<p.x+52&&(y-16<p.top||y+16>p.top+(c.gap||130)))){run=false;alertInStage('Game Over! Score: '+score+' — tap Start / Flap.');}}
  ctx.fillStyle=c.pipe||'#7c3aed';pipes.forEach(p=>{ctx.fillRect(p.x,0,52,p.top);ctx.fillRect(p.x,p.top+(c.gap||130),52,480);});
  ctx.font='30px serif';ctx.fillText(c.icon||'🚀',94,y+10);
  raf=requestAnimationFrame(loop);}
 function flap(){if(!run)reset();v=-7.5;}
 cv.addEventListener('pointerdown',flap);stage.querySelector('#f2Go').onclick=flap;
 const kd=e=>{if(e.key===' '){e.preventDefault();flap();}};document.addEventListener('keydown',kd);
 loop();cleanup=()=>{cancelAnimationFrame(raf);document.removeEventListener('keydown',kd);};}
function engBreakout2(g){const c=g.cfg||{};const rows=c.rows||6;setStage(`${hud(['Score: <b id="bbS">0</b>','Lives: <b id="bbL">3</b>'])}<canvas width="480" height="360"></canvas><p class="help">${g.help}</p>`);
 const cv=stage.querySelector('canvas'),ctx=cv.getContext('2d');let px=190,bx=240,by=330,dx=c.speed||3.6,dy=-(c.speed||3.6),score=0,lives=3,raf,started=false,over=false;
 let bricks=[];for(let r=0;r<rows;r++)for(let col=0;col<8;col++)bricks.push({x:12+col*57,y:30+r*24,w:50,h:16,on:true,c:['#ef4444','#f59e0b','#22c55e','#3b82f6','#ec4899','#a855f7'][r%6]});
 function draw(){ctx.fillStyle='#0f172a';ctx.fillRect(0,0,480,360);bricks.forEach(br=>{if(br.on){ctx.fillStyle=br.c;ctx.fillRect(br.x,br.y,br.w,br.h);}});ctx.fillStyle='#fff';ctx.fillRect(px,340,100,12);ctx.beginPath();ctx.arc(bx,by,8,0,7);ctx.fill();
  if(!paused&&started&&!over){bx+=dx;by+=dy;if(bx<8){bx=8;dx=Math.abs(dx);}if(bx>472){bx=472;dx=-Math.abs(dx);}if(by<8){by=8;dy=Math.abs(dy);}
   if(dy>0&&by>=332&&by<=352&&bx>px-8&&bx<px+108){const rel=Math.max(-1,Math.min(1,(bx-(px+50))/50));const sp=Math.hypot(dx,dy);dx=sp*rel*0.9;dy=-Math.sqrt(Math.max(4,sp*sp-dx*dx));by=332;}
   for(const br of bricks){if(br.on&&bx+8>br.x&&bx-8<br.x+br.w&&by+8>br.y&&by-8<br.y+br.h){br.on=false;dy*=-1;score+=10;stage.querySelector('#bbS').textContent=score;break;}}
   if(by>368){lives--;stage.querySelector('#bbL').textContent=lives;if(lives<=0){over=true;alertInStage('Game Over! Score: '+score+' — press Restart.');}else{bx=px+50;by=330;started=false;}}
   else if(bricks.every(b2=>!b2.on)){over=true;alertInStage('🎉 All bricks cleared! Score: '+score);}}
  raf=requestAnimationFrame(draw);}
 const mm=e=>{const r=cv.getBoundingClientRect();const x=(e.touches?e.touches[0].clientX:e.clientX)-r.left;px=Math.max(0,Math.min(380,x*(480/r.width)-50));if(!started&&!over){bx=px+50;by=330;}};
 cv.addEventListener('mousemove',mm);cv.addEventListener('touchmove',mm,{passive:true});cv.addEventListener('click',()=>{if(!over)started=true;});
 draw();cleanup=()=>cancelAnimationFrame(raf);}

function engTiles(g){let tiles=[],score=0,miss=0,raf,last=0,over=false;const SPEED=2600;
 setStage(`${hud(['Score: <b id="ptS">0</b>','Missed: <b id="ptM">0</b>/3'])}<div id="ptB" style="position:relative;width:288px;height:400px;background:#0f172a;border-radius:14px;overflow:hidden;border:1px solid #334155"></div><p class="help">${g.help}</p>`);
 const board=stage.querySelector('#ptB');
 function spawn(){const col=Math.floor(Math.random()*4);const el=document.createElement('button');el.style.cssText=`position:absolute;width:70px;height:96px;left:${col*72+1}px;top:-98px;background:#f8fafc;border:0;border-radius:8px;cursor:pointer;font-size:26px`;el.textContent='🎵';el.dataset.y=-98;el.onclick=()=>{if(paused||over)return;score++;stage.querySelector('#ptS').textContent=score;el.remove();tiles=tiles.filter(t=>t!==el);};
  board.appendChild(el);tiles.push(el);}
 let spawnT=null;spawnT=setInterval(()=>{if(!paused&&!over)spawn();},900);
 function loop(ts){if(!paused&&!over){tiles.forEach(el=>{let y=+el.dataset.y+2.6;el.dataset.y=y;el.style.top=y+'px';});tiles.filter(el=>+el.dataset.y>402).forEach(el=>{el.remove();tiles=tiles.filter(t=>t!==el);miss++;stage.querySelector('#ptM').textContent=miss;if(miss>=3){over=true;alertInStage('Three tiles missed! Score: '+score+' — press Restart.');}});}
  raf=requestAnimationFrame(loop);}
 raf=requestAnimationFrame(loop);cleanup=()=>{cancelAnimationFrame(raf);clearInterval(spawnT);};}
function engStroop(g){const COLORS=[['RED','#ef4444'],['BLUE','#3b82f6'],['GREEN','#22c55e'],['YELLOW','#eab308'],['PINK','#ec4899']];let score=0,time=30,cur=null,over=false;
 setStage(`${hud(['Score: <b id="stS">0</b>','Time: <b id="stT">30</b>s'])}<div id="stW" style="font-size:52px;font-weight:900"></div><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center">${COLORS.map(c2=>`<button class="pbtn" data-c="${c2[0]}" style="background:${c2[1]};border-color:${c2[1]}">${c2[0]}</button>`).join('')}</div><p class="help">${g.help}</p>`);
 const wEl=stage.querySelector('#stW');
 function next(){const word=rand(COLORS);let ink=rand(COLORS);cur=g.cfg&&g.cfg.mode==='word'?word[0]:ink[0];wEl.textContent=word[0];wEl.style.color=ink[1];}
 stage.querySelectorAll('[data-c]').forEach(b=>b.onclick=()=>{if(over||paused)return;if(b.dataset.c===cur){score++;stage.querySelector('#stS').textContent=score;}else{score=Math.max(0,score-1);stage.querySelector('#stS').textContent=score;}next();});
 next();const iv=setInterval(()=>{if(paused||over)return;time--;stage.querySelector('#stT').textContent=time;if(time<=0){over=true;alertInStage('Time up! Score: '+score+' — press Restart.');clearInterval(iv);}},1000);
 cleanup=()=>clearInterval(iv);}
function engReflex(g){const c=g.cfg||{};let score=0,time=c.secs||30,cur=null,over=false;
 setStage(`${hud(['Score: <b id="rfS">0</b>','Time: <b id="rfT">${c.secs||30}</b>s'])}<div id="rfQ" style="font-size:46px;font-weight:900;min-height:64px"></div><div id="rfBtns" style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center"></div><p class="help">${g.help}</p>`);
 const qEl=stage.querySelector('#rfQ'),bEl=stage.querySelector('#rfBtns');
 function next(){cur=c.gen();qEl.textContent=cur.q;bEl.innerHTML=cur.opts.map((o,i)=>`<button class="pbtn" data-i="${i}" style="font-size:18px;padding:12px 20px">${o}</button>`).join('');
  bEl.querySelectorAll('button').forEach(b=>b.onclick=()=>{if(over||paused)return;if(+b.dataset.i===cur.a){score++;}else{score=Math.max(0,score-1);}stage.querySelector('#rfS').textContent=score;next();});}
 next();const iv=setInterval(()=>{if(paused||over)return;time--;stage.querySelector('#rfT').textContent=time;if(time<=0){over=true;alertInStage('Time up! Score: '+score+' — press Restart.');clearInterval(iv);}},1000);
 cleanup=()=>clearInterval(iv);}
function engOdd(g){const c=g.cfg||{};let round=1,score=0,over=false;const total=c.rounds||10;
 setStage(`${hud(['Round: <b id="odR">1</b>/'+total,'Score: <b id="odS">0</b>'])}<div id="odB" style="display:grid;grid-template-columns:repeat(5,58px);gap:7px"></div><p class="help">${g.help}</p>`);
 const board=stage.querySelector('#odB');
 function next(){if(round>total){over=true;board.innerHTML='';alertInStage('Finished! Score: '+score+' / '+total+' — press Restart.');return;}
  stage.querySelector('#odR').textContent=round;const oddIdx=Math.floor(Math.random()*25);board.innerHTML=Array.from({length:25},(_,i)=>`<button data-i="${i}" style="height:58px;font-size:30px;border-radius:10px;border:0;background:#1e293b;cursor:pointer">${i===oddIdx?c.odd:c.same}</button>`).join('');
  board.querySelectorAll('button').forEach(b=>b.onclick=()=>{if(over||paused)return;if(+b.dataset.i===oddIdx){score++;stage.querySelector('#odS').textContent=score;}round++;setTimeout(next,250);});}
 next();cleanup=()=>{};}
function engPop(g){const c=g.cfg||{};const N=c.n||8,COLS=['#ef4444','#3b82f6','#22c55e','#facc15','#a855f7'];let b=[],score=0;
 function gen(){b=Array.from({length:N*N},()=>Math.floor(Math.random()*(c.colors||4)));}
 setStage(`${hud(['Score: <b id="ppS">0</b>'])}<div id="ppB" style="display:grid;grid-template-columns:repeat(${N},40px);gap:4px"></div><p class="help">${g.help}</p>`);
 const board=stage.querySelector('#ppB');
 function draw(){board.innerHTML=b.map((v,i)=>v<0?'<div></div>':`<button data-i="${i}" style="height:40px;border-radius:50%;border:0;background:${COLS[v]};cursor:pointer"></button>`).join('');
  board.querySelectorAll('button').forEach(bt=>bt.onclick=()=>pop(+bt.dataset.i));}
 function group(i){const col=b[i];if(col<0)return[];const seen=new Set([i]),stack=[i];while(stack.length){const cur=stack.pop();const r=Math.floor(cur/N),c2=cur%N;[[1,0],[-1,0],[0,1],[0,-1]].forEach(([dr,dc])=>{const rr=r+dr,cc=c2+dc,ni=rr*N+cc;if(rr>=0&&rr<N&&cc>=0&&cc<N&&!seen.has(ni)&&b[ni]===col){seen.add(ni);stack.push(ni);}});}return[...seen];}
 function pop(i){if(paused)return;const grp=group(i);if(grp.length<2)return;grp.forEach(x=>b[x]=-1);score+=grp.length*(grp.length-1);stage.querySelector('#ppS').textContent=score;
  for(let c2=0;c2<N;c2++){const stack=[];for(let r=N-1;r>=0;r--)if(b[r*N+c2]>=0)stack.push(b[r*N+c2]);for(let r=N-1;r>=0;r--)b[r*N+c2]=stack.length?stack.shift():Math.floor(Math.random()*(c.colors||4));}
  draw();}
 gen();draw();cleanup=()=>{};}
function engStack(g){const c=g.cfg||{};let x=0,dir=1,level=0,blockW=180,baseX=110,raf,over=false,locked=false;
 setStage(`${hud(['Blocks: <b id="skL">0</b>'])}<canvas width="440" height="380"></canvas><button class="pbtn primary" id="skBtn">⬇ Drop Block</button><p class="help">${g.help}</p>`);
 const cv=stage.querySelector('canvas'),ctx=cv.getContext('2d');let stackArr=[{x:110,w:220}];
 function draw(){ctx.fillStyle='#0f172a';ctx.fillRect(0,0,440,380);stackArr.forEach((s,i)=>{ctx.fillStyle=['#ef4444','#f59e0b','#22c55e','#3b82f6','#ec4899','#a855f7'][i%6];ctx.fillRect(s.x,348-i*26,s.w,24);});
  if(!over){ctx.fillStyle='#f8fafc';ctx.fillRect(x,348-stackArr.length*26,blockW,24);}}
 function loop(){if(!paused&&!over&&!locked){x+=dir*(c.speed||3.2);if(x<0||x+blockW>440)dir*=-1;x=Math.max(0,Math.min(440-blockW,x));}draw();raf=requestAnimationFrame(loop);}
 stage.querySelector('#skBtn').onclick=()=>{if(over||locked||paused)return;locked=true;const below=stackArr[stackArr.length-1];const left=Math.max(x,below.x),right=Math.min(x+blockW,below.x+below.w);const nw=right-left;
  if(nw<=8){over=true;alertInStage('Missed! Tower height: '+level+' blocks. Press Restart.');return;}
  stackArr.push({x:left,w:nw});blockW=nw;level++;stage.querySelector('#skL').textContent=level;x=0;locked=false;
  if(level>=15)alertInStage('Amazing — 15+ blocks! Keep going or press Restart.');};
 cv.addEventListener('pointerdown',()=>stage.querySelector('#skBtn').click());
 loop();cleanup=()=>cancelAnimationFrame(raf);}
function engPenalty(g){let you=0,keeper=0,round=0,over=false;const zones=['Top Left','Top Right','Bottom Left','Bottom Right','Centre'];
 setStage(`${hud(['Goals: <b id="pnY">0</b>','Saved: <b id="pnK">0</b>','Shots: <b id="pnR">0</b>/5'])}<div style="font-size:60px">🥅</div><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center">${zones.map((z,i)=>`<button class="pbtn" data-z="${i}" style="padding:12px 16px">${z}</button>`).join('')}</div><p class="help" id="pnMsg">${g.help}</p>`);
 stage.querySelectorAll('[data-z]').forEach(b=>b.onclick=()=>{if(over||paused)return;const pick=+b.dataset.z,dive=Math.floor(Math.random()*5);round++;stage.querySelector('#pnR').textContent=round;
  if(pick===dive){keeper++;stage.querySelector('#pnMsg').textContent='🧤 Saved! The keeper dived to '+zones[dive]+'.';}
  else{you++;stage.querySelector('#pnMsg').textContent='⚽ GOAL! Keeper went to '+zones[dive]+'.';}
  stage.querySelector('#pnY').textContent=you;stage.querySelector('#pnK').textContent=keeper;
  if(round>=5){over=true;stage.querySelector('#pnMsg').textContent+=' Final: '+you+' goals from 5. Press Restart.';}});
 cleanup=()=>{};}
function engCoin(g){let streak=0,best=0;
 setStage(`${hud(['Streak: <b id="cnS">0</b>','Best: <b id="cnB">0</b>'])}<div style="font-size:70px" id="cnF">🪙</div><div style="display:flex;gap:10px"><button class="pbtn" data-g="heads" style="font-size:17px;padding:13px 20px">Heads</button><button class="pbtn" data-g="tails" style="font-size:17px;padding:13px 20px">Tails</button></div><p class="help" id="cnMsg">${g.help}</p>`);
 stage.querySelectorAll('[data-g]').forEach(b=>b.onclick=()=>{if(paused)return;const res=Math.random()<0.5?'heads':'tails';stage.querySelector('#cnF').textContent=res==='heads'?'👑':'🪙';
  if(b.dataset.g===res){streak++;best=Math.max(best,streak);stage.querySelector('#cnMsg').textContent='✅ It was '+res+'! Streak grows.';}
  else{streak=0;stage.querySelector('#cnMsg').textContent='❌ It was '+res+'. Streak reset — guess again!';}
  stage.querySelector('#cnS').textContent=streak;stage.querySelector('#cnB').textContent=best;});
 cleanup=()=>{};}
function engWar(g){const suits=['♠','♥','♦','♣'];const disp=v=>v===11?'J':v===12?'Q':v===13?'K':v===14?'A':''+v;let you=26,cpu=26,over=false;
 setStage(`${hud(['Your cards: <b id="wrY">26</b>','CPU cards: <b id="wrC">26</b>'])}<div style="font-size:56px" id="wrF">🂠 vs 🂠</div><button class="pbtn primary" id="wrGo">⚔ Draw Battle Card</button><p class="help" id="wrMsg">${g.help}</p>`);
 stage.querySelector('#wrGo').onclick=()=>{if(over)return;const a=2+Math.floor(Math.random()*13),b=2+Math.floor(Math.random()*13);stage.querySelector('#wrF').textContent=disp(a)+rand(suits)+' vs '+disp(b)+rand(suits);
  if(a>b){you++;cpu--;stage.querySelector('#wrMsg').textContent='You win the battle and take a card!';}
  else if(b>a){cpu++;you--;stage.querySelector('#wrMsg').textContent='CPU wins the battle.';}
  else stage.querySelector('#wrMsg').textContent='Tie — no cards change hands.';
  stage.querySelector('#wrY').textContent=you;stage.querySelector('#wrC').textContent=cpu;
  if(you>=52){over=true;stage.querySelector('#wrMsg').textContent='🎉 You captured the whole deck — you win the war! Press Restart.';}
  if(cpu>=52){over=true;stage.querySelector('#wrMsg').textContent='CPU captured the whole deck. Press Restart.';}};
 cleanup=()=>{};}
function engBlackjack(g){let hand=[],dealer=[],over=false;const draw=()=>2+Math.floor(Math.random()*13)>10?10:(2+Math.floor(Math.random()*11));
 function val(h){let s=h.reduce((a,b)=>a+b,0);let aces=h.filter(v=>v===11).length;while(s>21&&aces){s-=10;aces--;}return s;}
 function deal(){hand=[newCard(),newCard()];dealer=[newCard(),newCard()];over=false;show();}
 function newCard(){const r=1+Math.floor(Math.random()*13);return r===1?11:r>10?10:r;}
 setStage(`${hud(['Your hand: <b id="bjY">0</b>','Dealer: <b id="bjD">?</b>'])}<div id="bjCards" style="font-size:21px;font-weight:800;text-align:center"></div><div style="display:flex;gap:10px"><button class="pbtn primary" id="bjHit">Hit</button><button class="pbtn" id="bjStand">Stand</button><button class="pbtn" id="bjNew">New Round</button></div><p class="help" id="bjMsg">${g.help}</p>`);
 function show(end){stage.querySelector('#bjY').textContent=val(hand);stage.querySelector('#bjD').textContent=end?val(dealer):'?';stage.querySelector('#bjCards').innerHTML='You: '+hand.join(' · ')+'<br>Dealer: '+(end?dealer.join(' · '):dealer[0]+' · 🂠');}
 deal();show();
 stage.querySelector('#bjHit').onclick=()=>{if(over)return;hand.push(newCard());show();if(val(hand)>21){over=true;show(true);stage.querySelector('#bjMsg').textContent='💥 Bust with '+val(hand)+'! Dealer wins. Press New Round.';}};
 stage.querySelector('#bjStand').onclick=()=>{if(over)return;over=true;while(val(dealer)<17)dealer.push(newCard());show(true);const y=val(hand),d=val(dealer);
  stage.querySelector('#bjMsg').textContent=d>21?('🎉 Dealer busts with '+d+' — you win!'):y>d?('🎉 You win '+y+' vs '+d+'!'):y<d?('Dealer wins '+d+' vs '+y+'.'):('Push — tie at '+y+'.');};
 stage.querySelector('#bjNew').onclick=()=>{deal();stage.querySelector('#bjMsg').textContent='New round dealt. Hit or Stand?';};
 cleanup=()=>{};}
function engWordle(g){const words=g.cfg.words;const target=rand(words);let row=0,over=false;
 setStage(`${hud(['Tries: <b id="wdT">0</b>/6'])}<div id="wdB" style="display:grid;grid-template-columns:repeat(5,52px);gap:6px">${Array.from({length:30},()=>'<div style="height:52px;border-radius:10px;background:#1e293b;display:grid;place-items:center;font-size:24px;font-weight:900;color:#fff"></div>').join('')}</div><div style="display:flex;gap:8px"><input id="wdIn" maxlength="5" placeholder="5-letter word" style="padding:11px 14px;border-radius:10px;border:1.5px solid #334155;background:#0f172a;color:#fff;text-transform:uppercase;width:180px"><button class="pbtn primary" id="wdGo">Guess</button></div><p class="help" id="wdMsg">${g.help}</p>`);
 const cells=[...stage.querySelector('#wdB').children];
 stage.querySelector('#wdGo').onclick=()=>{if(over)return;const v=stage.querySelector('#wdIn').value.trim().toUpperCase();if(v.length!==5){stage.querySelector('#wdMsg').textContent='Enter exactly 5 letters.';return;}
  const tArr=target.split('');const res=Array(5).fill('#475569');const used=Array(5).fill(false);
  for(let i=0;i<5;i++)if(v[i]===target[i]){res[i]='#16a34a';used[i]=true;}
  for(let i=0;i<5;i++){if(res[i]==='#16a34a')continue;const j=tArr.findIndex((ch,k)=>!used[k]&&ch===v[i]);if(j>=0){res[i]='#ca8a04';used[j]=true;}}
  for(let i=0;i<5;i++){const cell=cells[row*5+i];cell.textContent=v[i];cell.style.background=res[i];}
  row++;stage.querySelector('#wdT').textContent=row;stage.querySelector('#wdIn').value='';
  if(v===target){over=true;stage.querySelector('#wdMsg').textContent='🎉 You got "'+target+'" in '+row+' tries! Press Restart.';}
  else if(row>=6){over=true;stage.querySelector('#wdMsg').textContent='Out of tries — the word was "'+target+'". Press Restart.';}
  else stage.querySelector('#wdMsg').textContent='Green = right spot, yellow = wrong spot, grey = not in word.';};
 cleanup=()=>{};}
function engSeq(g){const qs=shuffle(g.cfg.q);let i=0,score=0;
 setStage(`${hud(['Puzzle: <b id="sqN">1</b>/'+qs.length,'Score: <b id="sqS">0</b>'])}<div style="font-size:30px;font-weight:900" id="sqQ"></div><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="sqOpts"></div><p class="help" id="sqMsg">${g.help}</p>`);
 function show(){if(i>=qs.length){stage.querySelector('#sqQ').textContent='🏁 Done';stage.querySelector('#sqOpts').innerHTML='';stage.querySelector('#sqMsg').textContent='Score: '+score+' / '+qs.length+'. Press Restart.';return;}
  stage.querySelector('#sqN').textContent=i+1;stage.querySelector('#sqQ').textContent=qs[i][0];stage.querySelector('#sqMsg').textContent='';
  stage.querySelector('#sqOpts').innerHTML=qs[i][1].map((o,j)=>`<button class="pbtn" data-j="${j}" style="font-size:18px">${o}</button>`).join('');
  stage.querySelectorAll('#sqOpts button').forEach(b=>b.onclick=()=>{if(+b.dataset.j===qs[i][2]){score++;stage.querySelector('#sqS').textContent=score;stage.querySelector('#sqMsg').textContent='✅ Correct!';}else stage.querySelector('#sqMsg').textContent='❌ Answer was '+qs[i][1][qs[i][2]]+'.';setTimeout(()=>{i++;show();},800);});}
 show();cleanup=()=>{};}
function engClicker(g){const c=g.cfg||{};let pts=0,per=c.per||1,cost=25,autos=0,iv=null;
 setStage(`${hud(['<span id="ckL">'+(c.label||'Points')+': </span><b id="ckP">0</b>','Per click: <b id="ckPer">'+per+'</b>'])}<button id="ckBtn" style="width:170px;height:170px;border-radius:50%;border:0;font-size:76px;background:#1e293b;cursor:pointer">${c.icon||'🍪'}</button><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center"><button class="pbtn" id="ckUp">⬆ Upgrade click (25)</button><button class="pbtn" id="ckAuto">🤖 Auto +1/s (60)</button></div><p class="help">${g.help}</p>`);
 function upd(){stage.querySelector('#ckP').textContent=Math.floor(pts);stage.querySelector('#ckPer').textContent=per;stage.querySelector('#ckUp').textContent='⬆ Upgrade click ('+cost+')';}
 stage.querySelector('#ckBtn').onclick=()=>{if(paused)return;pts+=per;upd();};
 stage.querySelector('#ckUp').onclick=()=>{if(pts>=cost){pts-=cost;per+=1;cost=Math.round(cost*1.7);upd();}};
 stage.querySelector('#ckAuto').onclick=()=>{if(pts>=60){pts-=60;autos++;upd();}};
 iv=setInterval(()=>{if(!paused&&autos){pts+=autos;upd();}},1000);
 upd();cleanup=()=>clearInterval(iv);}

openGame('snake',true);