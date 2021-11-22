//In 1.18 you can use entity.dimension or player.dimension to get the current dimension
function currentDimension(x,y,z){
let overworld = world.getDimension("overworld").getEntitiesAtBlockLocation(new BlockLocation(x,y,z));	
let nether = world.getDimension("nether").getEntitiesAtBlockLocation(new BlockLocation(x,y,z));
let theEnd = world.getDimension("the end").getEntitiesAtBlockLocation(new BlockLocation(x,y,z));

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
