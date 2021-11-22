import {world,ItemStack,MinecraftItemTypes} from 'mojang-minecraft';
    
const chatCallback = world.events.beforeChat;

chatCallback.subscribe(bChat);	  
 
function bChat(chatData) 
{
//Typing !inv in chat will show all the items in your inventory in the chat
if(chatData.message == "!inv"){
try{
let player = chatData.sender;
let pInv = player.getComponent("inventory").container;
	for(let slot=0; slot<pInv.size; slot++){
		let item = pInv.getItem(slot);
		if(!item) continue;
		let iName = item.id;
		player.runCommand(`say ${iName}`);		
		
	}
	
}catch(e){
console.warn(`say ${e}`);			
}
}
}	
