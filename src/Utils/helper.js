var nameList = [
    'TimeTraveler', 'PastMaster', 'FutureSeer', 'DevWizard',
    'FlyingAce', 'SoaringEagle', 'PowerPunch', 'FallingStar',
    'CliffHanger', 'MountainKing', 'RedRider', 'BlueBolt',
    'GreenGoblin', 'GoldenKnight', 'DemonicSoul', 'PandaMonium',
    'CoolCat', 'KittyQueen', 'ZeroHero', 'MemoryLane',
    'TrooperX', 'Bandit007', 'FearlessOne', 'GlowMaster',
    'DeepDiver', 'MineCrafter', 'YourBuddy', 'EnemyWithin',
    'HostileForce', 'VideoVibes', 'GameGuru', 'DonkeyRider',
    'MuleMagic', 'Colt45', 'CultLeader', 'MagnumForce',
    'GunSlinger', 'ReconWolf', 'TrapMaster', 'CodeCracker',
    'ScriptKiddo', 'NearInfinity', 'OpenMind', 'CubeCrafter',
    'CircleDreamer', 'GeoGenius', 'GenomeGuy', 'EchoWave',
    'AlphaStrike', 'OmegaBlast', 'SealHunter', 'SquidSurfer',
    'CashFlow', 'LordOfLoot', 'KingPin', 'FirePhoenix',
    'IceShard', 'ColdSnap', 'DesertStorm', 'HurdleMaster',
    'RacerX', 'EraseReality', 'BigDreamer', 'ShortCircuit',
    'TallTales', 'SithSlayer', 'HunterX', 'BrokenBlade',
    'HappyCamper', 'JoyRider', 'CrimsonFox', 'DestinyCaller',
    'DeceitShadow', 'TruthSeeker', 'HawkEye', 'ZombieChaser',
    'CaptainCool', 'Punchline', 'UnoMaster', 'WolfWhisperer',
    'SharpShooter', 'DeadlyVortex', 'ChucklesNerd', 'BubbaBlast',
    'SandwichKing', 'SmasherX', 'ExtremeFusion', 'MultiVerse',
    'UltimateGamer', 'DeathBringer', 'ReadyPlayerOne', 'MonkeyMagic',
    'ElevatorGuy', 'WrenchNinja', 'GreaseWizard', 'ThemeCrafter',
    'GrandMaster', 'CoolKiddo', 'VortexX', 'Paradoxical'
];



export function generateRandomName() {
    let result = nameList[Math.floor( Math.random() * nameList.length )];
    return result
};

var messageList = [
    "Hey everyone, what's up?",
    "This stream is lit! 🔥",
    "Can't believe what just happened! 😱",
    "Who else is watching from bed? 😂",
    "This chat is on fire! 🔥🔥",
    "Anyone else hyped for this? 🙌",
    "That moment was epic! 👏",
    "Shoutout to the mods, y'all are awesome!",
    "Loving the vibe here! ❤️",
    "What a clutch move! 😎",
    "Haha, that was hilarious! 😂",
    "Let's spam hearts for the host! ❤️❤️❤️",
    "Who else is binge-watching today?",
    "This game is insane! 🎮",
    "OMG, did you see that? 😲",
    "Drop your predictions in the chat! 🔮",
    "When's the next stream happening?",
    "This community is the best! 🫶",
    "BRB, need snacks for this. 🍿",
    "Let’s get this party started! 🎉"
];

// Function to generate a random message
export function generateRandomMessage() {
    let result = messageList[Math.floor(Math.random() * messageList.length)];
    return result;
};