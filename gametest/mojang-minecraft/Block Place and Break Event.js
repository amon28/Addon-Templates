import {world} from 'mojang-minecraft';
    
const blockPlaceEvent = world.events.blockPlace;
const blockBreakEvent = world.events.blockBreak;

blockPlaceEvent.subscribe(blockPlace);	  
blockBreakEvent.subscribe(blockBreak);
 
function blockPlace(eventData) 
{
let block = eventData.block;
let dimension = eventData.dimension;
let player = eventData.player;

player.runCommand(`say ${player.nameTag} placed ${block.id}`);	

}	

function blockBreak(eventData) 
{
let block = eventData.block;
let dimension = eventData.dimension;
let player = eventData.player;
//BUG:It gets an air block
player.runCommand(`say ${player.nameTag} broke ${block.id}`);	

}	
