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
         './node_modules/rt-char-count/dist/js/rt-char-count.min.js',
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
 
 
 
 
