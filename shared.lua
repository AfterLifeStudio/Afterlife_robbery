Config = {}


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



Config.Zones = {
    {
        start = vec3(146.9526, -1046.1156, 29.3681),
        trolley = vec3(150.5140, -1046.2781, 28.346),
    }
}