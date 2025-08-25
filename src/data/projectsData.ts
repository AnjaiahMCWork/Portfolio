import { ProjectsData } from "../types"; // Correct path (go back one level)
import FortniteSubwayImage from '/src/assets/images/SubwaySurferz.jpeg';
// import FootBallImage from '/src/assets/images/FootBall.jpeg';
import BikeParkourImage from '/src/assets/images/BikeParkour.jpeg';
import AncientAdeventureImage from '/src/assets/images/AncientAdventure1.jpg';
import ShooterImage from '/src/assets/images/Shooter1.jpg';
import RBGOImage from '/src/assets/images/RBGO.jpeg';
import GodzillaImage from '/src/assets/images/Godzilla2.jpeg';
// import GodzillaImage1 from '/src/assets/images/Godzilla1.jpeg';
// import BattleRoyaleImage from '/src/assets/images/BattleRoyale.jpeg';
import KongWarsImage from '/src/assets/images/KongWars.jpeg';
// import ZoneWarsImage from '/src/assets/images/ZoneWars.jpeg';
// import SquidWarsImage from '/src/assets/images/SquidWars.jpeg';
// import GoBallisticImage from '/src/assets/images/GoBallistic.jpeg';
import HavocStationImage from '/src/assets/images/HavocStation.jpeg';
// import FreeForALLWith1v1Image from '/src/assets/images/16FreeForAlland1V1.jpeg';
// import BuildFightsRepeatImage from '/src/assets/images/BuildFights1vs1.jpeg';
// import Gungame1Image from '/src/assets/images/Gungame1.jpeg';
import SpaceShipAdventureImage from '/src/assets/images/Spaceship.png';
import TileVaniaImage from '/src/assets/images/TileVania.png';
import  SpaceAdventureImage from '/src/assets/images/SpaceAdventure1.png';


