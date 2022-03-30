# An example project that uses the google closure library using a simple MVC structure to display some Yahoo Finance Stock Info. 

## Running in Debug Mode

A third party build tool called [Plovr](http://plovr.com/) is used to make running and compiling the code easier. To serve the code for development purposes (the example should run in compiled mode without using Plovr)

You'll  need to make sure java is configured properly

`java -jar build/plovr.jar serve plovr.json`

You'll  need to modify the plovr.json and change the mode from SIMPLE to RAW

Also change the HTML file so that it references the served files instead of the compiled version (**make sure you comment out the compiled version otherwise it will not work**), to do this remove the compiled script reference and add the following -

`<script type="text/javascript" src="http://localhost:9810/compile?id=stockmvc&mode=RAW"></script>`

Note: Right now the application has some annotation warnings, which can be fixed in order to allow for advance compiles 


## Compiling

To compile the code from the command line run Plovr like so -

`java -jar plovr.jar build plovr.json > build/stockmvc-all.js`

This will overwrite the file in that directory

## Credits

Inspired by TodoMVC application (http://www.scottlogic.co.uk/blog/chris/).
