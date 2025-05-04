Config = {}

--  setr game_enableFlyThroughWindscreen true
--  add this in the server.cfg for the seatbelt to work

Config.seatbelt = 'b'
Config.settingskey = 'i'


GetFuel = function(vehicle)
    local fuel = math.ceil(GetVehicleFuelLevel(vehicle)) -- change this according to your exports for the fuel system
    return fuel
end

GetVehicleDamage = function (vehicle)
    local damage = math.ceil(GetEntityHealth(vehicle) / 10)
    return damage
end

GetVehicleMileage = function (plate)
    local distance, unit = lib.callback.await('jg-vehiclemileage:server:get-mileage',false, plate)
    return distance.mileage
end

GetFramework = function()
    if GetResourceState('es_extended') ~= 'missing' then
        return 'esx'
    elseif GetResourceState('qbx_core') ~= 'missing' then
        return 'qbx'
    elseif GetResourceState('qb-core') ~= 'missing' then
        return 'qb'
    elseif GetResourceState('ox_core') ~= 'missing' then
        return 'ox'
    end
end

Config.framework = GetFramework() -- qb / esx /qbox /ox

------- Info
Config.infocommmands = true -- /job /cash /bank command 

------- Minimap

Config.maxminimapzone = false

------- Speedometer Configuration

-- you can increase them inorder to increase performance
Config.speedometerspeed = 50 -- how many millisecond it will delay before updating the speedometer again
Config.compassspeed = 100     -- how many millisecond it will delay before updating the compass again
Config.mileage = false

------- Settings Configuration
Config.settingscommand = 'hud' 

Config.notify = 'xhud' -- ox_lib or xhud
--------DONT CHANGE ANYTHING IF YOU DONT KNOW WHAT YOU ARE DOING
Config.settings = {
    {
        name = 'showhud',
        label = "Toggle Hud",
        description = "Enable or disable the visiblity of hud",
        icon = 'Visibility',
        show = true,
        value = true,
        type = 'button',
        category = 'general'
    },
    {
        name = 'cinematicmode',
        label = 'Cinemtic Mode',
        description = "Enable or disable the cinematic bars and hide the hud",
        icon = 'width_wide',
        show = true,
        value = false,
        type = 'button',
        category = 'general'
    },
    {
        name = 'showminimap',
        label = 'Toggle Minimap',
        description = "Enable or disable the visiblity of minimap",
        icon = 'public',
        show = true,
        value = true,
        type = 'button',
        category = 'minimap'
    },
    {
        name = 'playerstatus',
        label = 'Toggle Player Status',
        description = "Enable or disable the player status like hunger and stress etc",
        icon = 'favorite',
        show = true,
        value = true,
        type = 'button',
        category = 'minimap'
    },
    {
        name = 'vehicleminimap',
        label = 'Vehicle Only Mininmap',
        description = 'Activate minimap only when you are inside a vehicle',
        icon = 'swap_driving_apps_wheel',
        show = true,
        value = false,
        type = 'button',
        category = 'minimap'
    },
    {
        name = 'minimapsize',
        label = 'Minimap Size',
        description = "Adjust the size of minimap size",
        icon = 'public',
        show = true,
        value = 50,
        type = 'slider',
        category = 'minimap'
    },
    {
        name = 'showspeedometer',
        label = 'Toggle Speedometer',
        description = "Enable or disable the speedometer of the hud",
        icon = 'speed',
        show = true,
        value = true,
        type = 'button',
        category = 'speedometer'
    },
    {
        name = 'speedometersize',
        label = 'Speedometer Scale',
        description = "Adjust the size of speedometer size",
        icon = 'swap_driving_apps_wheel',
        show = true,
        value = 50,
        type = 'slider',
        category = 'speedometer'
    },
    {
        name = 'mphkmh',
        label = 'Vehicle Speed Unit',
        description = "Change the speedometer speed unit",
        icon = 'readiness_score',
        show = true,
        value = true,
        option1 = 'MPH',
        option2 = 'KMH',
        type = 'select',
        category = 'speedometer'
    },
    {
        name = 'showcompass',
        label = 'Toggle Compass',
        description = "Enable or disable the compass of the hud",
        icon = 'explore_off',
        show = true,
        value = true,
        type = 'button',
        category = 'compass'
    },
    {
        name = 'compassize',
        label = 'Compass Scale',
        description = "Adjust the size of compasss size",
        icon = 'explore',
        show = true,
        value = 50,
        type = 'slider',
        category = 'compass'
    },
    {
        name = 'showstreet',
        label = 'Toggle Street Names',
        description = "Eenable or disable the streetname on the compass",
        icon = 'near_me',
        show = true,
        value = true,
        type = 'button',
        category = 'compass'
    },
    {
        name = 'seatbeltalarm',
        label = 'Toggle Seatbelt Alarm',
        description = "Enable or disable the seatbelt alarm when you are in vehicle",
        icon = 'notifications_active',
        show = true,
        value = true,
        type = 'button',
        category = 'speedometer'
    },
    {
        name = 'showinfo',
        label = 'Toggle Info',
        description = "Enable or disable the player info like Cash Bank and Job",
        icon = 'wallet',
        show = true,
        value = true,
        type = 'button',
        category = 'general'
    },
    {
        name = 'dynamicinfo',
        label = 'Toggle Dynamic Info',
        description = "Enable or disable the player info like Cash Bank and Job only when they get updated",
        icon = 'credit_card_off',
        show = true,
        value = true,
        type = 'button',
        category = 'general'
    },
}






-- Stress Configuration

Config.StressChance = 0.1         -- Default: 10% -- Percentage Stress Chance When Shooting (0-1)
Config.MinimumStress = 50         -- Minimum Stress Level For Screen Shaking
Config.MinimumSpeedUnbuckled = 50 -- Going Over This Speed Will Cause Stress
Config.MinimumSpeed = 100         -- Going Over This Speed Will Cause Stress

Config.disablestressjobs = {
    police = true,
    ambulance = true,
}

Config.BlacklistVehicle = {
    'jet'
}

Config.WhitelistedWeaponStress = {
    `weapon_petrolcan`,
    `weapon_hazardcan`,
    `weapon_fireextinguisher`
}


Config.BlurIntensity = {
    {
        min = 50,
        max = 60,
        intensity = 1500,
    },
    {
        min = 60,
        max = 70,
        intensity = 2000,
    },
    {
        min = 70,
        max = 80,
        intensity = 2500,
    },
    {
        min = 80,
        max = 90,
        intensity = 2700,
    },
    {
        min = 90,
        max = 100,
        intensity = 3000,
    },
}

Config.EffectInterval = {
    {
        min = 50,
        max = 60,
        timeout = math.random(50000, 60000)
    },
    {
        min = 60,
        max = 70,
        timeout = math.random(40000, 50000)
    },
    {
        min = 70,
        max = 80,
        timeout = math.random(30000, 40000)
    },
    {
        min = 80,
        max = 90,
        timeout = math.random(20000, 30000)
    },
    {
        min = 90,
        max = 100,
        timeout = math.random(15000, 20000)
    }
}
