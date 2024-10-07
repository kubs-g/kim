const character="#"
/*console.log(character)
let developer="kubs"
console.log(developer)
let secendCharacter="test";
console.log(secendCharacter)
let first=1
let second=2
second=first;
console.log(second)*/
//let count=8;
//console.log(count+1,character)

//let rows =["Naomi","quincy","camperchan"];
/*console.log(rows[0])
rows[2]="geri"
//console.log(rows)
rows[0]="ngash"
rows[1]=10
console.log(rows)
console.log(rows.length-1)

/*let cities=["London" ,"New York","Mumbai"]
console.log(cities)
cities[2]="Mexico City"
console.log(cities)
*/

/*rows.push("FreeCodeCamp")
console.log(rows)
let popped=rows.pop()
console.log(popped)
let pushed=rows.push("FreeCodeCamp")
console.log(pushed)
*/
const rows=[]
const count=8
//console.log(character,count,rows)
for (let i=0;i<count;i++) {
	//console.log(i)
rows.push(padRow(i+1,count))

}
let result=""; 
console.log(result)
for (const row of rows){
//	result=result + row;
 result=result + "\n" + row;
  //console.log(character)
}
console.log(result)

function padRow(rowNumber,rowCount) {
return " ".repeat(rowCount-rowNumber) + character.repeat(2* rowNumber-1)+ " ".repeat(rowCount-rowNumber)
 } 






































