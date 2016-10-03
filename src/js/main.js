(function() {
    "use strict";

    var operationQueue = document.getElementById('compute-input');

    var commandHandler = function(cmd) {

        var currentEquation = operationQueue.textContent;

        if (cmd === "CE") {
            operationQueue.textContent = '';
            currentEquation.textContent = '';
        } else if (cmd === "C") {
            operationQueue.textContent = '';
            currentEquation.textContent = '';
        } else if (cmd === "Del") {

        } else if (cmd === "+-") {

        } else {
            operationQueue.textContent = currentEquation + cmd;
        }
    };

    var inputButtons = document.querySelectorAll('.calc-action');

    [].forEach.call(inputButtons, function(element) {
        element.addEventListener('click', function(event) {
            commandHandler(element.textContent);
        });
    });

    var output = document.getElementById('compute-result');
    var evalButton = document.getElementById('eval-button');

    evalButton.addEventListener('click', function(event) {
        output.textContent = eval(operationQueue.textContent);
    });
})();
