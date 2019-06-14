import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield';

const {querySelector} = document

new MDCTextField(querySelector('.username'));
new MDCTextField(querySelector('.password'));

var cancel = "cancel";
var next = "next";

new MDCRipple(querySelector('.cancel'));
new MDCRipple(querySelector('.next'));
