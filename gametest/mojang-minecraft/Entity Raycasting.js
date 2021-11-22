import { world, EntityRaycastOptions} from 'mojang-minecraft';

const eventTick = world.events.tick;
eventTick.subscribe(onTick);


function onTick(eventData){

let players = world.getPlayers();
	for(var index in players){
		let player = players[index];
		let entityRayCast = new EntityRaycastOptions();
		entityRayCast.maxDistance = 9;
		let entity = player.getEntitiesFromViewVector(entityRayCast);
		let currentDimension = players[index].dimension;
		//do something
		for(var index2 in entity){
		if(entity[index2]){	
		player.runCommand(`title @s actionbar ${entity[index2].id}`);		
		}else{
		player.runCommand(`title @s clear`);	
		}
		}
	}
}
