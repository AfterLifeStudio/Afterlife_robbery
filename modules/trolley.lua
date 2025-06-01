Trolly = {
    ['objects'] = {
        'hei_p_m_bag_var22_arm_s'
    },
    ['animations'] = {
        {'intro', 'bag_intro'},
        {'grab', 'bag_grab', 'cart_cash_dissapear'},
        {'exit', 'bag_exit'}
    },
    ['scenes'] = {}
}

function GrabTrolly(coords)
    grabNow = true
    robber = true
    -- TriggerServerEvent('fleecaheist:server:lootSync', index, 'trollys', k)
    local ped = PlayerPedId()
    local pedCo, pedRotation = GetEntityCoords(ped), vector3(0.0, 0.0, 0.0)

    local animDict = 'anim@heists@ornate_bank@grab_cash'

        grabModel = 'hei_prop_heist_cash_pile'

    loadAnimDict(animDict)
    loadModel('hei_p_m_bag_var22_arm_s')

    sceneObject = GetClosestObjectOfType(coords.x,coords.y,coords.z, 2.0, 'hei_prop_hei_cash_trolly_01', 0, 0, 0)

    bag = CreateObject(GetHashKey("hei_p_m_bag_var22_arm_s"), pedCo.x,pedCo.y,pedCo.z, true, false, false)

    while not NetworkHasControlOfEntity(sceneObject) do
        Citizen.Wait(1)
        NetworkRequestControlOfEntity(sceneObject)
    end

    local sceneObjectcoords = GetEntityCoords(sceneObject)
    local sceneObjectrotation = GetEntityRotation(sceneObject)
    for i = 1, #Trolly['animations'] do
        Trolly['scenes'][i] = NetworkCreateSynchronisedScene(sceneObjectcoords.x, sceneObjectcoords.y,sceneObjectcoords.z, sceneObjectrotation.x, sceneObjectrotation.y, sceneObjectrotation.z, 2, true, false,1065353216, 0, 1.3)

        NetworkAddPedToSynchronisedScene(ped, Trolly['scenes'][i], animDict, Trolly['animations'][i][1], 1.5, -4.0, 1, 16,1148846080, 0)
        NetworkAddEntityToSynchronisedScene(bag, Trolly['scenes'][i], animDict, Trolly['animations'][i][2], 4.0, -8.0, 1)
        if i == 2 then
            print(Trolly['scenes'][i],i)
            NetworkAddEntityToSynchronisedScene(sceneObject, Trolly['scenes'][i], animDict, "cart_cash_dissapear", 4.0,-8.0, 1)
                  print(Trolly['scenes'][i],i)
        end
    end

    NetworkStartSynchronisedScene(Trolly['scenes'][1])
    Wait(1750)
    CashAppear(grabModel)
    NetworkStartSynchronisedScene(Trolly['scenes'][2])
    Wait(37000)
    NetworkStartSynchronisedScene(Trolly['scenes'][3])
    Wait(2000)

    local emptyobj = 769923921
    newTrolly = CreateObject(emptyobj, coords, true, false, false)
    SetEntityRotation(newTrolly, 0, 0, GetEntityHeading(sceneObject), 1, 0)
    -- DeleteObject(sceneObject)
    DeleteObject(bag)
    grabNow = false
end




function CashAppear(grabModel)
    local ped = PlayerPedId()
    local pedCoords = GetEntityCoords(ped)

    -- if grabModel == 'ch_prop_vault_dimaondbox_01a' then
    --     reward = Config['FleecaMain']['rewardItems']['diamondTrolly']
    -- elseif grabModel == 'ch_prop_gold_bar_01a' then
    --     reward = Config['FleecaMain']['rewardItems']['goldTrolly']
    -- elseif grabModel == 'hei_prop_heist_cash_pile' then
    --     reward = Config['FleecaMain']['rewardItems']['cashTrolly']
    -- end

    local grabmodel = GetHashKey(grabModel)

    loadModel(grabmodel)

    local grabobj = CreateObject(grabmodel, pedCoords.x,pedCoords.y,pedCoords.z, true, false, false)

    FreezeEntityPosition(grabobj, true)
    SetEntityInvincible(grabobj, true)
    SetEntityNoCollisionEntity(grabobj, ped)
    SetEntityVisible(grabobj, false, false)
    AttachEntityToEntity(grabobj, ped, GetPedBoneIndex(ped, 60309), 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, false, false, false, false, 0, true)
    local startedGrabbing = GetGameTimer()

    Citizen.CreateThread(function()
        while GetGameTimer() - startedGrabbing < 37000 do
            Citizen.Wait(1)
            DisableControlAction(0, 73, true)

            if HasAnimEventFired(ped, GetHashKey("CASH_APPEAR")) then
                if not IsEntityVisible(grabobj) then
                    SetEntityVisible(grabobj, true, false)
                end
            end
            if HasAnimEventFired(ped, GetHashKey("RELEASE_CASH_DESTROY")) then
                if IsEntityVisible(grabobj) then
                    SetEntityVisible(grabobj, false, false)
                    -- TriggerServerEvent('fleecaheist:server:rewardItem', reward)
                end
            end
        end
        DeleteObject(grabobj)
    end)
end





function loadAnimDict(dict)
    while not HasAnimDictLoaded(dict) do
        RequestAnimDict(dict)
        Citizen.Wait(50)
    end
end

function loadModel(model)
    if type(model) == 'number' then
        model = model
    else
        model = GetHashKey(model)
    end
    while not HasModelLoaded(model) do
        RequestModel(model)
        Citizen.Wait(0)
    end
end

function ShowHelpNotification(text)
    SetTextComponentFormat("STRING")
    AddTextComponentString(text)
    DisplayHelpTextFromStringLabel(0, 0, 1, 50)
end

function ShowNotification(msg)
	SetNotificationTextEntry('STRING')
	AddTextComponentString(msg)
	DrawNotification(0,1)
end
