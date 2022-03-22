require(['gitbook', 'jquery'], function(gitbook, $) {
    var SITES = {
        'google': {
            'label': 'Google+',
            'icon': 'fa fa-google-plus',
            'onClick': function(e) {
                e.preventDefault();
                window.open('https://plus.google.com/share?url='+encodeURIComponent(location.href));
            }
        },
        'telegram': {
            'label': 'Telegram',
            'icon': 'fa fa-telegram',
            'onClick': function(e) {
                e.preventDefault();
                window.open('https://web.telegram.org/z/'+encodeURIComponent(location.href));
            }
        },
        'vk': {
            'label': 'VK',
            'icon': 'fa fa-vk',
            'onClick': function(e) {
                e.preventDefault();
                window.open('http://vk.com/share.php?url='+encodeURIComponent(location.href));
            }
        }
    };


    gitbook.events.bind('start', function(e, config) {
        var opts = config.sharing;

        // Create dropdown menu
        var menu = $.map(opts.all, function(id) {
            var site = SITES[id];

            return {
                text: site.label,
                onClick: site.onClick
            };
        });

        // Create main button with dropdown
        if (menu.length > 0) {
            gitbook.toolbar.createButton({
                icon: 'fa fa-share-alt',
                label: 'Share',
                position: 'right',
                dropdown: [menu]
            });
        }

        // Direct actions to share
        $.each(SITES, function(sideId, site) {
            if (!opts[sideId]) return;

            gitbook.toolbar.createButton({
                icon: site.icon,
                label: site.text,
                position: 'right',
                onClick: site.onClick
            });
        });
    });
});
