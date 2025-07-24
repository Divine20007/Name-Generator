// --- 1. DATA: Nickname Categories ---
// Each array contains names/words suitable for that category.
// Add more names to each list for better diversity!
const nameData = {
    gaming: [
        "Shadow", "Blade", "Phoenix", "Viper", "Ghost", "Reaper", "Storm", "Blitz", "Dragon", "Hunter",
        "Night", "Pixel", "Byte", "Synth", "Volt", "Glitch", "Fury", "Nexus", "Oracle", "Rogue",
        "Specter", "Titan", "Vortex", "Warden", "Zero", "Bolt", "Echo", "Aura", "Nebula", "Vector",
        "Iron", "Steel", "Knight", "Ace", "Jinx", "Ragnar", "Seraph", "Valkyrie", "Dread", "Grim", "Deadshot","KillerInstinct","StormBringer","ShadowFox","ThunderStrike","BlazingSword","SilentKiller","PhantomAssassin","TitanSlayer","ZeusBolt","AlphaWolf","Frostbite","VenomViper","LaserBeam","BulletProof","CyberWolf","DarkAvenger","GhostGamer","BombSquad","FieryPhoenix","SavageSlayer","NightStalker","SteelStorm","RocketRonin","DynamoDude","Sparklesiren","ToxicTitan","StealthSlayer","GamingGod","KillerKlaws","GlitchGamer","SolarFlare","FatalForce","BlackBolt","GoldenGlove","SuperStar","BlazeMaster","VoodooVixen","ShockWave","RapidFire","MatrixMaverick","ThunderThrone","TitaniumTank","HeavyMetal","BronzeBolt","MysticMage","WildWolfie","HeroHawk","SugarGlide","RapidRampage","TechTitan","VengeanceVortex","FatalFemme","BattleBrawler","KawaiiKiller","SunGod","RuffRockstar","LovelyLyrics","NightOwl","VenomVortex","GamerGhost","Bombastic","FieryFreak","ShadowShift","Lovestorm","CrazyCyber","PhoenixForce","KillerBee","GlitterGaze","StormSurge","RuffRounds","LovelyLogic","CyberCosmos","FatalFinish","GhostRider","BombSquad","FieryPhoenix","SavageSlayer","NightStalker","SteelStorm","RocketRonin","DynamoDude","Sparklesiren","ToxicTitan","StealthSlayer","GamingGod","KillerKlaws","GlitchGamer","SolarFlare","FatalForce","BlackBolt","GoldenGlove","SuperStar","BlazeMaster","VoodooVixen","ShockWave","RapidFire","MatrixMaverick","ThunderThrone","TitaniumTank","HeavyMetal","BronzeBolt","MysticMage","WildWolfie","HeroHawk","SugarGlide","RapidRampage","TechTitan","VengeanceVortex","FatalFemme","BattleBrawler","KawaiiKiller","SunGod","RuffRockstar","AxelVoid","ZephyrZeus","BladeMaster","Crusher99","FuryFist","HunterXL","MajorMayhem","NovaNinja","OmegaOutlaw","PsiPhoenix","QuasarQuest","RavenRouge","SpecterSlash","StormSquad","ThunderThor","VandalViper","XenonXero","ZeroCool","AlphaAce","BravoBolt","CharlieCobra","DeltaDagger","EchoEdge","FoxtrotFox","GulfGannon","HotelHawk","IndiaIcon","JulietJet","KiloKane","LimaLion","MikeMaverick","NovemberNinja","OscarOutcast","PapaPwnz","QuebecQuest","RomeoRogue","SierraSlasher","TangoTank","UniformUzi","VictorVandal","WhiskeyWolf","XrayXtreme","YankeeYoder","ZuluZealot","ApexAce","BionicBolt","CyclicCatcher","DemonicDash","EpicEcho","FatalFreak","GhastlyGamer","HavocHeist","InsaneIcon","JuggernautJolt","KrypticKiller","LuminousLaser","MysticMaven","NebulaNinja","OblivionOutlaw","PhantomPulse","QuantumQuest","RazorRogue","SpectacularSquad","ThunderousTitan","UltimateUprising","ViciousVortex","WreckingRampage","XtremeXylophonist","YellowstoneYank","ZenithZeal","ArcadeAce","BulletBrigade","CyberCatcher","DarkDomain","ElectricEdge","FrozenFury","GigaGamer","HyperHavoc","InfernoIcon","JoltJuggler","KillerKaboom","LuckyLaser","MegaMaven","NexusNightmare","OpticOutlaw","PixelPwnzer","QuakeQuester","RadiumRogue","ShadowShift","TechnoTitan","UltraUzi","ViralVandal","WarpathWolf","XenonXpert","YottaYoder","ZapperZealot","AstralAce","BlazingBandit","CelestialCatcher","DazzlingDash","EclipseEdge","FuriousFox","GlacialGamer","HallowedHavoc","IcyIcon","JadedJester","KickedKiller","LuminousLord","MajesticMaven","NebulousNinja","OlympicOutlaw","PrizedPwnzer","QuantumQuasar",
    ],
    nature: [
        "MountainMan","RiverFlow","ForestFox","OceanBreeze","SunnySky","GreenLeaf","DesertDude","RainyDay","CloudNine","EarthBear","WildFlower","StonePath","ValleyVibes","SeaSalt","TreeHugger","MoonGlow","FreshGrass","BreezeBlow","HillTop","PineCone","MeadowMist","CoralReef","JungleJim","SkyPilot","FlowerPower","Woodland","AquaWave","MountainPeak","SoilSoul","NatureNinja","LeafyGreen","FoggyMorning","BranchOut","PetalPunk","RootDeep","Sunshine","Wilderness","CanyonCrew","GlacierGaze","LotusBloom","MossMagic","Evergreen","BambooBand","SandStorm","PeakPerformance","TerraVerde","OceanOasis","GardenGnome","Rainforest", "MountainMan","RiverFlow","ForestFox","OceanBreeze","SunnySky","GreenLeaf","DesertDude","RainyDay","CloudNine","EarthBear","WildFlower","StonePath","ValleyVibes","SeaSalt","TreeHugger","MoonGlow","FreshGrass","BreezeBlow","HillTop","PineCone","MeadowMist","CoralReef","JungleJim","SkyPilot","FlowerPower","Woodland","AquaWave","MountainPeak","SoilSoul","NatureNinja","LeafyGreen","FoggyMorning","BranchOut","PetalPunk","RootDeep","Sunshine","Wilderness","CanyonCrew","GlacierGaze","LotusBloom","MossMagic","Evergreen","BambooBand","SandStorm","PeakPerformance","TerraVerde","OceanOasis","GardenGnome","Rainforest","StormySummit","ThunderTornado","VolcanicVibe","AvalancheAce","BlizzardBoss","CycloneCatcher","DustDevil","EarthquakeEd","FrostyFox","GaleGordon","HurricaneHawk","IcebergIan","JetStreamJake","KhakiKrew","LandslideLarry","MeadowMike","NorthernNimbus","OasisOwen","PebblePete","QuicksilverQuinn","RockyRidge","SandstormSage","TidalTom","UmbrellaUlysses","VortexVictor","WaterfallWill","XericXander","YellowstoneYves","ZephyrZane","AlpineAce","BorealBrutus","CascadeCameron","DeltaDawn","EcosystemEcho","FaunaFreak","GlacialGlen","HabitantHank","IslandIgor","JungleJaxon","KettleKyle","LagoonLucas","MangroveMaverick","NatureNomad","OxygenOllie","PrairieParker","QuarryQuentin","RainmakerRyan","SavannahSage","TundraTyler","UluruUpton","VeldtVictor","WesterlyWyatt","XylophoniaXanthe","YosemiteYancy","ZionZane","AuroraAxel","BayouBrandon","ClementineCanyon","DawnDante","EmeraldEthan","FernFelipe","GeyserGavin","HazelHaven","IvoryIshan","JadeJensen","KarenKettle","LemerLance","MarinaMateo","NimbusNate","OpalOliver","PearlPablo","QuartzQuincy","RubyRohan","SageSantiago","TopazTroy","UmberUriel","VioletVictor","WyomingWyatt","XenonXerxes","YarrowYusuf","ZirconZane","AmazonAce","BlizzardBeck","CrystalCanyon","DrogonDrake","EchoElysium","FluxFountain","GroveGideon","HorizonHunt","IrisIan","JuniperJade","KaspianKrew","LyraLance","MoonstoneMaverick","NebulaNixon","OnyxOscar","PangaeaPete","QuartzQuest","RhinoRyder","SylvanSage","TritonTroy","UrsulaUlysses","VestaVictor","WyrmwoodWyatt","XanaduXanthe","YellowtailYoder","ZephyriaZane"
    ],
    love: [
        "Angel", "Sweetheart", "Honey", "Cuddle", "Dream", "Bliss", "Cherish", "Harmony", "Kindred", "Sparkle",
        "Amour", "Beloved", "Cupid", "Darling", "Ever", "Fleur", "Glow", "Heart", "Joy", "Kiss",
        "Lumi", "Muse", "Nova", "Opal", "Purity", "Rosebud", "Soul", "Treasure", "Unison", "Velvet", "SweetSerenity","LovelyLuna","HeartThrob","SugarSweet","LoveBomb","AngelWings","HoneyBunny","FluffyFavor","CuteCrush","SunshineSoul","RosePetal","ButtercupBloom","LoveLight","SweetheartSquad","ForeverFriend","HeartBeat","Lovestruck","SugarSpice","KawaiiKlove","MellowMuse","SparklesHeart","GlitterGaze","FairyDustLove","LovelyLucy","SweetSurprise","HeartMelody","LovePotion","SugarCookie","CinnamonLove","WarmHug","CozyCompanion","TenderTouch","KindredSpirit","LoveBreeze","SweetSurrender","HeartString","LovelyLyric","FlowerPowerLove","HoneyHoney","SweetpeaSpecial","LoveNotes","HeartfeltHaven","SugarShelter","Lovecastle","WarmWish","HeartWhisper","LoveSpark","SweetSentiment","CuteCompanion","Lovebirds","HeartOfGold","SugarRay","LoveMaven","WarmthWinner","HeartKeeper","LovelyLlama","SweetSeraph","LoveLegend","HeartthrobHero","SugarSensations","Lovewave","WarmWelcome","HeartHelper","LoveBangle","SweetSquad","CuteCourier","LovePetal","HeartSong","SugarGlideLove","LovelyLyrics","WarmWrap","HeartHaven","LoveHearts","SweetSurvivor","CuteChampion","LoveBuzz","WarmWorthy","HeartHopeful","SugarShield","LovelyLighthouse","HeartHero","LoveBurst","SweetSupport","WarmWise","HeartHarmony","LoveLink","SugarSmile","CuteCelebration","LovelyLaugh","WarmWishbone","HeartHype","LoveMagnet","SweetSensation","CozyCuddle","TenderTango","KindKindred","LoveLegacy","HeartGlow","SugarSphere","LovelyMomentum","WarmWave","Heartlight","LovePursuit","SweetSymphony","CuteCascade","LovelyLeap","WarmthWonder","HeartHorizon","LoveHunter","SugarSprinkle","Lovecast","WarmWishmaker","HeartHelperHive","LoveBrew","SweetSprout","CozyClan","TenderTerrain","KindKey","LoveLucid","HeartHammer","SugarStream","LovelyLuster","WarmWord","HeartHost","LoveHarbor","SweetSanctuary"
    ],
    horror: [
        "Grim", "Creep", "Phantom", "Screech", "Shade", "Whisper", "Grave", "Spook", "Nightmare", "Blight",
        "Raven", "Cinder", "Dusk", "Ember", "Gloom", "Haunt", "Lurker", "Malign", "Oblivion", "Pestilence",
        "Ruin", "Shadowfen", "Terror", "Vile", "Witch", "Ashen", "Crypt", "Dread", "Feral", "Ghoul",
        "Hollow", "Infest", "Mortal", "Omen", "Phobia", "Rot", "Sorrow", "Venom", "Wraith", "Abyss", "Skullcrusher","Bloodbath","Grave","Shadowfiend","Deathmonger","ZombieLord","VampireKiller","GhostReaper","Demonspawn","Slaughterhouse","CryptKeeper","Mummy","HorrorHound","Butcher","Carrion","Screamer","Nightmare","BloodyMary","GraveyardGhoul","PhantomPain","MurderMaze","CreepShow","Killzone","TheButcher","Bloodlust","Grottoscream","Darkseer","Madness","Pandemonium","Shadowborn","Deadwalker","Corpsegrinder","Voodoo","Hexbreaker","Soulreaper","GrimReaper","Bonebreaker","FleshEater","ScarletSpecter","Haunter","Malice","Doombringer","Ravenous","Slaughter","Terrorbyte","ZombieApocalypse","Deathscythe","Ghostwalker","BloodyBane","Demonic","Cryptdweller","Horrorific","Murderous","Nightshade","Obsidian","Plaguebringer","Quicksilver","Racketeer","Skeletal","Tombstone","Unholy","Vile","Warlock","Xenophobia","Yeti","Zombified","Abyssal","Bloodcurdling","Carnage","Dreadlord","Echoing","Frightmare","Ghoulish","Horrific","Infernal","Jigsaw","Killer","Lemonade","Macabre","Necrotic","Ominous","Pestilence","Quarantine","Riftwalker","Screamqueen","Torturous","Umbrawork","Vampiric","Wyrmwood","Xanthosis","Yellowfang","Zealot","Ashbringer","Blackdeath","Crazed","Darkprophet","Evilentity","Frostgrave","Ghastly","Hackslash","Insanity","Jaded","Krupt","Lurker","Mooncalf","Nightcrawler","Ooze","Pagan","Quellfire","Riotcaller","Shocktroop","Terrorfang","Ukku","Vindicator","Wolfbane","Xylara","Ymir","Zombievirus","Abomination","Bloodsoaked","Creeping","Doomwalker","Echochamber","Fleshripper","Gorefest","Heartstopper","Iconoclast","Jailbreaker","Killscream","Lazarus","Moonlit"
    ],
    fantasy: [
        "Aether", "Elara", "Griffin", "Mythic", "Rune", "Sorcerer", "Willow", "Zephyr", "Dragonborn", "Moonshadow",
        "Starlight", "Whisperwind", "Silverleaf", "Ironheart", "Stonehand", "Lightfoot", "Grimfang", "Darkwood", "Brightblade", "Thorn",
        "Wintermute", "Sunstone", "Dreamweaver", "Soulbinder", "Lorekeeper", "Cloudstrider", "Riverflow", "Aegis", "Celeste", "Drift", "MysticMoon","Dragonfire","ElvenStar","MythicQuest","MagicMuse","SorcererSky","LuminousDream","CelestialPath","Starweaver","ArcaneAura","WizardWord","DivineSpark","ShamanSoul","EclipsePower","CrystalBall","TarotTruth","PentagramPulse","FairyRealm","SpellBound","GhostWhisper","MysticMantra","ZenMaster","PyroMagic","HydroHealer","EarthEnchantress","AirApex","SoulJourney","SpiritGuide","CosmicQuest","AstroAlchemy","StellarForce","LunaLux","SolarFlare","MythicForge","Dreamwalker","EtherEcho","SacredSpace","RitualRhythm","MysticMind","AuraLeap","Spellcaster","GothicGoddess","MoonlitMaven","StarlightSage","FairyQueen","Enchanted","Mythril","AuroraAxel"," dreamcatcher","Mythweaver","NexusKnight","PhantomFox","Shadowdancer","ValkyrieVixen","WarlockWyrm","XenonXerxes","Yggdrasil","Zephyrine","AmuletAura","BladeBard","Cryssalys","DruidDwyn","EmberElf","Frostfang","GlimmerGnome","HalcyonHero","Inexorable","Jademist","Kylorian","LysanderLore","Moonwhisper","Nexarion","OnyxOracle","PegasusPilot","Quintessential","RubyRanger","SapphireSentinel","TitaniumTalon","UmbraVixen","VioletVindicator","WystanWizard","XylophiaXenon","Yellowstar","ZodiacZephyr","Aethereia","Blazeguard","Celestian","Darksong","EtherealEcho","Fierygold","GlowingGnome","HallowedHero","IvoryIllusion","JasperJolt","KarenKnight","Lemerlina","MaelstromMagic","Nebulon","OpalineOracle","PeridotPhoenix","QuicksilverQuest","RainbowRogue","SpectralSage","Thunderbolt","UnicornUprising","VaporVellum","WantedWizard","XenoliteXylophone","Yellowhammer","ZephyrZodiac","ApocalypseAce","BlazingBandit","CelestialCatcher","DazzlingDash","EclipseEdge","FuriousFox","GlacialGamer","HallowedHavoc","IcyIcon","JadedJester","KickedKiller","LuminousLord"
    ],
    tech: [
        "Byte", "Pixel", "Synth", "Circuit", "Quantum", "Nexus", "Matrix", "Aether", "Binary", "Cyber",
        "Data", "Digital", "Echo", "Giga", "Hex", "Innova", "Logic", "Meta", "Neural", "Optic",
        "Protocol", "Quasar", "Robot", "Silicon", "Tera", "Unit", "Voxel", "Wired", "Xenon", "Yotta", "CyberSentinel","TechTitan","DigitalDawn","CodeCraft","ByteBoss","PixelPwnz","GlitchGamer","VirtualVortex","DataDynamo","SystemSage","NetworkNexus","FirewallFox","CyberWolf","TechnoTrooper","DigitalDude","CodeNinja","BinaryBolt","TechMaven","GigaGamer","HyperHavoc","CircuitCatcher","MotherboardMaven","SiliconSage","RoboRogue","CyberCitadel","TechStorm","DigitalDreamer","CodeWizard","ByteBandit","PixelPirate","GlitchGladiator","VirtualVictor","DataDominator","SystemSorcerer","NetworkNinja","FirewallFreak","CyberCosmos","TechnoTycoon","DigitalDynamo","CodeCrusher","BinaryBrigade","TechMaster","GigaGlitch","HyperHyperion","CircuitChampion","MotherboardMaster","SiliconSlayer","RoboRampage","CyberCatalyst","TechTornado","DigitalDreadnought","CodeCobra","ByteBlazer","PixelPwnzer","GlitchGenius","VirtualVindicator","DataDragon","SystemSentry","NetworkNomad","FirewallFanatic","CyberChampion","TechnoThrone","DigitalDictator","CodeCommander","BinaryBrawler","TechMagnate","GigaGod","HyperHero","CircuitCatcher","MotherboardMagnus","SiliconSupreme","RoboRacer","CyberKing","TechQueen","DigitalDynasty","CodeCraftsman","ByteBrute","PixelPerfect","GlitchGuru","VirtualVoyager","DataDazzler","SystemSorceress","NetworkNavigator","FirewallFighter","CyberSentry","TechPioneer","DigitalDesigner","CodeConqueror","BinaryBlitz","TechMavenPro","GigaGigabyte","HyperHost","CircuitChampion","MotherboardMaestro","SiliconScholar","RoboRenegade","Cyber Crusader","TechTitanium","DigitalDreamweaver","CodeCrypter","ByteBrawler","PixelProphet","GlitchGamester","VirtualVulture","DataDemon","SystemSavant","NetworkNexar","FirewallFusion","CyberCore","TechnoTrinity","DigitalDilemma","CodeCipher","BinaryBeacon","TechMagnificent","GigaGlitter","HyperHurricane","CircuitCascade","MotherboardMoonshot","SiliconSpecter","RoboRevolution","Cyberstorm","TechTarget","DigitalDexterity","CodeCrafting","ByteBrigadier","PixelPursuit","GlitchGalaxy","VirtualVernacular","DataDynamism","SystemSynergy","NetworkNexusNode","FirewallFrenzy"
    ],
    abstract: [
        "MindMaze","IdeaSpark","DreamCatch","ThoughtFlux","ConceptX","Visionary","Innovate","AbstractArt","PixelPulse","CodeCraft","LogicLoop","NovaNiche","SpectrumShift","BlurEffect","Momentum","SynergySpark","WaveForm","FrequencyFusion","EchoChamber","InfinityLoop","NexusPoint","QuantumLeap","MatrixMind","PhaseShift","SignalFlow","CyberCore","DataStream","PulseRate","FlowState","ThetaWave","AuroraAxis","PrimeDirective","SphereZone","AxisBold","MomentumWave","FluxMaster","PatternPlay","GlowZone","InsightInc","RhythmZone","UnityNode","SphereSync","SignalSurge","CoreFusion","LoopLogic","NovaCore","EnergyPulse","MindFlow","Conceptual","MindMaze","IdeaSpark","DreamCatch","ThoughtFlux","ConceptX","Visionary","Innovate","AbstractArt","PixelPulse","CodeCraft","LogicLoop","NovaNiche","SpectrumShift","BlurEffect","Momentum","SynergySpark","WaveForm","FrequencyFusion","EchoChamber","InfinityLoop","NexusPoint","QuantumLeap","MatrixMind","PhaseShift","SignalFlow","CyberCore","DataStream","PulseRate","FlowState","ThetaWave","AuroraAxis","PrimeDirective","SphereZone","AxisBold","MomentumWave","FluxMaster","PatternPlay","GlowZone","InsightInc","RhythmZone","UnityNode","SphereSync","SignalSurge","CoreFusion","LoopLogic","NovaCore","EnergyPulse","MindFlow","Conceptual","AuroraBloom","LuminousLexicon","NexusNexar","OmegaOrbit","PulsePoint","QuasarQuest","RhythmRogue","SpectrumSage","ThetaTrooper","UnityUplink","VortexVision","WaveformWizard","XenonXylophone","YellowstarYonder","ZenithZone","AlphaAxiom","BionicBlueprint","CyberneticCatalyst","Dimensional Drift","EchoEpoch","FractalFusion","GammaGauge","HypersonicHorizon","InfinityIndex","Jolt Junction","KinematicKaleidoscope","LuminousLoop","MatrixMaven","NebulaNavigator","OmegaOverride","PsiPulse","QuBitQuest","RazorRipple","SpectrumSurge","TauTangent","UltraViolet","VectorVortex","WavelengthWizard","XenonXero","YellowstoneYoga","ZetaZone","Axiom Apex","BlazingBrink","CelestialCynosure","DawnDimensional","EchoEternity","FluxFountain","GloomGnostic","HavenHologram","IridescentInsight","Jasper Junction","KronosKaleidoscope","LuminousLocus","MysticMorphism","NebulousNexus","OnyxOdyssey","PulsarParallax","QuantumQuandary","RazorRealm","SpectralSentry","TemporalTangent","UmbraUnion","VortexVoodoo","WavelengthWon","XylonicXanadu","YellowPeril","ZenithZodiac"
    ],
    mystic: [
        "MysticMoon","AuraShield","SpiritWolf","Enchanted","MythicQuest","MagicMuse","SorcererSky","LuminousDream","CelestialPath","Starweaver","MysticFrost","ArcaneAura","WizardWord","DivineSpark","ShamanSoul","EclipsePower","CrystalBall","TarotTruth","PentagramPulse","MoonPhase","OracleOwl","FairyRealm","SpellBound","GhostWhisper","MysticMantra","ZenMaster","KysticKraft","PyroMagic","HydroHealer","EarthEnchantress","AirApex","FireFlux","WaterWellspring","SoulJourney","SpiritGuide","MysticMeditate","CosmicQuest","AstroAlchemy","StellarForce","LunaLux","SolarFlare","MythicForge","Dreamwalker","EtherEcho","SacredSpace","RitualRhythm","MysticMind","AuraLeap","Spellcaster", "MysticMoon","AuraShield","SpiritWolf","Enchanted","MythicQuest","MagicMuse","SorcererSky","LuminousDream","CelestialPath","Starweaver","MysticFrost","ArcaneAura","WizardWord","DivineSpark","ShamanSoul","EclipsePower","CrystalBall","TarotTruth","PentagramPulse","MoonPhase","OracleOwl","FairyRealm","SpellBound","GhostWhisper","MysticMantra","ZenMaster","KysticKraft","PyroMagic","HydroHealer","EarthEnchantress","AirApex","SoulJourney","SpiritGuide","MysticMeditate","CosmicQuest","AstroAlchemy","StellarForce","LunaLux","SolarFlare","MythicForge","Dreamwalker","EtherEcho","SacredSpace","RitualRhythm","MysticMind","AuraLeap","Spellcaster","GothicGoddess","MoonlitMaven","StarlightSage","FairyQueen","EnchantedDream","MysticVoyage","ArcaneAce","Wizardry","DivineDawn","ShamanicSoul","EclipseEcho","CrystalCatcher","TarotTitan","PentagramPulse","MysticFusion","OracleOrigin","FairyFrost","Spellweaver","GhostGamer","MysticMirage","ZenZone","KysticKulture","PyroPeak","HydroHaven","EarthEnergy","AirAura","SoulSpark","SpiritStorm","CosmicCore","AstroAlchemy","StellarSpectrum","LunaLove","SolarSavior","MythicMaven","Dreamquest","EtherElysium","SacredSage","RitualRealm","MysticMaster","AuraAuthority","Spell Sage","GothicGlow","MoonlitMajesty","StarlightSurge","FairyForce","EnchantedEcho","MysticMomentum","ArcaneAbyss","WizardWry","DivineDusk","ShamanSheild","EclipseEmber","CrystalColossus","TarotTactician","PentagramProphet","MysticMoonbeam","OracleOasis","FairyFission","SpellSeeker","GhostGlitter","MysticMuse","ZenZephyr","KysticKnight","PyroPhoenix","HydroHarmony","EarthEclipse","AirAspect","SoulSpectrum","SpiritSentry","CosmicCitadel","AstroArrow","StellarSavant","LunaLighthouse","SolarSphinx","MythicMythos","Dreamdrift","EtherEternity","SacredSentinel","RitualRogue","MysticLabyrinth"
    ],
    ancient: [
        "AncientOne","VintageVibe","TimelessTruth","OldSoul","AntiqueAce","HistoricHero","ClassicCode","LegendaryLion","MythicMage","ArchetypeAce","VenerableVault","AncientWife","PrimevalPack","RusticRoot","HeritageHold","LegacyLord","EpochEcho","EraEnd","BronzeBolt","IronIcon","SteelSavage","GoldenGrail","SilverSaga","JadeJester","EmeraldEmpire","RubyRenaissance","SapphireSage","AmberApex","CobaltCipher","MarbleMaze","GraniteGoddess","StoneSage","RockRoot","BoulderBoss","MonolithMan","ArtifactAce","ChronicleChief","DynastyDude","EmpireEcho","KingdomKeeper","ThroneTracer","CrownChief","ScepterSage","OracleOrigin","FossilFuel","RelicRealm","TimelessTactician","AgeOldAce","HeritageHero", "AncientOne","VintageVibe","TimelessTruth","OldSoul","AntiqueAce","HistoricHero","ClassicCode","LegendaryLion","MythicMage","ArchetypeAce","VenerableVault","AncientWife","PrimevalPack","RusticRoot","HeritageHold","LegacyLord","EpochEcho","EraEnd","BronzeBolt","IronIcon","SteelSavage","GoldenGrail","SilverSaga","JadeJester","EmeraldEmpire","RubyRenaissance","SapphireSage","AmberApex","CobaltCipher","MarbleMaze","GraniteGoddess","StoneSage","RockRoot","BoulderBoss","MonolithMan","ArtifactAce","ChronicleChief","DynastyDude","EmpireEcho","KingdomKeeper","ThroneTracer","CrownChief","ScepterSage","OracleOrigin","FossilFuel","RelicRealm","TimelessTactician","AgeOldAce","HeritageHero","VintageValor","ClassicClarity","LegendaryLegacy","MythicMajesty","ArchetypeAuthority","VenerableVanguard","AncientApex","PrimevalPulse","RusticRogue","HeritageHaven","LegacyLion","EpochEagle","EraEnforcer","BronzeBrigade","IronInscription","SteelSentinel","GoldenGlory","SilverSovereign","JadeJaguar","EmeraldEnchantress","RubyRuler","SapphireSorcerer","AmberAmbassador","CobaltChampion","MarbleMagnate","GraniteGuardian","StoneSentry","RockRenegade","BoulderBrawler","MonolithMaven","ArtifactAce","ChronicleCatcher","DynastyDawn","EmpireElevate","KingdomKeeper","ThroneTactician","CrownCatalyst","ScepterSage","OracleOverseer","FossilForge","RelicRaider","TimelessTemplar","AgeOldAlchemist","HeritageHarbinger","VintageVindicator","ClassicChampion","LegendaryLuminari","MythicMaestro","ArchetypeArchitect","VenerableVizier","AncientAce","PrimevalProphet","RusticRenaissance","HeritageHierophant","LegacyLorus","EpochEternity","EraEvangelist","BronzeBastion","IronInitiate","SteelSovereign","GoldenGenius","SilverSage","JadeJourneyman","EmeraldEsquire","RubyRector","SapphireScholar"
    ],
    cute: [
        "SweetPeachy","LovelyLuna","CuteCookie","FluffyPanda","SugarGlide","HoneyBunny","PetalPunk","BubblesGirl","ChocoLava","CinnamonRoll","AngelWings","SunshineSmile","FuzzyWuzzy","Lovebomb","KawaiiKitty","MiniMochi","RosePetal","Buttercup","CakePop","MellowMush","Sparkles101","GlitterGaze","FairyDust","LovelyLucy","SweetSerenity","CuteCrush","SugarSensations","PookiePie","SmileyFace","HeartThrob","LovelyLlama","CuteCommander","FuzzyFurry","BunnyBoo","KittyKat","PuppyLove","SweetSweetie","SugarShack","Lovestruck","FlowerPower","CuteCrasher","MahMahMeow","SunnySmiles", "Sweetpea","LovelyLuna","CuteCrush","HoneyBunny","FluffyFavor","SugarSweet","AngelWings","KawaiiKlove","MellowMuse","SparklesHeart","GlitterGaze","FairyDustLove","LovelyLucy","SweetSurprise","HeartMelody","LovePotion","SugarCookie","CinnamonLove","WarmHug","CozyCompanion","TenderTouch","KindredSpirit","LoveBreeze","SweetSurrender","HeartString","LovelyLyric","FlowerPowerLove","HoneyHoney","SweetpeaSpecial","LoveNotes","HeartfeltHaven","SugarShelter","Lovecastle","WarmWish","HeartWhisper","LoveSpark","SweetSentiment","CuteCompanion","Lovebirds","HeartOfGold","SugarRay","LoveMaven","WarmthWinner","HeartKeeper","LovelyLlama","SweetSeraph","LoveLegend","HeartthrobHero","SugarSensations","Lovewave","WarmWelcome","HeartHelper","LoveBangle","SweetSquad","CuteCourier","LovePetal","HeartSong","SugarGlideLove","LovelyLyrics","WarmWrap","HeartHaven","LoveHearts","SweetSurvivor","CuteChampion","LoveBuzz","WarmWorthy","HeartHopeful","SugarShield","LovelyLighthouse","HeartHero","LoveBurst","SweetSupport","WarmWise","HeartHarmony","LoveLink","SugarSmile","CuteCelebration","LovelyLaugh","WarmWishbone","Pookie","BooBoo","SweetiePie","Munchkin","LoveyDovey","Cuddles","Snugglebug","Fuffi","PumpkinPie","Marshmallow","Snickers","ToffeeTina","CupcakeCute","BubblegumBabe","CottonCandy","LollipopLove","PeachyKeen","SunshineSmile","RainbowRidge","ButtercupBloom","DaisyDream","LuckyCharm","CherryBlossom","MeadowMist","FlowerPower","RosyRouge","LavenderLove","SunflowerSweet","TulipTango","VioletVoodoo","PoppyPetal","IrisInsight","LilyLove","CarnationCute","OrchidOoh","JasmineJoy","RoseRay","GardenGnomeSweet","HoneybeeHive","Butterfly Bliss","KittyKat","PuppyLove","BunnyBoo","KoalaKute","PenguinPal","SquirrelSweet","HamsterHaven","FishyFriend","BirdieBoo","TurtleTina","FoxieFavor","DeerDoodles","Ribbon cute","SparkleStar","GlitterGlow","Rainbow unicorn","FairyFantasy","MermaidMagic","PrincessPetal","CastleCute","Balloon Bliss","CakeCelebrate","PresentPurr","GiftGiggle","HolidayHaven","Birthday Bliss","AnniversaryAngel","ValentineVibes"
    ],
    food: [
        "FoodieFanatic","TastyTitan","SnackAttack","GourmetGaze","ChefMaster","FoodComa","SweetTooth","PizzaPunk","BurgerBoss","TacoTitan","SushiSavage","CoffeeCraze","DonutDude","CakeKing","PiePirate","BBQBandit","MeatMaven","VeggieVibes","FruitFan","SnackSquad","ChocoChampion","IceCreamIcon","FoodFreak","RestaurantRogue","CafeCatcher","DiningDude","GulfGourmet","CuisineKing","FlavorFusion","FoodJunkie","SpiceSage","SaucySquad","SugarSensations","MunchieMaven","FeastFanatic","DishDash","KitchenKing","RecipeRenaissance","FoodFusion","GourmetGoddess","PalatePunk","SnackStorm","EdibleAce","FoodFantasy","BiteBoss","TasteTitans","CulinaryCrew","FoodStorm","GulfGlutton", "SweetTooth","FoodieFanatic","GourmetGaze","CuisineKing","ChefCharm","TastyTango","DeliciousDash","FlavorFusion","SavorySquad","BiteBoss","SnackAttack","MealMaster","DiningDude","RestaurantRogue","CafeCatcher","KitchenKrew","BakeryBoss","PastryPunk","SugarSurge","CaveChef","FoodComa","GulfGourmet","SavorSquad","TasteTitans","UmamiUnicorn","VitaminVibes","NutriNation","ProteinPride","CarbCrew","FiberFanatic","GlutenGuru","KetchupKing","SaucySage","SpiceSquad","HerbHive","BasilBrawler","MintMaven","CinnamonSage","GarlicGaze","OnionOgre","PepperPwnz","CocoaCatcher","CoffeeConnoisseur","TeaTitan","JuiceJester"," SodaSavant","WaterWizard","BBQBrigade","GrillGenius","FrostyFusion","IceCreamIcon","CakeCrusher","PiePirate","DonutDominator","ChocolateChampion","VanillaVortex","StrawberrySage","BlueberryBoss","RaspberryRogue","LemonLizard","OrangeOasis","MangoMaven","PineapplePwnz","WatermelonWizard","HoneyHero","SugarSensations","CerealKiller","BreakfastBrawler","LunchLord","DinnerDude","SupperSage","AppetiteAce","HungerHero","ThirstyTitan","FeastFanatic","BanquetBoss","BuffetBrigade","GingerGaze","TurmericTitan","CucumberCatcher","CarrotCrew","BroccoliBoss","CauliflowerCave","PotatoPunk","TomatoTitan","CornCrew","PeanutPwnz","AlmondAce","WalnutWizard","PecanPirate","CookieCrusher","BrownieBrigade","MuffinMaven","SconeSage","BagelBoss","ToastTitan","PancakePwnz","Waf fleWonder","CrepeCatcher","OmeletteOgre","ScrambleSquad","FriedFiesta","BoiledBoss","SteamedSage","RoastedRogue"
    ],
    street: [
        "StreetKing","UrbanAce","CitySlick","PavementPunk","RoadRunner","HighwayHero","SidewalkSage","CornerCrew","BlockParty","StreetSmart","UrbanLegend","CityBoy","TownTrend","MetroMaven","BoulevardBoss","AvenueAce","LaneLeader","CrosswalkCatcher","JunctionJester","StreetStyle","UrbanUprise","CityChamp","PaveMaster","RoadRogue","StreetSurgeon","GhettoGenius","Urbanite","ConcreteCowboy","AsphaltAce","StreetPhantom","CityLights","NightOwlStreet","MainStreetMaven","StreetCred","UrbanVibes","RoadTripper","StreetSoldier","CityScene","TownTalk","StreetLevel","UrbanUpstart","BoulevardBandit","StreetSavvy","PavementPro","CitySquad","RoadRash","StreetStory","UrbanUnderground","CityPulse", "StreetKing","UrbanUprise","CitySlick","PavementPete","RoadRunner","HighwayHero","BoulevardBoss","AvenueAce","LaneLegend","DrivewayDude","CrosswalkCrew","IntersectionIcon","JunctionJester","CornerstoneCatcher","AlleyAce","PathfinderPete","TrailblazerTroy","AsphaltAce","ConcreteCrew","CobblestoneCatcher","BrickBrawler","SidewalkSage","CurbsideCrew","TrafficTitan","RavenousRampart","StreetwiseSquad","UrbanUnderground","CityCentreCrew","DowntownDominator","UptownUnicorn","SuburbanSage","RuralRenegade","HighwayHavoc","RoadRogue","BoulevardBrawler","AvenueAssault","LaneLazarus","DrivewayDynamo","CrosswalkCatalyst","IntersectionInsider","JunctionJack","CornerstoneCrusher","AlleywayAce","PathwayPioneer","TrailbreakerTitus","AsphaltApache","ConcreteCouture","CobblestoneCatcher","BrickByBrick","SidewalkSentinel","CurbsideCourier","TrafficTactician","StreetSmartSquad","UrbanUmbrella","CityCentreChampion","DowntownDynamite","UptownUnstoppable","SuburbanSprint","RuralRush","HighwayHurricane","RoadRacer","BoulevardBlaze","AvenueAvalanche","LaneLynx","DrivewayDash","CrosswalkCrossover","IntersectionImpact","JunctionJolt","CornerstoneCharge","AlleywayAction","PathwayPursuit","TrailblazerTroop","AsphaltArmy","ConcreteCharge","CobblestoneCrew","BrickBreaker","SidewalkSprint","CurbsideCute","TrafficTorrent","StreetStorm","UrbanUproar","CityFrenzy","DowntownDash","UptownUmbrella","SuburbanSurge","RuralRoute","HighwayHype","RoadRhythm","BoulevardBounce","AvenueAura","LaneLife","DrivewayDynamism","CrosswalkCulture","IntersectionInsight","JunctionJourney","CornerstoneKick","AlleywayAdventure","PathwayPulse","TrailblazerTrend","AsphaltAtmosphere","ConcreteCulture","CobblestoneCharisma","BrickByBrickBuild","SidewalkSpirit","Curbside Charm"
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
const markovOrderInput = document.getElementById('markovOrder');
const backToCategoriesBtn = document.getElementById('backToCategoriesBtn'); // NEW: Back button

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

// Corrected toggleCustomInput function (as it was before the last change, needed for the "back" button)
function toggleCustomInput() {
    const categoryRadiosContainer = document.querySelector('.radio-group');
    const userWordsContainer = document.getElementById('userWordsContainer');
    const markovOrderContainer = document.querySelector('.markov-order-selection');

    if (userWordsRadio.checked) {
        categoryRadiosContainer.style.display = 'none'; // Hides the main category radios
        userWordsContainer.style.display = 'block';
        markovOrderContainer.style.display = 'block';
    } else {
        categoryRadiosContainer.style.display = 'grid'; // Shows the main category radios
        userWordsContainer.style.display = 'none';
        markovOrderContainer.style.display = 'none';
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

    // Event listeners for category selection
    categoryRadios.forEach(radio => {
        radio.addEventListener('change', toggleCustomInput);
    });
    userWordsRadio.addEventListener('change', toggleCustomInput);

    // Listener for Markov Order input to clear generated nickname on change
    markovOrderInput.addEventListener('input', () => {
        generatedNicknameInput.value = "";
        copyBtn.style.display = 'none';
        saveBtn.style.display = 'none';
    });

    // Event listener for the "Back to Categories" button
    backToCategoriesBtn.addEventListener('click', () => {
        // Find the default category radio (e.g., "Gaming")
        const defaultCategoryRadio = document.getElementById('categoryGaming');
        if (defaultCategoryRadio) {
            defaultCategoryRadio.checked = true; // Set it as checked
            // Manually trigger the change event to update the UI
            defaultCategoryRadio.dispatchEvent(new Event('change'));
        }
    });

    // Initial state setup
    generatedNicknameInput.placeholder = "Your new nickname appears here...";
    copyBtn.style.display = 'none';
    saveBtn.style.display = 'none';
    toggleCustomInput(); // Call once on load to set initial visibility
    displaySavedNicknames(); // Load saved nicknames on page load
});
