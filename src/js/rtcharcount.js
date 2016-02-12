/*! RTCharCount  | (c) 2016 Matt Emrick| MIT license */
$.fn.rtcharcount = function (opts) {
    return new RTCharacterCountField(this[0], opts);
};

var RTCharacterCountField = function (element, opts) {
    this.element = element;
    this.charCount = 0;
    this.valid = false;
    this.counter_block = null;
    this.options = $.extend(this.defaults, opts);
    this.max = this.options.max;
    this.min = this.options.min;
    if (typeof jQuery !== 'function') {
        console.log('this currently depends on jquery');
        return;
    }
    if(typeof element=="undefined"){
        return;
    }
    this.__init();
};
RTCharacterCountField.prototype = {
    defaults: {
        min: 0,
        max: 100
    },
    __prepareHelpText: function () {
        var message = [this.max + ' Characters'];
        if (this.min > 0) {
            message.unshift('between ' + this.min + ' and ');
        }
        else {
            message.unshift('no more than ');
        }
        message.unshift('Please enter ');
        return message.join('');
    },
    __append_counterElement: function () {
        var element = document.createElement('div');
        var counter = document.createElement('P');
        element.classList.add('rt-form-count-element');
        counter.classList.add('rt-form-count-element__counter');
        var count_element = document.createElement('span');
        this.count_element = count_element;
        this.count_element.innerHTML = this.charCount;
        var text = document.createTextNode('/' + this.max);
        var help_text = document.createElement("p");
        help_text.classList.add('rt-form-count-element__help-text');
        help_text.innerHTML = this.__prepareHelpText();
        element.appendChild(help_text);
        counter.appendChild(count_element);
        counter.appendChild(text);
        element.appendChild(counter);
        var tmp = this.input.parentNode.appendChild(element);
        this.counter_block = tmp;
    },
    __updateCharacterCount: function () {
        this.charCount = this.input.value.length;
        this.count_element.innerHTML = this.charCount;
    },
    __updateClass: function (RTCCF) {
        console.log('updating class');
        var self = RTCCF;
        if (self.is_valid) {
            self.counter_block.classList.add('valid');
            self.counter_block.classList.remove('invalid');
            return;
        }
        self.counter_block.classList.add('invalid');
        self.counter_block.classList.remove('valid');
        return;
    },
    __attachListeners: function () {
        var self = this;
        $(this.input).on('keyup keydown', function () {
            self.__updateCharacterCount();
            self.__checkValid(self.__updateClass(self));
        });
    },
    __checkValid: function (callback) {
        console.log('checking value');
        this.is_valid = this.charCount <= this.max && this.charCount > this.min;
        if (this.charCount > this.max + 5) {
            var value = this.input.value;
            var stripped = value.substring(0, this.max + 5);
            this.input.value = stripped;
            this.__updateCharacterCount();
        }
        if (typeof callback === 'function') {
            callback();
        }
        return this.is_valid;
    },
    __init: function () {
        this.input = this.element.querySelectorAll('.form-control')[0];
        this.__append_counterElement();
        this.__attachListeners();
        this.__updateCharacterCount();
        this.__checkValid();
        this.__updateClass(this);
    }
};
