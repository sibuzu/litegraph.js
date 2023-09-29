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
		graphcanvas.autoresize = false
		graphcanvas.allow_dragcanvas = false;
		graphcanvas.render_connections_border = false
		graphcanvas.render_link_tooltip = false;
		graphcanvas.connections_width = 1;
		graphcanvas.render_connection_arrows = true;
		// graphcanvas.render_node_title = false
		
		this.graph.onAfterExecute = function() {
			graphcanvas.draw(true);
		};
	
		const node1 = LiteGraph.createNode("Source/Sine Wave");
		node1.pos = [50, 100];
		node1.progress = 100;
		this.graph.add(node1);

		const node2 = LiteGraph.createNode("Source/Noise");
		node2.pos = [50, 200];
		node2.progress = 100;
		this.graph.add(node2);

		const node3 = LiteGraph.createNode("Computer/Channel/DataMerge");
		node3.pos = [200, 150];
		node3.progress = 100;
		this.graph.add(node3);

		const node4 = LiteGraph.createNode("Computer/Enhanced/Fast ShortTerm Fourier Transform");
		node4.pos = [320, 180];
		node4.progress = 60;
		this.graph.add(node4);

		const node5 = LiteGraph.createNode("Viewer/Time-Frequency Viewer");
		node5.pos = [460, 180];
		node5.progress = 0;
		this.graph.add(node5);

		const node6 = LiteGraph.createNode("Viewer/Channel Viewer");
		node6.title = "Viewer1";
		node6.pos = [460, 40];
		node6.progress = 100;
		this.graph.add(node6);

		const node7 = LiteGraph.createNode("Viewer/Channel Viewer");
		node7.title = "Viewer2";
		node7.pos = [460, 90];
		node7.progress = 100;
		this.graph.add(node7);

		node1.connect(0, node3, 0 );
		node2.connect(0, node3, 1 );
		node3.connect(0, node4, 0 );
		node4.connect(0, node5, 0 );
		node1.connect(0, node6, 0 );
		node3.connect(0, node7, 0 );

		graphcanvas.resize();
		this.graph.start();
    }

    componentDidMount() {
        this.graphInit();
	}

	render() {
		return (
			<div className="box1">
				<div className="box2">
					<canvas id='network' className="vsNetworkMain"/>
				</div>
			</div>
		);
	}
}
