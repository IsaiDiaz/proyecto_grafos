import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {addNode} from "../../redux/actions/actions";
import styles from "./Home.module.css";
import { connect } from "react-redux";
import Graph from 'react-graph-vis'
import {v4 as uuidv4} from 'uuid';

const Home = () => {
    const nodes = useSelector(state => state.nodes.nodes);
    const graph = useSelector(state => state.nodes.graph);
    const dispatch = useDispatch();

    const handleDoubleClick = (event) => {
      console.log("Double Click")

      const newNode = {
        id: uuidv4(),
        x: event.clientX,
        y: event.clientY,
      }

      console.log(nodes)

      dispatch(addNode(newNode));
    }

    const options = {
      layout: {
        hierarchical: false,
      },
      edges: {
        color: '#000000',
      },
    };

    return (
        <div  style={{background: 'red', height: '100vh', width: '100vw'}}
        onDoubleClick={handleDoubleClick}>
          <Graph graph={graph} options={options} key={nodes.length}/>
        </div>
    );
  };

export default Home;