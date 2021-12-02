//In 1.18 BETA you can use entity.dimension or player.dimension to get the current dimension
//Still usable in 1.18.0 stable
function currentDimension(x,y,z){
let overworld = World.getDimension("overworld").getEntitiesAtBlockLocation(new BlockLocation(x,y,z));	
let nether = World.getDimension("nether").getEntitiesAtBlockLocation(new BlockLocation(x,y,z));
let theEnd = World.getDimension("the end").getEntitiesAtBlockLocation(new BlockLocation(x,y,z));

	if(overworld.find(p => p.id == "minecraft:player")){
	return "overworld";
	}


	if(nether.find(p => p.id == "minecraft:player")){
	return "nether";
	}

	if(theEnd.find(p => p.id == "minecraft:player")){
	return "the end";
	}

	Console.warn(`No Dimension Detected`);
}
