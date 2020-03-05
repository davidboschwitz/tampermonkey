// ==UserScript==
// @name         Ultimate Guitar Copier
// @version      0.1
// @author       You
// @match        https://tabs.ultimate-guitar.com/tab/*
// @grant        GM_setClipboard
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
    document.body.onkeypress = function(e){
        if(e.key == 'c' || e.key == 'C'){
            var tabBody = document.querySelector("section>section>code").innerText.replace(/\n\n/g,'\n').trim(1);
            tabBody = tabBody.substring(0, tabBody.length - 2);
            console.log({tabBody});
            // GM_setClipboard(tabBody);
            GM_xmlhttpRequest ( {
                method:     'GET',
                url:        'https://www.random.org/integers/?num=1&min=1&max=100000000&col=1&base=10&format=plain&rnd=new',
                onload:     function (responseDetails) {
                    console.log (responseDetails);
                    var tabID = prompt("Tab ID", responseDetails.responseText.trim(1)); if(!tabID)return;
                    var songName = prompt("Song Name", document.querySelector('h1').textContent.substr(0, document.querySelector('h1').textContent.lastIndexOf(' '))); if(!songName)return;
                    var artistName = prompt("Artist Name", document.querySelector('a[href*="https://www.ultimate-guitar.com/artist/"]').text); if(!artistName)return;
                    if(!confirm("Ready to upload?"))return;
                    GM_xmlhttpRequest ( {
                        method:     "POST",
                        url:        "https://3v00tfpngf.execute-api.us-west-2.amazonaws.com/tab?id="+tabID,
                        data:       JSON.stringify({
                            tabID: tabID,
                            creatorID: 1,
                            songName: songName,
                            artistName: artistName,
                            body: tabBody
                        }),
                        headers:    {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        onload:     function (response) {
                            console.log (response);
                            if(confirm("Open in tabbar now?"))
                                window.location.href = `https://tabbar.dbosch.me/tab/${tabID}`;
                        }
                    } );
                }
            } );

        }
    };
})();
