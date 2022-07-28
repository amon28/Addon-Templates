import {world} from 'mojang-minecraft';

world.events.beforeChat.subscribe((eventData)=>{
	let message = eventData.message;
	if(message == 'i like cat'){
		world.getDimension('overworld').runCommand(`say i like cats too`);
	}
});
