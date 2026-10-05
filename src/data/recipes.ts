export type Item = { name: string; emoji: string };
export type Recipe = { result: string; animation: "cook" | "dark" | "lightning" | "splash" | "magic" };

// id=emoji  (name is generated from the id)
const ITEM_DATA = `
pig=🐷 farm=🌾 thunder=⚡ devil=😈 god=✝️ dc=🦇 fire=🔥 water=💧 earth=🌍 air=💨 plant=🌱 human=🧑 metal=🔩
steam=♨️ mud=🟤 lava=🌋 cloud=☁️ dust=🌫️ smoke=🚬 lake=🏞️ sea=🌊 ocean=🐳 mountain=⛰️ volcano=🗻 obsidian=🖤
storm=⛈️ rain=🌧️ garden=🏡 rainbow=🌈 energy=🔋 inferno=🔥 sky=🌤️ sun=☀️ light=💡 dark=🌑 night=🌃 moon=🌙 star=⭐
galaxy=🌌 planet=🪐 space=🚀 day=🌅 tree=🌳 forest=🌲 charcoal=⚫ wildfire=🔥 flower=🌸 bouquet=💐 grass=🌿 wheat=🌽
bread=🍞 flour=🥣 stone=🪨 sand=🏖️ glass=🪟 crop=🥕 steel=⚙️ knight=🛡️ sword=⚔️ castle=🏰 king=🤴 queen=👸
life=🧬 animal=🐾 fish=🐟 bird=🐦 lizard=🦎 dragon=🐉 dinosaur=🦖 time=⏳ heart=❤️ love=💕 baby=👶 family=👪
lightning=🌩️ bacon=🥓 boar=🐗 flying_pig=🐖 piglet=🐽 sandwich=🥪 egg=🥚 chicken=🐔 omelette=🍳 breakfast=🥞
cow=🐄 milk=🥛 cheese=🧀 pizza=🍕 meat=🍖 burger=🍔 hotdog=🌭 ham=🍖 cake=🎂 wedding_cake=💒 tea=🍵 coffee=☕
grape=🍇 wine=🍷 beer=🍺 holy_water=🪬 angel=😇 mephisto=👹 hell=🔥 hellfire=👿 underworld=🕳️ hades=💀 zeus=🔱 poseidon=🔱
thor=🔨 loki=🎭 hercules=💪 titan=🗿 olympus=🏛️ dog=🐕 cerberus=🐕‍🦺 cat=🐈 wolf=🐺 werewolf=🌕 vampire=🧛 zombie=🧟
death=☠️ ghost=👻 skeleton=💀 grim_reaper=⚰️ magic=✨ wizard=🧙 witch=🧙‍♀️ horse=🐴 unicorn=🦄 pegasus=🪽 phoenix=🐦‍🔥
mermaid=🧜 centaur=🏇 fairy=🧚 elf=🧝 genie=🧞 giant=🧌 troll=👹 superman=🦸 aquaman=🔱 flash=💨 green_lantern=💚
batman=🦇 bat=🦇 joker=🃏 robin=🐦 car=🚗 batmobile=🏎️ city=🏙️ building=🏢 gotham=🌆 spider=🕷️ spiderman=🕸️ warrior=🥷
machine=🏭 robot=🤖 cyborg=🦾 computer=💻 internet=🌐 phone=📱 ai=🧠 rocket=🚀 airplane=✈️ ship=🚢 train=🚆 electricity=🔌
battery=🔋 lightbulb=💡 tv=📺 game=🎮 astronaut=👨‍🚀 mars=🔴 alien=👽 ufo=🛸 black_hole=🕳️ ice=🧊 snow=❄️ snowman=⛄
winter=🥶 comet=☄️ music=🎵 song=🎤 guitar=🎸 rock_star=🤘 piano=🎹 wood=🪵 paper=📄 book=📘 library=📚 money=💵 bank=🏦
gold=🥇 treasure=💰 pirate=🏴‍☠️ doctor=🧑‍⚕️ medicine=💊 scientist=🔬 school=🏫 teacher=🧑‍🏫 student=🎓 farmer=🧑‍🌾 chef=🧑‍🍳
baker=🥖 fisherman=🎣 police=👮 firefighter=🧑‍🚒 hate=😡 joy=😄 sadness=😢 anger=🤬 fear=😱 peace=🕊️ dove=🕊️ dream=💭
nightmare=😰 idea=💭 genius=🧑‍🎓 story=📖 legend=🏆 myth=🐲 leather=👜 ball=⚽ football=🏈 basketball=🏀 olympics=🏅
beach=🏝️ island=🏝️ desert=🏜️ oasis=🌴 jungle=🌴 swamp=🐊 cave=🕳️ river=🏞️ waterfall=💦 glacier=🏔️ iceberg=🧊
earthquake=📉 tsunami=🌊 tornado=🌪️ hurricane=🌀 flood=🛟 fog=🌁 sunset=🌇 sunrise=🌄 aurora=🌠 geyser=⛲
oxygen=🫁 hydrogen=🎈 salt=🧂 sugar=🍬 candy=🍭 ice_cream=🍦 rice=🍚 sushi=🍣 angel_wings=🪽 fallen_angel=🖤
`;

