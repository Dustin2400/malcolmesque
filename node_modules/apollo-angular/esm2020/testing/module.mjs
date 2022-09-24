import { ApolloModule } from 'apollo-angular';
import { ApolloLink, InMemoryCache, } from '@apollo/client/core';
import { NgModule, InjectionToken, Inject, Optional } from '@angular/core';
import { ApolloTestingController } from './controller';
import { ApolloTestingBackend } from './backend';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
import * as i2 from "./backend";
import * as i3 from "@apollo/client/core";
export const APOLLO_TESTING_CACHE = new InjectionToken('apollo-angular/testing cache');
export const APOLLO_TESTING_NAMED_CACHE = new InjectionToken('apollo-angular/testing named cache');
export const APOLLO_TESTING_CLIENTS = new InjectionToken('apollo-angular/testing named clients');
function addClient(name, op) {
    op.clientName = name;
    return op;
}
export class ApolloTestingModuleCore {
    constructor(apollo, backend, namedClients, cache, namedCaches) {
        function createOptions(name, c) {
            return {
                link: new ApolloLink((operation) => backend.handle(addClient(name, operation))),
                cache: c ||
                    new InMemoryCache({
                        addTypename: false,
                    }),
            };
        }
        apollo.create(createOptions('default', cache));
        if (namedClients && namedClients.length) {
            namedClients.forEach((name) => {
                const caches = namedCaches && typeof namedCaches === 'object' ? namedCaches : {};
                apollo.createNamed(name, createOptions(name, caches[name]));
            });
        }
    }
}
ApolloTestingModuleCore.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: ApolloTestingModuleCore, deps: [{ token: i1.Apollo }, { token: i2.ApolloTestingBackend }, { token: APOLLO_TESTING_CLIENTS, optional: true }, { token: APOLLO_TESTING_CACHE, optional: true }, { token: APOLLO_TESTING_NAMED_CACHE, optional: true }], target: i0.ɵɵFactoryTarget.NgModule });
ApolloTestingModuleCore.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: ApolloTestingModuleCore, imports: [ApolloModule] });
ApolloTestingModuleCore.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: ApolloTestingModuleCore, providers: [
        ApolloTestingBackend,
        { provide: ApolloTestingController, useExisting: ApolloTestingBackend },
    ], imports: [[ApolloModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: ApolloTestingModuleCore, decorators: [{
            type: NgModule,
            args: [{
                    imports: [ApolloModule],
                    providers: [
                        ApolloTestingBackend,
                        { provide: ApolloTestingController, useExisting: ApolloTestingBackend },
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i1.Apollo }, { type: i2.ApolloTestingBackend }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [APOLLO_TESTING_CLIENTS]
                }] }, { type: i3.ApolloCache, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [APOLLO_TESTING_CACHE]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [APOLLO_TESTING_NAMED_CACHE]
                }] }]; } });
