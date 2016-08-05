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
    if (typeof element == "undefined") {
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
    __createCurrentCountElement: function () {
        var currentCountElement = document.createElement('span');
        this.currentCountElement = currentCountElement;
        this.currentCountElement.innerHTML = this.charCount;
        return currentCountElement;
    },
    __createCounterDisplayElement: function () {
        var countDisplayElement = document.createElement('P');
        countDisplayElement.classList.add('rt-form-count-element__counter');

        var currentCountElement = this.__createCurrentCountElement();
        countDisplayElement.appendChild(currentCountElement);

        var counterStaticText = document.createTextNode('/' + this.max);
        countDisplayElement.appendChild(counterStaticText);

        return countDisplayElement;
    },
    __createHelpTextElement: function () {
        var help_text = document.createElement("p");
        help_text.classList.add('rt-form-count-element__help-text');
        help_text.innerHTML = this.__prepareHelpText();
        return help_text;
    },
    __appendComponentElement: function () {
        var component = document.createElement('div');
        component.classList.add('rt-form-count-element');

        var help_text = this.__createHelpTextElement();
        component.appendChild(help_text);

        var countDisplayElement = this.__createCounterDisplayElement();
        component.appendChild(countDisplayElement);

        this.counter_block = this.input.parentNode.appendChild(component);
    },
    __updateCharacterCount: function () {
        this.charCount = this.input.value.length;
        this.currentCountElement.innerHTML = this.charCount;
    },
    __updateClass: function (RTCCF) {
        console.log('update lass');
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
            self.__checkValid(self.__updateClass);
        });
    },
    __checkValid: function (callback) {
        console.log('check valid');
        var self = this;
        this.is_valid = this.charCount <= this.max && this.charCount > this.min;
        function callCallback() {
            if (typeof callback === 'function') {
                callback(self);
            }
        }

        if (this.charCount > this.max + 5) {
            var value = this.input.value;
            var stripped = value.substring(0, this.max + 5);
            this.input.value = stripped;
            this.__updateCharacterCount();
            callCallback();
        }
        else {
            callCallback();
        }

        return this.is_valid;
    },
    __init: function () {
        this.input = this.element.querySelectorAll('.js--char-count-input')[0];
        this.__appendComponentElement();
        this.__attachListeners();
        this.__updateCharacterCount();
        this.__checkValid();
        this.__updateClass(this);
    }
};
