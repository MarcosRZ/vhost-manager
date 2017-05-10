module.exports = {
	port: 8080,
	appsDir: './apps/',
	apps: [
                {
                        script: 'movapp/app',
                        subdomain: 'movapp.localhost'
                }
        ]

}
