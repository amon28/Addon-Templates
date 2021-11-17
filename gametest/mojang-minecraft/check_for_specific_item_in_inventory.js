import {Commands,World,ItemStack,MinecraftItemTypes} from 'mojang-minecraft';
    
const chatCallback = World.events.beforeChat;

chatCallback.subscribe(bChat);	  
 
function bChat(chatData) 
{
if(chatData.message == "!inv"){
try{
let apple = 0;
let player = chatData.sender;
let pInv = player.getComponent("inventory").container;
	for(let slot=0; slot<pInv.size; slot++){
		let item = pInv.getItem(slot);
		if(item != null){
		if(item.id == "minecraft:apple"){
		apple++;		
		}
		}
	}
	if(apple>=1){
	Commands.run(`say Apple Found!`, World.getDimension("overworld"));		
	}
	
}catch(e){
Commands.run(`say ${e}`, World.getDimension("overworld"));			
}
}
}	
