# rt-char-count
JS Character Counter

### Dependencies
* jQuery
* SASS build process

## Installation



### Pull In Source

``` bash 

$ npm install rt-char-count

```



### Include Script in Gulp Build
in gulpfile:


``` javascript 

 mix.scripts([
       // [...] 
         './node_modules/rt-char-count/src/js/rtcharcount.js',
       // [...] 
    ],[dest file]);

```


### Add base styles
 from your import stylesheet:
 
 ``` sass 
 
 @import "node_modules/rt-char-count/src/scss/rt-cahracter-count";
 
 ```
 

 ## Usage
 Use jQuery to select an element wrapping the field you would like to limit.  Add your min and max as options:
 
 
 ``` html 
 
	<div class="form-group" id="form_group_description">
		<label for="description">Description:</label>
		<input type="text">
	</div>
 
 ```
 
 
 ``` javascript 
 
	$('#form_group_description').rtcharcount({
		min:0,
		max:170
	});
 
 ```
 
 
 
 
