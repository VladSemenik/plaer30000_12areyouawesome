// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (prop) => {return prop;};
const createNotEnumerableProperty = (prop) => {
    Object.defineProperty(Object.prototype, prop,{
        enumerable: false,
        value: 'value'
    });
    return prop;
};
const createProtoMagicObject = () => {
    var result = new Function(), circle = new Function();
    result.__proto__ = circle;
    result.prototype = result.__proto__;
    return result;
};
var result = 0;
const incrementor = () => {
    result++;
    return incrementor;
};
incrementor.valueOf = () => result;
var i=1;
const asyncIncrementor = () => {
    var promise = new Promise(function(resolve) {
        resolve(i++);
    })
    return promise;
};
const createIncrementer = () => {

            var current = 0;
                return{
                    [Symbol.iterator](){ return this; },
                    next(){
                        current++;
                        return { value: current, done: false };
                    }
                }

};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    var promise = new Promise(function(resolve) {
        setTimeout(function(){
            resolve(param);
        }, 1001)
    })
    return promise;
};
const getDeepPropertiesCount = () => {
    
};
const createSerializedObject = () => {
    return {};
};
const toBuffer = () => {};
const sortByProto = (array) => {
    array.sort(function(a, b) {
        return a.value - b.value;
    });
    return array;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;