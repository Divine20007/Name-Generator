// --- 1. DATA: Nickname Categories ---
// Each array contains names/words suitable for that category.
// Add more names to each list for better diversity!
const nameData = {
    gaming: [
        "Shadow", "Blade", "Phoenix", "Viper", "Ghost", "Reaper", "Storm", "Blitz", "Dragon", "Hunter",
        "Night", "Pixel", "Byte", "Synth", "Volt", "Glitch", "Fury", "Nexus", "Oracle", "Rogue",
        "Specter", "Titan", "Vortex", "Warden", "Zero", "Bolt", "Echo", "Aura", "Nebula", "Vector",
        "Iron", "Steel", "Knight", "Ace", "Jinx", "Ragnar", "Seraph", "Valkyrie", "Dread", "Grim"
    ],
    nature: [
        "MountainMan","RiverFlow","ForestFox","OceanBreeze","SunnySky","GreenLeaf","DesertDude","RainyDay","CloudNine","EarthBear","WildFlower","StonePath","ValleyVibes","SeaSalt","TreeHugger","MoonGlow","FreshGrass","BreezeBlow","HillTop","PineCone","MeadowMist","CoralReef","JungleJim","SkyPilot","FlowerPower","Woodland","AquaWave","MountainPeak","SoilSoul","NatureNinja","LeafyGreen","FoggyMorning","BranchOut","PetalPunk","RootDeep","Sunshine","Wilderness","CanyonCrew","GlacierGaze","LotusBloom","MossMagic","Evergreen","BambooBand","SandStorm","PeakPerformance","TerraVerde","OceanOasis","GardenGnome","Rainforest"
    ],
    love: [
        "Angel", "Sweetheart", "Honey", "Cuddle", "Dream", "Bliss", "Cherish", "Harmony", "Kindred", "Sparkle",
        "Amour", "Beloved", "Cupid", "Darling", "Ever", "Fleur", "Glow", "Heart", "Joy", "Kiss",
        "Lumi", "Muse", "Nova", "Opal", "Purity", "Rosebud", "Soul", "Treasure", "Unison", "Velvet"
    ],
    horror: [
        "Grim", "Creep", "Phantom", "Screech", "Shade", "Whisper", "Grave", "Spook", "Nightmare", "Blight",
        "Raven", "Cinder", "Dusk", "Ember", "Gloom", "Haunt", "Lurker", "Malign", "Oblivion", "Pestilence",
        "Ruin", "Shadowfen", "Terror", "Vile", "Witch", "Ashen", "Crypt", "Dread", "Feral", "Ghoul",
        "Hollow", "Infest", "Mortal", "Omen", "Phobia", "Rot", "Sorrow", "Venom", "Wraith", "Abyss"
    ],
    fantasy: [
        "Aether", "Elara", "Griffin", "Mythic", "Rune", "Sorcerer", "Willow", "Zephyr", "Dragonborn", "Moonshadow",
        "Starlight", "Whisperwind", "Silverleaf", "Ironheart", "Stonehand", "Lightfoot", "Grimfang", "Darkwood", "Brightblade", "Thorn",
        "Wintermute", "Sunstone", "Dreamweaver", "Soulbinder", "Lorekeeper", "Cloudstrider", "Riverflow", "Aegis", "Celeste", "Drift"
    ],
    tech: [
        "Byte", "Pixel", "Synth", "Circuit", "Quantum", "Nexus", "Matrix", "Aether", "Binary", "Cyber",
        "Data", "Digital", "Echo", "Giga", "Hex", "Innova", "Logic", "Meta", "Neural", "Optic",
        "Protocol", "Quasar", "Robot", "Silicon", "Tera", "Unit", "Voxel", "Wired", "Xenon", "Yotta"
    ],
    abstract: [
        "MindMaze","IdeaSpark","DreamCatch","ThoughtFlux","ConceptX","Visionary","Innovate","AbstractArt","PixelPulse","CodeCraft","LogicLoop","NovaNiche","SpectrumShift","BlurEffect","Momentum","SynergySpark","WaveForm","FrequencyFusion","EchoChamber","InfinityLoop","NexusPoint","QuantumLeap","MatrixMind","PhaseShift","SignalFlow","CyberCore","DataStream","PulseRate","FlowState","ThetaWave","AuroraAxis","PrimeDirective","SphereZone","AxisBold","MomentumWave","FluxMaster","PatternPlay","GlowZone","InsightInc","RhythmZone","UnityNode","SphereSync","SignalSurge","CoreFusion","LoopLogic","NovaCore","EnergyPulse","MindFlow","Conceptual"
    ],
    mystic: [
        "MysticMoon","AuraShield","SpiritWolf","Enchanted","MythicQuest","MagicMuse","SorcererSky","LuminousDream","CelestialPath","Starweaver","MysticFrost","ArcaneAura","WizardWord","DivineSpark","ShamanSoul","EclipsePower","CrystalBall","TarotTruth","PentagramPulse","MoonPhase","OracleOwl","FairyRealm","SpellBound","GhostWhisper","MysticMantra","ZenMaster","KysticKraft","PyroMagic","HydroHealer","EarthEnchantress","AirApex","FireFlux","WaterWellspring","SoulJourney","SpiritGuide","MysticMeditate","CosmicQuest","AstroAlchemy","StellarForce","LunaLux","SolarFlare","MythicForge","Dreamwalker","EtherEcho","SacredSpace","RitualRhythm","MysticMind","AuraLeap","Spellcaster"
    ],
    ancient: [
        "AncientOne","VintageVibe","TimelessTruth","OldSoul","AntiqueAce","HistoricHero","ClassicCode","LegendaryLion","MythicMage","ArchetypeAce","VenerableVault","AncientWife","PrimevalPack","RusticRoot","HeritageHold","LegacyLord","EpochEcho","EraEnd","BronzeBolt","IronIcon","SteelSavage","GoldenGrail","SilverSaga","JadeJester","EmeraldEmpire","RubyRenaissance","SapphireSage","AmberApex","CobaltCipher","MarbleMaze","GraniteGoddess","StoneSage","RockRoot","BoulderBoss","MonolithMan","ArtifactAce","ChronicleChief","DynastyDude","EmpireEcho","KingdomKeeper","ThroneTracer","CrownChief","ScepterSage","OracleOrigin","FossilFuel","RelicRealm","TimelessTactician","AgeOldAce","HeritageHero"
    ],
    cute: [
        "SweetPeachy","LovelyLuna","CuteCookie","FluffyPanda","SugarGlide","HoneyBunny","PetalPunk","BubblesGirl","ChocoLava","CinnamonRoll","AngelWings","SunshineSmile","FuzzyWuzzy","Lovebomb","KawaiiKitty","MiniMochi","RosePetal","Buttercup","CakePop","MellowMush","Sparkles101","GlitterGaze","FairyDust","LovelyLucy","SweetSerenity","CuteCrush","SugarSensations","PookiePie","SmileyFace","HeartThrob","LovelyLlama","CuteCommander","FuzzyFurry","BunnyBoo","KittyKat","PuppyLove","SweetSweetie","SugarShack","Lovestruck","FlowerPower","CuteCrasher","MahMahMeow","SunnySmiles"
    ],
    food: [
        "FoodieFanatic","TastyTitan","SnackAttack","GourmetGaze","ChefMaster","FoodComa","SweetTooth","PizzaPunk","BurgerBoss","TacoTitan","SushiSavage","CoffeeCraze","DonutDude","CakeKing","PiePirate","BBQBandit","MeatMaven","VeggieVibes","FruitFan","SnackSquad","ChocoChampion","IceCreamIcon","FoodFreak","RestaurantRogue","CafeCatcher","DiningDude","GulfGourmet","CuisineKing","FlavorFusion","FoodJunkie","SpiceSage","SaucySquad","SugarSensations","MunchieMaven","FeastFanatic","DishDash","KitchenKing","RecipeRenaissance","FoodFusion","GourmetGoddess","PalatePunk","SnackStorm","EdibleAce","FoodFantasy","BiteBoss","TasteTitans","CulinaryCrew","FoodStorm","GulfGlutton"
    ],
    street: [
        "StreetKing","UrbanAce","CitySlick","PavementPunk","RoadRunner","HighwayHero","SidewalkSage","CornerCrew","BlockParty","StreetSmart","UrbanLegend","CityBoy","TownTrend","MetroMaven","BoulevardBoss","AvenueAce","LaneLeader","CrosswalkCatcher","JunctionJester","StreetStyle","UrbanUprise","CityChamp","PaveMaster","RoadRogue","StreetSurgeon","GhettoGenius","Urbanite","ConcreteCowboy","AsphaltAce","StreetPhantom","CityLights","NightOwlStreet","MainStreetMaven","StreetCred","UrbanVibes","RoadTripper","StreetSoldier","CityScene","TownTalk","StreetLevel","UrbanUpstart","BoulevardBandit","StreetSavvy","PavementPro","CitySquad","RoadRash","StreetStory","UrbanUnderground","CityPulse"
    ],
};