const RECIPE_DATA = `
fire+water=steam earth+water=mud earth+fire=lava air+water=cloud air+earth=dust air+fire=smoke water+water=lake lake+water=sea
sea+water=ocean earth+earth=mountain mountain+fire=volcano lava+water=obsidian earth+lava=volcano cloud+thunder=storm cloud+water=rain
rain+earth=garden rain+sun=rainbow fire+fire=inferno air+air=sky sky+fire=sun sun+air=light light+devil=dark sky+dark=night night+earth=moon
night+light=star star+star=galaxy earth+star=planet sky+star=space sun+sky=day earth+plant=tree tree+tree=forest tree+fire=charcoal
forest+fire=wildfire plant+rain=flower flower+flower=bouquet plant+plant=grass farm+plant=wheat wheat+fire=bread wheat+stone=flour
lava+air=stone stone+air=sand sand+fire=glass farm+water=crop metal+fire=steel steel+fire=sword sword+human=knight knight+stone=castle
human+castle=king king+love=queen thunder+fire=energy energy+water=life life+earth=animal life+water=fish life+air=bird life+mud=lizard
lizard+fire=dragon lizard+time=dinosaur sun+moon=time human+life=heart heart+human=love love+human=baby baby+human=family storm+energy=lightning
farm+pig=bacon pig+mud=boar pig+bird=flying_pig pig+baby=piglet bacon+bread=sandwich bird+farm=egg bird+human=chicken egg+fire=omelette
bacon+egg=breakfast animal+farm=cow cow+water=milk milk+time=cheese bread+cheese=pizza animal+fire=meat meat+bread=burger pig+bread=hotdog
pig+smoke=ham flour+egg=cake cake+love=wedding_cake plant+steam=tea plant+smoke=coffee plant+sun=grape grape+time=wine wheat+lake=beer
god+water=holy_water god+air=angel dc+devil=mephisto devil+fire=hell hell+fire=hellfire devil+earth=underworld god+hell=hades god+sky=zeus
god+sea=poseidon god+thunder=thor thor+devil=loki zeus+human=hercules god+mountain=titan zeus+mountain=olympus animal+human=dog hell+dog=cerberus
animal+milk=cat dog+forest=wolf wolf+moon=werewolf human+night=vampire human+death=zombie life+dark=death death+air=ghost death+earth=skeleton
death+sword=grim_reaper star+energy=magic human+magic=wizard wizard+night=witch animal+grass=horse horse+magic=unicorn horse+bird=pegasus
bird+fire=phoenix human+sea=mermaid human+horse=centaur magic+flower=fairy fairy+human=elf magic+smoke=genie human+mountain=giant giant+forest=troll
dc+god=superman dc+water=aquaman dc+lightning=flash dc+energy=green_lantern dc+human=batman animal+night=bat batman+devil=joker batman+bird=robin
smoke+metal=car batman+car=batmobile castle+castle=city steel+stone=building building+building=city dc+city=gotham animal+tree=spider
human+spider=spiderman human+steel=warrior steel+energy=machine machine+human=robot robot+human=cyborg machine+light=computer
computer+computer=internet computer+air=phone computer+life=ai machine+fire=rocket machine+bird=airplane machine+sea=ship machine+steel=train
energy+metal=electricity electricity+stone=battery glass+electricity=lightbulb glass+computer=tv tv+human=game human+rocket=astronaut
planet+lava=mars life+space=alien alien+airplane=ufo star+dark=black_hole water+night=ice ice+cloud=snow snow+human=snowman snow+time=winter
ice+star=comet air+human=music music+human=song music+tree=guitar guitar+human=rock_star music+wood=piano tree+sword=wood wood+water=paper
paper+paper=book book+book=library paper+metal=money money+building=bank metal+sun=gold gold+earth=treasure human+ship=pirate human+holy_water=doctor
plant+doctor=medicine human+book=scientist building+book=school human+school=teacher school+baby=student human+farm=farmer human+meat=chef
human+bread=baker human+fish=fisherman human+city=police police+fire=firefighter love+devil=hate human+sun=joy human+rain=sadness human+fire=anger
human+dark=fear bird+holy_water=dove dove+human=peace human+moon=dream dream+devil=nightmare human+lightbulb=idea human+idea=genius idea+book=story
story+time=legend legend+god=myth cow+sun=leather air+leather=ball ball+human=football ball+metal=basketball olympus+human=olympics sea+sand=beach
ocean+earth=island sand+sun=desert desert+water=oasis forest+rain=jungle mud+plant=swamp mountain+dark=cave rain+mountain=river river+stone=waterfall
ice+mountain=glacier ice+sea=iceberg earth+energy=earthquake ocean+earthquake=tsunami storm+air=tornado storm+ocean=hurricane rain+rain=flood
cloud+earth=fog sun+sea=sunset sun+mountain=sunrise night+electricity=aurora earth+steam=geyser plant+air=oxygen water+electricity=hydrogen
sea+stone=salt plant+stone=sugar sugar+love=candy ice+milk=ice_cream plant+lake=rice rice+fish=sushi angel+devil=fallen_angel god+earth=garden
cloud+fire=rainbow thor+storm=lightning wizard+book=magic sky+earth=fog king+dragon=legend dragon+knight=story pirate+gold=treasure
fire+stone=charcoal fire+ice=water fire+metal=steel water+plant=tree pig+human=ham mud+sun=stone sea+earth=beach lake+mountain=river
angel+bird=angel_wings dust+water=mud dust+fire=smoke fire+tree=charcoal ghost+human=vampire robot+magic=ai tv+music=song human+car=police lightbulb+human=idea
`;

export const keyOf = (a: string, b: string) => [a, b].sort().join("|");

const SHOUT = new Set(["dc", "ai", "tv", "ufo"]);
const nameOf = (id: string) =>
  SHOUT.has(id) ? id.toUpperCase() : id.split("_").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");

export const items: Record<string, Item> = {};
for (const tok of ITEM_DATA.trim().split(/\s+/)) {
  const i = tok.indexOf("=");
  const id = tok.slice(0, i);
  items[id] = { name: nameOf(id), emoji: tok.slice(i + 1) };
}

const ANIMS: Recipe["animation"][] = ["cook", "dark", "lightning", "splash", "magic"];
const pickAnim = (id: string) => ANIMS[[...id].reduce((s, c) => s + c.charCodeAt(0), 0) % ANIMS.length];

export const recipes: Record<string, Recipe> = {};
for (const tok of RECIPE_DATA.trim().split(/\s+/)) {
  const [pair, result] = tok.split("=");
  const [a, b] = pair.split("+");
  recipes[keyOf(a, b)] = { result, animation: pickAnim(result) };
}

export const starters = ["pig", "farm", "thunder", "devil", "god", "dc", "fire", "water", "earth", "air", "plant", "human", "metal"];
export const totalItems = Object.keys(items).length;
