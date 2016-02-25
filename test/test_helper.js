import {expect} from "chai";
import sinon from "sinon";
import jsdom from "jsdom";

global.expect = expect;
global.sinon = sinon;


global.document = jsdom.jsdom('');
global.window = document.defaultView;
var exposedProperties = ['window', 'navigator', 'document'];
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};
