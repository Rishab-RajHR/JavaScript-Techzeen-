// "TechNova","CodeCraft","ByteFlow","DevSphere","CloudNest","PixelForge","DataHive","NextWave","CyberCore","CodeNest","AppFusion","TechVerse","ByteBridge","DevPulse","CloudForge","SmartStack","LogicLoop","CodeSprint","WebMatrix","DigitalNest","FutureCode","AlphaTech","NovaStack","TechFusion","ByteWorks","CodeWave","DevOrbit","StackNova","PixelStack","QuantumCode"


let names = [
   "DevPulse","CloudForge","SmartStack","LogicLoop","CodeSprint","WebMatrix","DigitalNest","FutureCode","AlphaTech","NovaStack","TechFusion","ByteWorks","CodeWave","DevOrbit","StackNova","PixelStack","QuantumCode"
];
// Sort names in ascending order
console.log(sortedNames);


// Reference 
let input = document.getElementById("input");

// Execute function on keyup
input.addEventListener("keyup", (e) => {
     // loop through above array
     for(let i of sortedNames) {
       // Create input to lowercase and compare with each string
       if(i.toLowerCase().startsWith(input.ariaValueMax.toLowerCase()) && 
       input.value != ""
      ){
          // Create li element
          let listItem = document.createElement("li");
          // One common class name
          listItem.classList.add("list-items");
          listItem.style.cursor = "pointer";
          listItem.setAttribute("onclick", "displayNames('" + i + "')");
       }
     }
})


















