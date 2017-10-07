$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Roomba");
    content_width = (120 + 5) * 8 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [120, 120],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 8,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-panel-title" id="default-panel-title"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 2, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-roomba-switch" id="default-roomba-switch"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-roomba-battery" id="default-roomba-battery"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 4, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-roomba-bin-status" id="default-roomba-bin-status"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 5, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-reload-widget" id="default-reload-widget"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-navigate-home" id="default-navigate-home"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 2, 4)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-panel-title"] = new basedisplay("default-panel-title", "", "default", {'css': {}, 'fields': {'title2': '', 'value': 'Roomba Panel', 'state_text': '', 'title': '', 'unit': ''}, 'static_css': {'widget_style': 'background-color: #444;', 'unit_style': '', 'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'value_style': 'color: #fff;', 'state_text_style': 'color: #fff;'}, 'static_icons': [], 'widget_type': 'basedisplay', 'icons': []})
    
        widgets["default-roomba-switch"] = new baseswitch("default-roomba-switch", "", "default", {'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'vacuum.roomba'}, 'entity': 'vacuum.roomba', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'widget_type': 'baseswitch', 'icon_off': 'mdi-roomba', 'icons': {'icon_on': 'mdi-roomba', 'icon_off': 'mdi-roomba'}, 'icon_on': 'mdi-roomba', 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'fields': {'title2': '', 'icon': '', 'state_text': '', 'title': 'Roomba', 'icon_style': ''}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'vacuum.roomba'}, 'static_icons': [], 'state_map': {'off': 'off', 'on': 'on'}})
    
        widgets["default-roomba-battery"] = new basedisplay("default-roomba-battery", "", "default", {'css': {'unit_style': 'color: #00aaff;font-size: 100%;', 'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;'}, 'fields': {'title2': '', 'value': '', 'state_text': '', 'title': 'Battery', 'unit': ''}, 'sub_entity': '', 'static_css': {'widget_style': 'background-color: #444;', 'unit_style': '', 'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'value_style': '', 'state_text_style': 'color: #fff;font-size: 100%;'}, 'static_icons': [], 'entity': 'sensor.roomba_battery', 'widget_type': 'basedisplay', 'icons': []})
    
        widgets["default-roomba-bin-status"] = new baseswitch("default-roomba-bin-status", "", "default", {'entity': 'binary_sensor.roomba_bin_full', 'state_active': 'on', 'state_inactive': 'off', 'enable': 0, 'widget_type': 'baseswitch', 'icon_off': 'mdi-checkbox-marked-circle', 'icons': {'icon_on': 'mdi-alert-circle', 'icon_off': 'mdi-checkbox-marked-circle'}, 'icon_on': 'mdi-alert-circle', 'css': {'icon_style_inactive': 'color: rgb(170, 255, 0) ;', 'icon_style_active': 'color: rgb(255, 0, 85);'}, 'fields': {'title2': '', 'icon': '', 'state_text': '', 'title': 'Bin Status', 'icon_style': ''}, 'icon_style_inactive': 'color: rgb(170, 255, 0) ;', 'icon_style_active': 'color: rgb(255, 0, 85);', 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'static_icons': []})
    
        widgets["default-reload-widget"] = new javascript("default-reload-widget", "", "default", {'command': 'location.reload(true)', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon': '', 'title': 'Reload', 'icon_style': ''}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'static_icons': [], 'widget_type': 'javascript', 'icons': {'icon_inactive': 'fa-refresh', 'icon_active': 'fa-spinner fa-spin'}})
    
        widgets["default-navigate-home"] = new javascript("default-navigate-home", "", "default", {'icon_inactive': 'mdi-home', 'fields': {'title2': '', 'icon': '', 'title': 'Home Panel', 'icon_style': ''}, 'icons': {'icon_inactive': 'mdi-home', 'icon_active': 'fa-spinner fa-spin'}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'static_icons': [], 'dashboard': 'Home', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'widget_type': 'javascript'})
    

    // Setup click handler to cancel timeout navigations

    $( ".gridster" ).click(function(){
        clearTimeout(myTimeout);
    });

    // Set up timeout

    var myTimeout

    if (location.search != "")
    {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
        });

        if ("timeout" in result && "return" in result)
        {
            url = result.return
            argcount = 0
            for (arg in result)
            {
                if (arg != "timeout" && arg != "return")
                {
                    if (argcount == 0)
                    {
                        url += "?";
                    }
                    else
                    {
                        url += "?";
                    }
                    argcount ++;
                    url += arg + "=" + result[arg]
                }
            }
            myTimeout = setTimeout(function() { navigate(url); }, result.timeout * 1000);
        }
    }

    // Start listening for HA Events
    if (location.protocol == 'https:')
    {
        wsprot = "wss:"
    }
    else
    {
        wsprot = "ws:"
    }
    var stream_url = wsprot + '//' + location.host + '/stream'
    ha_status(stream_url, "Roomba", widgets);

});