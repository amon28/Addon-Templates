import {MinecraftEnchantmentTypes, Enchantment} from '@minecraft/server';

export class Enchantments{
	
	//https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/minecraftenchantmenttypes

	//returns ItemStack
	static addEnchant(itemStack,enchantment){
		const eCompo = itemStack.getComponent("minecraft:enchantments");
		const enchantments = eCompo.enchantments;
		const enchant = enchantments.addEnchantment(enchantment);
		eCompo.enchantments = enchantments;
		return itemStack;				
	}
	
	//returns ItemStack
	static setEnchant(itemStack,enchantment){
		const eCompo = itemStack.getComponent("minecraft:enchantments");
		const enchantments = eCompo.enchantments;
		let enchantType = enchantment.type;
		
		if(!(enchantments.canAddEnchantment(enchantment))) throw `Enchantment ${enchantType.id} Incompatible with ${itemStack.id}!`;
		const enchant = enchantments.addEnchantment(enchantment);
		eCompo.enchantments = enchantments;
		return itemStack;	
								
	}

	static setEnchantName(itemStack,enchantName,level){
		const eCompo = itemStack.getComponent("minecraft:enchantments");
		const enchantments = eCompo.enchantments;
		let enchantType;
		
		for(let e in MinecraftEnchantmentTypes){				
			for(let e2 in MinecraftEnchantmentTypes[e]){
				enchantType = MinecraftEnchantmentTypes[e];
				if((MinecraftEnchantmentTypes[e].id.toLowerCase()).includes(enchantName.toLowerCase())){
					if(MinecraftEnchantmentTypes[e].maxLevel < level) throw `Enchantment level ${level} too high!`;
					if(!(enchantments.canAddEnchantment(new Enchantment(enchantType)))) throw `Enchantment ${enchantName} Incompatible with ${itemStack.id}!`;
						const enchant = enchantments.addEnchantment(new Enchantment(enchantType,level));
						eCompo.enchantments = enchantments;
						return itemStack;	
				}			
			}
		}
		throw `No Enchant ${enchantName} Found!`;
	}
	
	//returns Array of Enchantment the itemstack has
	static getEnchants(itemStack){		
		let enchantmentsArray = [];
		const eCompo = itemStack.getComponent("minecraft:enchantments");
		const enchantments = eCompo.enchantments;
		
		for(let enchantment of enchantments){
			enchantmentsArray.push(enchantment);
		}		

		return enchantmentsArray;		
	}
	
	//removeEnchant(itemStack,'sharpness')
	//returns ItemStack
	static removeEnchant(itemStack,enchantment){
		const eCompo = itemStack.getComponent("minecraft:enchantments");
		const enchantments = eCompo.enchantments;
		let enchantType = enchantment.type;
		
			if(enchantments.hasEnchantment(enchantType)){
				const enchant = enchantments.removeEnchantment(enchantType);
				eCompo.enchantments = enchantments;
				return itemStack;	
			}

		throw `No Enchant ${enchantType.id} Found!`;
	}
	
	//returns MinecraftEnchantmentTypes as an array
	static getAllEnchantTypes(){
		let enchantTypes = [];
		for(let e in MinecraftEnchantmentTypes){	
			for(let e2 in MinecraftEnchantmentTypes[e]){
				if(e2.includes('id')) enchantTypes.push(MinecraftEnchantmentTypes[e]);
			}			
		}
		enchantTypes.sort((a,b) => a.id>b.id?1:a.id == b.id?0:-1);
		return enchantTypes;
	}
}
