import * as GameTest from 'mojang-gametest';
import {Commands,World,ItemStack,MinecraftItemTypes} from 'mojang-minecraft';
    
const chatCallback = World.events.beforeChat;

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
		if(item != null){
		let iName = item.id;
		Commands.run(`say ${iName}`, World.getDimension("overworld"));		
		}
	}
	
}catch(e){
Commands.run(`say ${e}`, World.getDimension("overworld"));			
}
}
}	
