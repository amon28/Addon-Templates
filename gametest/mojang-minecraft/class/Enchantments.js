import {EnchantmentList, MinecraftEnchantmentTypes, Enchantment, ItemStack} from 'mojang-minecraft';

export class Enchantments{
	
	//https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/minecraftenchantmenttypes
	//returns itemstack
	static enchant(itemStack,enchantName,level){
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
	
	//returns MinecraftEnchantmentTypes as an array
	static enchantTypes(){
		let enchantTypes = [];
		for(let e in MinecraftEnchantmentTypes){	
			for(let e2 in MinecraftEnchantmentTypes[e]){
				enchantTypes.push(MinecraftEnchantmentTypes[e]);
			}
		}
		return enchantTypes;
	}
}
