/*
Comparison Operator:
Compare

1) == -> equal to (numbers are equal in value)
e.g:
  3 == 4; -> false
  2 == "2" -> true (because it only comapres value not data type)

2) === -> strict equal to (numbers are equal in value and data type)
e.g:
  3 === 4; false
  2 === "2"; false (because data type of 2 is number and data type of "2" is string)


3) != -> not equal
    4 != 5 -> true
    5 != 5 -> false

4) !== -> not equal value not equal type
     5 != 5 -> false
     5 != "5" -> true (because data type of 5 is number and data type of "5" is string)
     5 !== 5 -> false
     5 !== "5" -> true (because data type of 5 is number and data type of "5" is string)

5) > greater than
   3 > 2 -> true
   2 > 3 -> false

6) < Less than
   3 < 4 -> true
   4 < 3 -> false

7) >= Greater than or equal to
   3 >= 3 -> true
   2 >= 3 -> false

8) Less than or equal to <=
   2 <= 3 -> true
   2 <= 2 -> true
   3 <= 2 -> false

Logical Operators: 
1) And && -> all values must be true for true ans

(2<4 && 2<8) -> true
(2<4 && 3<2) -> false

2) Or || -> at least one value must be true for true ans

(2<4 || 3<2) -> true
(2>4 || 3<2) -> false

3) Not ! -> reverses the logical state of its operand

!(2<4) -> false
!(6==5) -> true
!(6==6) -> false
 */

