import { world } from 'mojang-minecraft';
    
const beforeItemUse = world.events.beforeItemUseOn;

beforeItemUse.subscribe(bItemUse);  
 
function bItemUse(eventData){
//remove comment to only work for an apple
//if(eventData.item.id != "minecraft:apple") return;
let player = eventData.source;
let dimension = player.dimension;
let blockLoc = eventData.blockLocation;
let block = dimension.getBlock(blockLoc);
player.runCommand(`say ${block.id}`);
}
