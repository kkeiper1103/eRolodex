/**
 * Created by kkeiper1103 on 10/7/2015.
 */

module.exports = [function() {

    var title = "eRolodex";

    return {
        get: function() {
            return title;
        },
        set: function(value) {
            title = value;
        }
    };
}];