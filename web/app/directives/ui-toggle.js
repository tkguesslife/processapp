define([], function(){

    function uiToggleClass($timeout, $document){
        return {
            restrict: 'AC',
            link: function(scope, el, attr) {
                el.on('click', function(e) {
                    e.preventDefault();
                    var classes = attr.uiToggleClass.split(','),
                        targets = (attr.target && attr.target.split(',')) || Array(el),
                        key = 0;
                    angular.forEach(classes, function( _class ) {
                        var target = targets[(targets.length && key)];
                        $( target ).toggleClass(_class);
                        key ++;
                    });
                    el.toggleClass('active');

                });
            }
        };
    }

    uiToggleClass.$inject = ['$timeout', '$document'];
    return uiToggleClass;
});