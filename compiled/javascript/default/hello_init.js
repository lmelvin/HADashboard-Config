$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Home");
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
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-binary-sensor-patio-sensor-patio" id="default-binary-sensor-patio-sensor-patio"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-binary-sensor-front-door-sensor-sensor" id="default-binary-sensor-front-door-sensor-sensor"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-switch-wemo-switch" id="default-switch-wemo-switch"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-switch-ge-patio-switch-switch" id="default-switch-ge-patio-switch-switch"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 4, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-label" id="default-label"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 2, 1, 2)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-binary-sensor-patio-sensor-patio"] = new baseswitch("default-binary-sensor-patio-sensor-patio", "", "default", {'css': {'icon_style_active': 'color: #ff0055;', 'icon_style_inactive': 'color: #888;'}, 'widget_type': 'baseswitch', 'enable': 0, 'icons': {'icon_off': 'fa-minus', 'icon_on': 'fa-bullseye'}, 'static_icons': [], 'fields': {'title': '', 'icon': '', 'title2': '', 'state_text': '', 'icon_style': ''}, 'title_is_friendly_name': 1, 'state_active': 'on', 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;'}, 'state_inactive': 'off', 'entity': 'binary_sensor.patio_sensor_patio'})
    
        widgets["default-binary-sensor-front-door-sensor-sensor"] = new baseswitch("default-binary-sensor-front-door-sensor-sensor", "", "default", {'css': {'icon_style_active': 'color: #ff0055;', 'icon_style_inactive': 'color: #888;'}, 'widget_type': 'baseswitch', 'enable': 0, 'icons': {'icon_off': 'fa-minus', 'icon_on': 'fa-bullseye'}, 'static_icons': [], 'fields': {'title': '', 'icon': '', 'title2': '', 'state_text': '', 'icon_style': ''}, 'title_is_friendly_name': 1, 'state_active': 'on', 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;'}, 'state_inactive': 'off', 'entity': 'binary_sensor.front_door_sensor_sensor'})
    
        widgets["default-switch-wemo-switch"] = new baseswitch("default-switch-wemo-switch", "", "default", {'post_service_inactive': {'entity_id': 'switch.wemo_switch', 'service': 'homeassistant/turn_off'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'widget_type': 'baseswitch', 'entity': 'switch.wemo_switch', 'icons': {'icon_off': 'fa-circle-thin', 'icon_on': 'fa-circle'}, 'static_icons': [], 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;'}, 'enable': 1, 'state_active': 'on', 'fields': {'title': '', 'icon': '', 'title2': '', 'state_text': '', 'icon_style': ''}, 'post_service_active': {'entity_id': 'switch.wemo_switch', 'service': 'homeassistant/turn_on'}, 'title_is_friendly_name': 1, 'state_inactive': 'off'})
    
        widgets["default-switch-ge-patio-switch-switch"] = new baseswitch("default-switch-ge-patio-switch-switch", "", "default", {'post_service_inactive': {'entity_id': 'switch.ge_patio_switch_switch', 'service': 'homeassistant/turn_off'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'widget_type': 'baseswitch', 'entity': 'switch.ge_patio_switch_switch', 'icons': {'icon_off': 'fa-circle-thin', 'icon_on': 'fa-circle'}, 'static_icons': [], 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;'}, 'enable': 1, 'state_active': 'on', 'fields': {'title': '', 'icon': '', 'title2': '', 'state_text': '', 'icon_style': ''}, 'post_service_active': {'entity_id': 'switch.ge_patio_switch_switch', 'service': 'homeassistant/turn_on'}, 'title_is_friendly_name': 1, 'state_inactive': 'off'})
    
        widgets["default-label"] = new basedisplay("default-label", "", "default", {'static_css': {'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'unit_style': '', 'value_style': 'color: #fff;', 'state_text_style': 'color: #fff;'}, 'fields': {'value': 'Hello World', 'title': '', 'title2': '', 'state_text': '', 'unit': ''}, 'icons': [], 'static_icons': [], 'widget_type': 'basedisplay', 'css': {}})
    

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
    ha_status(stream_url, "Home", widgets);

});