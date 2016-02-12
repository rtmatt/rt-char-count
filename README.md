# rt-char-count
JS Character Counter

## Laravel Integration	

### Pull In Source

From the root of your project:


``` bash 

$ git clone git@github.com:rtmatt/rt-char-count.git resouces/assets/vendor/rt-char-count

```



### Include Script in Gulp Build
in gulpfile:


``` javascript 

 mix.scripts([
       // [...] 
        './resources/assets/vendor/rt-char-count/src/js/rtcharcount.js',
       // [...] 
    ],[dest file]);

```


### Add base styles
 from your import stylesheet:
 
 ``` sass 
 
 @import "/resources/assets/vendor/rt-char-count/src/scss/rt-cahracter-count";
 
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
 
 
 
 
