import { createSelector } from '@ngrx/store';
import { layersState, LayerState, State } from 'src/app/state/portfolio.state';

export const selectLayers = createSelector(
    layersState, (state: LayerState) => {
        if(state){
            console.log('state', state);
        }
        return state && state.layers ? state.layers : [{
            id: 1, name : 'test aly'
        }]
    });
