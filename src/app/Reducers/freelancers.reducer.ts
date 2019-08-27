import { Action } from '@ngrx/store';

export interface AppState {
    freelancers: Array<IFreelancer>
}

export interface IFreelancer {
    name: string;
    email: string;
    thumbnail: string;
}

export const ACTIONS = {
    FREELANCERS_LOADED: 'FREELANCERS LOADED',
    DELETE_FREELANCER: 'DELETE_FREELANCER',
}

export function freelancersReducers(state: Array<IFreelancer> = [], action: Action): Array<IFreelancer> {
    switch (action.type) {
        case ACTIONS.FREELANCERS_LOADED:
            return Array.prototype.concat(action.payload);
        case ACTIONS.DELETE_FREELANCER:
            state.splice(state.indexOf(action.payload), 1);
            return Array.prototype.concat(state);
        default:
            return state;
    }
}
