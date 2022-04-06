import { NestFactory } from '@nestjs/core'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function start() {
    try {
        const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), {
            logger: ['error', 'warn'],
        })

        app.enableCors({
            origin: true,
            allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
            methods: 'GET,PUT,POST,PATCH,DELETE,UPDATE',
            credentials: true,
        })

        app.setGlobalPrefix('v1')

        const config = new DocumentBuilder()
            .setTitle('PESAH 5782')
            .setDescription(`REST API documentation`)
            .setVersion('v1')
            .build()
        const document = SwaggerModule.createDocument(app, config)
        SwaggerModule.setup('/docs', app, document)

        await app.listen(5000, async () => console.log(`Server started on port ${await app.getUrl()}`))
    } catch (error) {
        console.log(error)
    }
}
start()
