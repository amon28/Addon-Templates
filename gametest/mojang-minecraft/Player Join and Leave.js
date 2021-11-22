import {world} from 'mojang-minecraft';
    
const onJoinEvent = world.events.playerJoin;
const onLeaveEvent = world.events.playerLeave;

onJoinEvent.subscribe(onJoin);  
onLeaveEvent.subscribe(onLeave);

function onJoin(eventData){
let player = eventData.player;	
player.dimension.runCommand(`say ${player.nameTag} has joined your server!`);
}

function onLeave(eventData){
let player = eventData.player;	
player.dimension.runCommand(`say ${player.nameTag} has left your server!`);
}