// --- 2. MARKOV CHAIN LOGIC (Reusable) ---
// MARKOV_ORDER is now read from user input

function buildMarkovChain(names, markovOrder) { // markovOrder is now a parameter
    const chain = {};
    const processedNames = names
        .filter(name => name.trim() !== '')
        .map(name => "@".repeat(markovOrder) + name.toLowerCase().trim() + "$");

    if (processedNames.length === 0) {
        return null;
    }

    for (const name of processedNames) {
        for (let i = 0; i < name.length - markovOrder; i++) {
            const prefix = name.substring(i, i + markovOrder);
            const nextChar = name[i + markovOrder];

            if (!chain[prefix]) {
                chain[prefix] = {};
            }
            if (!chain[prefix][nextChar]) {
                chain[prefix][nextChar] = 0;
            }
            chain[prefix][nextChar]++;
        }
    }

    for (const prefix in chain) {
        const nextCharsCounts = chain[prefix];
        let total = 0;
        for (const char in nextCharsCounts) {
            total += nextCharsCounts[char];
        }
        for (const char in nextCharsCounts) {
            nextCharsCounts[char] /= total;
        }
    }
    return chain;
}

function generateNickname(chain, markovOrder, maxLength = 12) { // markovOrder is now a parameter
    if (!chain) {
        return "";
    }

    let currentPrefix = "@".repeat(markovOrder);
    let nickname = "";

    while (true) {
        const possibleNextChars = chain[currentPrefix];
        
        if (!possibleNextChars) { 
            break;
        }

        let nextChar = null;
        let randomValue = Math.random();
        let cumulativeProbability = 0;

        for (const char in possibleNextChars) {
            cumulativeProbability += possibleNextChars[char];
            if (randomValue <= cumulativeProbability) {
                nextChar = char;
                break;
            }
        }

        if (nextChar === null || nextChar === "$") {
            break;
        }
        
        nickname += nextChar;
        currentPrefix = currentPrefix.substring(1) + nextChar; 

        if (nickname.length >= maxLength) {
            break;
        }
    }
    return nickname.charAt(0).toUpperCase() + nickname.slice(1);
}