export const projectsData : ProjectsData = {
    uefn: [
      {
        title: "HAVOC STATION",
        description: "Football game with a Fall Guys theme.",
        about: 'Havoc Station is a cooperative multiplayer combat experience where players progress through 10 increasingly difficult rooms, battling NPC guards to earn custom currency and unlock powerful gear. Players start with a weapon selection and build their loadout by clearing rooms, unlocking new weapons and upgrades from a fully custom shop system.The game combines persistent progression, currency economy, and tiered weapon unlocks to offer high replayability. All systems are built using Verse scripting in UEFN and feature real-time stat updates and inventory decisions.',
        contributions: 'Full Game Design – Designed progression flow, combat mechanics, and loadout/weapon strategy across all rooms | Custom Shop System – Developed a modular, multi-tiered shop in Verse supporting unlockable weapons/items across categories | Currency & Unlock Logic – Engineered a persistent custom currency system rewarding players for kills, tied to upgradeable inventory | Weapon Selection Draft System – Built a pop-up weapon selection UI that appears at match start and after each room is cleared | Gameplay Scripting & Mechanics – Scripted enemy behaviors, wave logic, room transitions, and loadout handling using Verse | Persistence & Replayability – Enabled session-persistent player stats and unlocks, allowing for long-term progression | Game World & Level Structure – Collaborated with a 3D artist to acquire room assets, then modified and integrated them with custom collision, layout, and flow to support the progression loop | Asset Integration – Integrated 2D/3D assets into UEFN and optimized them for performance and gameplay clarity',
        image: HavocStationImage,
        videoUrl: "https://www.youtube.com/embed/FAIOeiq8Fis",
        playUrl: "https://fortnite.gg/island?code=2128-2864-2773",
        gameCode: "2128-2864-2773" ,
        subsection: "uefn",
        gameDetails:{gameMode: "Multiplayer - Co-op", genre: "Roguelike", maxPlayers: 5, sessionLength: "Unlimited"},
        keyFeatures: [
          "🤝 Cooperative PvE gameplay (all players are one team)",
          "🧠 10 progressive rooms with increasing enemy difficulty",
          "💰 Earn custom currency (1,000 per guard kill) to unlock weapons/items",
          "🛒 Full-featured custom shop system with 5 upgrade levels per weapon category",
          "🔫 Weapon categories: AR, SMG, Shotguns, Pistols, Explosives, Snipers, Heals",
          "🎯 Persistent currency and unlocks across sessions",
          "🧩 Loadout management with 4 weapon slots per player",
          "📦 Weapon draft UI shown before Room 1 and after each room clear (pick from 4 random options)",
          "🔄 Unlimited replayability with evolving strategies"
        ],
        showContributionIntro: true,
      },
      {
        title: "KONG WARS - BOSS EVENT",
        description: "Football game with a Fall Guys theme.",
        about: 'KONG WARS – Boss Event is a 25-player cooperative survival and boss battle game built in UEFN. Players spawn on a wild, creature-infested island filled with zombies, wolves, and raptors. Eliminating these creatures rewards players with gold (10 per kill), which can be spent in a shop to unlock and purchase powerful weaponsAfter the first 15 minutes, Kong spawns and begins actively hunting and attacking players, using a custom scripted AI system. Once Kong is defeated, the round ends and resets — supporting up to 100 rounds. Kong’s mechanics, including his targeting logic, animations, and combat behavior, are all coded in Verse, along with a shared health UI and arrival timer visible to all players.',
        contributions: ' Kong AI & Boss Logic – Developed all of Kong’s behavior using Verse, including targeting, movement, combat, animations, and roar mechanics | Multiplayer UI Systems – Built shared boss health bar and arrival countdown timer visible to all players | Round Transition System – Scripted custom logic to end after Kong is defeated | Combat & Shop Integration – Connected creature kills to gold economy and shop purchasing system |  Asset Integration – Worked with 2D/3D artists to implement the Kong model, animations, and UI elements | Targeting System – Engineered logic for Kong to detect and attack player positions across the map',
        image: KongWarsImage,
        videoUrl: "https://www.youtube.com/embed/Asdo8k350-M",
        playUrl: "https://fortnite.gg/island?code=8892-2322-0397",
        gameCode: "8892-2322-0397" ,
        subsection: "uefn",
        gameDetails:{gameMode: "Multiplayer - Co-op", genre: "BossFight / Open-World Co-op Shooter / PvEvE", maxPlayers: 25, sessionLength: "100 Rounds"},
        keyFeatures: [
          "🗺️ Open-World Map – Explore a dangerous island with ambient threats",
          "👥 25-Player Co-op – Fight alongside other players against AI creatures and bosses",
          "🧟 Enemy Spawns – Face off against zombies, wolves, and raptors for gold",
          "💰 Gold Economy – Earn gold from kills and spend it in the in-game shop",
          "🛒 Weapon Shop – Persistent shop with unlockable weapons",
          "⏰ Timed Boss Spawn – Kong appears 15 minutes after match start",
          "🎯 Dynamic Player Targeting – Kong tracks and attacks player locations",
          "🦍 Fully Scripted Boss AI – Custom behavior, attacks, and animations using Verse",
          "📊 Multiplayer Health UI – Synchronized boss health and arrival timer for all players",
          "🔁 Round-Based Gameplay – Each Kong defeat ends the round and restarts the session"
        ],
        showContributionIntro: true,
      },
      {
        title: "SUPER R🔴B🔵G🟢O🟡",
        description: "Custom Unlimited Runner Game",
        about: 'SUPER R🔴B🔵G🟢O🟡 is a high-intensity, team-based practice/team deathmatch game featuring four color-coded teams — Red, Blue, Green, and Orange. Players battle endlessly in an arena designed for competitive training, with real-time stat tracking, a spin-to-win weapon system, and persistent rank progression.The game supports infinite playtime, allowing players to jump in/out at any time while maintaining their stats and rank across sessions.',
        contributions: ' Complete Game Design – Designed team-based combat mechanics, spawn flow, and scoring logic using UEFN | Persistent Stat & Rank System – Developed a data-driven system in Verse to store and retrieve player stats (kills, deaths, K/D, and rank) across sessions | UI Design & Integration – Created a dynamic UI to display each team’s score and individual player performance |  Weapon Spin System – Implemented a gold-based spin wheel mechanic granting randomized weapons |  Superpower System – Scripted shared superpower access points across all team bases for fair gameplay balance | Gameplay Logic & Balancing – Tuned match pacing and stat feedback for rewarding practice-based progression',
        image: RBGOImage,
        videoUrl: "https://www.youtube.com/embed/PjKSeIutWHk",
        playUrl: "https://fortnite.gg/island?code=9467-6744-6732",
        gameCode: "9467-6744-6732" ,
        subsection: "uefn",
        gameDetails:{gameMode: "Multiplayer - Team Based", genre: "Team DeathMatch / Practice Arena", maxPlayers: 40, sessionLength: "Unlimited"},
        keyFeatures: [
          "🟥🟦🟩🟧 4 teams (Red, Blue, Green, Orange) with up to 10 players each",
          "🎮 Team-based deathmatch with no time limit",
          "📊 Persistent player stats – kills, deaths, K/D, rank retained across sessions",
          "🔁 Spin wheel to get random weapons using gold",
          "⚡ Shared superpowers available at all team bases",
          "🧬 Rank progression system synced to player performance",
          "📺 Real-time UI scoreboard showing team and player data",
          "🔄 Drop in/out matchmaking with automatic stat restoration"
        ],
        showContributionIntro: true,
      },
      {
        title: "GODZILLA - BOSS FIGHT OPEN WORLD",
        description: "Custom Unlimited Runner Game",
        about: 'GODZILLA – Boss Fight Open World is a 25-player cooperative experience set on a custom-designed island built in UEFN. Players start with basic weapons and face ambient threats like zombies, wolves, and raptors, earning gold by eliminating them (10 gold per creature). Players can spend gold in a shop to acquire better weapons.After the first 15 minutes, Godzilla spawns and becomes the central boss fight. He dynamically targets and attacks players anywhere on the map. Once defeated, the round ends — with support for 100 total rounds.All Godzilla behavior, health UI, and round logic are handled using Verse, ensuring synchronized multiplayer experiences and persistent game flow.',
        contributions: 'Godzilla AI & Combat Logic – Scripted all behavior using Verse, including movement, roars, animations, and combat targeting | Precise Targeting System – Developed logic for Godzilla to detect, track, and move toward active players in real time | Multiplayer Health & Timers – Built shared UI for Godzilla’s health and countdown using Verse |  Round Management System – Implemented custom round-ending  when Godzilla is defeated |  Combat Economy Integration – Connected creature kills to gold earning and shop functionality |  Asset Integration – Collaborated with 2D/3D artists to implement Godzilla’s model, animations, and UI visuals | UI Feedback & Polish – Created in-game prompts, timers, and map indicators for event triggers like Godzilla unlock',
        image: GodzillaImage,
        videoUrl: "https://www.youtube.com/embed/RNrs8mOdP48",
        playUrl: "https://fortnite.gg/island?code=2860-0010-0528",
        gameCode: "2860-0010-0528" ,
        subsection: "uefn",
        gameDetails:{gameMode: "Multiplayer - Co-op", genre: "BossFight / Open-World Co-op Shooter / PvEvE", maxPlayers: 25, sessionLength: "100 Rounds"},
        keyFeatures: [
          "🗺️ Open-World Island – Explore a large, detailed map populated with AI threats",
          "👥 25-Player Co-op – Multiplayer teamwork in a persistent, PvE setting",
          "🧟 Ambient Creatures – Zombies, wolves, and raptors spawn throughout the island",
          "💰 Gold Economy – Earn 10 gold per creature kill to spend in the weapon shop",
          "🛒 In-Game Shop – Unlock and purchase stronger weapons with earned gold",
          "⏰ Timed Boss Spawn – Godzilla arrives exactly 15 minutes into the session",
          "🎯 Player Targeting AI – Godzilla tracks and moves toward player locations",
          "💥 Custom Boss Mechanics – Unique attacks, animations, and roars scripted in Verse",
          "📊 Multiplayer Health UI – All players see the same real-time boss health",
          "🔁 Round-Based System – Defeating Godzilla ends the round, supporting up to 100 rounds"
        ],
        showContributionIntro: true,
      },
      {
        title: "FORTNITE SUBWAY RUN👑",
        description: "Custom Unlimited Runner Game",
        about: "Fortnite Subway Run is a fast-paced, single-player endless runner designed to deliver a highly engaging gameplay experience. Players navigate an infinite, procedurally generated subway environment, dodging oncoming trains and obstacles while collecting power-ups and coins. Each collected coin contributes to the player's score (1 coin = 10 score), and distance traveled is tracked in real time.The game features persistent data storage, allowing players to retain their best score and best distance across multiple sessions. With seamless map generation, high-speed action, and interactive mechanics, Fortnite Subway Run delivers a fun, challenging experience.",
        contributions: "Lead Gameplay Developer – Designed and implemented all core mechanics, including movement, collision handling, power-ups, and dynamic environment scaling. |  Level Design & World Generation – Developed an infinite, procedurally generated subway map, integrating obstacles, moving trains, and collectibles. | Scoring & Progression System – Engineered the score and distance tracking system, ensuring real-time UI updates and persistent high score storage. | UI & User Experience – Designed and implemented interactive HUD elements to display live score, distance, and best records. |  Asset Integration & Optimization – Collaborated with 3D artists to integrate models, apply collisions, set up animations, and optimize performance | Full Game Development & Deployment – Oversaw all aspects of development, from concept to implementation, ensuring a polished and engaging gameplay experience.",
        image: FortniteSubwayImage,
        videoUrl: "https://www.youtube.com/embed/-lLh4wgBPAc",
        playUrl: "https://fortnite.gg/island?code=4760-4332-1391",
        gameCode: "4760-4332-1391" ,
        subsection: "uefn",
        gameDetails:{gameMode: "Single Player", genre: "Endless Runner", maxPlayers: 1, sessionLength: "Unlimited"},
        keyFeatures: [
          "🗺️ Endless procedurally generated map",
          "🚄 Dynamic speed increases as distance progresses",
          "💰 Collect coins to increase score (1 coin = 10 score)",
          "📊 Persistent best score and distance tracking",
          "🚧 Dodge oncoming trains and environmental obstacles",
          "⚡ Power-ups: Skateboard, Speed Boost, Jump Boots"
        ],
        showContributionIntro: true,
        
      },
      {
        title: "BIKE STUNTS EXTREME 🔥",
        description: "Challenging parkour map with checkpoints.",
        about: 'Bike Stunts Extreme is a 12-player free-for-all vertical parkour game where players start from ground level and ride their bike through an upward obstacle course made of containers, cranes, and ramps. Players must navigate tricky paths to reach the top, with checkpoints allowing them to resume after a fall.Although the map has a finish point, the game is designed for endless replayability, encouraging players to challenge themselves for better times and precision.',
        contributions: ' Gameplay Scripting & Logic – Integrated and customized UEFN’s checkpoint and multiplayer systems to fit the game’s progression flow | Level Setup & Collision Work – Placed parkour elements, applied fine-tuned collisions, and ensured a smooth player traversal experience | Map Layout Polish – Adjusted obstacle positioning and scale for balance, clarity, and challenge |  Environment & Asset Integration – Collaborated with 3D artists to place models and optimize asset use across the course |  Gameplay Flow Tuning – Refined pacing, start/end logic, and overall experience to support replayability',
        image: BikeParkourImage,
        // videoUrl: "https://www.youtube.com/embed/EW2X8L7Pw5A",
        playUrl: "https://fortnite.gg/island?code=1689-1456-0362",
        gameCode: "1689-1456-0362" ,
        subsection: "uefn",
        gameDetails:{gameMode: "Multiplayer - Free For All", genre: "Parkour / Obstacle Platformer", maxPlayers: 12, sessionLength: "Unlimited"},
        keyFeatures: [
          "⬆️ Climb from ground level to sky through a complex obstacle course",
          "🔁 Checkpoint-based respawn system using UEFN mechanics",
          "🧱 Stylized parkour design with narrow paths, ramps, and gaps",
          "🎮 12-player free-for-all mode using native UEFN multiplayer logic",
          "👥 12-player free-for-all competitive format",
          "🔄 Endless gameplay loop for continuous skill improvement",
          "🎨 Visually rich course with crane, container, and scaffold elements"
        ],
        showContributionIntro: true,
      },
      // {
      //   title: "SOCCER LEGENDS - FALL GUYS",
      //   description: "Football game with a Fall Guys theme.",
      //   about: 'Soccer Legends – Fall Guys is a physics-based, multiplayer party-sports game built in the Fortnite ecosystem using UEFN. The game features 12 players divided into two teams of six, including one dedicated goalkeeper per team. Players compete across 100 intense, fast-paced rounds, where the objective is to score more goals than the opposing team in each round.The team with the most round victories emerges as the ultimate Soccer Legend.',
      //   contributions: " Lead Gameplay Developer – Designed and implemented all core mechanics including team logic, goal detection, scoring, and victory logic. |  Goalkeeper Logic & Zones – Created position-restricted roles for keepers with unique behavior and collision zones. |  Scoring & Feedback System – Built real-time score tracking and UI display for team goals and match progression. | UI & HUD Integration – Implemented scoreboards, notifications, and win prompts using Verse. |  Level Design (UEFN) – Designed and assembled the full stadium layout with spawn points, goals, and play boundaries. | Asset Integration & Optimization – Collaborated with 3D and 2D artists to integrate models and UI assets, ensuring proper placement, collision setup, and performance optimization. |  End-to-End Gameplay Development – Designed and implemented all core gameplay systems, collaborating closely with artists and contributing to overall game delivery.",
      //   image: FootBallImage,
      //   videoUrl: "https://www.youtube.com/embed/SLYPu-SSj5M",
      //   playUrl: "https://fortnite.gg/island?code=1742-0496-7744",
      //   gameCode: "1742-0496-7744" ,
      //   subsection: "uefn",
      //   gameDetails:{gameMode: "Team Based Multiplayer", genre: "Party Game / Arcade Sports", maxPlayers: 12, sessionLength: "100 Rounds"},
      //   keyFeatures: [
      //     "⚽ 6v6 team-based football gameplay",
      //     "🧤 Dedicated goalkeeper system per team",
      //     "🧲 Responsive ball and player collision handling",
      //     "🏟️ Custom-designed football stadium in UEFN",
      //     "🎮 Live score and UI feedback using Verse",
      //     "🎨 Integrated custom 3D and 2D assets",
      //     "🔄 Replayable and session-based match flow"
      //   ],
      //   showContributionIntro: true,
      // },
      
      
      
      // {
      //   title: "Godzilla - Boss Event",
      //   description: "Football game with a Fall Guys theme.",
      //   about: 'Godzilla Boss Fight is a large-scale open-world multiplayer experience created in UEFN. Up to 100 players spawn randomly from the sky into a fully explorable Fortnite-sized island. The gameplay revolves around looting chests, collecting weapons, completing quests, and encountering ambient threats like raptors across 18 unique zones.Every 15 minutes, Godzilla appears in a designated area and becomes the focus of all players. The boss remains active until defeated, after which a global cooldown triggers before the next spawn. The encounter cycle repeats indefinitely, and players can rejoin the challenge with infinite respawns.A synchronized Godzilla health UI is visible to all players, along with a status timer and map indicator showing whether the boss is active. Players also receive quests throughout gameplay, and the system persists player progress, stats, and quest completions between sessions.',
      //   contributions: 'Godzilla Boss System – Designed and implemented all logic for the Godzilla boss using Verse, including health, animations, timed spawning, player targeting, and attack behavior | Godzilla Health UI – Built a synchronized health bar UI using Verse that is visible to all players and updates in real time during boss battles | Godzilla Status System – Developed a timer and map-based indicator system to show whether Godzilla is active or on cooldown |  Quest System – Engineered a modular quest system that delivers and tracks player objectives across infinite sessions using persistent Verse logic | Random Player Spawn System – Scripted dynamic, sky-based player spawning logic with infinite respawn cycles |  Chest Placement & Optimization – Placed and balanced chest spawns in multiple areas, tuning loot tiers for gameplay balance |  Environment & Performance Fixes – Fixed water volume behavior and performed layout adjustments for performance and playability | Collaboration with Artists – Worked with 2D and 3D artists to implement custom Godzilla assets, animations, UI elements, and visual effects',
      //   image: GodzillaImage,
      //   videoUrl: "https://www.youtube.com/embed/tU6mUTHFECY",
      //   playUrl: "https://fortnite.gg/island?code=1445-2651-4522",
      //   gameCode: "1445-2651-4522" ,
      //   subsection: "uefn",
      //   gameDetails:{gameMode: "Multiplayer - Co-op", genre: "BossFight / Open-World Co-op Shooter / PvEvE", maxPlayers: 100, sessionLength: "Unlimited"},
      //   keyFeatures: [
      //     "🗺️ Full-scale open-world island with 18 unique locations",
      //     "👥 100-player co-op multiplayer gameplay",
      //     "⛅ Infinite randomized sky spawning",
      //     "🦖 Godzilla boss fight every 15 minutes with synced health UI and attacks",
      //     "🔄 Infinite Godzilla cycles with in-world timer and map indicators",
      //     "🎯 Raptors populate each zone and dynamically engage players",
      //     "📦 Weapons, chests, vehicles, and building mechanics integrated",
      //     "📜 Unlimited quests with persistent tracking",
      //     "📍 Map shows real-time Godzilla status (locked/unlocked)",
      //     "💡 Persistent systems across sessions using Verse"
      //   ],
      //   showContributionIntro: true,
      // },
      
      
      
      // {
      //   title: "NEW SEASON ZONEWARS 🌀💥",
      //   description: "Custom Unlimited Runner Game",
      //   about: 'NEW SEASON ZONEWARS 🌀💥 is a fast-paced, team-focused Fortnite experience built using UEFN for up to 16 players. Players begin each round in a pre-game lobby and are prompted to choose from four teams within a 25-second timer. If no selection is made, a team balancing system assigns teams automatically. Once assigned, players are teleported to their team base and granted access to a wide selection of weapons and healing items.The match progresses through 9–10 storm phases, gradually pushing all players toward the center for a final showdown. A round ends when only one team is left standing. The game supports 100 rounds, and players can choose different teams each round.A persistent rank system allows players to track their performance across sessions. All team logic, player stats, and win conditions are implemented using Verse.',
      //   contributions: 'Team Selection & Balance System – Developed a complete team selection flow using Verse, including auto-assignment and teleport logic | Alive Player Tracking & Victory Conditions – Implemented logic to monitor each teams remaining players and determine round winners |  Core Gameplay & Zone Design – Designed round flow, team mechanics, and zone behavior to encourage fast-paced team combat | Persistent Rank System – Built a durable stat-tracking system to maintain player progress across sessions | UI Systems – Created real-time UI elements for team tracking and round status using Verse | Asset Collaboration – Worked closely with 2D and 3D artists to integrate visual assets and optimize player experience | Base & Loadout Setup – Structured player spawn bases and ensured seamless access to weapons and heals',
      //   image: ZoneWarsImage,
      //   videoUrl: "https://www.youtube.com/embed/jzmM-iTnYsM",
      //   playUrl: "https://fortnite.gg/island?code=1433-6224-2815",
      //   gameCode: "1433-6224-2815" ,
      //   subsection: "uefn",
      //   gameDetails:{gameMode: "Multiplayer - Team Based", genre: "Multiplayer - ZoneWars", maxPlayers: 16, sessionLength: "100 Rounds"},
      //   keyFeatures: [
      //     "👥 16-Player Multiplayer – Intense team-based zone combat",
      //     "🔁 100 Rounds – Continuous gameplay with evolving team strategies",
      //     "⏱️ Timed Team Selection – Choose your team within 25 seconds",
      //     "⚖️ Auto Team Balancing – Ensures fair matchups across all players",
      //     "📦 Weapon Loadouts – Full access to weapons and heals at team bases",
      //     "🌪️ Dynamic Zone Phases – 9–10 zone movements leading to the final battle",
      //     "📊 Live Team Status UI – Real-time display of alive players per team",
      //     "🏆 Last Team Standing Wins – Round ends when one team remains",
      //     "📈 Persistent Ranking System – Tracks player rank and stats across sessions",
      //     "🔧 Verse-Based Team Logic – Custom scripting for team selection, balance, and win conditions"
      //   ],
      //   showContributionIntro: true,
      // },
      // {
      //   title: "SQUID WARS FFA🚦",
      //   description: "Football game with a Fall Guys theme.",
      //   about: 'SQUID WARS FFA🚦 drops up to 50 players onto an island battlefield, where they spawn from the sky with pre-equipped loadouts of weapons and healing items. Players can also loot additional gear from scattered chests. The game uniquely blends traditional shooter gameplay with the iconic Red Light, Green Light mechanic.Each round alternates between:Green Light (30 seconds): Players are free to move, loot, and fight.Red Light (5 seconds): Movement is strictly prohibited — any player who moves is eliminated.This cycle repeats until only one player remains, concluding the round. The game supports up to 99 rounds. Players Kills, Deaths, and K/D ratio are displayed persistently via custom UI, and when eliminated, the game reveals the attacker and their stats.',
      //   contributions: ' Red/Green Light Mechanic – Scripted the movement detection system using Verse, tracking player location and movement timing for elimination | Custom Stat System – Implemented persistent tracking for kills, deaths, and K/D ratios, displayed via in-game UI | Eliminator Info UI – Built a system that shows who eliminated a player, including their relevant stats |  Gameplay Logic Design – Defined the round rules, timing cycles, and elimination rules | UI Implementation – Designed and implemented dynamic HUD elements to display player and match data |  Collaborated with Artists – Worked closely with 2D and 3D artists to integrate visual assets and match the game’s stylized theme |  Loot & Spawn Design – Structured initial player loadouts and placed chest loot for balanced gameplay',
      //   image: SquidWarsImage,
      //   videoUrl: "https://www.youtube.com/embed/o02AClzKtJo",
      //   playUrl: "https://fortnite.gg/island?code=2991-4323-1592",
      //   gameCode: "2991-4323-1592" ,
      //   subsection: "uefn",
      //   gameDetails:{gameMode: "Multiplayer - Free For All", genre: "Free-for-All / Action Survival", maxPlayers: 50, sessionLength: "99 Rounds"},
      //   keyFeatures: [
      //     "🪂 50-Player Free-For-All – Skyspawned players compete to be the last one standing",
      //     "🚦 Red Light, Green Light Cycle – Tactical survival against both players and movement restrictions",
      //     "⚠️ Movement Elimination Mechanic – Moving during Red Light results in instant elimination",
      //     "🔁 99 Rounds – High replay value and round-based victory",
      //     "📊 Live Stats UI – Real-time display of player Kills, Deaths, and K/D ratio",
      //     "💀 Eliminator Info UI – Shows who eliminated the player and their stats",
      //     "📦 Lootable Chests – Gain better weapons and heals beyond starting loadouts",
      //     "📈 Persistent Stat Tracking – Player stats are saved across sessions",
      //     "🧠 Strategic Timing – Encourages both offensive and stealth play styles",
      //     "🔧 Verse-Powered Logic – Custom scripted mechanics for movement tracking, elimination, and stat display"
      //   ],
      //   showContributionIntro: true,
      // },
      // {
      //   title: "Battle Royale OG : The Last Man Standing",
      //   description: "Challenging parkour map with checkpoints.",
      //   about: 'Battle Royale OG : The Last Man Standing replicates the iconic Fortnite battle royale experience in a custom-built UEFN environment. Set on a massive open-world island with dynamic storms, chests, vehicles, and detailed POIs, the game challenges 100 players in a high-stakes survival match.Players spawn randomly from the sky, with no battle bus, and must scavenge loot, complete quests, and outlast opponents. The dynamic storm system pushes players toward new zones each match, preserving the tension and flow of a true battle royale.A persistent quest system ensures continued engagement by assigning new objectives with each game.',
      //   contributions: ' Map Design & Environment Setup – Designed and optimized key regions of the map, fixing water issues, setting up build holds, and ensuring full compatibility with Fortnite’s build system. Placed and balanced chest spawns across large areas, adjusted terrain for optimal build placement, and configured a clean, fully labeled minimap for seamless navigation. | Vehicle & Memory Optimization – Strategically added and distributed vehicles across the map while managing memory usage to maintain performance. |  Sky Spawn System – Implemented a randomized sky spawning mechanism to replace the default battle bus and create a unique drop experience every match. | Quest System Implementation – Developed a dynamic quest system that assigns randomized missions and rewards players with new ones upon completion. | Storm System Integration – Integrated and tuned a dynamic storm mechanic with randomized zone shifts to replicate classic battle royale pacing and tension. | Build System Compatibility – Ensured proper structural alignment and terrain configuration to support building mechanics throughout the map.',
      //   image: BattleRoyaleImage,
      //   // videoUrl: "https://www.youtube.com/embed/EW2X8L7Pw5A",
      //   playUrl: "https://fortnite.gg/island?code=7354-7652-0834",
      //   gameCode: "7354-7652-0834" ,
      //   subsection: "uefn",
      //   gameDetails:{gameMode: "Multiplayer - Free For All", genre: "Battle Royale", maxPlayers: 100, sessionLength: "1 Life in one game"},
      //   keyFeatures: [
      //     "🗺️ Massive Battle Royale Island – Open world filled with roads, buildings, and loot",
      //     "🪂 Random Sky Spawn – No battle bus; players drop into the map freely",
      //     "📦 Balanced Chest & Loot Placement – Carefully curated spawn system for fair looting",
      //     "🚗 Memory-Optimized Vehicles – Integrated with performance in mind",
      //     "🌪️ Dynamic Storm Circles – Storm zones shift randomly, simulating BR pacing",
      //     "🧭 Named POIs on Minimap – All locations labeled for strategic planning",
      //     "🎯 Randomized Quest System – New objectives generated every match",
      //     "💀 One Life per Match – Elimination ends play; watch or queue into the next",
      //     "👀 Spectator Mode – Follow remaining players after death",
      //     "🏗️ Build-Ready Terrain – Designed to support Fortnite-style building mechanics"
      //   ],
      //   showContributionIntro: true,
      // },
      // {
      //   title: "1V1 لڑائی بنائیں 🔥",
      //   description: "Challenging parkour map with checkpoints.",
      //   about: '1V1 لڑائی بنائیں 🔥 is a flexible and engaging multiplayer arena game supporting up to 16 players. All players start in a central base fully equipped with weapons, heals, and items. Players have the freedom to either battle everyone in a chaotic Free-for-All format or enter structured 1v1 duels by using an interactive matchmaking system. Duel winners return to the main arena, and players can queue up repeatedly for 1v1 matches while others continue to engage in FFA combat. A persistent rank system tracks each players performance across sessions, giving long-term value to practice and progression. The arena resets builds automatically for fair and clean rounds.',
      //   contributions: 'Complete Game Design – Designed the entire layout, flow, and player experience from scratch |  Gameplay Logic Development – Built all mechanics using Verse, including FFA and 1v1 logic, player transitions, and loadout handling |  Duel Matchmaking System – Engineered the system to allow 1v1 duels with physical status displays and match flow | Persistent Rank System – Implemented a performance-based rank system that retains stats across sessions | Build Reset System – Added build resets of player builds for clean base when required.',
      //   image: FreeForALLWith1v1Image,
      //   videoUrl: "https://www.youtube.com/embed/OosOxJHU62Q",
      //   playUrl: "https://fortnite.gg/island?code=6692-3594-8571",
      //   gameCode: "6692-3594-8571" ,
      //   subsection: "uefn",
      //   gameDetails:{gameMode: "Multiplayer - Free For All ", genre: "Practice Arena / 1v1 ", maxPlayers: 16, sessionLength: "Unlimited"},
      //   keyFeatures: [
      //     "🗡️ Structured 1v1 battles with a dedicated duel arena",
      //     "🎮 Simultaneous Free-for-All and Duel gameplay",
      //     "🔁 Automated build reset after each match",
      //     "📋 Real-time matchmaking system with player status display",
      //     "📈 Persistent Rank System to track progress across sessions",
      //     "🔫 Full access to weapons, items, and heals",
      //     "👥 Supports up to 16 concurrent players"
      //   ],
      //   showContributionIntro: true,
      // },
      // {
      //   title: "GO BALLISTIC🎯",
      //   description: "Challenging parkour map with checkpoints.",
      //   about: 'GO BALLISTIC 🎯 is a tactical first-person shooter featuring two teams — Attackers and Defenders — battling in short, strategic rounds. Each match supports 10 players (5 per team) with a 3-minute timer per round. Players switch sides after half-time (round 7), offering a full tactical experience from both attacker and defender perspectives.The Attackers must plant the bomb at one of two designated sites. The Defenders must prevent the plant or defuse it within 30 seconds after planting. Alternatively, the round ends if one team is completely eliminated. The first team to win 7 out of 13 rounds is declared the winner.Each round begins with a Buy Phase, where players can purchase weapons using a custom currency system. Players start with 800 gold in the first round and earn more based on wins, kills, or losses — rewarding strong performance while keeping balance.',
      //   contributions: ' Complete Game Design – Structured all gameplay rules, round logic, and layout flow | Gameplay Mechanics – Programmed core mechanics including bomb plant/defuse logic, win conditions, and player elimination tracking using Verse | 🛒 Custom Shop System – Designed and implemented the interactive UI shop for buying weapons each round using Verse |  💰 Currency System – Engineered a dynamic gold system that rewards players by kills, wins, and losses; persistent across rounds (not sessions) | Team Swap & Round Progression – Built logic for alternating teams and progressing through 13 rounds |  Environment Integration – Collaborated with 2D/3D artists for level assets, and fixed design elements like collisions, object placement, and map balance',
      //   image: GoBallisticImage,
      //   // videoUrl: "https://www.youtube.com/embed/EW2X8L7Pw5A",
      //   playUrl: "https://fortnite.gg/island?code=8773-2304-1363",
      //   gameCode: "8773-2304-1363" ,
      //   subsection: "uefn",
      //   gameDetails:{gameMode: "Multiplayer - Team Based", genre: "Team DeathMatch / Practice Arena", maxPlayers: 10, sessionLength: "13 Rounds"},
      //   keyFeatures: [
      //     "🎯 Tactical FPS combat with team-based bomb defusal objectives",
      //     "🕒 3-minute rounds with 13-round match structure",
      //     "♻️ Team side swaps mid-game (Attack ↔️ Defense)",
      //     "🛒 Fully Custom Shop System – Buy weapons each round with in-game gold via interactive UI",
      //     "💰 Custom Currency System – Earn gold based on round outcomes and player performance",
      //     "🔥 Plant, defuse, or eliminate to win rounds",
      //     "📊 Round-based score tracking and win display"
      //   ],
      //   showContributionIntro: true,
      // },
      // {
      //   title: "BUILD FIGHTS 🔁",
      //   description: "Custom Unlimited Runner Game",
      //   about: 'BUILD FIGHTS 🔁 is a high-intensity 1v1 build battle game designed for players to improve and showcase their Fortnite building and combat skills. Players enter a waiting lobby and once two players are present, they select teams (Team 1 or Team 2) and are teleported into a random battle arena. Each duel is fast-paced, combining combat skill, rapid building, and strategic movement.The gameplay consists of custom rounds. Each round gives both players a few seconds of preparation time before the fight begins. The first player to win 10 custom rounds is awarded 1 main round victory. The game continues across 100 main rounds, and the player who secures the most main round wins becomes the overall winner.Alongside combat, the game features a persistent progression system that tracks each player’s stats, rank, and performance across sessions. A leaderboard shows top performers.',
      //   contributions: 'Complete Game Design – Structured the game loop, pacing, team flow, and round mechanics | Gameplay Logic in Verse – Wrote Verse code for duel logic, team handling, custom/main round tracking, and fight resets |  Random Arena Spawning – Implemented logic to send players to a new location every custom round |  Victory / Loss Detection – Built logic to show who won each custom round and trigger transitions | Persistent Stats & Ranks – Created persistent data to track wins, losses, round stats, and leaderboard position | Round Status Indicators – Displayed fight win/loss status in-world, not just in UI | Preparation Timer & Barrier System – Added pre-fight countdown and physical separation to give players prep time |  Environment Setup – Designed and optimized arenas with artist-created assets for smooth performance',
      //   image: BuildFightsRepeatImage,
      //   // videoUrl: "https://www.youtube.com/embed/EW2X8L7Pw5A",
      //   playUrl: "https://fortnite.gg/island?code=5442-4637-4858",
      //   gameCode: "5442-4637-4858" ,
      //   subsection: "uefn",
      //   gameDetails:{gameMode: "Multiplayer - PVP", genre: "1V1 / Pratice Arena", maxPlayers: 2, sessionLength: "100 Rounds"},
      //   keyFeatures: [
      //     "🏗️ 1v1 Competitive Build Battles",
      //     "📍 Randomized arenas for every round",
      //     "⚔️ Round-based system: First to 10 wins = 1 main round",
      //     "♻️ Up to 100 main rounds per game",
      //     "⏳ 5–10 second preparation barrier before each fight",
      //     "🔀 Team selection and player teleport system",
      //     "🧱 Automatic material & loadout distribution",
      //     "📊 Persistent player stats, rank, and K/D",
      //     "🏆 Global leaderboard integration",
      //     "🪄 Playable endlessly for practice and competition"
      //   ],
      //   showContributionIntro: true,
      // },
      // {
      //   title: "GUN GAME OG💯",
      //   description: "Challenging parkour map with checkpoints.",
      //   about: 'GUN GAME PRO 💯 is an intense third-person gun game mode featuring two teams of five players each. The game consists of up to 100 rounds, with each round lasting 30 minutes. The objective of each round is to reach 50 kills as a team. When a team reaches this milestone, they win the round. The team that wins the most rounds emerges victorious.As players secure eliminations, their weapon changes to the next in a progression of 50 unique weapons. This ensures continuous variety and evolving gameplay dynamics. The game includes a custom UI showing each teams score and highlighting the top-performing players in both teams.',
      //   contributions: 'Complete Game Mechanics – Implemented full gun game progression using Verse, including weapon switching per kill and scoring system | Custom UI System – Built the two-team score display, player stat highlights, and top player visibility using Verse | Persistent Rank System – Engineered a persistent stat tracking and rank system using Verse logic | Game Design & Environment – Designed the gameplay layout, handled collision setups, and collaborated with 2D and 3D artists to refine combat zones and visuals',
      //   image: Gungame1Image,
      //   // videoUrl: "https://www.youtube.com/embed/EW2X8L7Pw5A",
      //   playUrl: "https://fortnite.gg/island?code=1400-6733-8020",
      //   gameCode: "1400-6733-8020" ,
      //   subsection: "uefn",
      //   gameDetails:{gameMode: "Multiplayer - Team Based", genre: "Team DeathMatch / Gungame /Practice Arena", maxPlayers: 10, sessionLength: "100 Rounds"},
      //   keyFeatures: [
      //     "🎯 Fast-paced third-person team combat with evolving loadouts",
      //     "🔁 100 total rounds, each lasting up to 30 minutes",
      //     "🔫 Weapon progression per kill with 50 unique weapons",
      //     "📊 Custom UI showing team scores and top player highlights",
      //     "🏅 Persistent player rank and performance tracking",
      //     "📈 Live stats for kills, deaths, and weapon stages",
      //     "🤝 Balanced 5v5 team format for strategic team play"
      //   ],
      //   showContributionIntro: true,
      // },
      
      
      
      
    ],
    unity: [
      {
        title: "SpaceShip Adeventure",
        description: "Custom Unlimited Runner Game",
        about: 'Spaceship Adventure 3D is an action-packed space shooter where players engage in intense battles against waves of enemies with unique attack patterns. Built in Unity, the game delivers a visually immersive experience, combining fast-paced combat, strategic movement, and stunning sci-fi environments. With dynamic enemy behaviors and an engaging progression system, Spaceship Adventure 3D challenges players to master their piloting skills while navigating through an ever-evolving battlefield.',
        contributions: 'Designed a User-Friendly Main Menu offering start and exit options for easy navigation | Developed Visually Engaging Environments to enhance the overall gaming experience | Implemented Dynamic, Timeline-Driven Player Movement for automatic navigation within a designated area while still responding to player input | Created a Scoring System where player score increases upon hitting enemies with lasers and defeating them, adding depth to the gameplay | Developed Multiple Levels to ensure a progressive and challenging experience for players | Designed a Player Health System where health is affected by enemy collisions | Built a Game Over Scene displaying the final score, providing players with options to either play again or return to the Main Menu for a seamless experience | Optimized the Game for PC (Mac and Windows) and WebGL, ensuring accessibility across various platforms.',
        image: SpaceShipAdventureImage,
        videoUrl: "https://www.youtube.com/embed/hAa0g05_PEY",
        playUrl: "https://anjaiahmc.itch.io/spaceship-adventure",
        subsection: "unity",
      },
      {
        title: "Tile Vania",
        description: "Custom Unlimited Runner Game",
        about: 'TileVania is a fast-paced 2D platformer where players run, jump, climb, and shoot through challenging levels filled with enemies, traps, and interactive elements. Built in Unity with tilemaps and 2D physics, the game offers engaging mechanics, strategic obstacles, and a rewarding progression system for an immersive platforming experience.',
        contributions: 'Implemented a user-friendly Main Menu scene with start and exit options for seamless navigation | Created and designed multiple engaging levels with diverse challenges and objectives | Developed player mechanics, enabling running, climbing, jumping, and shooting bullets for dynamic gameplay | Engineered enemy AI with patrolling behavior that eliminates the player upon collision | Designed and integrated interactive elements, such as jump springs and ladders, to enhance traversal and gameplay depth | Introduced hazards like traps and water bodies that result in player death upon contact, increasing challenge and engagement | Implemented a health and pickup system to enhance the overall player experience and progression | Utilized Unity’s tilemaps, layers, and 2D physics collisions to construct levels, hazards, and interactive elements | Developed a Game Over scene displaying the final score, with options to replay or return to the Main Menu for a seamless experience | Built and optimized the game for PC (Mac and Windows) and WebGL to ensure accessibility across multiple platforms.',
        image: TileVaniaImage,
        videoUrl: "https://www.youtube.com/embed/rc7vFfBX9f0",
        playUrl: "https://anjaiahmc.itch.io/tilevania",
        subsection: "unity",
      },
      {
        title: "Space Adventure",
        description: "Custom Unlimited Runner Game",
        about: 'This action-packed 3D space shooter puts players in control of a spaceship, battling against challenging, pattern-based enemy waves. With a dynamic scoring system, strategic health mechanics, and intense combat, the game rewards skillful gameplay. Built for PC (Mac and Windows) and WebGL, it offers an engaging and accessible experience for space combat enthusiasts.',
        contributions: 'Implemented a user-friendly Main Menu scene with start and exit options for seamless navigation | Designed player controls for piloting a spaceship, engaging in intense battles against pattern-based enemy waves | Developed a dynamic scoring system where the player earns points by successfully defeating enemies, rewarding skillful gameplay | Created a strategic player health system where health is affected by both enemy collisions and enemy bullets, adding challenge and tactical depth | Built a Game Over scene that displays the final score, allowing players to either retry or return to the main menu for a smooth experience | Optimized the game for PC (Mac and Windows) and WebGL, ensuring accessibility across multiple platforms.',
        image: SpaceAdventureImage,
        videoUrl: "https://www.youtube.com/embed/R26aeXXpPP4",
        playUrl: "https://anjaiahmc.itch.io/space-adventure",
        subsection: "unity",
      },
    ],
    unreal: [
      {
        title: "Ancient Adventure",
        description: "Custom Unlimited Runner Game",
        about: 'Ancient Adventure is an immersive action-adventure game set in a beautifully crafted world with realistic landscapes. Players navigate through ancient environments while facing AI-controlled enemies with adaptive behaviors, creating dynamic and strategic combat encounters. The game integrates interactive pickups that enhance player progression and engagement. Developed in Unreal Engine 5 with C++, Ancient Adventure delivers stunning visual effects and a captivating gameplay experience.',
        contributions: 'Developed a dynamic melee weapon system featuring character controllers, animations, and precise hit detection for engaging combat mechanics | Designed realistic landscapes to enhance player immersion, utilizing Unreal Engine 5’s advanced environmental features | Created AI-controlled enemies with adaptive behaviors, leveraging behavior trees and controllers for dynamic and challenging encounters | Integrated strategic pickups to provide players with items and power-ups, encouraging thoughtful gameplay interactions | Utilized Unreal Engine 5’s powerful graphical capabilities to implement captivating visual effects, including particle systems, dynamic lighting, and advanced rendering techniques | Leveraged C++ for custom gameplay mechanics, system interactions, and enhanced performance.',
        image: AncientAdeventureImage,
        videoUrl: "https://www.youtube.com/embed/bASvioBHons",
        subsection: "unreal",
      },
      {
        title: "Shooter",
        description: "Custom Unlimited Runner Game",
        about: 'Shooter Game delivers an immersive combat experience with realistic shooting mechanics and diverse weaponry. Players can utilize a variety of weapons and ammo types, with strategic pickups integrated using interpolating curves for smooth interactions. The game features an innovative reloading system, glow effects for visual enhancement, and dynamic footstep sounds based on surface types for heightened realism. With multiple playable characters and intelligent enemy AI behaviors driven by a behavior tree structure, combat remains engaging and unpredictable. Set in a richly detailed environment built with ruins meshes, Shooter Game offers intense firefights and a challenging gameplay experience.',
        contributions: 'Utilized Unreal Engine 5 to develop a dynamic shooter game with immersive mechanics | Designed and implemented realistic shooter mechanics, featuring a variety of weapons and ammo types to enhance gameplay diversity | Incorporated strategic pickups with interpolating curves for smooth and natural player interactions | Developed an innovative reloading system, adding depth and realism to combat mechanics | Applied glow effects using curves to enhance visual feedback and aesthetics | Implemented dynamic footstep sounds that vary based on surface types for heightened realism | Designed multiple playable characters, offering players diverse choices and playstyles | Engineered enemy AI behaviors using a behavior tree structure, creating intelligent and challenging opponents | Built an engaging level environment using ruins meshes to establish an atmospheric and visually appealing setting.',
        image: ShooterImage,
        videoUrl: "https://www.youtube.com/embed/EB_IHFRzQsM",
        subsection: "unreal",
      },
    ]
  };

  

  