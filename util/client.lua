

Notify = function (title,description,type)

    if Config.notify == 'ox_lib' then
    lib.notify({
        title = title,
        description = description,
        type = type
    })
    else
        XNotify({
            title = title,
            icon = 'network_intelligence',
            duration = '2000',
            description = description,
        })
    end
end

NuiMessage = function (action,data)
    SendNUIMessage({
        action = action,
        data = data
    })
end



function PlayAudio(params)
    local audioName = params.audioName
    local audioRef = params.audioRef
    local returnSoundId = params.returnSoundId or false
    local source = params.audioSource
    local range = params.range or 5.0

    local soundId = GetSoundId()

    local sourceType = type(source)
    if sourceType == 'vector3' then
        local coords = source
        PlaySoundFromCoord(soundId, audioName, coords.x, coords.y, coords.z, audioRef, false, range, false)
    elseif sourceType == 'number' then
        PlaySoundFromEntity(soundId, audioName, source, audioRef, false, false)
    else
        PlaySoundFrontend(soundId, audioName, audioRef, true)
    end

    if returnSoundId then
        return soundId
    end

    ReleaseSoundId(soundId)
end