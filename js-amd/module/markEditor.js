define(function (require, exports, module) {/**
 * ------------------------------------------------------------
 * MarkEditor 编辑器
 * @author   sensen(rainforest92@126.com)
 * ------------------------------------------------------------
 */

'use strict';

var Component = require('../base/component.js');
var template = require('text!./markEditor.html');
var _ = require('../base/util.js');

var marked = require('marked');

/**
 * @class MarkEditor
 * @extend Component
 * @param {object}                  options.data                    绑定属性 | Binding Properties
 * @param {string=''}               options.data.content            编辑器内容
 * @param {boolean=false}           options.data.readonly           是否只读
 * @param {boolean=false}           options.data.disabled           是否禁用
 * @param {boolean=true}            options.data.visible            是否显示
 * @param {string=''}               options.data.class              补充class
 */
var MarkEditor = Component.extend({
    name: 'markEditor',
    template: template,
    /**
     * @protected
     */
    config: function() {
        _.extend(this.data, {
            content: ''
        });
        this.supr();
    },
    computed: {
        html: function() {
            return marked(this.data.content);
        }
    },
    bold: function() {
        if(this.data.readonly || this.data.disabled)
            return;

        var rangeData = this.getCursorPosition();
        rangeData.text = '**' + rangeData.text + '**';
        this.setCursorPosition(rangeData);
        this.data.content = this.$refs.textarea.value;
        this.$update();
    },
    italic: function() {
        if(this.data.readonly || this.data.disabled)
            return;

        var rangeData = this.getCursorPosition();
        rangeData.text = '*' + rangeData.text + '*';
        this.setCursorPosition(rangeData);
        this.data.content = this.$refs.textarea.value;
        this.$update();
    },
    quote: function() {
        if(this.data.readonly || this.data.disabled)
            return;

        var rangeData = this.getCursorPosition();
        var value = this.$refs.textarea.value;
        for(var i = rangeData.start - 1; i > 0; i--)
            if(value[i] == '\n') {
                i++;
                break;
            }
        rangeData.start = i;
        rangeData.text = '> ';
        rangeData.end = rangeData.start;
        this.setCursorPosition(rangeData);
        this.data.content = this.$refs.textarea.value;
        this.$update();
    },
    ul: function() {
        if(this.data.readonly || this.data.disabled)
            return;

        var rangeData = this.getCursorPosition();
        var value = this.$refs.textarea.value;
        for(var i = rangeData.start - 1; i > 0; i--)
            if(value[i] == '\n') {
                i++;
                break;
            }
        rangeData.start = i;
        rangeData.text = '- ';
        rangeData.end = rangeData.start;
        this.setCursorPosition(rangeData);
        this.data.content = this.$refs.textarea.value;
        this.$update();
    },
    ol: function() {
        if(this.data.readonly || this.data.disabled)
            return;

        var rangeData = this.getCursorPosition();
        var value = this.$refs.textarea.value;
        for(var i = rangeData.start - 1; i > 0; i--)
            if(value[i] == '\n') {
                i++;
                break;
            }
        rangeData.start = i;
        rangeData.text = '1. ';
        rangeData.end = rangeData.start;
        this.setCursorPosition(rangeData);
        this.data.content = this.$refs.textarea.value;
        this.$update();
    },
    link: function() {
        if(this.data.readonly || this.data.disabled)
            return;

        var rangeData = this.getCursorPosition();
        rangeData.text = '[' + rangeData.text + '](http://)';
        this.setCursorPosition(rangeData);
        this.data.content = this.$refs.textarea.value;
        this.$update();
    },
    image: function() {
        if(this.data.readonly || this.data.disabled)
            return;

        this.$refs.uploader.upload();
    },
    latex: function() {
        if(this.data.readonly || this.data.disabled)
            return;
        
        var rangeData = this.getCursorPosition();
        rangeData.text = '$$a^2 + b^2 = c^2$$';
        this.setCursorPosition(rangeData);
        this.data.content = this.$refs.textarea.value;
        this.$update();
    },
    uploaderSuccess: function(data) {
        var rangeData = this.getCursorPosition();
        rangeData.text = '\n![](' + data.result + ')';
        this.setCursorPosition(rangeData);
        this.data.content = this.$refs.textarea.value;
        this.$update();
    },
    uploaderError: function(e) {
        Notify.error(e);
    },
    getCursorPosition: function() {
        var textarea = this.$refs.textarea;

        var rangeData = {text: '', start: 0, end: 0};
        textarea.focus();

        if (textarea.setSelectionRange) { // W3C
            rangeData.start = textarea.selectionStart;
            rangeData.end = textarea.selectionEnd;
            rangeData.text = (rangeData.start != rangeData.end) ? textarea.value.substring(rangeData.start, rangeData.end): '';
        } else if (document.selection) { // IE
            var i,
                oS = document.selection.createRange(),
                // Don't: oR = textarea.createTextRange()
                oR = document.body.createTextRange();
            oR.moveToElementText(textarea);

            rangeData.text = oS.text;
            rangeData.bookmark = oS.getBookmark();

            // object.moveStart(sUnit [, iCount])
            // Return Value: Integer that returns the number of units moved.
            for (i = 0; oR.compareEndPoints('StartToStart', oS) < 0 && oS.moveStart('character', -1) !== 0; i++) {
                // Why? You can alert(textarea.value.length)
                if (textarea.value.charAt(i) == '\n') {
                    i++;
                }
            }
            rangeData.start = i;
            rangeData.end = rangeData.text.length + rangeData.start;
        }

        return rangeData;
    },
    setCursorPosition: function(rangeData) {
        if(!rangeData)
            throw new Error('You must get cursor position first!');

        var textarea = this.$refs.textarea;

        var oldValue = textarea.value;
        textarea.value = oldValue.substring(0, rangeData.start) + rangeData.text + oldValue.substring(rangeData.end, oldValue.length);
        rangeData.end = rangeData.start + rangeData.text.length;
        if (textarea.setSelectionRange) { // W3C
            textarea.focus();
            textarea.setSelectionRange(rangeData.start, rangeData.end);
        } else if (textarea.createTextRange) { // IE
            var oR = textarea.createTextRange();
            // Fixbug :
            // In IE, if cursor position at the end of textarea, the setCursorPosition function don't work
            if(textarea.value.length === rangeData.start) {
                oR.collapse(false)
                oR.select();
            } else {
                oR.moveToBookmark(rangeData.bookmark);
                oR.select();
            }
        }
    }
});

module.exports = MarkEditor;

});
