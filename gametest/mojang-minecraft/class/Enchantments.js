/**
 * @author Dewdimpple/Amon28
 */

import {MinecraftEnchantmentTypes, Enchantment, ItemStack} from 'mojang-minecraft';

export class Enchantments{
	
	
	/**
   * https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/minecraftenchantmenttypes
   * setEnchant
   * @param {ItemStack,EnchantmentType,int} itemStack - Your item, enchantType - enchantment to be applied, level - level of enchantment.
   * @return {ItemStack} itemStack - Enchanted Item.
   */
	
	static setEnchant(itemStack,enchantType,level){
		const eCompo = itemStack.getComponent("minecraft:enchantments");
		const enchantments = eCompo.enchantments;
		if(enchantType.maxLevel < level) throw `Enchantment level ${level} too high!`;
		if(!(enchantments.canAddEnchantment(new Enchantment(enchantType)))) throw `Enchantment ${enchantType.id} Incompatible with ${itemStack.id}!`;
			const enchant = enchantments.addEnchantment(new Enchantment(enchantType,level));
			eCompo.enchantments = enchantments;
			return itemStack;				
	}
	
	/**
   * https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/minecraftenchantmenttypes
   * setEnchantString
   * @param {ItemStack,String,Integer} itemStack - Your item, enchantName - enchantment name to be applied, level - level of enchantment.
   * @return {ItemStack} itemStack - Enchanted Item.
   */
	
	static setEnchantString(itemStack,enchantName,level){
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
	
	/**
   * getEnchants
   * @param {ItemStack} itemStack - Your item.
   * @return {EnchantmentType[]} enchantmentsArray - List of enchantment types.
   */
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

	/**
   * removeEnchant
   * @param {ItemStack,EnchantmentType} itemStack - Your item, enchantType - Enchantment 
   * @return {ItemStack} itemStack - Edited item.
   */
	static removeEnchant(itemStack,enchantType){
		const eCompo = itemStack.getComponent("minecraft:enchantments");
		const enchantments = eCompo.enchantments;
		
		const enchant = enchantments.removeEnchantment(enchantType);
		eCompo.enchantments = enchantments;
		return itemStack;	
	}
	
	/**
   * getAllEnchantTypes
   * @return {EnchantmentType[]} enchantTypes - List of enchant types.
   */
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
