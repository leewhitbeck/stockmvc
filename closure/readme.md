# An example of using google closure to display some Yahoo Finance Stock Info. This was a test project to experiment with wiring up an MVC structured google closure app.


## Running

A third party build tool called [Plovr](http://plovr.com/) is used to make running and compiling the code easier. To serve the code for development purposes (the example should run in compiled mode without using Plovr), first download the latest stable version from the [Plovr Google Code project](http://code.google.com/p/plovr/downloads/list) (at the time of writing plovr-eba786b34df9.jar). Copy the file into the build folder, rename it plovr.jar and run the following command from this folder -

`java -jar build/plovr.jar serve plovr.json`

You'll  need to modify the plovr.json and chanage the mode from SIMPLE to RAW

You'll also need to change the HTML file so that it references the served files instead of the compiled version (**make sure you comment out the compiled version otherwise it will not work**), to do this remove the compiled script reference and add the following -

`<script type="text/javascript" src="http://localhost:9810/compile?id=stockmvc&mode=RAW"></script>`

Note: Right now the application has some annotation warning, which can be fixed in order to allow for advance compiles 



## Compiling

To compile the code from the command line run Plovr like so -

`java -jar build/plovr.jar build plovr.json > build/stockmvc-all.js`

This will overwrite the file in that directory


## Credits

Inspired by TodoMVC application (http://www.scottlogic.co.uk/blog/chris/).
