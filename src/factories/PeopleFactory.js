/**
 * Created by kkeiper1103 on 10/7/2015.
 */

module.exports = ["$http", function($http){
    var angular = require("angular"),
        Person = require("../models/Person");


    var factory = {

        /**
         * @var Array
         */
        cache: [],


        /**
         *
         */
        _promise: function() {
            return $http.get("./data/people.json");
        },

        /**
         *
         */
        _transform: function( data ) {
            angular.forEach(data, function(v, k) {
                data[k] = new Person(v);
            });

            return data;
        },

        /**
         *
         * @param fn Callback to apply to the information returned from people.json
         * @returns {*}
         */
        get: function( fn ) {

            // if the cache has been set previously, return that
            if( factory.cache.length > 0 )
                return fn( factory.cache );


            // otherwise make the http request
            return this._promise().success(function(data) {

                data = factory._transform(data);

                factory.cache = data;

                return fn(data);
            });
        },

        /**
         *
         */
        _filter: function( data, settings ) {
            return data.filter(function(person) {

                for( var p in settings ) {
                    if( settings.hasOwnProperty(p) ) {

                        if( person.data[p] === settings[p] )
                            return true;

                    }
                }

                return false;
            });
        },

        /**
         *
         * @param settings Object Literal of properties to search for
         * @param fn function Callback to apply to the information
         * @returns Array
         */
        find: function( settings, fn ) {

            // if the cache has been set previously, return that
            if( factory.cache.length > 0 ) {
                return fn( factory._filter(factory.cache, settings) );
            }

            // otherwise make the http request
            return this._promise().success(function(data) {

                // turn plain JSON array to collection of Person objects
                data = factory._transform(data);


                factory.cache = data;

                //
                return fn( factory._filter(data, settings) );
            });
        }
    };


    return factory;
}];