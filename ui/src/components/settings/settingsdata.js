export const settingsdata = [
    {
        name: 'showhud',
        label: "Toggle Hud",
        description: "Enable or disable the visiblity of hud",
        icon: 'Visibility',
        show: true,
        value: true,
        type: 'button',
        category: 'general'
    },
    {
        name: 'cinematicmode',
        label: 'Cinemtic Mode',
        description: "Enable or disable the cinematic bars and hide the hud",
        icon: 'width_wide',
        show: true,
        value: false,
        type: 'button',
        category: 'general'
    },
    {
        name: 'showminimap',
        label: 'Toggle Minimap',
        description: "Enable or disable the visiblity of minimap",
        icon: 'public',
        show: true,
        value: true,
        type: 'button',
        category: 'minimap'
    },
    {
        name: 'playerstatus',
        label: 'Toggle Player Status',
        description: "Enable or disable the player status like hunger and stress etc",
        icon: 'favorite',
        show: true,
        value: true,
        type: 'button',
        category: 'minimap'
    },
    {
        name: 'minimapsize',
        label: 'Minimap Size',
        description: "Adjust the size of minimap size",
        icon: 'public',
        show: true,
        value: 50,
        type: 'slider',
        category: 'minimap'
    },
    {
        name: 'showspeedometer',
        label: 'Toggle Speedometer',
        description: "Enable or disable the speedometer of the hud",
        icon: 'speed',
        show: true,
        value: true,
        type: 'button',
        category: 'speedometer'
    },
    {
        name: 'speedometersize',
        label: 'Speedometer Scale',
        description: "Adjust the size of speedometer size",
        icon: 'swap_driving_apps_wheel',
        show: true,
        value: 50,
        type: 'slider',
        category: 'speedometer'
    },
    {
        name: 'mphkmh',
        label: 'Vehicle Speed Unit',
        description: "Change the speedometer speed unit",
        icon: 'readiness_score',
        show: true,
        value: true,
        option1: 'MPH',
        option2: 'KMH',
        type: 'select',
        category: 'speedometer'
    },
    {
        name: 'showcompass',
        label: 'Toggle Compass',
        description: "Enable or disable the compass of the hud",
        icon: 'explore_off',
        show: true,
        value: true,
        type: 'button',
        category: 'compass'
    },
    {
        name: 'compassize',
        label: 'Compass Scale',
        description: "Adjust the size of compasss size",
        icon: 'explore',
        show: true,
        value: 50,
        type: 'slider',
        category: 'compass'
    },
    {
        name: 'showstreet',
        label: 'Toggle Street Names',
        description: "Eenable or disable the streetname on the compass",
        icon: 'near_me',
        show: true,
        value: true,
        type: 'button',
        category: 'compass'
    },
    {
        name: 'seatbeltalarm',
        label: 'Toggle Seatbelt Alarm',
        description: "Enable or disable the seatbelt alarm when you are in vehicle",
        icon: 'notifications_active',
        show: true,
        value: true,
        type: 'button',
        category: 'speedometer'
    },
    {
        name: 'showinfo',
        label: 'Toggle Info',
        description: "Enable or disable the player info like Cash Bank and Job",
        icon: 'wallet',
        show: true,
        value: true,
        type: 'button',
        category: 'general'
    },
    {
        name: 'dynamicinfo',
        label: 'Toggle Dynamic Info',
        description: "Enable or disable the player info like Cash Bank and Job only when they get updated",
        icon: 'credit_card_off',
        show: true,
        value: true,
        type: 'button',
        category: 'general'
    },
];
