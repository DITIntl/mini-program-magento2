module.exports = {

    execute: function(fun) {
        if (fun && typeof(fun) === 'function') {
            if (arguments.length > 1) {
                let args = [];
                for (var i = 1; i < arguments.length; i++) {
                    args.push(arguments[i]);
                }
                return fun.apply(this, args);
            } else {
                return fun();
            }
        }
    }

};