// --- 3. UI Interaction Logic ---

const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const saveBtn = document.getElementById('saveBtn');
const generatedNicknameInput = document.getElementById('generatedNickname');
const categoryRadios = document.querySelectorAll('input[name="nicknameCategory"]');
const userWordsInput = document.getElementById('userWords');
const userWordsRadio = document.getElementById('userCustom');
const savedNicknamesList = document.getElementById('savedNicknamesList');
const markovOrderInput = document.getElementById('markovOrder'); // NEW: Markov Order input

function handleGenerateNickname() {
    let namesForChain = [];
    let currentMarkovOrder = parseInt(markovOrderInput.value);

    // Validate Markov Order
    if (isNaN(currentMarkovOrder) || currentMarkovOrder < 1 || currentMarkovOrder > 5) {
        generatedNicknameInput.value = "Markov Order must be between 1 and 5!";
        copyBtn.style.display = 'none';
        saveBtn.style.display = 'none';
        return;
    }

    if (userWordsRadio.checked) {
        const rawInput = userWordsInput.value;
        namesForChain = rawInput.split(/[\n, ]+/)
                                .map(word => word.trim())
                                .filter(word => word.length > 0);

        if (namesForChain.length === 0) {
            generatedNicknameInput.value = "Please enter some words in the custom list!";
            copyBtn.style.display = 'none';
            saveBtn.style.display = 'none';
            return;
        }
    } else {
        let selectedCategory = 'gaming';

        for (const radio of categoryRadios) {
            if (radio.checked) {
                selectedCategory = radio.value;
                break;
            }
        }
        namesForChain = nameData[selectedCategory];

        if (!namesForChain || namesForChain.length === 0) {
            generatedNicknameInput.value = "No names for this category!";
            copyBtn.style.display = 'none';
            saveBtn.style.display = 'none';
            return;
        }
    }
    
    const currentChain = buildMarkovChain(namesForChain, currentMarkovOrder); // Pass order

    if (!currentChain) {
        generatedNicknameInput.value = "Not enough valid words to generate a nickname. Try adding more!";
        copyBtn.style.display = 'none';
        saveBtn.style.display = 'none';
        return;
    }

    let newNickname = "";
    let attempts = 0;
    const maxAttempts = 50;

    while (newNickname.length < 3 && attempts < maxAttempts) {
        newNickname = generateNickname(currentChain, currentMarkovOrder, 12); // Pass order
        attempts++;
    }

    if (!newNickname || newNickname.length < 3) {
        generatedNicknameInput.value = "Could not generate a suitable nickname. Try adjusting Markov Order or adding more words!";
        copyBtn.style.display = 'none';
        saveBtn.style.display = 'none';
    } else {
        generatedNicknameInput.value = newNickname;
        copyBtn.style.display = 'inline-block';
        saveBtn.style.display = 'inline-block';
    }
}

