//basic nodes
(function(global) {
    var LiteGraph = global.LiteGraph;

    // Computer/Channel
    function Accumulate() {
        this.is_active = true
        this.progress = 100
        this.color = LiteGraph.NODE_COLOR_COMPUTER;
        this.addInput("input", "number");
        this.addOutput("output", "number");
    }
    Accumulate.title = "Accumulate"
    Accumulate.desc = "Accumulate"
    LiteGraph.registerNodeType("Computer/Channel/Accumulate", Accumulate);
    
})(this);
