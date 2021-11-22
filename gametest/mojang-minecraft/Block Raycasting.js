import { world, BlockRaycastOptions, Block, MinecraftBlockTypes } from 'mojang-minecraft';

const eventTick = world.events.tick;
eventTick.subscribe(onTick);


function onTick(eventData){

let players = world.getPlayers();
	for(var index in players){
		let player = players[index];
		let blockRayCast = new BlockRaycastOptions();
		blockRayCast.includeLiquidBlocks = false;
		blockRayCast.includePassableBlocks = true;
		blockRayCast.maxDistance = 9;
		let block = player.getBlockFromViewVector(blockRayCast);
		let currentDimension = players[index].dimension;
		//do something
		if(block != null){
		player.runCommand(`title @p[name="${player.nameTag}"] actionbar ${block.type.id}`);		
		}else{
		player.runCommand(`title @p[name="${player.nameTag}"] clear`);	
		}
	}
}
