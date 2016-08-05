# rt-char-count
JS Character Counter

Despite Version history, this is in beta.  The first stable release will be version 1.0.0  

### Dependencies
* jQuery
* SASS build process

## Installation



### Pull In Source

``` bash 

$ npm install rt-char-count --save-dev

```



### Include Script in Gulp Build
in gulpfile:


``` javascript 

 mix.scripts([
       // [...] 
         './node_modules/rt-char-count/dist/rt-char-count.min.js',
       // [...] 
    ],[dest file]);

```


### Add Styles

#### Option 1- Integrate With Build (Requires Bootstrap Sass)

from your import stylesheet:

``` sass 

@import "node_modules/rt-char-count/src/scss/rt-char-count";

```
 
#### Option 2 - Default Stylesheet  - Include in Build
``` sass 

@import "node_modules/rt-char-count/dist/rt-char-count";

```
#### Option 3 - Default Stylesheet  - Direct Link

``` html 

<link rel="stylesheet" href="/node_modules/rt-char-count/dist/rt-char-count.css">

```
   
   
 

 ## Usage
 Use jQuery to select an element wrapping the field you would like to limit.  Add your min and max as options.  Make sure to add the class "js--char-count-input" to the input that is to be limited:
 
 
 ``` html 
 
	<div class="form-group" id="form_group_description">
		<label for="description">Description:</label>
		<input type="text" class="js--char-count-input">
	</div>
 
 ```
 
 
 ``` javascript 
 
	$('#form_group_description').rtcharcount({
		min:0,
		max:170
	});
 
 ```
 
 
 
 
