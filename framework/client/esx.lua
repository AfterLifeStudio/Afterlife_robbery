if not (Config.framework == 'esx') then return end

local ESX = exports['es_extended']:getSharedObject()


RegisterNetEvent('esx:playerLoaded')
AddEventHandler('esx:playerLoaded',function(xPlayer, isNew, skin)
    ESX.PlayerData = xPlayer

    
    previouscash, previousbank = UpdateAccounts(xPlayer.accounts)
    cash, bank = UpdateAccounts(xPlayer.accounts)
    job = xPlayer.job.name
    grade = xPlayer.job.grade_label


    local response = LoadHud()
    if response then
        DisplayHud(GlobalSettings.showhud)
        PlayerLoaded = true
    end
end)


AddEventHandler('onResourceStart', function(resourceName)
    Wait(1000)
    if resourceName ~= GetCurrentResourceName() then return end
    if ESX.IsPlayerLoaded() then
        ESX.PlayerData = ESX.GetPlayerData()
        job = ESX.PlayerData.job.name
        grade = ESX.PlayerData.job.grade_label
        previouscash, previousbank = UpdateAccounts(ESX.PlayerData.accounts)
        cash, bank = UpdateAccounts(ESX.PlayerData.accounts)

        local response = LoadHud()
        if response then
            DisplayHud(GlobalSettings.showhud)
            PlayerLoaded = true
        end
    end
end)

RegisterNetEvent('esx:setAccountMoney', function(account)
    if account.name == 'money' then
        cash = account.money
    elseif account.name == 'bank' then
        bank = account.money
    end
end)

AddEventHandler('esx_status:onTick', function(data)
    for i = 1, #data do
        if data[i].name == 'thirst' then thirst = math.floor(data[i].percent) end
        if data[i].name == 'hunger' then hunger = math.floor(data[i].percent) end
        if data[i].name == 'stress' then stress = math.floor(data[i].percent) end
    end
end)



RegisterNetEvent('esx:setJob')
AddEventHandler('esx:setJob', function(jobd)
    job = jobd.name
    grade = jobd.grade_label
end)


UpdateAccounts = function(accounts)
    if accounts == nil then return end

    local tempCash, tempBank

    for _, data in pairs(accounts) do
        if data.name == 'bank' then
            tempBank = data.money
        elseif data.name == 'money' then
            tempCash = data.money
        end
    end

    return tempCash, tempBank
end



UpdateStress = function()
    Notify('Alert','You are getting stressed', 'info')
    TriggerEvent('esx_status:add', 'stress', 60000)
end


AddEventHandler('esx_basicneeds:resetStatus', function()
    TriggerEvent('esx_status:set', 'stress', 0)
end)

RegisterNetEvent('esx_basicneeds:healPlayer')
AddEventHandler('esx_basicneeds:healPlayer', function()
    TriggerEvent('esx_status:set', 'stress', 0)
end)



AddEventHandler('esx_status:loaded', function(status)
    TriggerEvent('esx_status:registerStatus', 'stress', 1000000, '#0C98F1', function(status)
        return true
    end, function(status)
        status.remove(1000000)
    end)
end)


Playerhaveitem = function(playerdata,item)
    local inventory = ESX.PlayerData
    for i = 1, #inventory do
        if inventory[i].name == item then
            return true
        end
    end
    return false
end


if (not Config.gps) then return end

RegisterNetEvent('esx:addInventoryItem', function(item)
    if item == Config.gpsitem then
        TriggerEvent('Hud:updateSkullstatus', true)
    end
end)

RegisterNetEvent('esx:removeInventoryItem', function(item)
    if item == Config.gpsitem then
        TriggerEvent('Hud:updateSkullstatus', false)
    end
end)
