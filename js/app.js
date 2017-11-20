window.addEventListener('load', function() {
    // Versión 0.0.1
    var sectionDivs = document.getElementById('first-section');
    var div = document.getElementById('click-box');
    div.addEventListener('click', function(){
        var addAlert = div.textContent;
        div.classList.add('none');
        var duplDiv = document. createElement('div');
        sectionDivs.appendChild(duplDiv);
        duplDiv.classList.add('second-div');
        var form = document.createElement('form');
        duplDiv.appendChild(form);
        form.classList.add('form-style');
        var input = document.createElement('input');
        form.appendChild(input);
        input.classList.add('input-style');
        input.setAttribute('placeholder', addAlert);
        var button = document.createElement('button');
        var buttonContent = document.createTextNode('Guardar');
        button.appendChild(buttonContent);
        duplDiv.appendChild(button);
        button.classList.add('button-style');
        var span = document.createElement('span');
        var ex = document.createTextNode('X');
        span.appendChild(ex);
        duplDiv.appendChild(span);
        span.classList.add('span-style');
    });
});
