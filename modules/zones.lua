ESX = exports['es_extended']:getSharedObject()

local alreadyinzone = false 
local trolley

CreateThread( function ()
       
    while true do
        local sleep = 1000

        for i = 1,#Config.Zones do
            local inzone = false
            local data = Config.Zones[i]
            local pedcoords = GetEntityCoords(PlayerPedId())
            local distance = #(data.start - pedcoords)

            if distance < 10 then
                inzone = true
            end

            if distance < 1 then
                sleep = 0
                HelpText('~INPUT_CONTEXT~ Hacking',true)
                if  IsControlJustReleased(0, 38) then
                    if GlobalState.RobStatus then
                        Notify('Fleeca Bank', 'A Robbery is in Progress', 'error')
                    else
                        local model = 'v_ilev_gb_vauldr'
                        local obj = GetClosestObjectOfType(data.start.x,data.start.y,data.start.z,5,model,false,false,false)
                        local doorheading = GetEntityHeading(obj) + -80
                        SetEntityHeading(obj, doorheading)
                        trolley = CreateObject(GetHashKey("hei_prop_hei_cash_trolly_01"), data.trolley.x, data.trolley.y,data.trolley.z, false, 1, 0)
                        lib.callback.await('Server:Trigger:Robbery', false, i, doorheading)
                    end
                
                end
            end


            if inzone and not alreadyinzone then
                alreadyinzone = true
                if GlobalState.RobStatus then
                    local model = 'v_ilev_gb_vauldr'
                    local obj = GetClosestObjectOfType(data.start.x, data.start.y, data.start.z, 5, model, false, false,
                        false)

                    SetEntityHeading(obj, GlobalState.RobStatus.doorheading)
                end
            end
    
            if not inzone and alreadyinzone then
                DeleteObject(trolley)
                alreadyinzone = false
            end
        end


        Wait(sleep)
    end
end)


CreateThread( function ()
   while true do
    if alreadyinzone and GlobalState.RobStatus then
        local robdata = GlobalState.RobStatus
        local pedcoords = GetEntityCoords(PlayerPedId())
        local trolleycoords = robdata.trolley
        
        local distance = #(pedcoords - trolleycoords)

        if distance < 1.5 then
            HelpText('~INPUT_CONTEXT~ Hacking',true)
            if  IsControlJustReleased(0, 38) then
                GrabTrolly(trolleycoords)
            end
        end
    end
    
    Wait(0)
   end 
end)
