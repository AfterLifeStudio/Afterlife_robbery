fx_version 'cerulean'
game 'gta5'
lua54 'yes'
use_experimental_fxv2_oal 'yes'

client_scripts {
    'util/client.lua',
    'framework/client/*.lua',
    'modules/*.lua',
    '@qbx_core/modules/playerdata.lua'
}

server_scripts {
    'framework/server/*.lua',
}

shared_scripts {
    '@ox_lib/init.lua',
    'shared.lua'
}



ui_page 'ui/dist/index.html'


files {
    'ui/dist/index.html',
	'ui/dist/assets/*.js',
    'ui/dist/assets/*.css',
    'ui/dist/assets/*.png',
    'ui/dist/assets/*.otf',
    'ui/dist/assets/*.mp3',
}

