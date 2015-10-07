/**
 * Created by kkeiper1103 on 10/7/2015.
 */

module.exports = (function(){

    'use strict';

    /**
     *
     * @param params
     * @constructor
     */
    function Person( params ) {

        // copy JSON into Person obj
        this.data = params;
    }

    Object.defineProperty(Person.prototype, "id", {
        get: function() {
            return Person.prototype.data._id;
        },
        set: function(v) {
            return Person.prototype.data._id = v;
        }
    });

    /**
     *
     * Set any Person methods here
     * @type {{}}
     */
    Person.prototype = {

        /**
         *
         */
        data: {},

        /**
         *
         * @returns String
         */
        sayGreeting: function() {
            console.log( this.data.greeting );

            return this.data.greeting;
        }
    };

    /**
     *
     */
    return Person;
})();