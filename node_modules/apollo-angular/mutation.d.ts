import type { DocumentNode } from 'graphql';
import type { TypedDocumentNode } from '@apollo/client/core';
import { Apollo } from './apollo';
import { MutationOptionsAlone, EmptyObject } from './types';
import * as i0 from "@angular/core";
export declare class Mutation<T = {}, V = EmptyObject> {
    protected apollo: Apollo;
    readonly document: DocumentNode | TypedDocumentNode<T, V>;
    client: string;
    constructor(apollo: Apollo);
    mutate(variables?: V, options?: MutationOptionsAlone<T, V>): import("rxjs").Observable<import("./types").MutationResult<T>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<Mutation<any, any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<Mutation<any, any>>;
}
