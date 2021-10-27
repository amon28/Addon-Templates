function currentDimension(x,y,z){
let overworld = World.getDimension("overworld").getEntitiesAtBlockLocation(new BlockLocation(x,y,z));	
let nether = World.getDimension("nether").getEntitiesAtBlockLocation(new BlockLocation(x,y,z));
let theEnd = World.getDimension("the end").getEntitiesAtBlockLocation(new BlockLocation(x,y,z));

for(let count=0; count<overworld.length; count++){
	if(overworld[count].id == "minecraft:player"){
	return "overworld";
	}
}
for(let count=0; count<nether.length; count++){
	if(nether[count].id == "minecraft:player"){
	return "nether";
	}
}
for(let count=0; count<theEnd.length; count++){
	if(theEnd[count].id == "minecraft:player"){
	return "the end";
	}
}	
}
