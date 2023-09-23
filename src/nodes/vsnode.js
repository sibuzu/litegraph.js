//basic nodes
(function(global) {
    var LiteGraph = global.LiteGraph;
    const COLOR_COMPUTER = "#F5C2CB";

    LiteGraph.quickRegisterNodeType("Computer/Channel/Accumulate", "Accumulate", 1, 1, COLOR_COMPUTER)
    LiteGraph.quickRegisterNodeType("Computer/Channel/Channel Switch", "Switch", 1, 1, COLOR_COMPUTER)
})(this);
