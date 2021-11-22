import {world,ItemStack,MinecraftItemTypes} from 'mojang-minecraft';
    
const chatCallback = world.events.beforeChat;

chatCallback.subscribe(bChat);	  
 
function bChat(chatData) 
{
if(chatData.message == "!inv"){
try{
let player = chatData.sender;
let pInv = player.getComponent("inventory").container;
	for(let slot=0; slot<pInv.size; slot++){
		let item = pInv.getItem(slot);
		if(!item) continue;
		if(item.id == "minecraft:apple"){
		player.runCommand(`say Apple Found!`);
		break;
		}
		
	}
	
}catch(e){
player.runCommand(`say ${e}`);			
}
}
}	
