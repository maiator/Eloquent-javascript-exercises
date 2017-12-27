var hTag = "";
for (i = 0; i < 7; i++) {
    console.log(hTag += "#"); 
    
    /* 
    this will print hTag 7 times. 
    The first time it will print null character + the # to produce #.
    Then it will go to a new line to produce ## and so on until
    it creates ####### on the seventh line.
    */
}