function copyNickname() {
    generatedNicknameInput.select();
    generatedNicknameInput.setSelectionRange(0, 99999);
    
    navigator.clipboard.writeText(generatedNicknameInput.value)
        .then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = "COPIED!";
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 1500);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
            document.execCommand('copy');
            alert('Nickname copied to clipboard!');
        });
}

function saveNickname() {
    const nicknameToSave = generatedNicknameInput.value;
    if (!nicknameToSave || nicknameToSave === "Your new nickname appears here..." || nicknameToSave.includes("Could not generate") || nicknameToSave.includes("No names for this category") || nicknameToSave.includes("Please enter some words") || nicknameToSave.includes("Markov Order must be")) {
        return;
    }

    let savedNicknames = JSON.parse(localStorage.getItem('savedNicknames')) || [];
    if (!savedNicknames.includes(nicknameToSave)) {
        savedNicknames.push(nicknameToSave);
        localStorage.setItem('savedNicknames', JSON.stringify(savedNicknames));
        displaySavedNicknames();
        
        const originalText = saveBtn.textContent;
        saveBtn.textContent = "SAVED!";
        setTimeout(() => {
            saveBtn.textContent = originalText;
        }, 1500);
    } else {
        const originalText = saveBtn.textContent;
        saveBtn.textContent = "ALREADY SAVED!";
        setTimeout(() => {
            saveBtn.textContent = originalText;
        }, 1500);
    }
}

function displaySavedNicknames() {
    savedNicknamesList.innerHTML = '';
    let savedNicknames = JSON.parse(localStorage.getItem('savedNicknames')) || [];

    if (savedNicknames.length === 0) {
        savedNicknamesList.innerHTML = '<p class="instruction-text">No nicknames saved yet.</p>';
        return;
    }

    savedNicknames.forEach((nickname, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('saved-nickname-item');
        listItem.innerHTML = `
            <span>${nickname}</span>
            <button class="delete-nickname-btn" data-index="${index}">X</button>
        `;
        savedNicknamesList.appendChild(listItem);
    });

    document.querySelectorAll('.delete-nickname-btn').forEach(button => {
        button.addEventListener('click', function() {
            const indexToDelete = parseInt(this.dataset.index);
            deleteNickname(indexToDelete);
        });
    });
}

function deleteNickname(index) {
    let savedNicknames = JSON.parse(localStorage.getItem('savedNicknames')) || [];
    if (index > -1 && index < savedNicknames.length) {
        savedNicknames.splice(index, 1);
        localStorage.setItem('savedNicknames', JSON.stringify(savedNicknames));
        displaySavedNicknames();
    }
}

// Find this function in your script.js (or main.js) and replace it:
function toggleCustomInput() {
    const categoryRadiosContainer = document.querySelector('.radio-group');
    const userWordsContainer = document.getElementById('userWordsContainer');
    const markovOrderContainer = document.querySelector('.markov-order-selection'); // Get the new container

    if (userWordsRadio.checked) {
        categoryRadiosContainer.style.display = 'none';
        userWordsContainer.style.display = 'block';
        markovOrderContainer.style.display = 'block'; // Show Markov Order input when Custom is selected
    } else {
        categoryRadiosContainer.style.display = 'grid'; // Revert to grid display for radios
        userWordsContainer.style.display = 'none';
        markovOrderContainer.style.display = 'none'; // HIDE Markov Order input for predefined categories
    }
    // Clear generated nickname and hide buttons when switching input modes
    generatedNicknameInput.value = "";
    copyBtn.style.display = 'none';
    saveBtn.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', () => {
    generateBtn.addEventListener('click', handleGenerateNickname);
    copyBtn.addEventListener('click', copyNickname);
    saveBtn.addEventListener('click', saveNickname);

    categoryRadios.forEach(radio => {
        radio.addEventListener('change', toggleCustomInput);
    });
    userWordsRadio.addEventListener('change', toggleCustomInput);

    // NEW: Add a listener to Markov Order input to clear generated nickname on change
    markovOrderInput.addEventListener('input', () => {
        generatedNicknameInput.value = "";
        copyBtn.style.display = 'none';
        saveBtn.style.display = 'none';
    });


    generatedNicknameInput.placeholder = "Your new nickname appears here...";
    copyBtn.style.display = 'none';
    saveBtn.style.display = 'none';
    toggleCustomInput();
    displaySavedNicknames();
});
