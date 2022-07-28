//rename file to Main.js (or other names)
import {world} from 'mojang-minecraft';

world.events.beforeChat.subscribe((eventData)=>{
	let message = eventData.message;
	let playerInv = eventData.sender.getComponent('inventory').container;
	if(message == 'inv'){
		for(let slot=0; slot<playerInv.size; slot++){
			let item = playerInv.getItem(slot);
			if(!item) continue;
				world.getDimension('overworld').runCommand(`say ${item.id}`);
		}
	}
});
