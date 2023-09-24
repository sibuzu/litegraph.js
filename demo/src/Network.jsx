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
		// graphcanvas.render_node_title = false
		
		this.graph.onAfterExecute = function() {
			graphcanvas.draw(true);
		};
	
		const COLOR_COMPUTER = "#F5C2CB";
		const COLOR_CONVERSION = "#F5C2CB";
		const COLOR_EXTERNAL = "#E9967A";
		const COLOR_SOURCE = "#3CB371";
		const COLOR_VIEWER = "#FFFF00";
		const COLOR_WRITER = "#40E0D0";
		var color;

		color = COLOR_COMPUTER;
		LiteGraph.quickRegisterNodeType("Computer/Channel/DataMerge", "Merge", 2, 1, color)
		LiteGraph.quickRegisterNodeType("Computer/Channel/Data Selection", "Selection", 1, 1, color)
		LiteGraph.quickRegisterNodeType("Computer/Channel/Dup", "Dup", 1, 1, color)
		LiteGraph.quickRegisterNodeType("Computer/Channel/Fill Null Value", "FullNull", 1, 1, color)
		LiteGraph.quickRegisterNodeType("Computer/Channel/Input Switch", "ISwitch", 2, 1, color)
		LiteGraph.quickRegisterNodeType("Computer/Channel/Peak Detection", "Detection", 1, 1, color)
		LiteGraph.quickRegisterNodeType("Computer/Channel/Remove Channel", "Remove", 1, 1, color)
		LiteGraph.quickRegisterNodeType("Computer/Channel/Replace Value", "Replace", 1, 1, color)
		LiteGraph.quickRegisterNodeType("Computer/Channel/Resample", "", 1, 1, color)
		LiteGraph.quickRegisterNodeType("Computer/Channel/RRinterval", "", 1, 1, color)
		LiteGraph.quickRegisterNodeType("Computer/Channel/Time Shift", "Shift", 1, 1, color)
		LiteGraph.quickRegisterNodeType("Computer/Channel/Trigger Alignment", "Trigger", 1, 1, color)

		LiteGraph.quickRegisterNodeType("Computer/Enhanced/Fast Iteractive Gaussian Filter", "Fast IGauss", 1, 1, color)
		LiteGraph.quickRegisterNodeType("Computer/Enhanced/Fast MSE", "", 1, 1, color)
		LiteGraph.quickRegisterNodeType("Computer/Enhanced/Fast Secogram", "", 1, 1, color)
		LiteGraph.quickRegisterNodeType("Computer/Enhanced/Fast ShortTerm Fourier Transform", "FastSTFT", 1, 1, color)

		color = COLOR_CONVERSION;
		LiteGraph.quickRegisterNodeType("Conversion/Convert From DateTime", "FromDateTime", 1, 1, color)

		color = COLOR_EXTERNAL;
		LiteGraph.quickRegisterNodeType("External/Demo01", "ExternalDll1", 1, 1, color)
		LiteGraph.quickRegisterNodeType("External/Demo02", "ExternalDll2", 1, 1, color)
		LiteGraph.quickRegisterNodeType("External/Demo03", "ExternalDll3", 1, 1, color)
		LiteGraph.quickRegisterNodeType("External/Demo04", "ExternalDll4", 1, 1, color)
		LiteGraph.quickRegisterNodeType("External/Demo05", "ExternalDll5", 1, 1, color)
		LiteGraph.quickRegisterNodeType("External/Demo06", "ExternalDll6", 1, 1, color)
		LiteGraph.quickRegisterNodeType("External/Demo07", "ExternalDll7", 1, 1, color)
		LiteGraph.quickRegisterNodeType("External/Show Form", "ExternalDll8", 1, 1, color)

		color = COLOR_SOURCE;
		LiteGraph.quickRegisterNodeType("Source/Noise", "Noise", 0, 1, color)
		LiteGraph.quickRegisterNodeType("Source/Sine Wave", "Sine", 0, 1, color)
		LiteGraph.quickRegisterNodeType("Source/Square Wave", "Square", 0, 1, color)
		LiteGraph.quickRegisterNodeType("Source/Triangle Wave", "Triangle", 0, 1, color)

		color = COLOR_VIEWER;
		LiteGraph.quickRegisterNodeType("Viewer/Channel Viewer", "Viewer", 1, 0, color)
		LiteGraph.quickRegisterNodeType("Viewer/Time-Frequency Viewer", "TFViewer", 1, 0, color)

		color = COLOR_WRITER;
		LiteGraph.quickRegisterNodeType("Writer/Data Writer", "DataWriter", 1, 0, color)

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
			<canvas id='network' className="vsNetworkMain"
            />
		)
	}
}
