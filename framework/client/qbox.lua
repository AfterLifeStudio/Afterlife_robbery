if not (Config.framework == 'qbx') then return end


RegisterNetEvent("QBCore:Client:OnPlayerLoaded", function()
    playerjob = QBX.PlayerData.job.name
    job = QBX.PlayerData.job.label
    grade = QBX.PlayerData.job.grade.name
    previouscash = QBX.PlayerData.money.cash
    previousbank = QBX.PlayerData.money.bank
    cash = QBX.PlayerData.money.cash
    bank = QBX.PlayerData.money.bank
    stress = QBX.PlayerData.metadata.stress
    hunger = QBX.PlayerData.metadata.hunger
    thirst = QBX.PlayerData.metadata.thirst

    local response = LoadHud()
    if response then
        DisplayHud(GlobalSettings.showhud)
        PlayerLoaded = true
    end
end)

AddEventHandler('onResourceStart', function(resourceName)
    if resourceName ~= GetCurrentResourceName() then return end
    Wait(1000)
    if QBX.PlayerData then
        playerjob = QBX.PlayerData.job.name
        job = QBX.PlayerData.job.label
        grade = QBX.PlayerData.job.grade.name
        previouscash = QBX.PlayerData.money.cash
        previousbank = QBX.PlayerData.money.bank
        cash = QBX.PlayerData.money.cash
        bank = QBX.PlayerData.money.bank
        stress = QBX.PlayerData.metadata.stress
        hunger = QBX.PlayerData.metadata.hunger
        thirst = QBX.PlayerData.metadata.thirst

        local response = LoadHud()
        if response then
            DisplayHud(GlobalSettings.showhud)
            PlayerLoaded = true
        end
    end
end)


RegisterNetEvent('QBCore:Client:OnJobUpdate', function(jobs)
    playerjob = jobs.name
    job = jobs.label
    grade = jobs.grade.name
end)




RegisterNetEvent('hud:client:UpdateNeeds', function(newHunger, newThirst)
    hunger = newHunger
    thirst = newThirst
end)

RegisterNetEvent('hud:client:UpdateStress', function(newStress)
    stress = newStress
end)



RegisterNetEvent('hud:client:OnMoneyChange', function(type, amount, isMinus)
    cash = QBX.PlayerData.money.cash
    bank = QBX.PlayerData.money.bank
end)



function UpdateStress()
    Notify('Alert','You are getting stressed', 'info')
    TriggerServerEvent('hud:server:GainStress', math.random(1, 3))
end



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


