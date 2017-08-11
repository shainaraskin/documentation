$(document).ready(function() {

    $('.carousel').carousel({
        interval: 7000,
        pause: false
    });

    $('.carousel').on('mouseenter', function() {
        $('.carousel').carousel("pause");
    });

    $('.carousel').on('mouseleave', function() {
        $('.carousel').carousel("cycle");
    });

});


// Multiple language functionality
// $(document).ready(function() {
// 	var collection = []
// 	$('pre').each(function() {
// 	    var nextBox = $(this).next().is('pre')
// 			collection.push($(this))
// 			if(!nextBox) {
//         var container = $('<div class="code-block"></div>')
// 				container.append(langSelector(collection))
//         container.insertBefore(collection[0])
//         for(i=0;i<collection.length;i++) {
//           collection[i].appendTo(container)
//         }
//         collection = []
// 	    }
//
// 	})
//
// 	function langSelector(collection) {
// 		var el = $('<div class="lang-selector"></div>')
// 		var buttons = collection.map(function(item){
// 			var lang = $(item).children('code').attr('class').substring(5)
// 			return $('<span>' + lang + '</span>')
// 		})
// 		el.append(buttons)
// 		return el
// 	}

});