export class ApolloTestingModule {
    static withClients(names) {
        return {
            ngModule: ApolloTestingModuleCore,
            providers: [
                {
                    provide: APOLLO_TESTING_CLIENTS,
                    useValue: names,
                },
            ],
        };
    }
}
ApolloTestingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: ApolloTestingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ApolloTestingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: ApolloTestingModule, imports: [ApolloTestingModuleCore] });
ApolloTestingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: ApolloTestingModule, imports: [[ApolloTestingModuleCore]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: ApolloTestingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [ApolloTestingModuleCore],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdGVzdGluZy9zcmMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQVMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQ0wsVUFBVSxFQUVWLGFBQWEsR0FFZCxNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3JELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLFdBQVcsQ0FBQzs7Ozs7QUFLL0MsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxjQUFjLENBQ3BELDhCQUE4QixDQUMvQixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQUcsSUFBSSxjQUFjLENBQzFELG9DQUFvQyxDQUNyQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxjQUFjLENBQ3RELHNDQUFzQyxDQUN2QyxDQUFDO0FBRUYsU0FBUyxTQUFTLENBQUMsSUFBWSxFQUFFLEVBQWlCO0lBQy9DLEVBQWdCLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUVwQyxPQUFPLEVBQWUsQ0FBQztBQUN6QixDQUFDO0FBU0QsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUNFLE1BQWMsRUFDZCxPQUE2QixFQUc3QixZQUF1QixFQUd2QixLQUF3QixFQUd4QixXQUFpQjtRQUVqQixTQUFTLGFBQWEsQ0FBQyxJQUFZLEVBQUUsQ0FBMkI7WUFDOUQsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSSxVQUFVLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUNqQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FDM0M7Z0JBQ0QsS0FBSyxFQUNILENBQUM7b0JBQ0QsSUFBSSxhQUFhLENBQUM7d0JBQ2hCLFdBQVcsRUFBRSxLQUFLO3FCQUNuQixDQUFDO2FBQ0wsQ0FBQztRQUNKLENBQUM7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUUvQyxJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDNUIsTUFBTSxNQUFNLEdBQ1YsV0FBVyxJQUFJLE9BQU8sV0FBVyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBRXBFLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7b0hBckNVLHVCQUF1Qiw0RUFLeEIsc0JBQXNCLDZCQUd0QixvQkFBb0IsNkJBR3BCLDBCQUEwQjtxSEFYekIsdUJBQXVCLFlBTnhCLFlBQVk7cUhBTVgsdUJBQXVCLGFBTHZCO1FBQ1Qsb0JBQW9CO1FBQ3BCLEVBQUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFdBQVcsRUFBRSxvQkFBb0IsRUFBQztLQUN0RSxZQUpRLENBQUMsWUFBWSxDQUFDOzJGQU1aLHVCQUF1QjtrQkFQbkMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFNBQVMsRUFBRTt3QkFDVCxvQkFBb0I7d0JBQ3BCLEVBQUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFdBQVcsRUFBRSxvQkFBb0IsRUFBQztxQkFDdEU7aUJBQ0Y7OzBCQUtJLFFBQVE7OzBCQUNSLE1BQU07MkJBQUMsc0JBQXNCOzswQkFFN0IsUUFBUTs7MEJBQ1IsTUFBTTsyQkFBQyxvQkFBb0I7OzBCQUUzQixRQUFROzswQkFDUixNQUFNOzJCQUFDLDBCQUEwQjs7QUFnQ3RDLE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFlO1FBQ2hDLE9BQU87WUFDTCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsc0JBQXNCO29CQUMvQixRQUFRLEVBQUUsS0FBSztpQkFDaEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztnSEFYVSxtQkFBbUI7aUhBQW5CLG1CQUFtQixZQTNDbkIsdUJBQXVCO2lIQTJDdkIsbUJBQW1CLFlBRnJCLENBQUMsdUJBQXVCLENBQUM7MkZBRXZCLG1CQUFtQjtrQkFIL0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fwb2xsb01vZHVsZSwgQXBvbGxvfSBmcm9tICdhcG9sbG8tYW5ndWxhcic7XG5pbXBvcnQge1xuICBBcG9sbG9MaW5rLFxuICBPcGVyYXRpb24gYXMgTGlua09wZXJhdGlvbixcbiAgSW5NZW1vcnlDYWNoZSxcbiAgQXBvbGxvQ2FjaGUsXG59IGZyb20gJ0BhcG9sbG8vY2xpZW50L2NvcmUnO1xuaW1wb3J0IHtOZ01vZHVsZSwgSW5qZWN0aW9uVG9rZW4sIEluamVjdCwgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0Fwb2xsb1Rlc3RpbmdDb250cm9sbGVyfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHtBcG9sbG9UZXN0aW5nQmFja2VuZH0gZnJvbSAnLi9iYWNrZW5kJztcbmltcG9ydCB7T3BlcmF0aW9ufSBmcm9tICcuL29wZXJhdGlvbic7XG5cbmV4cG9ydCB0eXBlIE5hbWVkQ2FjaGVzID0gUmVjb3JkPHN0cmluZywgQXBvbGxvQ2FjaGU8YW55PiB8IHVuZGVmaW5lZCB8IG51bGw+O1xuXG5leHBvcnQgY29uc3QgQVBPTExPX1RFU1RJTkdfQ0FDSEUgPSBuZXcgSW5qZWN0aW9uVG9rZW48QXBvbGxvQ2FjaGU8YW55Pj4oXG4gICdhcG9sbG8tYW5ndWxhci90ZXN0aW5nIGNhY2hlJyxcbik7XG5cbmV4cG9ydCBjb25zdCBBUE9MTE9fVEVTVElOR19OQU1FRF9DQUNIRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxOYW1lZENhY2hlcz4oXG4gICdhcG9sbG8tYW5ndWxhci90ZXN0aW5nIG5hbWVkIGNhY2hlJyxcbik7XG5cbmV4cG9ydCBjb25zdCBBUE9MTE9fVEVTVElOR19DTElFTlRTID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZ1tdPihcbiAgJ2Fwb2xsby1hbmd1bGFyL3Rlc3RpbmcgbmFtZWQgY2xpZW50cycsXG4pO1xuXG5mdW5jdGlvbiBhZGRDbGllbnQobmFtZTogc3RyaW5nLCBvcDogTGlua09wZXJhdGlvbik6IE9wZXJhdGlvbiB7XG4gIChvcCBhcyBPcGVyYXRpb24pLmNsaWVudE5hbWUgPSBuYW1lO1xuXG4gIHJldHVybiBvcCBhcyBPcGVyYXRpb247XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtBcG9sbG9Nb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBcG9sbG9UZXN0aW5nQmFja2VuZCxcbiAgICB7cHJvdmlkZTogQXBvbGxvVGVzdGluZ0NvbnRyb2xsZXIsIHVzZUV4aXN0aW5nOiBBcG9sbG9UZXN0aW5nQmFja2VuZH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFwb2xsb1Rlc3RpbmdNb2R1bGVDb3JlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgYXBvbGxvOiBBcG9sbG8sXG4gICAgYmFja2VuZDogQXBvbGxvVGVzdGluZ0JhY2tlbmQsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEFQT0xMT19URVNUSU5HX0NMSUVOVFMpXG4gICAgbmFtZWRDbGllbnRzPzogc3RyaW5nW10sXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEFQT0xMT19URVNUSU5HX0NBQ0hFKVxuICAgIGNhY2hlPzogQXBvbGxvQ2FjaGU8YW55PixcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQVBPTExPX1RFU1RJTkdfTkFNRURfQ0FDSEUpXG4gICAgbmFtZWRDYWNoZXM/OiBhbnksIC8vIEZJWDogdXNpbmcgTmFtZWRDYWNoZXMgaGVyZSBtYWtlcyBuZ2MgZmFpbFxuICApIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVPcHRpb25zKG5hbWU6IHN0cmluZywgYz86IEFwb2xsb0NhY2hlPGFueT4gfCBudWxsKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsaW5rOiBuZXcgQXBvbGxvTGluaygob3BlcmF0aW9uKSA9PlxuICAgICAgICAgIGJhY2tlbmQuaGFuZGxlKGFkZENsaWVudChuYW1lLCBvcGVyYXRpb24pKSxcbiAgICAgICAgKSxcbiAgICAgICAgY2FjaGU6XG4gICAgICAgICAgYyB8fFxuICAgICAgICAgIG5ldyBJbk1lbW9yeUNhY2hlKHtcbiAgICAgICAgICAgIGFkZFR5cGVuYW1lOiBmYWxzZSxcbiAgICAgICAgICB9KSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgYXBvbGxvLmNyZWF0ZShjcmVhdGVPcHRpb25zKCdkZWZhdWx0JywgY2FjaGUpKTtcblxuICAgIGlmIChuYW1lZENsaWVudHMgJiYgbmFtZWRDbGllbnRzLmxlbmd0aCkge1xuICAgICAgbmFtZWRDbGllbnRzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgY2FjaGVzID1cbiAgICAgICAgICBuYW1lZENhY2hlcyAmJiB0eXBlb2YgbmFtZWRDYWNoZXMgPT09ICdvYmplY3QnID8gbmFtZWRDYWNoZXMgOiB7fTtcblxuICAgICAgICBhcG9sbG8uY3JlYXRlTmFtZWQobmFtZSwgY3JlYXRlT3B0aW9ucyhuYW1lLCBjYWNoZXNbbmFtZV0pKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQXBvbGxvVGVzdGluZ01vZHVsZUNvcmVdLFxufSlcbmV4cG9ydCBjbGFzcyBBcG9sbG9UZXN0aW5nTW9kdWxlIHtcbiAgc3RhdGljIHdpdGhDbGllbnRzKG5hbWVzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQXBvbGxvVGVzdGluZ01vZHVsZUNvcmUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEFQT0xMT19URVNUSU5HX0NMSUVOVFMsXG4gICAgICAgICAgdXNlVmFsdWU6IG5hbWVzLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=