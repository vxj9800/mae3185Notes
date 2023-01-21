# Summary of Basic C/C++ Programming
This book assumes that students who want to learn mechatronics do know how to write a program in C/C++. Having the understanding of the basic concepts like preprocessor directives, data types, operators, conditional statements, loops, arrays, etc. will facilitate the understanding codes discussed in this book. Thus, this chapter provides a summary of such concepts. Majority of the material discussed in this chapter is derived from [C - Quick Guide](https://www.tutorialspoint.com/cprogramming/c_quick_guide.htm).

```{tableofcontents}
```

<!-- ## Program Structure
Before we study the basic building blocks of the C programming language, let us look at a bare minimum C program structure so that we can take it as a reference in the upcoming chapters.

### Hello World Example
A C program basically consists of the following parts,
- Preprocessor Commands
- Functions
- Variables
- Statements & Expressions
- Comments

Let us look at a simple code that would print the words "Hello World",
```c++
#include <stdio.h>

int main()
{
   /* my first program in C */
   printf("Hello, World!\n");
   
   return 0;
}
```
Let us take a look at the various parts of the above program,
- The first line of the program `#include <stdio.h>` is a preprocessor command, which tells a C compiler to include stdio.h file before going to actual compilation.
- The next line `int main()` is the main function where the program execution begins.
- The next line `/*...*/` will be ignored by the compiler and it has been put to add additional comments in the program. So such lines are called comments in the program.
- The next line `printf(...)` is another function available in C which causes the message "Hello, World!" to be displayed on the screen.
- The next line `return 0;` terminates the main() function and returns the value 0.

## Basic Syntax
You have seen the basic structure of a C program, so it will be easy to understand other basic building blocks of the C programming language.

### Tokens in C
A C program consists of various tokens and a token is either a keyword, an identifier, a constant, a string literal, or a symbol. For example, the following C statement consists of five tokens
```c++
    printf("Hello, World!\n");
```
The individual tokens are
```c++
printf
(
"Hello, World! \n"
)
;
```
### Semicolons
In a C program, the semicolon is a statement terminator. That is, each individual statement must be ended with a semicolon. It indicates the end of one logical entity.

Given below are two different statements
```c++
    printf("Hello, World!\n");
```
```c++
    return 0;
```

### Comments
Comments are like helping text in your C program and they are ignored by the compiler. They start with `/*` and terminate with the characters `*/` as shown below
```c++
    /* my first program in C */
```
You cannot have comments within comments and they do not occur within a string or character literals.

### Identifiers
A C identifier is a name used to identify a variable, function, or any other user-defined item. An identifier starts with a letter `A` to `Z`, `a` to `z`, or an underscore `_` followed by zero or more letters, underscores, and digits (`0` to `9`).

C does not allow punctuation characters such as `@`, `$`, and `%` within identifiers. C is a case-sensitive programming language. Thus, `Manpower` and `manpower` are two different identifiers in C. Here are some examples of acceptable identifiers,
```
mohd       zara    abc   move_name  a_123
myname50   _temp   j     a23b9      retVal
```

### Keywords
The following list shows the reserved words in C. These reserved words may not be used as constants or variables or any other identifier names.
```c++
auto        else        long        switch
break       enum        register    typedef
case        extern      return      union
char        float       short       unsigned
const       for         signed      void
continue    goto        sizeof      volatile
default     if          static      while
do          int         struct      double
```

### Whitespace in C
A line containing only whitespace, possibly with a comment, is known as a blank line, and a C compiler totally ignores it.

Whitespace is the term used in C to describe blanks, tabs, newline characters and comments. Whitespace separates one part of a statement from another and enables the compiler to identify where one element in a statement, such as int, ends and the next element begins. Therefore, in the following statement,
```c++
int age;
```
there must be at least one whitespace character (usually a space) between int and age for the compiler to be able to distinguish them. On the other hand, in the following statement,
```c++
fruit = apples + oranges;   // get the total fruit
```
no whitespace characters are necessary between `fruit` and `=`, or between `=` and `apples`, although you are free to include some if you wish to increase readability.

## Data Types
Data types in c refer to an extensive system used for declaring variables or functions of different types. The type of a variable determines how much space it occupies in storage and how the bit pattern stored is interpreted.

The types in C can be classified as follows,
- **Basic Types** are arithmetic types and are further classified into: (a) integer types and (b) floating-point types.
- **Enumerated types** are again arithmetic types and they are used to define variables that can only assign certain discrete integer values throughout the program.
- **The type void** indicates that no value is available.
- **Derived types** include (a) Pointer types, (b) Array types, (c) Structure types, (d) Union types and (e) Function types.
The array types and structure types are referred collectively as the aggregate types. The type of a function specifies the type of the function's return value. We will see the basic types in the following subsections, where as some of the other types will be covered in the upcoming chapters.

### Integer Types
The following table provides the details of standard integer types with their storage sizes and value ranges

```{table} Integer Data Types in C Language
|    **Type**      | **Storage size** |                    **Value range**                   |
|:----------------:|:----------------:|:----------------------------------------------------:|
|      `char`      |      1 byte      |                -128 to 127 or 0 to 255               |
|  `unsigned char` |      1 byte      |                       0 to 255                       |
|   `signed char`  |      1 byte      |                      -128 to 127                     |
|       `int`      |   2 or 4 bytes   | -32,768 to 32,767 or -2,147,483,648 to 2,147,483,647 |
|  `unsigned int`  |   2 or 4 bytes   |           0 to 65,535 or 0 to 4,294,967,295          |
|      `short`     |      2 bytes     |                   -32,768 to 32,767                  |
| `unsigned short` |      2 bytes     |                      0 to 65,535                     |
|      `long`      |      8 bytes     |      -9223372036854775808 to 9223372036854775807     |
|  `unsigned long` |      8 bytes     |               0 to 18446744073709551615              |
```
```{warning}
The storage size of some of the basic types can be different based on the machine.
```

### Floating-Point Types
The following table provide the details of standard floating-point types with storage sizes and value ranges and their precision
```{table} Floating-Point Data Types in C Language
|   **Type**    | **Storage size** |     **Value range**    |   **Precision**   |
|:-------------:|:----------------:|:----------------------:|:-----------------:|
|    `float`    |      4 byte      |   1.2E-38 to 3.4E+38   |  6 decimal places |
|    `double`   |      8 byte      |  2.3E-308 to 1.7E+308  | 15 decimal places |
| `long double` |      10 byte     | 3.4E-4932 to 1.1E+4932 | 19 decimal places |
```

## Variables
A variable is nothing but a name given to a storage area that our programs can manipulate. Each variable in C has a specific type, which determines the size and layout of the variable's memory; the range of values that can be stored within that memory; and the set of operations that can be applied to the variable.

The name of a variable can be composed of letters, digits, and the underscore character. It must begin with either a letter or an underscore. Upper and lowercase letters are distinct because C is case-sensitive.

Apart from the basic types discussed in the previous section, C programming language also allows to define various other types of variables, which we will cover in subsequent chapters like Enumeration, Pointer, Array, etc. For this chapter, let us study only basic variable types.

### Variable Definition in C
A variable definition tells the compiler where and how much storage to create for the variable. A variable definition specifies a data type and contains a list of one or more variables of that type as follows
```c++
type variable_list;
```
Here, `type` must be a valid C data type including `char`, `w_char`, `int`, `float`, `double`, `bool`, or any user-defined object; and `variable_list` may consist of one or more identifier names separated by commas. Some valid declarations are shown here,
```c++
int    i, j, k;
char   c, ch;
float  f, salary;
double d;
```
The line `int i, j, k;` declares and defines the variables `i`, `j`, and `k`; which instruct the compiler to create variables named `i`, `j` and `k` of type `int`.

Variables can be initialized (assigned an initial value) in their declaration. The initializer consists of an equal sign followed by a constant expression as follows,
```c++
type variable_name = value;
```
Some examples are,
```c++
int d = 3, f = 5; // definition and initializing d and f.
char x = 'x';     // the variable x has the value 'x'.
```

## Constants and Literals
Constants refer to fixed values that the program may not alter during its execution. These fixed values are also called *literals*.

Constants can be of any of the basic data types like an integer constant, a floating constant, a character constant, or a string literal.

Constants are treated just like regular variables except that their values cannot be modified after their definition.

### Integer Literals
An integer literal can be a binary, octal, hexadecimal or decimal constant. A prefix specifies the base or radix: `0b` or `0B` for binary, `0` for octal, `0x` or `0X` for hexadecimal, and nothing for decimal.

An integer literal can also have a suffix that is a combination of `U` and `L`, for `unsigned` and `long`, respectively. The suffix can be uppercase or lowercase and can be in any order.

Here are examples of integer literals representing same decimal number, 85,
```c++
85         /* decimal */
0125       /* octal */
0x55       /* hexadecimal */
85         /* int */
85u        /* unsigned int */
85l        /* long */
85ul       /* unsigned long */
```

### Floating-point Literals
A floating-point literal has an integer part, a decimal point, a fractional part, and an exponent part. You can represent floating point literals either in decimal form or exponential form.

While representing decimal form, you must include the decimal point, the exponent, or both; and while representing exponential form, you must include the integer part, the fractional part, or both. The signed exponent is introduced by `e` or `E`.

Here are some examples of floating-point literals,
```c++
3.14159       /* Legal */
314159E-5L    /* Legal */
510E          /* Illegal: incomplete exponent */
210f          /* Illegal: no decimal or exponent */
.e55          /* Illegal: missing integer or fraction */
```

### Character Literals
Character literals are enclosed in single quotes, e.g., `'x'` can be stored in a simple variable of `char` type.

A character literal can be a plain character (e.g., `'x'`), an escape sequence (e.g., `'\t'`), or a universal character (e.g., `'\u02C0'`). A list of basic character literals and their corresponding decimal values are provided at [https://www.asciitable.com/](https://www.asciitable.com/).

### String Literals
String literals or constants are enclosed in double quotes `""`. A string contains characters that are similar to character literals: plain characters, escape sequences, and universal characters.

You can break a long line into multiple lines using string literals and separating them using white spaces.

Here are some examples of string literals. All the three forms are identical strings.
```c++
"hello, dear"

"hello, \
dear"

"hello, " "d" "ear"
```

### Defining Constants
There are two simple ways in C to define constants
- Using `#define` preprocessor directive
- Using `const` keyword

Data defined by the `#define` macro definition are preprocessed, so that your entire code can use it. This can free up space and increase compilation times. However, `const` variables are considered variables, and not macro definitions.

The big advantage of `const` over `#define` is type checking. `#defines` can't be type checked, so this can cause problems when trying to determine the data type. If the variable is, instead, a constant then we can grab the type of the data that is stored in that constant variable.

Following code show the usage of both `#define` and `const`,
```c++
#include <stdio.h>

// macro definition
#define X 30

// global integer constant
const int Y = 10;

int main()
{
    // local ineteger constant
    const  int Z = 30;
    
    printf("Value of X: %d\n",X);
    printf("Value of Y: %d\n",Y);
    printf("Value of Z: %d\n",Z);

    return 0;
}
```

## Operators
An operator is a symbol that tells the compiler to perform specific mathematical or logical functions. C language is rich in built-in operators and provides the following types of operators
- Arithmetic Operators
- Relational Operators
- Logical Operators
- Bitwise Operators
- Assignment Operators

### Arithmetic Operators
The following table shows all the arithmetic operators supported by the C language. Assume variable A holds 10 and variable B holds 20 then,
```{table} Arithmetic Operators
| **Operator**   |                        **Description**                       | **Expression**   | **Result** |
|:--------------:|:-------------------------------------------------------------|:----------------:|:----------:|
|       `+`      |                      Adds two operands.                      |      `A + B`     |     30     |
|       `-`      |           Subtracts second operand from the first.           |      `A - B`     |     -10    |
|       `*`      |                   Multiplies both operands.                  |      `A * B`     |     200    |
|       `/`      | Divides numerator by de-numerator.                           |      `B / A`     |      2     |
|       `%`      | Modulus Operator and remainder of after an integer division. |      `B % A`     |      0     |
|      `++`      | Increment operator increases the integer value by one.       |       `A++`      |     11     |
|      `--`      | Decrement operator decreases the integer value by one.       |       `A--`      |      9     |
```

Following code shows the usage of all the arithmetic operators,
```c++
#include <stdio.h>

int main() {

    int A = 10;
    int B = 20;

    printf("A + B = %d\n", A + B );
    printf("A - B = %d\n", A - B );
    printf("A * B = %d\n", A * B );
    printf("A / B = %d\n", A / B );
    printf("A % B = %d\n", A % B );
    printf("++A = %d\n", ++A );
    printf("--A = %d\n", --A );

    return 0;
}
```

### Relational Operators
The following table shows all the relational operators supported by C. Assume variable A holds 10 and variable B holds 20 then,
```{table} Relational Operators
| **Operator** |                             **Description**                            | **Example** | **Result** |
|:------------:|:-----------------------------------------------------------------------|:-----------:|:----------:|
|     `==`     |                    Checks if both operands are equal.                  |   `A == B`  |   `false`  |
|     `!=`     |                  Checks if both operands are not equal.                |   `A != B`  |   `true`   |
|      `>`     |       Checks if first operand is greater than the second operand.      |   `A > B`   |   `false`  |
|      `<`     | Checks if first operand is less than the second operand.               |   `A < B`   |   `true`   |
|     `>=`     | Checks if first operand is greater than or equal to the second operand.|   `A >= B`  |   `false`  |
|     `<=`     | Checks if first operand is less than or equal to the second operand.   |   `A <= B`  |   `true`   |
```

Following code shows the usage of all the relational operators,
```c++
#include <stdio.h>
  
int main()
{
    int A = 10, B = 20;
    
    printf("A == B is %d", A == B);
    printf("A > B is %d", A > B);
    printf("A >= B is %d", A >= B);
    printf("A < B is %d", A < B);
    printf("A <= B is %d", A <= B);
    printf("A != B is %d", A != B);
  
    return 0;
}
```

### Logical Operators
Following table shows all the logical operators supported by C language. Assume variable A holds 1 and variable B holds 0, then
```{table} Logical Operators
| **Operator (Name)** |                       **Description**                       | **Example** | **Result** |
|:-------------------:|:------------------------------------------------------------|:-----------:|:----------:|
|      `&&` (AND)     | Returns true only if all the operands are true or non-zero. |   `A && B`  |   `false`  |
|     `\|\|` (OR)     | Returns true if either of the operands is true or non-zero. |  `A \|\| B` |   `true`   |
|      `!` (NOT)      |        Returns true if the operand is false or zero.        | `!(A && B)` |   `false`  |
```

Following code shows the usage of the logical operators,
```c++
#include <stdio.h>
  
int main()
{
    bool A = true, B = false;
    
    printf("A && B is %d", A && B);
    printf("A || B is %d", A || B);
    printf("!(A && B) is %d", !(A && B));
  
    return 0;
}
```

### Bitwise Operators
Bitwise operator works on bits and perform bit-by-bit operation. Since all the information stored in a computer is in binary form, the variable A holding 60 and variable B holding 13 are stored in binary format in the computer's memory. The binary representation of these numbers is as follows,
```c++
    A = 60 = 0b00111100
    B = 13 = 0b00001101
```
The following table lists the bitwise operators supported by C. Assuming variable A and variable B hold values discussed above then
```{table} Bitwise Operators
| **Operator (Name)** |                                             **Description**                                           | **Example** |     **Result**     |
|:-------------------:|:------------------------------------------------------------------------------------------------------|:-----------:|:------------------:|
|      `&` (AND)      | Similar to logical AND on every bit of the two operands.                                              |   `A & B`   |  `12 = 0b00001100` |
|      `\|` (OR)      | Similar to logical OR on every bit of the two operands.                                               |   `A \| B`  |  `61 = 0b00111101` |
|      `^` (XOR)      | Operates on every bit of the two operands. The result of XOR is 1 if the two bits are different.      |   `A ^ B`   |   `49 = 00110001`  |
|      `~` (NOT)      | Inverts all bits of the operand.                                                                      |     `~A`    | `-61 = 0b11000011` |
|  `<<` (Left Shift)  | Left shifts the bits of the first operand, the second operand decides the number of places to shift.  |   `A << 2`  | `240 = 0b11110000` |
|  `>>` (Right Shift) | Right shifts the bits of the first operand, the second operand decides the number of places to shift. |   `A >> 2`  |  `15 = 0b00001111` |
```

Following code shows the usage of the bitwise operators,
```c++
#include <stdio.h>
  
int main()
{
    int A = 60; // 0b00111100
    int B = 13; // 0b00001101
    
    printf("A & B is %d", A & B);
    printf("A | B is %d", A | B);
    printf("A ^ B is %d", A ^ B);
    printf("~A is %d", ~A);
    printf("A << 2 is %d", A << 2);
    printf("A >> 2 is %d", A >> 2);
  
    return 0;
}
```

### Assignment Operators
There is one basic assignment operator which assigns the value of the expression on the right hand side to the variable on the left hand side. Rest of the assignment operators are similar to the operators discussed previously but are designed for a very specific case, operate on the operand on the left hand side and save the result in the same operand. Assume variable A holds 2, variable B holds 3 and variable C holds 6, then
```{table} Assignment Operators
| **Operator** |                                                     **Description**                                                     | **Example** |    **Result**   |
|:------------:|:-----------------------------------------------------------------------------------------------------------------------:|:-----------:|:---------------:|
|       `=`      | Assigns values from right side operands to left side operand.                                                           |  `C = A + B`  |  `C = 2 + 3 = 5`  |
|      `+=`      | Adds the right operand to the left operand and assign the result to the left operand.                                   |    `C += A`   |  `C = C + A = 8`  |
|      `-=`      | Subtracts the right operand from the left operand and assigns the result to the left operand.                           |    `C -= A`   |  `C = C - A = 4`  |
|      `*=`      | Multiplies the right operand with the left operand and assigns the result to the left operand.                          |    `C *= A`   |  `C = C * A = 12` |
|      `/=`      | Divides the left operand with the right operand and assigns the result to the left operand.                             |    `C /= A`   |  `C = C / A = 3`  |
|      `%=`      | Takes modulus using two operands and assigns the result to the left operand.                                            |    `C %= A`   |  `C = C % A = 0`  |
|      `<<=`     | Left shift the left operand by the number of bits defined by right operand and assigns the result to the left operand.  |   `C <<= A`   | `C = C << A = 24` |
|      `>>=`     | Right shift the left operand by the number of bits defined by right operand and assigns the result to the left operand. |   `C >>= A`   |  `C = C >> A = 1` |
|      `&=`      | Bitwise AND the two operands and assign the result to the left operand.                                                 |    `C &= B`   |  `C = C & B = 2`  |
|      `^=`      | Bitwise XOR the two operands and assign the result to the left operand.                                                 |    `C ^= B`   |  `C = C ^ B = 5`  |
|      `\|=`     | Bitwise OR the two operands and assign the result to the left operand.                                                  |   `C \|= B`   |  `C = C \| B = 7` |
```

Following code shows the usage of the assignment operators
```c++
#include <stdio.h>

int main()
{
    int a = 10;
    printf("Value of a is %d\n", a);
    a += 10;
    printf("Value of a is %d\n", a);
    a -= 10;
    printf("Value of a is %d\n", a);
    a *= 10;
    printf("Value of a is %d\n", a);
    a /= 10;
    printf("Value of a is %d\n", a);

    return 0;
}
```

### Operator Precedence
Operator precedence determines the grouping of terms in an expression and decides how an expression is evaluated. Certain operators have higher precedence than others; for example, the multiplication operator has a higher precedence than the addition operator.
For example, `x = 7 + 3 * 2;` here, `x` is assigned `13`, not `20` because operator `*` has a higher precedence than `+`, so the multiplication `3 * 2` happens first and then `7` is added into the result.
Following table shows the operator precedence order where, operators with the highest precedence appear at the top of the table, and those with the lowest appear at the bottom. Within an expression, higher precedence operators will be evaluated first.
```{table} Operator Precedence Order
|  **Category**  |            **Operator**           | **Associativity** |
|:--------------:|:---------------------------------:|:-----------------:|
|     Postfix    |         `()` `[]` `->` `.` `++` `--`         |   Left to right   |
|      Unary     |  `+` `-` `!` `~` `++` `--` `(type)` `*` `&` `sizeof`  |   Right to left   |
| Multiplicative |               `*` `/` `%`               |   Left to right   |
|    Additive    |                `+` `-`                |   Left to right   |
|      Shift     |               `<<` `>>`               |   Left to right   |
|   Relational   |             `<` `<=` `>` `>=`             |   Left to right   |
|    Equality    |               `==` `!=`               |   Left to right   |
|   Bitwise AND  |                 `&`                 |   Left to right   |
|   Bitwise XOR  |                 `^`                 |   Left to right   |
|   Bitwise OR   |                 `\|`                |   Left to right   |
|   Logical AND  |                 `&&`                |   Left to right   |
|   Logical OR   |                `\|\|`               |   Left to right   |
|   Conditional  |                 `?` `:`                |   Right to left   |
|   Assignment   | `=` `+=` `-=` `*=` `/=` `%=` `>>=` `<<=` `&=` `^=` `\|=` |   Right to left   |
|      Comma     |                 `,`                 |   Left to right   |
```

## Decision Making
Decision making structures require that the programmer specifies one or more conditions to be evaluated or tested by the program, along with a statement or statements to be executed if the condition is determined to be `true`, and optionally, other statements to be executed if the condition is determined to be `false`. Any non-zero and non-null values are assumed as `true`, and zero or `null` values are assumed as `false` values.
C programming language provides the following tow main types of decision making statements.
- `if`-`else` statement
- `switch` statement

### `if`-`else` statement
The `if`-`else` statement allows the code inside `if` block to be executed if the given condition is `true`, otherwise the code inside `else` block is executed.

Following is the syntax of an `if`-`else` statement,
```c++
if(condition)
{
    // execute statement of if block when
    // condition is true
}
else
{
    // execute statement of else block when
    // condition is false
}
```

Following is an example that uses `if`-`else` statement to decide if a variable holds value smaller than 20 or not.
```c++
#include <stdio.h>

int main()
{
    int a = 10;
    if (a < 20)
    {
        printf("Given value is less than 20.\n");
    }
    else
    {
        printf("Given value is greater than 20.\n");
    }
    return 0;
}
```

### The `?` `:` operators
Operators `?` and `:` are known as conditional operators which can be used to replace `if`-`else` statements. It has the following general form
```c++
Exp1 ? Exp2 : Exp3;
```
Where `Exp1`, `Exp2`, and `Exp3` are expressions. Notice the use and placement of the colon. The result of line above is computed by evaluating `Exp1`. If it is `true`, then `Exp2` is evaluated and its value becomes the result. However, if `Exp1` is `false`, then `Exp3` is evaluated and its value becomes the result.

Following is an example that uses `?` `:` operators to decide if a variable holds value smaller than 20 or not.
```c++
#include <stdio.h>

int main()
{
    int a = 10;
    printf("Given value is %s than 20.\n", a < 20 ? "less" : "greater");
    return 0;
}
```

### `switch` statement
A `switch` statement allows a variable to be tested for equality against a list of values. Each value is called a `case`, and the variable being switched on is checked for each switch case. Following is the syntax for a `switch` statement,
```c++
switch(variable or expression) {
   case value1 :
      statement(s);
      break; /* optional */
   case value2 :
      statement(s);
      break; /* optional */
   /* you can have any number of case statements */
   default : /* Optional */
   statement(s);
}
```
`break` in the syntax above is a keyword that is used to stop the execution inside a switch block. It helps to terminate the switch block and break out of it. And, the `default` keyword is used to specify the set of statements to execute if there is no case match. Following code shows the usage of `switch` statement.
```c++
#include <stdio.h>
 
int main () {

   char grade = 'B';
   switch(grade) {
        case 'A' :
            printf("Excellent!\n" );
            break;
        case 'B' :
            printf("Well done!\n" );
            break;
        case 'C' :
            printf("Good!\n" );
            break;
        case 'D' :
            printf("You passed!\n" );
            break;
        case 'F' :
            printf("Better try again!\n" );
            break;
        default :
            printf("Invalid grade.\n" );
   }
   printf("Your grade is  %c\n", grade );
 
   return 0;
}
```

## Loops
Loops in programming are used to repeat a block of code until the specified condition is met. A loop statement allows programmers to execute a statement or group of statements multiple times without repetition of code.
There are mainly two types of loops in C Programming:
1. **Entry Controlled loops** are ones where the test condition is checked before entering the main body of the loop. `for` loop and `while` loop are Entry Controlled loops.
2. **Exit Controlled loops** are ones where the test condition is evaluated at the end of the loop body. The loop body will execute at least once, irrespective of whether the condition is `true` or `false`. `do`-`while` loop is an Exit Controlled loop.

### `for` Loop
`for` loop in C programming is a repetition control structure that allows programmers to write a loop that will be executed a specific number of times. `for` loop enables programmers to perform n number of steps together in a single line. Following is the syntax of a `for` loop.
```c++
for (initialization expression; condition expression; update expression)
{
    //
    // body of for loop
    //
}
```
In `for` loop, a loop variable is used to control the loop. First, the loop variable is initialized with some value, then the condition is checked. If the statement is `true` then control will move to the body and the body of the `for` loop will be executed. The update expression is executed to update the value of the loop variable. Now the condition is checked again with the new value of the loop variable. These steps will be repeated till the condition expression results to `false`. Following code shows the usage of a `for` loop.
```c++
#include <stdio.h>

int main()
{
    int i = 0;
    for (i = 1; i <= 10; i++)
    {
        printf( "Hello World\n");  
    }
    return 0;
}
```

### `while` Loop
A `while` loop does not depend upon the number of iterations. In `for` loop, the number of iterations were known in advance but in the `while` loop, the execution is terminated on the basis of the condition expression. If the condition results in a `false` then the `while` loop will break, otherwise the `while` loop body is executed. Following is the syntax of a `while` loop.
```c++
while (condition expression)
{
    // body of the while loop
}
```
Following code shows the use of a `while` loop.
```c++
#include <stdio.h>

int main()
{
    int i = 2;
    while(i < 10)
    {
        printf( "Hello World\n");
        i++;
    }

    return 0;
}
```

### `do`-`while` Loop
The `do`-`while` loop is similar to a `while` loop but the only difference is that the `do`-`while` loop checks the condition at the end of the body. In `do`-`while` loop, the loop body will execute at least once irrespective of the condition result. Following is the syntax of a `do`-`while` loop.
```c++
do
{
    // body of do-while loop
} while (condition expression);
```
Following code shows the use of a `do`-`while` loop.
```c++
#include <stdio.h>

int main()
{
    int i = 2;
    do
    {
        printf( "Hello World\n");
        i++;
    } while (i < 1);

    return 0;
}
```

### Loop Control Statements
Loop control statements in C programming are used to change execution from its normal sequence. C language supports the following control statements,
- [`break;`](https://www.geeksforgeeks.org/cpp-break-statement/) terminates the loop or `switch` statement and transfers execution to the statement immediately following the loop or `switch`.
- [`continue;`](https://www.geeksforgeeks.org/continue-statement-cpp/) causes the loop to skip the remainder of its body and immediately retest its condition prior to reiterating.
- [`goto`](https://www.geeksforgeeks.org/goto-statement-in-c-cpp/) transfers control to the labeled statement.

### Infinite Loop
A loop becomes an infinite loop if a condition never becomes `false`. The `for` loop is traditionally used for this purpose. Since the three expressions that form the `for` loop are not required, you can make an endless loop by leaving the conditional expression empty.
```c++
#include <stdio.h>
 
int main () {

   for( ; ; )
   {
      printf("This loop will run forever.\n");
   }

   return 0;
}
```
When the conditional expression is absent, it is assumed to be `true`. You can achieve the same result with `while (true)`.

## Functions
A function is a group of statements that together perform a task. Every C program has at least one function, which is `main()`, and all the most trivial programs can define additional functions.
You can divide up your code into separate functions. How you divide up your code among different functions is up to you, but logically the division is such that each function performs a specific task.
A function declaration tells the compiler about a function's name, return type, and parameters. A function definition provides the actual body of the function.
The C standard library provides numerous built-in functions that your program can call. For example, strcat() to concatenate two strings, memcpy() to copy one memory location to another location, and many more functions.
A function can also be referred as a method or a sub-routine or a procedure, etc.

### Defining a Function
The general form of a function definition in C programming language is as follows,
```c++
return_type function_name( parameter_list )
{
   // body of the function
}
```
A function definition in C programming consists of a *function header* and a *function body*. Here are all the parts of a function,
- **Return Type:** A function may return a value. The `return_type` is the data type of the value the function returns. Some functions perform the desired operations without returning a value. In this case, the `return_type` is the keyword `void`.
- **Function Name:** This is the actual name of the function. The function name and the parameter list together constitute the function signature.
- **Parameters:** A parameter is like a placeholder. When a function is invoked, you pass a value to the parameter. The *parameter_list* refers to the type, order, and number of the parameters of a function. Parameters are optional, i.e. a function may contain no parameters.
- **Function Body:** The function body contains a collection of statements that define what the function does.
Given below is a function definition for a function called `max()`. This function takes two parameters `num1` and `num2` of `int` type and returns the maximum value between the two,
```c++
int max(int num1, int num2)
{
    return num1 > num2 ? num1 : num2;
}
```
Generally, a function definition must be provided before a function is called. However, this makes a code less readable. This problem can be resolved by using a function *declaration*. A function *declaration* tells the compiler about a function name and how to call the function. The actual body of the function can be defined separately.
A function declaration has the following parts,
```c++
return_type function_name( parameter_list );
```
For the above defined function max(), the function declaration is as follows,
```c++
int max(int num1, int num2);
```
Parameter names are not important in function declaration only their type is required, so the following is also a valid declaration,
```c++
int max(int, int);
```
Function declarations are also very helpful when you want to define a function in one source file and call that function in another file. In such case, you should declare the function at the top of the file calling the function.

### Calling a Function
While creating a C function, you give a definition of what the function has to do. To use a function, you will have to call that function to perform the defined task.
When a program calls a function, the program control is transferred to the called function. A called function performs a defined task and when its return statement is executed or when its function-ending closing brace is reached, it returns the program control back to the line from where the function was called.
To call a function, you simply need to pass the required parameters along with the function name, and if the function returns a value, then you can store the returned value. For example,
```c++
#include <stdio.h>
 
/* function declaration */
int max(int num1, int num2);
 
int main () {

    int a = 100;
    int b = 200;
    int ret;

    ret = max(a, b);

    printf( "Max value is : %d\n", ret );

    return 0;
}
 
/* function definition */
int max(int num1, int num2)
{
    return num1 > num2 ? num1 : num2;
}
```

## Scope Rules
Each identifier/variable that appears in a C program is visible (i.e. may be used) only in some portion of the source code called its *scope*. Following two types of C programming scopes will be useful in this book,
- Block scope
- File scope

### Block scope
The scope of any identifier declared between two consistent braces (`{}`) or as a function parameter, begins at the point of declaration and ends at the end of the block, i.e. at the closing brace `}`, or at the end of the function body.
```c++
#include <stdio.h>

void f(int n)                   // scope of the function parameter 'n' begins
{                               // the body of the function begins
    ++n;                        // 'n' is in scope and refers to the function parameter
    // int n = 2;               // error: cannot redeclare identifier in the same scope
    for(int n = 0; n<10; ++n)
    {                           // scope of loop-local 'n' begins
        printf("%d\n", n);      // prints 0 1 2 3 4 5 6 7 8 9
    }                           // scope of the loop-local 'n' ends
    // the function parameter 'n' is back in scope
    printf("%d\n", n);          // prints the value of the parameter
} // scope of function parameter 'n' ends

int main ()
{
  f(5);
  // int a = n; // Error: name 'n' is not in scope

  return 0;
}
```

### File scope
The scope of any identifier declared outside of any block or function parameter list begins at the point of declaration and ends at the end of the [translation unit](https://en.wikipedia.org/wiki/Translation_unit_(programming)). Such variables are also known as *global* variables.
```c++
#include <stdio.h>

int g;          // Global variable 'g' is declared
 
int main()
{
  int a = 10, b = 20;     // 'a' and 'b' has local scope
  g = a + b;
 
  printf ("value of a = %d, b = %d and g = %d\n", a, b, g); // 'g' is accessible since it has file scope.
 
  return 0;
}
```

### Nested scopes
If two different entities named by the same identifier are in scope at the same time, the scopes are nested (no other form of scope overlap is allowed), and the value that appears in the inner scope hides the value that appears in the outer scope,
```c++
#include <stdio.h>

int main()
{
    int a = 1; // the block scope of the name a begins here; hides file-scope a
    {
        int a = 2;          // the scope of the inner a begins here, outer a is hidden
        printf("%d\n", a);  // inner a is in scope, prints 2
    }                       // the block scope of the inner a ends here
    printf("%d\n", a);

    return 0;
}
```

### Initializing Local and Global Variables
When a local variable is defined, it is not initialized by the system, you must initialize it yourself. Global variables are initialized automatically to zero or `null` by the system. It is a good programming practice to initialize variables properly, otherwise your program may produce unexpected results, because uninitialized variables will take some garbage value already available at their memory location.

## Arrays

## Pointers
<!- - Discuss passing pointers to a function - ->

## Strings

## Preprocessors

## Header Files

## Type Casting -->