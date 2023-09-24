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
		graphcanvas.render_node_title = false
		
        // graphcanvas.render_curved_connections = true;
        // graphcanvas.render_connection_arrows = true;
        // graphcanvas.render_collapsed_slots = true;
        // graphcanvas.render_execution_order = false;
        // graphcanvas.render_title_colored = true;
		
		this.graph.onAfterExecute = function() {
			graphcanvas.draw(true);
		};
	
		const COLOR_COMPUTER = "#F5C2CB";
		const COLOR_EXTERNAL = "#E9967A";
		const COLOR_SOURCE = "#3CB371";
		const COLOR_VIEWER = "#FFFF00";
		const COLOR_WRITER = "#40E0D0";

		LiteGraph.quickRegisterNodeType("Computer/Channel/DataMerge", "Merge", 2, 1, COLOR_COMPUTER)
		LiteGraph.quickRegisterNodeType("Computer/Channel/Data Selection", "Selection", 1, 1, COLOR_COMPUTER)
		LiteGraph.quickRegisterNodeType("Computer/Channel/Dup", "Dup", 1, 1, COLOR_COMPUTER)
		LiteGraph.quickRegisterNodeType("Computer/Channel/Fill Null Value", "FullNull", 1, 1, COLOR_COMPUTER)
		LiteGraph.quickRegisterNodeType("Computer/Channel/Input Switch", "ISwitch", 2, 1, COLOR_COMPUTER)
			
		LiteGraph.quickRegisterNodeType("Conversion/Convert From DateTime", "FromDateTime", 1, 1, COLOR_COMPUTER)

		LiteGraph.quickRegisterNodeType("External/Demo01", "ExternalDll", 1, 1, COLOR_EXTERNAL)

		LiteGraph.quickRegisterNodeType("Source/Sine Wave", "Sine", 0, 1, COLOR_SOURCE)

		LiteGraph.quickRegisterNodeType("Viewer/Channel Viewer", "Viewer", 1, 0, COLOR_VIEWER)

		LiteGraph.quickRegisterNodeType("Writer/Data Writer", "DataWriter", 1, 0, COLOR_WRITER)

		var nodes = ["Computer/Channel/DataMerge", "Conversion/Convert From DateTime",
			"External/Demo01", "Source/Sine Wave", "Viewer/Channel Viewer", "Writer/Data Writer"]

		for (let i=0; i<nodes.length; ++i) {
			var node = LiteGraph.createNode(nodes[i]);
			node.pos = [50, 50 * (i+1)];
			node.progress = i * 100 / (nodes.length - 1)
			this.graph.add(node);
		}

		graphcanvas.resize()
		this.graph.start()
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
