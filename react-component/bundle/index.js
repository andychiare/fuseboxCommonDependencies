(function(){
	// NOTE: Should match syntheticDefaultExportPolyfill in LoaderAPI.ts
	function syntheticDefaultExportPolyfill(input) {
		if (
			input === null ||
			["function", "object", "array"].indexOf(typeof input) === -1 ||
			input.hasOwnProperty("default") // use hasOwnProperty to avoid triggering usage warnings from libraries like mobx
		) {
			return;
		}
		// to get around frozen input
		if (Object.isFrozen(input)) {
			input.default = input;
			return;
		}
		// free to define properties
		Object.defineProperty(input, "default", {
			value: input,
			writable: true,
			enumerable: false
		});
	}
	var _cbbf = {};
	_cbbf.f = {};
	// cached modules
	_cbbf.m = {};
	_cbbf.r = function(id) {
		var cached = _cbbf.m[id];
		// resolve if in cache
		if (cached) {
			return cached.m.exports;
		}
		var file = _cbbf.f[id];
		if (!file) return;
		cached = _cbbf.m[id] = {};
		cached.exports = {};
		cached.m = { exports: cached.exports };
		file.call(cached.exports, cached.m, cached.exports);
		syntheticDefaultExportPolyfill(cached.m.exports);
		return cached.m.exports;
	};
// default/index.js
_cbbf.f[0] = function(module,exports){
Object.defineProperty(exports, '__esModule', { value: true });
var tslib_1 = _cbbf.r(37);
var React = _cbbf.r(12);
var react_1 = _cbbf.r(12);
var ReactComponent = function (_super) {
    tslib_1.__extends(ReactComponent, _super);
    function ReactComponent() {
        var _this = _super.call(this) || this;
        _this.state = { someKey: 'Initial value' };
        return _this;
    }
    ReactComponent.prototype.render = function () {
        return React.createElement('p', null, this.state.someKey);
    };
    ReactComponent.prototype.componentDidMount = function () {
        this.setState({ someKey: 'I am an external component' });
    };
    return ReactComponent;
}(react_1.Component);
exports.default = ReactComponent;
}
// create-react-class/factory.js
_cbbf.f[1] = function(module,exports){
var _assign = _cbbf.r(6);
var emptyObject = _cbbf.r(4);
var _invariant = _cbbf.r(5);
var MIXINS_KEY = 'mixins';
function identity(fn) {
    return fn;
}
var ReactPropTypeLocationNames;
ReactPropTypeLocationNames = {};
function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
    var injectedMixins = [];
    var ReactClassInterface = {
        mixins: 'DEFINE_MANY',
        statics: 'DEFINE_MANY',
        propTypes: 'DEFINE_MANY',
        contextTypes: 'DEFINE_MANY',
        childContextTypes: 'DEFINE_MANY',
        getDefaultProps: 'DEFINE_MANY_MERGED',
        getInitialState: 'DEFINE_MANY_MERGED',
        getChildContext: 'DEFINE_MANY_MERGED',
        render: 'DEFINE_ONCE',
        componentWillMount: 'DEFINE_MANY',
        componentDidMount: 'DEFINE_MANY',
        componentWillReceiveProps: 'DEFINE_MANY',
        shouldComponentUpdate: 'DEFINE_ONCE',
        componentWillUpdate: 'DEFINE_MANY',
        componentDidUpdate: 'DEFINE_MANY',
        componentWillUnmount: 'DEFINE_MANY',
        UNSAFE_componentWillMount: 'DEFINE_MANY',
        UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',
        UNSAFE_componentWillUpdate: 'DEFINE_MANY',
        updateComponent: 'OVERRIDE_BASE'
    };
    var ReactClassStaticInterface = { getDerivedStateFromProps: 'DEFINE_MANY_MERGED' };
    var RESERVED_SPEC_KEYS = {
        displayName: function (Constructor, displayName) {
            Constructor.displayName = displayName;
        },
        mixins: function (Constructor, mixins) {
            if (mixins) {
                for (var i = 0; i < mixins.length; i++) {
                    mixSpecIntoComponent(Constructor, mixins[i]);
                }
            }
        },
        childContextTypes: function (Constructor, childContextTypes) {
            Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
        },
        contextTypes: function (Constructor, contextTypes) {
            Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
        },
        getDefaultProps: function (Constructor, getDefaultProps) {
            if (Constructor.getDefaultProps) {
                Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
            } else {
                Constructor.getDefaultProps = getDefaultProps;
            }
        },
        propTypes: function (Constructor, propTypes) {
            Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
        },
        statics: function (Constructor, statics) {
            mixStaticSpecIntoComponent(Constructor, statics);
        },
        autobind: function () {
        }
    };
    function validateTypeDef(Constructor, typeDef, location) {
        for (var propName in typeDef) {
            if (typeDef.hasOwnProperty(propName)) {
            }
        }
    }
    function validateMethodOverride(isAlreadyDefined, name) {
        var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;
        if (ReactClassMixin.hasOwnProperty(name)) {
            _invariant(specPolicy === 'OVERRIDE_BASE', 'ReactClassInterface: You are attempting to override ' + '`%s` from your class specification. Ensure that your method names ' + 'do not overlap with React methods.', name);
        }
        if (isAlreadyDefined) {
            _invariant(specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED', 'ReactClassInterface: You are attempting to define ' + '`%s` on your component more than once. This conflict may be due ' + 'to a mixin.', name);
        }
    }
    function mixSpecIntoComponent(Constructor, spec) {
        if (!spec) {
            return;
        }
        _invariant(typeof spec !== 'function', 'ReactClass: You\'re attempting to ' + 'use a component class or function as a mixin. Instead, just use a ' + 'regular object.');
        _invariant(!isValidElement(spec), 'ReactClass: You\'re attempting to ' + 'use a component as a mixin. Instead, just use a regular object.');
        var proto = Constructor.prototype;
        var autoBindPairs = proto.__reactAutoBindPairs;
        if (spec.hasOwnProperty(MIXINS_KEY)) {
            RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
        }
        for (var name in spec) {
            if (!spec.hasOwnProperty(name)) {
                continue;
            }
            if (name === MIXINS_KEY) {
                continue;
            }
            var property = spec[name];
            var isAlreadyDefined = proto.hasOwnProperty(name);
            validateMethodOverride(isAlreadyDefined, name);
            if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
                RESERVED_SPEC_KEYS[name](Constructor, property);
            } else {
                var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
                var isFunction = typeof property === 'function';
                var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;
                if (shouldAutoBind) {
                    autoBindPairs.push(name, property);
                    proto[name] = property;
                } else {
                    if (isAlreadyDefined) {
                        var specPolicy = ReactClassInterface[name];
                        _invariant(isReactClassMethod && (specPolicy === 'DEFINE_MANY_MERGED' || specPolicy === 'DEFINE_MANY'), 'ReactClass: Unexpected spec policy %s for key %s ' + 'when mixing in component specs.', specPolicy, name);
                        if (specPolicy === 'DEFINE_MANY_MERGED') {
                            proto[name] = createMergedResultFunction(proto[name], property);
                        } else if (specPolicy === 'DEFINE_MANY') {
                            proto[name] = createChainedFunction(proto[name], property);
                        }
                    } else {
                        proto[name] = property;
                    }
                }
            }
        }
    }
    function mixStaticSpecIntoComponent(Constructor, statics) {
        if (!statics) {
            return;
        }
        for (var name in statics) {
            var property = statics[name];
            if (!statics.hasOwnProperty(name)) {
                continue;
            }
            var isReserved = name in RESERVED_SPEC_KEYS;
            _invariant(!isReserved, 'ReactClass: You are attempting to define a reserved ' + 'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + 'as an instance property instead; it will still be accessible on the ' + 'constructor.', name);
            var isAlreadyDefined = name in Constructor;
            if (isAlreadyDefined) {
                var specPolicy = ReactClassStaticInterface.hasOwnProperty(name) ? ReactClassStaticInterface[name] : null;
                _invariant(specPolicy === 'DEFINE_MANY_MERGED', 'ReactClass: You are attempting to define ' + '`%s` on your component more than once. This conflict may be ' + 'due to a mixin.', name);
                Constructor[name] = createMergedResultFunction(Constructor[name], property);
                return;
            }
            Constructor[name] = property;
        }
    }
    function mergeIntoWithNoDuplicateKeys(one, two) {
        _invariant(one && two && typeof one === 'object' && typeof two === 'object', 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.');
        for (var key in two) {
            if (two.hasOwnProperty(key)) {
                _invariant(one[key] === undefined, 'mergeIntoWithNoDuplicateKeys(): ' + 'Tried to merge two objects with the same key: `%s`. This conflict ' + 'may be due to a mixin; in particular, this may be caused by two ' + 'getInitialState() or getDefaultProps() methods returning objects ' + 'with clashing keys.', key);
                one[key] = two[key];
            }
        }
        return one;
    }
    function createMergedResultFunction(one, two) {
        return function mergedResult() {
            var a = one.apply(this, arguments);
            var b = two.apply(this, arguments);
            if (a == null) {
                return b;
            } else if (b == null) {
                return a;
            }
            var c = {};
            mergeIntoWithNoDuplicateKeys(c, a);
            mergeIntoWithNoDuplicateKeys(c, b);
            return c;
        };
    }
    function createChainedFunction(one, two) {
        return function chainedFunction() {
            one.apply(this, arguments);
            two.apply(this, arguments);
        };
    }
    function bindAutoBindMethod(component, method) {
        var boundMethod = method.bind(component);
        return boundMethod;
    }
    function bindAutoBindMethods(component) {
        var pairs = component.__reactAutoBindPairs;
        for (var i = 0; i < pairs.length; i += 2) {
            var autoBindKey = pairs[i];
            var method = pairs[i + 1];
            component[autoBindKey] = bindAutoBindMethod(component, method);
        }
    }
    var IsMountedPreMixin = {
        componentDidMount: function () {
            this.__isMounted = true;
        }
    };
    var IsMountedPostMixin = {
        componentWillUnmount: function () {
            this.__isMounted = false;
        }
    };
    var ReactClassMixin = {
        replaceState: function (newState, callback) {
            this.updater.enqueueReplaceState(this, newState, callback);
        },
        isMounted: function () {
            return !!this.__isMounted;
        }
    };
    var ReactClassComponent = function () {
    };
    _assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);
    function createClass(spec) {
        var Constructor = identity(function (props, context, updater) {
            if (this.__reactAutoBindPairs.length) {
                bindAutoBindMethods(this);
            }
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
            this.state = null;
            var initialState = this.getInitialState ? this.getInitialState() : null;
            _invariant(typeof initialState === 'object' && !Array.isArray(initialState), '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent');
            this.state = initialState;
        });
        Constructor.prototype = new ReactClassComponent();
        Constructor.prototype.constructor = Constructor;
        Constructor.prototype.__reactAutoBindPairs = [];
        injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
        mixSpecIntoComponent(Constructor, IsMountedPreMixin);
        mixSpecIntoComponent(Constructor, spec);
        mixSpecIntoComponent(Constructor, IsMountedPostMixin);
        if (Constructor.getDefaultProps) {
            Constructor.defaultProps = Constructor.getDefaultProps();
        }
        _invariant(Constructor.prototype.render, 'createClass(...): Class specification must implement a `render` method.');
        for (var methodName in ReactClassInterface) {
            if (!Constructor.prototype[methodName]) {
                Constructor.prototype[methodName] = null;
            }
        }
        return Constructor;
    }
    return createClass;
}
module.exports = factory;
}
// fbjs/lib/warning.js
_cbbf.f[2] = function(module,exports){
var emptyFunction = _cbbf.r(3);
var warning = emptyFunction;
module.exports = warning;
}
// fbjs/lib/emptyFunction.js
_cbbf.f[3] = function(module,exports){
function makeEmptyFunction(arg) {
    return function () {
        return arg;
    };
}
var emptyFunction = function emptyFunction() {
};
emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
    return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
    return arg;
};
module.exports = emptyFunction;
}
// fbjs/lib/emptyObject.js
_cbbf.f[4] = function(module,exports){
var emptyObject = {};
module.exports = emptyObject;
}
// fbjs/lib/invariant.js
_cbbf.f[5] = function(module,exports){
var validateFormat = function validateFormat(format) {
};
function invariant(condition, format, a, b, c, d, e, f) {
    validateFormat(format);
    if (!condition) {
        var error;
        if (format === undefined) {
            error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
            var args = [
                a,
                b,
                c,
                d,
                e,
                f
            ];
            var argIndex = 0;
            error = new Error(format.replace(/%s/g, function () {
                return args[argIndex++];
            }));
            error.name = 'Invariant Violation';
        }
        error.framesToPop = 1;
        throw error;
    }
}
module.exports = invariant;
}
// object-assign/index.js
_cbbf.f[6] = function(module,exports){
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) {
            return false;
        }
        var test1 = new String('abc');
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
            test2['_' + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') {
            return false;
        }
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
            return false;
        }
        return true;
    } catch (err) {
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
};
}
// prop-types/factory.js
_cbbf.f[8] = function(module,exports){
var factory = _cbbf.r(9);
module.exports = function (isValidElement) {
    var throwOnDirectAccess = false;
    return factory(isValidElement, throwOnDirectAccess);
};
}
// prop-types/factoryWithTypeCheckers.js
_cbbf.f[9] = function(module,exports){
var assign = _cbbf.r(6);
var ReactPropTypesSecret = _cbbf.r(10);
var checkPropTypes = _cbbf.r(11);
var printWarning = function () {
};
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function (isValidElement, throwOnDirectAccess) {
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';
    function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    var ANONYMOUS = '<<anonymous>>';
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    function is(x, y) {
        if (x === y) {
            return x !== 0 || 1 / x === 1 / y;
        } else {
            return x !== x && y !== y;
        }
    }
    function PropTypeError(message) {
        this.message = message;
        this.stack = '';
    }
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                } else if ('production' !== 'production' && typeof console !== 'undefined') {
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                        printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for (var i = 0; i < propValue.length; i++) {
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            'production' !== 'production' ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for (var i = 0; i < expectedValues.length; i++) {
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for (var key in propValue) {
                if (propValue.hasOwnProperty(key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            'production' !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
            return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                var checker = arrayOfTypeCheckers[i];
                if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
                    return null;
                }
            }
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for (var key in shapeTypes) {
                var checker = shapeTypes[key];
                if (!checker) {
                    continue;
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            var allKeys = assign({}, props[propName], shapeTypes);
            for (var key in allKeys) {
                var checker = shapeTypes[key];
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
            return true;
        case 'boolean':
            return !propValue;
        case 'object':
            if (Array.isArray(propValue)) {
                return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
                return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
                var iterator = iteratorFn.call(propValue);
                var step;
                if (iteratorFn !== propValue.entries) {
                    while (!(step = iterator.next()).done) {
                        if (!isNode(step.value)) {
                            return false;
                        }
                    }
                } else {
                    while (!(step = iterator.next()).done) {
                        var entry = step.value;
                        if (entry) {
                            if (!isNode(entry[1])) {
                                return false;
                            }
                        }
                    }
                }
            } else {
                return false;
            }
            return true;
        default:
            return false;
        }
    }
    function isSymbol(propType, propValue) {
        if (propType === 'symbol') {
            return true;
        }
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }
        return false;
    }
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            } else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
        case 'array':
        case 'object':
            return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
            return 'a ' + type;
        default:
            return type;
        }
    }
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};
}
// prop-types/lib/ReactPropTypesSecret.js
_cbbf.f[10] = function(module,exports){
var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}
// prop-types/checkPropTypes.js
_cbbf.f[11] = function(module,exports){
var printWarning = function () {
};
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
}
module.exports = checkPropTypes;
}
// react/react.js
_cbbf.f[12] = function(module,exports){
module.exports = _cbbf.r(13);
}
// react/lib/React.js
_cbbf.f[13] = function(module,exports){
var _assign = _cbbf.r(6);
var ReactBaseClasses = _cbbf.r(14);
var ReactChildren = _cbbf.r(19);
var ReactDOMFactories = _cbbf.r(27);
var ReactElement = _cbbf.r(21);
var ReactPropTypes = _cbbf.r(33);
var ReactVersion = _cbbf.r(34);
var createReactClass = _cbbf.r(35);
var onlyChild = _cbbf.r(36);
var createElement = ReactElement.createElement;
var createFactory = ReactElement.createFactory;
var cloneElement = ReactElement.cloneElement;
var __spread = _assign;
var createMixin = function (mixin) {
    return mixin;
};
var React = {
    Children: {
        map: ReactChildren.map,
        forEach: ReactChildren.forEach,
        count: ReactChildren.count,
        toArray: ReactChildren.toArray,
        only: onlyChild
    },
    Component: ReactBaseClasses.Component,
    PureComponent: ReactBaseClasses.PureComponent,
    createElement: createElement,
    cloneElement: cloneElement,
    isValidElement: ReactElement.isValidElement,
    PropTypes: ReactPropTypes,
    createClass: createReactClass,
    createFactory: createFactory,
    createMixin: createMixin,
    DOM: ReactDOMFactories,
    version: ReactVersion,
    __spread: __spread
};
module.exports = React;
}
// react/lib/ReactBaseClasses.js
_cbbf.f[14] = function(module,exports){
var _prodInvariant = _cbbf.r(15), _assign = _cbbf.r(6);
var ReactNoopUpdateQueue = _cbbf.r(16);
var canDefineProperty = _cbbf.r(17);
var emptyObject = _cbbf.r(4);
var invariant = _cbbf.r(5);
var lowPriorityWarning = _cbbf.r(18);
function ReactComponent(props, context, updater) {
    this.props = props;
    this.context = context;
    this.refs = emptyObject;
    this.updater = updater || ReactNoopUpdateQueue;
}
ReactComponent.prototype.isReactComponent = {};
ReactComponent.prototype.setState = function (partialState, callback) {
    !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? 'production' !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
    this.updater.enqueueSetState(this, partialState);
    if (callback) {
        this.updater.enqueueCallback(this, callback, 'setState');
    }
};
ReactComponent.prototype.forceUpdate = function (callback) {
    this.updater.enqueueForceUpdate(this);
    if (callback) {
        this.updater.enqueueCallback(this, callback, 'forceUpdate');
    }
};
function ReactPureComponent(props, context, updater) {
    this.props = props;
    this.context = context;
    this.refs = emptyObject;
    this.updater = updater || ReactNoopUpdateQueue;
}
function ComponentDummy() {
}
ComponentDummy.prototype = ReactComponent.prototype;
ReactPureComponent.prototype = new ComponentDummy();
ReactPureComponent.prototype.constructor = ReactPureComponent;
_assign(ReactPureComponent.prototype, ReactComponent.prototype);
ReactPureComponent.prototype.isPureReactComponent = true;
module.exports = {
    Component: ReactComponent,
    PureComponent: ReactPureComponent
};
}
// react/lib/reactProdInvariant.js
_cbbf.f[15] = function(module,exports){
function reactProdInvariant(code) {
    var argCount = arguments.length - 1;
    var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;
    for (var argIdx = 0; argIdx < argCount; argIdx++) {
        message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
    }
    message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';
    var error = new Error(message);
    error.name = 'Invariant Violation';
    error.framesToPop = 1;
    throw error;
}
module.exports = reactProdInvariant;
}
// react/lib/ReactNoopUpdateQueue.js
_cbbf.f[16] = function(module,exports){
var warning = _cbbf.r(2);
function warnNoop(publicInstance, callerName) {
}
var ReactNoopUpdateQueue = {
    isMounted: function (publicInstance) {
        return false;
    },
    enqueueCallback: function (publicInstance, callback) {
    },
    enqueueForceUpdate: function (publicInstance) {
        warnNoop(publicInstance, 'forceUpdate');
    },
    enqueueReplaceState: function (publicInstance, completeState) {
        warnNoop(publicInstance, 'replaceState');
    },
    enqueueSetState: function (publicInstance, partialState) {
        warnNoop(publicInstance, 'setState');
    }
};
module.exports = ReactNoopUpdateQueue;
}
// react/lib/canDefineProperty.js
_cbbf.f[17] = function(module,exports){
var canDefineProperty = false;
module.exports = canDefineProperty;
}
// react/lib/lowPriorityWarning.js
_cbbf.f[18] = function(module,exports){
var lowPriorityWarning = function () {
};
module.exports = lowPriorityWarning;
}
// react/lib/ReactChildren.js
_cbbf.f[19] = function(module,exports){
var PooledClass = _cbbf.r(20);
var ReactElement = _cbbf.r(21);
var emptyFunction = _cbbf.r(3);
var traverseAllChildren = _cbbf.r(24);
var twoArgumentPooler = PooledClass.twoArgumentPooler;
var fourArgumentPooler = PooledClass.fourArgumentPooler;
var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
    return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}
