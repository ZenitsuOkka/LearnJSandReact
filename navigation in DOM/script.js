    // console.log(document.body);
    // console.log(document.documentElement);
    // console.log(document.body.childNodes);//узлы которые являются детьми у body
    // console.log(document.body.firstChild);//
    // console.log(document.body.lastChild);//

    // console.log(document.querySelector('#current').parentNode.parentNode);//обертка для блоков
    
    // console.log(document.querySelector('[data-current="3"]').nextSibling);
    // console.log(document.querySelector('[data-current="3"]').previousSibling);
    // console.log(document.querySelector('[data-current="3"]').previousElementSibling);
    // //все эти принципы 

    for (let node of document.body.childNodes) {
        if (node.nodeName == '#text') {
            continue;
        }
        console.log(node);
    };
