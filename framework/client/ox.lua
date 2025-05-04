if not (Config.framework == 'ox') then return end



RegisterNetEvent("ox:PlayerLoaded", function()
    local response = LoadHud()
    if response then
        DisplayHud(GlobalSettings.showhud)
        PlayerLoaded = true
    end
end)

AddEventHandler('onResourceStart', function(resourceName)
    if resourceName ~= GetCurrentResourceName() then return end
    Wait(1000)
    if player then
        local response = LoadHud()
        if response then
            DisplayHud(GlobalSettings.showhud)
            PlayerLoaded = true
        end
    end
end)


AddEventHandler('ox:statusTick', function(values)
    hunger = values.hunger
    thirst = values.thirst
    stress = values.stress
end)



Playerhaveitem = function(item)
    local count = exports.ox_inventory:Search('count', item)
    if count > 0 then 
        return true
    end
    return false
end


if (not Config.gps) then return end


AddEventHandler('ox_inventory:itemCount', function(itemName, totalCount)
    if itemName == Config.gpsitem and totalCount > 0 then
        TriggerEvent('Hud:updateSkullstatus', true)
    end
    if itemName == Config.gpsitem and totalCount == 0 then
        TriggerEvent('Hud:updateSkullstatus', false)
    end
end)

