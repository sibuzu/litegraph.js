import React, { Component } from 'react'
import { LiteGraph, LGraph, LGraphCanvas } from './litegraph.js'
import './litegraph.js/css/litegraph.css'

export default class NetworkMain extends Component {
    graphInit = () => {
		// LiteGraph.debug = true
		LGraphCanvas.DEFAULT_BACKGROUND_IMAGE = "bg.png"
		LiteGraph.LINK_COLOR = "black"
		
		
		console.log("NetworkMain is ready2.");
		this.graph = new LGraph();
		console.log('graph', this.graph)

		this.canvas = document.querySelector("canvas");
		console.log('canvas: ', this.canvas)

		var graphcanvas = this.graphcanvas = new LGraphCanvas(this.canvas, this.graph);
		graphcanvas.zoom_modify_alpha = false
		graphcanvas.autoresize = true
		graphcanvas.render_connections_border = false
		graphcanvas.render_link_tooltip = false;
		graphcanvas.connections_width = 1;
		graphcanvas.render_connection_arrows = true;
		graphcanvas.render_title = true
		
        // graphcanvas.render_curved_connections = true;
        // graphcanvas.render_connection_arrows = true;
        // graphcanvas.render_collapsed_slots = true;
        // graphcanvas.render_execution_order = false;
        // graphcanvas.render_title_colored = true;
		
		console.log('graphcanvas: ', graphcanvas)
		
		this.graph.onAfterExecute = function() {
			graphcanvas.draw(true);
		};
	
		var node_const1 = LiteGraph.createNode("basic/const");
		node_const1.pos = [50,50];
		this.graph.add(node_const1);
		node_const1.setValue(4.5);
		
		var node_const2 = LiteGraph.createNode("basic/const");
		node_const2.pos = [50,120];
		this.graph.add(node_const2);
		node_const2.setValue(2.5);
		
		var node_watch = LiteGraph.createNode("basic/watch");
		node_watch.pos = [300,200];
		this.graph.add(node_watch);
		
		// node_const.connect(0, node_watch, 0 );
		this.graphAddNoe();
		var node_sum = LiteGraph.createNode("basic/sumx");
		node_sum.shape = LiteGraph.ROUND_SHAPE
		node_sum.pos = [300,50];
		this.graph.add(node_sum);
		node_sum.connect(0, node_watch, 0 );

		node_const1.connect(0, node_sum, 0 );
		node_const2.connect(0, node_sum, 1 );

		var node_acc = LiteGraph.createNode("Computer/Channel/Accumulate");
		node_acc.pos = [50,200];
		this.graph.add(node_acc);
		
		var node_and = LiteGraph.createNode("logic/AND");
		node_and.pos = [50,300];
		this.graph.add(node_and);
		
		graphcanvas.resize()
		this.graph.start()
    }

    graphAddNoe = () => {
		//node constructor class
		function MyAddNode()
		{
			this.addInput("A","number");
			this.addInput("B","number");
			this.addInput("C","number");
			this.addOutput("A+B","number");
			this.properties = { precision: 1 };
		}

		//name to show
		MyAddNode.title = "Sum";

		//function to call when the node is executed
		MyAddNode.prototype.onExecute = function()
		{
			var A = this.getInputData(0);
			if( A === undefined )
				A = 0;
			var B = this.getInputData(1);
			if( B === undefined )
				B = 0;
			this.setOutputData( 0, A + B );
		}

		//register in the system
		LiteGraph.registerNodeType("basic/sumx", MyAddNode );
	}

    componentDidMount() {
        this.graphInit();
	}

	render() {
		return (
			<canvas id='network' className="vsNetworkMain"
            />
		)
	}
}
