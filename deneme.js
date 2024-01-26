/* const  reaction_resistance = (value,tur)=>{
const random  = Math.ceil(Math.random()*99)
console.log(`%${value} ${tur}`);
console.log(`${random} ${tur} gelen şans  `);   
return  random<=value  ? true :  false
}
const savas = (direnc,isabet)=>{
if (direnc &&!isabet ) {
    
    console.log('direnc');
} else if (!direnc &&isabet) {
    console.log('isabet');
}else  {
const coin = Math.floor(Math.random()*2)

return coin ? console.log('isabet') :  console.log('direnc')

}






}
for (let i = 0; i < 3;i++) {
    const direnc =reaction_resistance(0,'direnc')
    const isabet =reaction_resistance(0,'isabet')
    console.log('direnc = '+direnc);
    console.log('isabet = '+isabet);
    savas(direnc,isabet)
    console.log('**********************************************');
}
 */
const lodash = require('lodash')

const sayi =[12,25,36,8,56,8,5,7,8,11]
/* lodash.each(sayi,(element ,i)=>{

console.log(element,i);

}) */

sayi.forEach((element,i)=>{

console.log(element,i);

})


