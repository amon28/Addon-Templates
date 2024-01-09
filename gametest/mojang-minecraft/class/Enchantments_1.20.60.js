import {EnchantmentTypes, ItemEnchantableComponent} from '@minecraft/server';

export class Enchantments{
	
	//https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/EnchantmentTypes

	//returns ItemStack
	static addEnchant(itemStack,enchantment){
		const eCompo = itemStack.getComponent(ItemEnchantableComponent.componentId);		
		eCompo.addEnchantment(enchantment);
		return itemStack;				
	}
	
	/*
	//returns ItemStack
	static setEnchant(itemStack,enchantment){
		const eCompo = itemStack.getComponent("minecraft:enchantments");
		const enchantments = eCompo.enchantments;
		let enchantType = enchantment.type;
		
		if(!(enchantments.canAddEnchantment(enchantment))) throw `Enchantment ${enchantType.id} Incompatible with ${itemStack.id}!`;
		const enchant = enchantments.addEnchantment(new Enchantment(enchantType,level));
		eCompo.enchantments = enchantments;
		return itemStack;	
								
	}*/

	static setEnchantName(itemStack,enchantName,level){
		const eCompo = itemStack.getComponent("minecraft:enchantments");
		let enchantmentType = EnchantmentTypes.get(enchantName)
		if(enchantmentType.maxLevel < level) throw `Enchantment level ${level} too high!`;
		let enchantment = {level:level, type:enchantmentType.id}
		if(eCompo.canAddEnchantment(enchantment)){
			eCompo.addEnchant(enchantment)
			return itemStack
		}else{
			throw `Enchantment ${enchantName} Incompatible with ${itemStack.id}!`;
		}
		
		/*
		for(let e in EnchantmentTypes){				
			for(let e2 in EnchantmentTypes[e]){
				enchantType = EnchantmentTypes[e];
				if((EnchantmentTypes[e].id.toLowerCase()).includes(enchantName.toLowerCase())){
					if(EnchantmentTypes[e].maxLevel < level) throw `Enchantment level ${level} too high!`;
					if(!(enchantments.canAddEnchantment(new Enchantment(enchantType)))) throw `Enchantment ${enchantName} Incompatible with ${itemStack.id}!`;
						const enchant = enchantments.addEnchantment(new Enchantment(enchantType,level));
						eCompo.enchantments = enchantments;
						return itemStack;	
				}			
			}
		}*/

		throw `No Enchant ${enchantName} Found!`;
	}
	
	//returns Array of Enchantment the itemstack has
	static getEnchants(itemStack){		
		let enchantmentsArray = [];
		const eCompo = itemStack.getComponent(ItemEnchantableComponent.componentId);
		enchantmentsArray = eCompo.getEnchantments();
		return enchantmentsArray;		
	}
	
	//removeEnchant(itemStack,'sharpness')
	//returns ItemStack
	static removeEnchant(itemStack,enchantment){
		const eCompo = itemStack.getComponent(ItemEnchantableComponent.componentId);
		let enchantmentType = enchantment.type
		if(eCompo.hasEnchantment(enchantmentType)){
			eCompo.removeEnchantment(enchantmentType)
			return itemStack
		}
		throw `No Enchant ${enchantType.id} Found!`;			
	}
	
	/*
	//returns EnchantmentTypes as an array
	static getAllEnchantTypes(){
		let enchantTypes = [];
		for(let e in EnchantmentTypes){	
			for(let e2 in EnchantmentTypes[e]){
				if(e2.includes('id')) enchantTypes.push(EnchantmentTypes[e]);
			}			
		}
		enchantTypes.sort((a,b) => a.id>b.id?1:a.id == b.id?0:-1);
		return enchantTypes;
	}*/
}