function ForEachBookKeeping(forEachFunction, forEachContext) {
    this.func = forEachFunction;
    this.context = forEachContext;
    this.count = 0;
}
ForEachBookKeeping.prototype.destructor = function () {
    this.func = null;
    this.context = null;
    this.count = 0;
};
PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);
function forEachSingleChild(bookKeeping, child, name) {
    var func = bookKeeping.func, context = bookKeeping.context;
    func.call(context, child, bookKeeping.count++);
}
function forEachChildren(children, forEachFunc, forEachContext) {
    if (children == null) {
        return children;
    }
    var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
    traverseAllChildren(children, forEachSingleChild, traverseContext);
    ForEachBookKeeping.release(traverseContext);
}
function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
    this.result = mapResult;
    this.keyPrefix = keyPrefix;
    this.func = mapFunction;
    this.context = mapContext;
    this.count = 0;
}
MapBookKeeping.prototype.destructor = function () {
    this.result = null;
    this.keyPrefix = null;
    this.func = null;
    this.context = null;
    this.count = 0;
};
PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);
function mapSingleChildIntoContext(bookKeeping, child, childKey) {
    var result = bookKeeping.result, keyPrefix = bookKeeping.keyPrefix, func = bookKeeping.func, context = bookKeeping.context;
    var mappedChild = func.call(context, child, bookKeeping.count++);
    if (Array.isArray(mappedChild)) {
        mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
    } else if (mappedChild != null) {
        if (ReactElement.isValidElement(mappedChild)) {
            mappedChild = ReactElement.cloneAndReplaceKey(mappedChild, keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
        }
        result.push(mappedChild);
    }
}
function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
    var escapedPrefix = '';
    if (prefix != null) {
        escapedPrefix = escapeUserProvidedKey(prefix) + '/';
    }
    var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
    traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
    MapBookKeeping.release(traverseContext);
}
function mapChildren(children, func, context) {
    if (children == null) {
        return children;
    }
    var result = [];
    mapIntoWithKeyPrefixInternal(children, result, null, func, context);
    return result;
}
function forEachSingleChildDummy(traverseContext, child, name) {
    return null;
}
function countChildren(children, context) {
    return traverseAllChildren(children, forEachSingleChildDummy, null);
}
function toArray(children) {
    var result = [];
    mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
    return result;
}
var ReactChildren = {
    forEach: forEachChildren,
    map: mapChildren,
    mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
    count: countChildren,
    toArray: toArray
};
module.exports = ReactChildren;
}
// react/lib/PooledClass.js
_cbbf.f[20] = function(module,exports){
var _prodInvariant = _cbbf.r(15);
var invariant = _cbbf.r(5);
var oneArgumentPooler = function (copyFieldsFrom) {
    var Klass = this;
    if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, copyFieldsFrom);
        return instance;
    } else {
        return new Klass(copyFieldsFrom);
    }
};
var twoArgumentPooler = function (a1, a2) {
    var Klass = this;
    if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, a1, a2);
        return instance;
    } else {
        return new Klass(a1, a2);
    }
};
var threeArgumentPooler = function (a1, a2, a3) {
    var Klass = this;
    if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, a1, a2, a3);
        return instance;
    } else {
        return new Klass(a1, a2, a3);
    }
};
var fourArgumentPooler = function (a1, a2, a3, a4) {
    var Klass = this;
    if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, a1, a2, a3, a4);
        return instance;
    } else {
        return new Klass(a1, a2, a3, a4);
    }
};
var standardReleaser = function (instance) {
    var Klass = this;
    !(instance instanceof Klass) ? 'production' !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
    instance.destructor();
    if (Klass.instancePool.length < Klass.poolSize) {
        Klass.instancePool.push(instance);
    }
};
var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;
var addPoolingTo = function (CopyConstructor, pooler) {
    var NewKlass = CopyConstructor;
    NewKlass.instancePool = [];
    NewKlass.getPooled = pooler || DEFAULT_POOLER;
    if (!NewKlass.poolSize) {
        NewKlass.poolSize = DEFAULT_POOL_SIZE;
    }
    NewKlass.release = standardReleaser;
    return NewKlass;
};
var PooledClass = {
    addPoolingTo: addPoolingTo,
    oneArgumentPooler: oneArgumentPooler,
    twoArgumentPooler: twoArgumentPooler,
    threeArgumentPooler: threeArgumentPooler,
    fourArgumentPooler: fourArgumentPooler
};
module.exports = PooledClass;
}
// react/lib/ReactElement.js
_cbbf.f[21] = function(module,exports){
var _assign = _cbbf.r(6);
var ReactCurrentOwner = _cbbf.r(22);
var warning = _cbbf.r(2);
var canDefineProperty = _cbbf.r(17);
var hasOwnProperty = Object.prototype.hasOwnProperty;
var REACT_ELEMENT_TYPE = _cbbf.r(23);
var RESERVED_PROPS = {
    key: true,
    ref: true,
    __self: true,
    __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown;
function hasValidRef(config) {
    return config.ref !== undefined;
}
function hasValidKey(config) {
    return config.key !== undefined;
}
function defineKeyPropWarningGetter(props, displayName) {
    var warnAboutAccessingKey = function () {
        if (!specialPropKeyWarningShown) {
            specialPropKeyWarningShown = true;
            'production' !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
        }
    };
    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
        get: warnAboutAccessingKey,
        configurable: true
    });
}
function defineRefPropWarningGetter(props, displayName) {
    var warnAboutAccessingRef = function () {
        if (!specialPropRefWarningShown) {
            specialPropRefWarningShown = true;
            'production' !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
        }
    };
    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
        get: warnAboutAccessingRef,
        configurable: true
    });
}
var ReactElement = function (type, key, ref, self, source, owner, props) {
    var element = {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key,
        ref: ref,
        props: props,
        _owner: owner
    };
    return element;
};
ReactElement.createElement = function (type, config, children) {
    var propName;
    var props = {};
    var key = null;
    var ref = null;
    var self = null;
    var source = null;
    if (config != null) {
        if (hasValidRef(config)) {
            ref = config.ref;
        }
        if (hasValidKey(config)) {
            key = '' + config.key;
        }
        self = config.__self === undefined ? null : config.__self;
        source = config.__source === undefined ? null : config.__source;
        for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
            }
        }
    }
    var childrenLength = arguments.length - 2;
    if (childrenLength === 1) {
        props.children = children;
    } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
        }
        props.children = childArray;
    }
    if (type && type.defaultProps) {
        var defaultProps = type.defaultProps;
        for (propName in defaultProps) {
            if (props[propName] === undefined) {
                props[propName] = defaultProps[propName];
            }
        }
    }
    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
};
ReactElement.createFactory = function (type) {
    var factory = ReactElement.createElement.bind(null, type);
    factory.type = type;
    return factory;
};
ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
    var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
    return newElement;
};
ReactElement.cloneElement = function (element, config, children) {
    var propName;
    var props = _assign({}, element.props);
    var key = element.key;
    var ref = element.ref;
    var self = element._self;
    var source = element._source;
    var owner = element._owner;
    if (config != null) {
        if (hasValidRef(config)) {
            ref = config.ref;
            owner = ReactCurrentOwner.current;
        }
        if (hasValidKey(config)) {
            key = '' + config.key;
        }
        var defaultProps;
        if (element.type && element.type.defaultProps) {
            defaultProps = element.type.defaultProps;
        }
        for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === undefined && defaultProps !== undefined) {
                    props[propName] = defaultProps[propName];
                } else {
                    props[propName] = config[propName];
                }
            }
        }
    }
    var childrenLength = arguments.length - 2;
    if (childrenLength === 1) {
        props.children = children;
    } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
        }
        props.children = childArray;
    }
    return ReactElement(element.type, key, ref, self, source, owner, props);
};
ReactElement.isValidElement = function (object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
};
module.exports = ReactElement;
}
// react/lib/ReactCurrentOwner.js
_cbbf.f[22] = function(module,exports){
var ReactCurrentOwner = { current: null };
module.exports = ReactCurrentOwner;
}
// react/lib/ReactElementSymbol.js
_cbbf.f[23] = function(module,exports){
var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 60103;
module.exports = REACT_ELEMENT_TYPE;
}
// react/lib/traverseAllChildren.js
_cbbf.f[24] = function(module,exports){
var _prodInvariant = _cbbf.r(15);
var ReactCurrentOwner = _cbbf.r(22);
var REACT_ELEMENT_TYPE = _cbbf.r(23);
var getIteratorFn = _cbbf.r(25);
var invariant = _cbbf.r(5);
var KeyEscapeUtils = _cbbf.r(26);
var warning = _cbbf.r(2);
var SEPARATOR = '.';
var SUBSEPARATOR = ':';
var didWarnAboutMaps = false;
function getComponentKey(component, index) {
    if (component && typeof component === 'object' && component.key != null) {
        return KeyEscapeUtils.escape(component.key);
    }
    return index.toString(36);
}
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
    var type = typeof children;
    if (type === 'undefined' || type === 'boolean') {
        children = null;
    }
    if (children === null || type === 'string' || type === 'number' || type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
        callback(traverseContext, children, nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
        return 1;
    }
    var child;
    var nextName;
    var subtreeCount = 0;
    var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
    if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
            child = children[i];
            nextName = nextNamePrefix + getComponentKey(child, i);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
    } else {
        var iteratorFn = getIteratorFn(children);
        if (iteratorFn) {
            var iterator = iteratorFn.call(children);
            var step;
            if (iteratorFn !== children.entries) {
                var ii = 0;
                while (!(step = iterator.next()).done) {
                    child = step.value;
                    nextName = nextNamePrefix + getComponentKey(child, ii++);
                    subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
                }
            } else {
                while (!(step = iterator.next()).done) {
                    var entry = step.value;
                    if (entry) {
                        child = entry[1];
                        nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
                        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
                    }
                }
            }
        } else if (type === 'object') {
            var addendum = '';
            var childrenString = String(children);
            !false ? 'production' !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
        }
    }
    return subtreeCount;
}
function traverseAllChildren(children, callback, traverseContext) {
    if (children == null) {
        return 0;
    }
    return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
module.exports = traverseAllChildren;
}
// react/lib/getIteratorFn.js
_cbbf.f[25] = function(module,exports){
var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
        return iteratorFn;
    }
}
module.exports = getIteratorFn;
}
// react/lib/KeyEscapeUtils.js
_cbbf.f[26] = function(module,exports){
function escape(key) {
    var escapeRegex = /[=:]/g;
    var escaperLookup = {
        '=': '=0',
        ':': '=2'
    };
    var escapedString = ('' + key).replace(escapeRegex, function (match) {
        return escaperLookup[match];
    });
    return '$' + escapedString;
}
function unescape(key) {
    var unescapeRegex = /(=0|=2)/g;
    var unescaperLookup = {
        '=0': '=',
        '=2': ':'
    };
    var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);
    return ('' + keySubstring).replace(unescapeRegex, function (match) {
        return unescaperLookup[match];
    });
}
var KeyEscapeUtils = {
    escape: escape,
    unescape: unescape
};
module.exports = KeyEscapeUtils;
}
// react/lib/ReactDOMFactories.js
_cbbf.f[27] = function(module,exports){
var ReactElement = _cbbf.r(21);
var createDOMFactory = ReactElement.createFactory;
var ReactDOMFactories = {
    a: createDOMFactory('a'),
    abbr: createDOMFactory('abbr'),
    address: createDOMFactory('address'),
    area: createDOMFactory('area'),
    article: createDOMFactory('article'),
    aside: createDOMFactory('aside'),
    audio: createDOMFactory('audio'),
    b: createDOMFactory('b'),
    base: createDOMFactory('base'),
    bdi: createDOMFactory('bdi'),
    bdo: createDOMFactory('bdo'),
    big: createDOMFactory('big'),
    blockquote: createDOMFactory('blockquote'),
    body: createDOMFactory('body'),
    br: createDOMFactory('br'),
    button: createDOMFactory('button'),
    canvas: createDOMFactory('canvas'),
    caption: createDOMFactory('caption'),
    cite: createDOMFactory('cite'),
    code: createDOMFactory('code'),
    col: createDOMFactory('col'),
    colgroup: createDOMFactory('colgroup'),
    data: createDOMFactory('data'),
    datalist: createDOMFactory('datalist'),
    dd: createDOMFactory('dd'),
    del: createDOMFactory('del'),
    details: createDOMFactory('details'),
    dfn: createDOMFactory('dfn'),
    dialog: createDOMFactory('dialog'),
    div: createDOMFactory('div'),
    dl: createDOMFactory('dl'),
    dt: createDOMFactory('dt'),
    em: createDOMFactory('em'),
    embed: createDOMFactory('embed'),
    fieldset: createDOMFactory('fieldset'),
    figcaption: createDOMFactory('figcaption'),
    figure: createDOMFactory('figure'),
    footer: createDOMFactory('footer'),
    form: createDOMFactory('form'),
    h1: createDOMFactory('h1'),
    h2: createDOMFactory('h2'),
    h3: createDOMFactory('h3'),
    h4: createDOMFactory('h4'),
    h5: createDOMFactory('h5'),
    h6: createDOMFactory('h6'),
    head: createDOMFactory('head'),
    header: createDOMFactory('header'),
    hgroup: createDOMFactory('hgroup'),
    hr: createDOMFactory('hr'),
    html: createDOMFactory('html'),
    i: createDOMFactory('i'),
    iframe: createDOMFactory('iframe'),
    img: createDOMFactory('img'),
    input: createDOMFactory('input'),
    ins: createDOMFactory('ins'),
    kbd: createDOMFactory('kbd'),
    keygen: createDOMFactory('keygen'),
    label: createDOMFactory('label'),
    legend: createDOMFactory('legend'),
    li: createDOMFactory('li'),
    link: createDOMFactory('link'),
    main: createDOMFactory('main'),
    map: createDOMFactory('map'),
    mark: createDOMFactory('mark'),
    menu: createDOMFactory('menu'),
    menuitem: createDOMFactory('menuitem'),
    meta: createDOMFactory('meta'),
    meter: createDOMFactory('meter'),
    nav: createDOMFactory('nav'),
    noscript: createDOMFactory('noscript'),
    object: createDOMFactory('object'),
    ol: createDOMFactory('ol'),
    optgroup: createDOMFactory('optgroup'),
    option: createDOMFactory('option'),
    output: createDOMFactory('output'),
    p: createDOMFactory('p'),
    param: createDOMFactory('param'),
    picture: createDOMFactory('picture'),
    pre: createDOMFactory('pre'),
    progress: createDOMFactory('progress'),
    q: createDOMFactory('q'),
    rp: createDOMFactory('rp'),
    rt: createDOMFactory('rt'),
    ruby: createDOMFactory('ruby'),
    s: createDOMFactory('s'),
    samp: createDOMFactory('samp'),
    script: createDOMFactory('script'),
    section: createDOMFactory('section'),
    select: createDOMFactory('select'),
    small: createDOMFactory('small'),
    source: createDOMFactory('source'),
    span: createDOMFactory('span'),
    strong: createDOMFactory('strong'),
    style: createDOMFactory('style'),
    sub: createDOMFactory('sub'),
    summary: createDOMFactory('summary'),
    sup: createDOMFactory('sup'),
    table: createDOMFactory('table'),
    tbody: createDOMFactory('tbody'),
    td: createDOMFactory('td'),
    textarea: createDOMFactory('textarea'),
    tfoot: createDOMFactory('tfoot'),
    th: createDOMFactory('th'),
    thead: createDOMFactory('thead'),
    time: createDOMFactory('time'),
    title: createDOMFactory('title'),
    tr: createDOMFactory('tr'),
    track: createDOMFactory('track'),
    u: createDOMFactory('u'),
    ul: createDOMFactory('ul'),
    'var': createDOMFactory('var'),
    video: createDOMFactory('video'),
    wbr: createDOMFactory('wbr'),
    circle: createDOMFactory('circle'),
    clipPath: createDOMFactory('clipPath'),
    defs: createDOMFactory('defs'),
    ellipse: createDOMFactory('ellipse'),
    g: createDOMFactory('g'),
    image: createDOMFactory('image'),
    line: createDOMFactory('line'),
    linearGradient: createDOMFactory('linearGradient'),
    mask: createDOMFactory('mask'),
    path: createDOMFactory('path'),
    pattern: createDOMFactory('pattern'),
    polygon: createDOMFactory('polygon'),
    polyline: createDOMFactory('polyline'),
    radialGradient: createDOMFactory('radialGradient'),
    rect: createDOMFactory('rect'),
    stop: createDOMFactory('stop'),
    svg: createDOMFactory('svg'),
    text: createDOMFactory('text'),
    tspan: createDOMFactory('tspan')
};
module.exports = ReactDOMFactories;
}
// react/lib/ReactPropTypes.js
_cbbf.f[33] = function(module,exports){
var _require = _cbbf.r(21), isValidElement = _require.isValidElement;
var factory = _cbbf.r(8);
module.exports = factory(isValidElement);
}
// react/lib/ReactVersion.js
_cbbf.f[34] = function(module,exports){
module.exports = '15.6.2';
}
// react/lib/createClass.js
_cbbf.f[35] = function(module,exports){
var _require = _cbbf.r(14), Component = _require.Component;
var _require2 = _cbbf.r(21), isValidElement = _require2.isValidElement;
var ReactNoopUpdateQueue = _cbbf.r(16);
var factory = _cbbf.r(1);
module.exports = factory(Component, isValidElement, ReactNoopUpdateQueue);
}
// react/lib/onlyChild.js
_cbbf.f[36] = function(module,exports){
var _prodInvariant = _cbbf.r(15);
var ReactElement = _cbbf.r(21);
var invariant = _cbbf.r(5);
function onlyChild(children) {
    !ReactElement.isValidElement(children) ? 'production' !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
    return children;
}
module.exports = onlyChild;
}
// tslib/tslib.js
_cbbf.f[37] = function(module,exports){
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
(function (factory) {
    var root = 'undefined' === 'object' ? global : typeof self === 'object' ? self : typeof this === 'object' ? this : {};
    if ('undefined' === 'function' && define.amd) {
        define('tslib', ['exports'], function (exports) {
            factory(createExporter(root, createExporter(exports)));
        });
    } else if ('object' === 'object' && typeof module.exports === 'object') {
        factory(createExporter(root, createExporter(module.exports)));
    } else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === 'function') {
                Object.defineProperty(exports, '__esModule', { value: true });
            } else {
                exports.__esModule = true;
            }
        }
        return function (id, v) {
            return exports[id] = previous ? previous(id, v) : v;
        };
    }
}(function (exporter) {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
    };
    __extends = function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    __rest = function (s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
                if (e.indexOf(p[i]) < 0)
                    t[p[i]] = s[p[i]];
        return t;
    };
    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    __param = function (paramIndex, decorator) {
        return function (target, key) {
            decorator(target, key, paramIndex);
        };
    };
    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(metadataKey, metadataValue);
    };
    __awaiter = function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : new P(function (resolve) {
                    resolve(result.value);
                }).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    __generator = function (thisArg, body) {
        var _ = {
                label: 0,
                sent: function () {
                    if (t[0] & 1)
                        throw t[1];
                    return t[1];
                },
                trys: [],
                ops: []
            }, f, y, t, g;
        return g = {
            next: verb(0),
            'throw': verb(1),
            'return': verb(2)
        }, typeof Symbol === 'function' && (g[Symbol.iterator] = function () {
            return this;
        }), g;
        function verb(n) {
            return function (v) {
                return step([
                    n,
                    v
                ]);
            };
        }
        function step(op) {
            if (f)
                throw new TypeError('Generator is already executing.');
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [
                            op[0] & 2,
                            t.value
                        ];
                    switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return {
                            value: op[1],
                            done: false
                        };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [
                        6,
                        e
                    ];
                    y = 0;
                } finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return {
                value: op[0] ? op[1] : void 0,
                done: true
            };
        }
    };
    __exportStar = function (m, exports) {
        for (var p in m)
            if (!exports.hasOwnProperty(p))
                exports[p] = m[p];
    };
    __values = function (o) {
        var m = typeof Symbol === 'function' && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return {
                    value: o && o[i++],
                    done: !o
                };
            }
        };
    };
    __read = function (o, n) {
        var m = typeof Symbol === 'function' && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        } catch (error) {
            e = { error: error };
        } finally {
            try {
                if (r && !r.done && (m = i['return']))
                    m.call(i);
            } finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    };
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };
    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };
    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError('Symbol.asyncIterator is not defined.');
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb('next'), verb('throw'), verb('return'), i[Symbol.asyncIterator] = function () {
            return this;
        }, i;
        function verb(n) {
            if (g[n])
                i[n] = function (v) {
                    return new Promise(function (a, b) {
                        q.push([
                            n,
                            v,
                            a,
                            b
                        ]) > 1 || resume(n, v);
                    });
                };
        }
        function resume(n, v) {
            try {
                step(g[n](v));
            } catch (e) {
                settle(q[0][3], e);
            }
        }
        function step(r) {
            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
            resume('next', value);
        }
        function reject(value) {
            resume('throw', value);
        }
        function settle(f, v) {
            if (f(v), q.shift(), q.length)
                resume(q[0][0], q[0][1]);
        }
    };
    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb('next'), verb('throw', function (e) {
            throw e;
        }), verb('return'), i[Symbol.iterator] = function () {
            return this;
        }, i;
        function verb(n, f) {
            i[n] = o[n] ? function (v) {
                return (p = !p) ? {
                    value: __await(o[n](v)),
                    done: n === 'return'
                } : f ? f(v) : v;
            } : f;
        }
    };
    __asyncValues = function (o) {
        if (!Symbol.asyncIterator)
            throw new TypeError('Symbol.asyncIterator is not defined.');
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === 'function' ? __values(o) : o[Symbol.iterator](), i = {}, verb('next'), verb('throw'), verb('return'), i[Symbol.asyncIterator] = function () {
            return this;
        }, i);
        function verb(n) {
            i[n] = o[n] && function (v) {
                return new Promise(function (resolve, reject) {
                    v = o[n](v), settle(resolve, reject, v.done, v.value);
                });
            };
        }
        function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function (v) {
                resolve({
                    value: v,
                    done: d
                });
            }, reject);
        }
    };
    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, 'raw', { value: raw });
        } else {
            cooked.raw = raw;
        }
        return cooked;
    };
    __importStar = function (mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    result[k] = mod[k];
        result['default'] = mod;
        return result;
    };
    __importDefault = function (mod) {
        return mod && mod.__esModule ? mod : { 'default': mod };
    };
    exporter('__extends', __extends);
    exporter('__assign', __assign);
    exporter('__rest', __rest);
    exporter('__decorate', __decorate);
    exporter('__param', __param);
    exporter('__metadata', __metadata);
    exporter('__awaiter', __awaiter);
    exporter('__generator', __generator);
    exporter('__exportStar', __exportStar);
    exporter('__values', __values);
    exporter('__read', __read);
    exporter('__spread', __spread);
    exporter('__await', __await);
    exporter('__asyncGenerator', __asyncGenerator);
    exporter('__asyncDelegator', __asyncDelegator);
    exporter('__asyncValues', __asyncValues);
    exporter('__makeTemplateObject', __makeTemplateObject);
    exporter('__importStar', __importStar);
    exporter('__importDefault', __importDefault);
}));
}
var global = window
window['WidgetModule']=_cbbf.r(0)
_cbbf.r(0)
})();