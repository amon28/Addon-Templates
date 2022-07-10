import {EnchantmentList, MinecraftEnchantmentTypes, Enchantment, ItemStack, world} from 'mojang-minecraft';

export class Enchantments{
	
	//https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/minecraftenchantmenttypes
	//setEnchant(itemStack,'sharpness',1)
	//returns itemstack
	static setEnchant(itemStack,enchantName,level){
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
	
	//returns Echantment Class array
	static getEnchants(itemStack){		
		let enchantmentsArray = [];
		const eCompo = itemStack.getComponent("minecraft:enchantments");
		const enchantments = eCompo.enchantments;
		
		for(let e in MinecraftEnchantmentTypes){	
			for(let e2 in MinecraftEnchantmentTypes[e]){
				if(e2.includes('id')){
					if(enchantments.hasEnchantment(MinecraftEnchantmentTypes[e])){
						const enchants = enchantments.getEnchantment(MinecraftEnchantmentTypes[e]);
						enchantmentsArray.push(enchants);
					}
				}
			}			
		}
		
		return enchantmentsArray;		
	}
	
	//removeEnchant(itemStack,'sharpness')
	//returns itemstack
	static removeEnchant(itemStack,enchantName){
		const eCompo = itemStack.getComponent("minecraft:enchantments");
		const enchantments = eCompo.enchantments;
		let enchantType;
		
		for(let e in MinecraftEnchantmentTypes){				
			for(let e2 in MinecraftEnchantmentTypes[e]){
				enchantType = MinecraftEnchantmentTypes[e];
				if((MinecraftEnchantmentTypes[e].id.toLowerCase()).includes(enchantName.toLowerCase())){
					const enchant = enchantments.removeEnchantment(enchantType);
					eCompo.enchantments = enchantments;
					return itemStack;	
				}
			}		
		}
		throw `No Enchant ${enchantName} Found!`;
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
