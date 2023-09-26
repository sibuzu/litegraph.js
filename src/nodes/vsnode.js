//basic nodes
(function(global) {
    var LiteGraph = global.LiteGraph;

    const COLOR_COMPUTER = "#F5C2CB";
    const COLOR_CONVERSION = "#F5C2CB";
    const COLOR_EXTERNAL = "#E9967A";
    const COLOR_SOURCE = "#3CB371";
    const COLOR_VIEWER = "#FFFF00";
    const COLOR_WRITER = "#40E0D0";
    var color;

    color = COLOR_COMPUTER;
    LiteGraph.quickRegisterNodeType("Computer/Channel/Accumulate", "Accumulate", 1, 1, color)
    LiteGraph.quickRegisterNodeType("Computer/Channel/Channel Switch", "Switch", 1, 1, color)
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

    LiteGraph.quickRegisterNodeType("Computer/External/ExternalDll", "", 1, 1, color)
    LiteGraph.quickRegisterNodeType("Computer/External/ExternalViewer", "", 1, 1, color)

    LiteGraph.quickRegisterNodeType("Computer/Filter/Comb Filter", "Comb", 1, 1, color)
    LiteGraph.quickRegisterNodeType("Computer/Filter/FIR Filter", "FIR", 1, 1, color)
    LiteGraph.quickRegisterNodeType("Computer/Filter/IIR Filter", "FIR", 1, 1, color)

    LiteGraph.quickRegisterNodeType("Computer/HHT/AnCAD EMD", "EMD", 1, 1, color)

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

})(this);
