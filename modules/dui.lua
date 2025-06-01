local function DrawTextureIn3D(x, y, z)
	local onScreen, _x, _y = World3dToScreen2d(x, y, z)
	local camCoords = GetGameplayCamCoords()
	local dist = #(vector3(x, y, z) - camCoords)

	local scale = 1 / dist * 2
	local fov = (1 / GetGameplayCamFov()) * 100
	scale = scale * fov

	if onScreen then
		DrawSprite("myTxd", "myTex", _x, _y, 0.1 * scale, 0.1 * scale, 0.0, 255, 255, 255, 255)
	end
end


--v_corp_bk_secpanel


CreateThread(function()
Wait(1000)

		-- SendNuiMessage(json.encode({action = 'desktop', data = true}))

	local txd = CreateRuntimeTxd("myTxd")
	local duiObj = CreateDui(
		'https://cfx-nui-Afterlife_robbery/ui/dist/index.html',
		1920, 1920) -- Create a DUI from an image
	local duiHandle = GetDuiHandle(duiObj)
	local tex = CreateRuntimeTextureFromDuiHandle(txd, "myTex", duiHandle)
	CommitRuntimeTexture(tex)

	local coords = GetEntityCoords(PlayerPedId())
	local screen = GetClosestObjectOfType(coords.x, coords.y, coords.z, 2.0, 'prop_monitor_01a', 0, 0, 0)
	-- AddReplaceTexture('prop_desk_monitor', 'prop_monitor_desktop_01', "myTxd", "myTex")

	Wait(1000)

	SendDuiMessage(duiObj,json.encode({action = 'desktop', data = true}))
	
	CreateThread(function()
		while true do
			DrawTextureIn3D(155.3087, -1033.7758, 29.3048)

			Wait(0)	
		end
	end)


end)
