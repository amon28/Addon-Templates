function blockToItem(block){
try{
let blockId = block.id;
//world.getDimension(`overworld`).runCommand(`say ${block.id}`);
	//Change concrete powder to match item id
	if(blockId.includes(`powder`)) blockId = 'minecraft:concrete_powder';
	//Change slabs to match item id
	if(blockId.includes(`stone_slab`) && !blockId.includes(`double_`)){
		blockId = blockId.split(':')[0] + ':' + 'double_' + blockId.split(':')[1];	
	}
	//Change sign to match item id
	if(blockId.includes(`_standing`)) blockId = blockId.replace(/_standing/g,'');
	if(blockId==`minecraft:standing_sign`) blockId = "minecraft:oak_sign";
	if(blockId.includes('dark') && blockId.includes('sign')) blockId = "minecraft:dark_oak_sign";
	
let currentValue = '';
let validValues = [];
let blockData;
	for(let p of block.permutation.getAllProperties()){
		for(let p2 in p){
			if(p[p2].includes('type') || p[p2].includes('color')){	
			let bProperty = block.permutation.getProperty(p[p2]);
			currentValue = bProperty.value;
			validValues = bProperty.validValues;
			blockData = validValues.findIndex(value=>value==currentValue);	
			let newItemStack = new ItemStack(Items.get(blockId),1,blockData);
			return newItemStack;			
			}else{
			return new ItemStack(Items.get(blockId),1,0);	
			}
		}
	}
	return new ItemStack(Items.get(blockId),1,0);
}catch(e){
//world.getDimension(`overworld`).runCommand(`say ${e}`);	
}
}
