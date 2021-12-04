// Problem-1
function seerToMon(seer) {
  if (seer >= 40) {
    const sum = seer / 40;
    return sum;
  } else {
    console.log("Try input number getter than or equal 40");
  }
  return seerToMon;
}
console.log(seerToMon(160));
// Problem-2
function totalSales(shirts = 0, pants = 0, shoes = 0) {
  const totalShirts = shirts * 100;
  const totalPants = pants * 200;
  const totalShoes = shoes * 300;
  const total = totalShirts + totalPants + totalShoes;
  return total;
}
console.log(totalSales(1, 1));
// Problem-3
function deliveryCost (items){

  if (items <= 100){
    const charge100 = items * 100
    return charge100
  }
  else if (items >100 && items<=200) {
    const charge80Items = items - 100;
    const charge80 = charge80Items * 80;
    const charge100Items = items - charge80Items;
    const charge100 = charge100Items*100
    const total = charge100+charge80
    return total
  }
  else if (items>200){
        const max200Items = items - 200;
        const below200 = items - max200Items;
        const items100 = below200 - 100
        const items200 = below200 -items100
        const charge100Items = items100*100
        const charge80Items = items200 * 80
        const chargeMaxItems = max200Items*50
        const total = charge100Items + charge80Items + chargeMaxItems
        return total
  }
  else{
    console.log("Please input a numeric value");
  }
 return deliveryCost
}

console.log(deliveryCost(120))

// Problem-4

const friend = ["Mujahid Islam", "Aminul Islam", "Emon Hossain", "Faruk Ahmed", "Rafi"];
function perfectFriend (friend) {
  let megaName = friend[0];
  for (let i = 0; i < friend.length; i++) {
    const carrectName = friend[i];
    if (carrectName.length > megaName.length) {
      megaName = carrectName;
    }
  }
  return megaName;
}
const result = perfectFriend (friend);
console.log(result);
