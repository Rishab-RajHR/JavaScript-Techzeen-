/*
Break: The control exits from the loop
Continue: skip particular iteration of the loop but control remain within the loop
Nested Loop: A loop presented inside the another loop
*/

// for(let i = 0; i <= 10; i++)
// {
//     if(i == 5)
//     {
//         break;
//     }
//     document.write("The value is: " + i + "<br>");
// }


// for(let i = 0; i <= 10; i++)
// {
//     if(i == 5)
//     {
//         continue;
//     }
//     document.write("The value is: " + i + "<br>");
// }



// Nested Loops : Loop inside Loops

for(let i=0; i<=5; i++)
{
    document.write("The Value of I is: " + i + "<br>");

    for(let j=0; j<2; j++)
    {
         document.write("The Value of J is: " + j + "<br>");
    }
}