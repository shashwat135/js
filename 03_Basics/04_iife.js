//iife -> immediately invoked function expression 

//()();

(function dbConnect(){
    console.log("DB Connected")
})();                           // semicolon is required here as many times js fails to end the context 

((name) => {
    console.log(`DB ConnectedTwo ${name}`)
})("Shashwat");


