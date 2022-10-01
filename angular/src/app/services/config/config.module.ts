import { APP_INITIALIZER, NgModule } from '@angular/core';
import { take } from 'rxjs';
import { ConfigService } from './config.service';

@NgModule({
    providers: [
        ConfigService,
        {
            provide: APP_INITIALIZER,
            multi: true,
            useFactory: (config: ConfigService) => {
                return () => {
                    console.log('praparing...');
                    
                    config.loadConfig();
                    console.log('loading...');
                    
                    return config.api$.pipe(take(1));
                }
            },
            deps: [ConfigService]
        }
    ]
})

export class ConfigModule { }