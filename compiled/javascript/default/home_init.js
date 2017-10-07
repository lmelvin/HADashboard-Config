$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Home");
    content_width = (120 + 5) * 7 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [120, 120],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 7,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-clock-clock" id="default-clock-clock"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 2, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-sensor-patio-door" id="default-sensor-patio-door"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-office-switch" id="default-office-switch"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 4, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-livingroom-tv-switch" id="default-livingroom-tv-switch"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 5, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-patio-switch" id="default-patio-switch"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 6, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-luke" id="default-luke"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 7, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-temperature" id="default-sensor-dark-sky-temperature"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclimate-default-climate-living-room" id="default-climate-living-room"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><div class="levelunit"><h2 class="level" data-bind="text: level, attr:{ style: level_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><div class="levelunit2"><p class="level2" data-bind="text: level2, attr:{style: level2_style}"></p><p class="unit2" data-bind="html: unit, attr:{style: unit2_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 2, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-sensor-font-door" id="default-sensor-font-door"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-bedroom-switch" id="default-bedroom-switch"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 4, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-bedroom-tv-switch" id="default-bedroom-tv-switch"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 5, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-roomba-switch" id="default-roomba-switch"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 6, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-dani" id="default-dani"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 7, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-reload-widget" id="default-reload-widget"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-navigate-roomba" id="default-navigate-roomba"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 2, 4)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-clock-clock"] = new baseclock("default-clock-clock", "", "default", {'css': {}, 'fields': {'time': '', 'date': ''}, 'static_css': {'time_style': 'color: #aa00ff;', 'date_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'static_icons': [], 'icons': [], 'entity': 'clock.clock', 'widget_type': 'baseclock', 'title_is_friendly_name': 1})
    
        widgets["default-sensor-patio-door"] = new baseswitch("default-sensor-patio-door", "", "default", {'state_text': 1, 'state_active': 'on', 'state_inactive': 'off', 'enable': 0, 'entity': 'binary_sensor.patio_sensor_patio', 'widget_type': 'baseswitch', 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #ff0055;'}, 'fields': {'title2': '', 'icon': '', 'state_text': '', 'title': 'Patio Door', 'icon_style': ''}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'static_icons': [], 'icons': {'icon_on': 'fa-bullseye', 'icon_off': 'fa-minus'}, 'state_map': {'off': 'Closed', 'on': 'Open'}})
    
        widgets["default-office-switch"] = new baseswitch("default-office-switch", "", "default", {'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.office_switch'}, 'entity': 'switch.office_switch', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'widget_type': 'baseswitch', 'icon_off': 'mdi-lamp', 'icons': {'icon_on': 'mdi-lamp', 'icon_off': 'mdi-lamp'}, 'icon_on': 'mdi-lamp', 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'fields': {'title2': '', 'icon': '', 'state_text': '', 'title': 'Office Lamp', 'icon_style': ''}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.office_switch'}, 'static_icons': []})
    
        widgets["default-livingroom-tv-switch"] = new baseswitch("default-livingroom-tv-switch", "", "default", {'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'remote.living_room_harmony'}, 'entity': 'remote.living_room_harmony', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'widget_type': 'baseswitch', 'icon_off': 'mdi-television', 'icons': {'icon_on': 'mdi-television', 'icon_off': 'mdi-television'}, 'icon_on': 'mdi-television', 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'fields': {'title2': '', 'icon': '', 'state_text': '', 'title': 'Living Room TV', 'icon_style': ''}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'remote.living_room_harmony'}, 'static_icons': []})
    
        widgets["default-patio-switch"] = new baseswitch("default-patio-switch", "", "default", {'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.ge_patio_switch_switch'}, 'entity': 'switch.ge_patio_switch_switch', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'widget_type': 'baseswitch', 'icon_off': 'mdi-lightbulb', 'icons': {'icon_on': 'mdi-lightbulb', 'icon_off': 'mdi-lightbulb'}, 'icon_on': 'mdi-lightbulb', 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'fields': {'title2': '', 'icon': '', 'state_text': '', 'title': 'Patio Switch', 'icon_style': ''}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.ge_patio_switch_switch'}, 'static_icons': []})
    
        widgets["default-luke"] = new baseswitch("default-luke", "", "default", {'post_service_inactive': {'service': 'device_tracker/see', 'dev_id': 'samsungsmg935a', 'location_name': 'not_home'}, 'state_text': 1, 'state_active': 'home', 'state_inactive': 'not_home', 'enable': 0, 'entity': 'device_tracker.samsungsmg935a', 'icon_off': 'fa-male', 'widget_type': 'baseswitch', 'icon_on': 'fa-male', 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'fields': {'title2': '', 'icon': '', 'state_text': '', 'title': 'Luke', 'icon_style': ''}, 'post_service_active': {'service': 'device_tracker/see', 'dev_id': 'samsungsmg935a', 'location_name': 'home'}, 'static_icons': [], 'icons': {'icon_on': 'fa-male', 'icon_off': 'fa-male'}, 'active_map': ['home'], 'state_map': {'not_home': 'AWAY', 'home': 'HOME'}})
    
        widgets["default-sensor-dark-sky-temperature"] = new basedisplay("default-sensor-dark-sky-temperature", "", "default", {'css': {'unit_style': 'color: #00aaff;font-size: 100%;', 'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;'}, 'fields': {'title2': '', 'value': '', 'state_text': '', 'title': '', 'unit': ''}, 'sub_entity': '', 'static_css': {'widget_style': 'background-color: #444;', 'unit_style': '', 'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'value_style': '', 'state_text_style': 'color: #fff;font-size: 100%;'}, 'title_is_friendly_name': 1, 'static_icons': [], 'entity': 'sensor.dark_sky_temperature', 'widget_type': 'basedisplay', 'icons': []})
    
        widgets["default-climate-living-room"] = new baseclimate("default-climate-living-room", "", "default", {'css': {}, 'fields': {'title2': '', 'title': '', 'level2': '', 'unit': '', 'level': ''}, 'post_service': {'service': 'climate/set_temperature', 'entity_id': 'climate.living_room'}, 'static_css': {'widget_style': 'background-color: #444;', 'unit_style': 'color: #00aaff;', 'level_up_style': 'color: #888;', 'unit2_style': 'color: #00aaff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'level2_style': 'color: #00aaff;', 'level_style': 'color: #00aaff;', 'level_down_style': 'color: #888;'}, 'title_is_friendly_name': 1, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'icons': [], 'entity': 'climate.living_room', 'widget_type': 'baseclimate'})
    
        widgets["default-sensor-font-door"] = new baseswitch("default-sensor-font-door", "", "default", {'state_text': 1, 'state_active': 'on', 'state_inactive': 'off', 'enable': 0, 'entity': 'binary_sensor.front_door_sensor_sensor', 'widget_type': 'baseswitch', 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #ff0055;'}, 'fields': {'title2': '', 'icon': '', 'state_text': '', 'title': 'Front Door', 'icon_style': ''}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'static_icons': [], 'icons': {'icon_on': 'fa-bullseye', 'icon_off': 'fa-minus'}, 'state_map': {'off': 'Closed', 'on': 'Open'}})
    
        widgets["default-bedroom-switch"] = new baseswitch("default-bedroom-switch", "", "default", {'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.centralite_4257050rzhac_04483b08_1'}, 'entity': 'light.centralite_4257050rzhac_04483b08_1', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'widget_type': 'baseswitch', 'icon_off': 'mdi-lamp', 'icons': {'icon_on': 'mdi-lamp', 'icon_off': 'mdi-lamp'}, 'icon_on': 'mdi-lamp', 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'fields': {'title2': '', 'icon': '', 'state_text': '', 'title': 'Bedroom Lamp', 'icon_style': ''}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.centralite_4257050rzhac_04483b08_1'}, 'static_icons': []})
    
        widgets["default-bedroom-tv-switch"] = new baseswitch("default-bedroom-tv-switch", "", "default", {'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'remote.bedroom_harmony'}, 'entity': 'remote.bedroom_harmony', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'widget_type': 'baseswitch', 'icon_off': 'mdi-television', 'icons': {'icon_on': 'mdi-television', 'icon_off': 'mdi-television'}, 'icon_on': 'mdi-television', 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'fields': {'title2': '', 'icon': '', 'state_text': '', 'title': 'Bedroom TV', 'icon_style': ''}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'remote.bedroom_harmony'}, 'static_icons': []})
    
        widgets["default-roomba-switch"] = new baseswitch("default-roomba-switch", "", "default", {'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'vacuum.roomba'}, 'entity': 'vacuum.roomba', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'widget_type': 'baseswitch', 'icon_off': 'mdi-roomba', 'icons': {'icon_on': 'mdi-roomba', 'icon_off': 'mdi-roomba'}, 'icon_on': 'mdi-roomba', 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'fields': {'title2': '', 'icon': '', 'state_text': '', 'title': 'Roomba', 'icon_style': ''}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'vacuum.roomba'}, 'static_icons': [], 'state_map': {'off': 'off', 'on': 'on'}})
    
        widgets["default-dani"] = new baseswitch("default-dani", "", "default", {'post_service_inactive': {'service': 'device_tracker/see', 'dev_id': 'lucass_iphone', 'location_name': 'not_home'}, 'state_text': 1, 'state_active': 'home', 'state_inactive': 'not_home', 'enable': 0, 'entity': 'device_tracker.lucass_iphone', 'icon_off': 'fa-female', 'widget_type': 'baseswitch', 'icon_on': 'fa-female', 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'fields': {'title2': '', 'icon': '', 'state_text': '', 'title': 'Dani', 'icon_style': ''}, 'post_service_active': {'service': 'device_tracker/see', 'dev_id': 'lucass_iphone', 'location_name': 'home'}, 'static_icons': [], 'icons': {'icon_on': 'fa-female', 'icon_off': 'fa-female'}, 'active_map': ['home'], 'state_map': {'not_home': 'AWAY', 'home': 'HOME'}})
    
        widgets["default-reload-widget"] = new javascript("default-reload-widget", "", "default", {'command': 'location.reload(true)', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon': '', 'title': 'Reload', 'icon_style': ''}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'static_icons': [], 'widget_type': 'javascript', 'icons': {'icon_inactive': 'fa-refresh', 'icon_active': 'fa-spinner fa-spin'}})
    
        widgets["default-navigate-roomba"] = new javascript("default-navigate-roomba", "", "default", {'icon_inactive': 'mdi-roomba', 'fields': {'title2': '', 'icon': '', 'title': 'Roomba Panel', 'icon_style': ''}, 'icons': {'icon_inactive': 'mdi-roomba', 'icon_active': 'fa-spinner fa-spin'}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'static_icons': [], 'dashboard': 'Roomba', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'widget_type': 'javascript'})
    

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