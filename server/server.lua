
GlobalState.RobStatus = false



lib.callback.register('Server:Trigger:Robbery', function (source, index, heading)
    local data = Config.Zones[index]
    data.trolleyrobbed = false
    data.doorheading = heading
    GlobalState.RobStatus = data
end)