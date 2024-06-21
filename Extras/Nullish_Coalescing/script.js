function calc(price, taxes, desc) {
    // taxes = taxes || .05
    //If taxes has a "truthy" value (i.e., a value that is not false, 0, "", null, undefined, or NaN), the expression evaluates to taxes.
    // If taxes is "falsy" (i.e., it has one of the values mentioned above), the expression evaluates to .05.
    taxes = taxes ?? 0.05
    // Nullish Coalescing Operator (??):
    // The ?? operator returns the right-hand operand when the left-hand operand is null or undefined. Otherwise, it returns the left-hand operand.
    desc = desc || "default item"
    const total = price * (1 + taxes);
    console.log(`${desc} With tax : $${total}`);
}

calc(100, 0.07, "My item")
calc(100, 0, "My other item") //here 5% is added although we gave tax 0 as 0 is false value in js
calc(100, undefined, undefined)