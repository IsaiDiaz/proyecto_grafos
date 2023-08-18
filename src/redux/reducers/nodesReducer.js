import { ADD_NODE } from "../actions/actions";

const initialState = {
    nodes: [],
    graph: {nodes: [], edges:[]},    
}

const nodesReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_NODE:
            return{
                ...state,
                nodes: [...state.nodes, action.payload],
                graph: {
                    nodes: [...state.graph.nodes, action.payload],
                    edges: [...state.graph.edges],
                }
            }
        default:
            return state;
    }
}

export default nodesReducer;