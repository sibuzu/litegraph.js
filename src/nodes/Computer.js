//basic nodes
(function(global) {
    var LiteGraph = global.LiteGraph;

    // Computer/Channel
    function Accumulate() {
        this.color = LiteGraph.ACCUMULATE_COLOR;
        this.addInput("input", "number");
        this.addOutput("output", "number");
    }
    Accumulate.title = "Accumulate"
    Accumulate.desc = "Accumulate"
    LiteGraph.registerNodeType("Computer/Channel/Accumulate", Accumulate);
    
})(this);
