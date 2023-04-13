

const webApp = document.getElementById('webApp');
const api_url = 'http://127.0.0.1:8000'

//On crée un objet XMLHttpRequest
let xhr = new XMLHttpRequest();


function makeRequest(method, url) {
    
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
       
        xhr.open(method,api_url+ url);
        xhr.responseType = "json";
       
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });

} 

/**
 * 
 * @param {any} params le parametre a afficher
 */
function aff(params) {
    
        console.log(params);
}

/**
 * 
 * @param {string} data  il s'agit de la donnee string qui sera convertit en html
 * @returns 
 */
function stringToHtml(data) {
    
var parser = new window.DOMParser();      
    return  parser.parseFromString( data, 'text/html').body.firstChild
}
/**
 * 
 * @param {string} url l'url qui sera appelle 
 * @param {parentNode} append celui a qui seront greffe les enfants au final
 */
async function getSectionAndChild(url, append) {
   
    let contain = await makeRequest("GET", url);
   
    let con, donne;
    for (var i = 0; i < contain['hydra:member'].length; i++) {
        donne = contain['hydra:member'][i]; 
         aff(donne)
         con = toHtmlElement(donne);
        if (donne['sections'].length != 0) {
             let appendfinal = await getSectionAndChild("/api/sections?section=" +donne['id'], con)
             aff('appendfinal')
            
        }
        if (donne['menus'].length != 0) {
            for (let j = 0; j < donne['menus'].length; j++) {
                menus = toHtmlElement(donne['menus'][j]);
                aff('menus');
                let titre = donne['menus'][j]['liens'][0]['titre']
                let lien =  donne['menus'][j]['liens'][0]['alt']
                var ahref;
 
if (titre.includes('img')) {
      ahref = document.createElement('img');
         ahref.setAttribute('src',lien)
               
                 menus.appendChild(ahref)
                 con.appendChild(menus)  
} else {
    ahref = document.createElement('a');
         ahref.setAttribute('href',lien)
                ahref.textContent = titre
              
                 menus.appendChild(ahref)
                 con.appendChild(menus)  
}

           
            }
            
        }
        
         append.appendChild(con)  
        
       
    }
    
  
    return append;
}
/**
 * 
 * @param {json} data ici il s'agit d'un  tableau contenant la balise de l'element , son style et son contenu
 */
function toHtmlElement(data) {
   
    let elmt = document.createElement($.trim(data['balise']));
    aff(data['idCss'])
    if (data['balise'] === 'img') {
        elmt.setAttribute('src', data['contenu']);  
       if (data['idCss'] != undefined) {
            elmt.setAttribute('id', data['idCss']);
        }
      
        elmt.className =$.trim(data['class']);  
    }
    else if (data['class'] == 'p') {
        aff('pppppppppppppppp')
        if (data['idCss'] != undefined) {
            elmt.setAttribute('id', data['idCss']);
        }
        elmt.appendChild(stringToHtml(data['contenu']))
    }
      else  if (data['balise'] === 'link') {
        elmt.setAttribute('href', data['contenu']);  
       
      
        elmt.className =$.trim(data['class']);  
    }  
    else {
        elmt.textContent = $.trim(data['contenu']);
       if (data['idCss'] != undefined) {
            elmt.setAttribute('id', data['idCss']);
        }
        
        elmt.className =$.trim(data['class']);
    }   
    
 
    return elmt;
}
async function
    getData() {
    try {
     await getSectionAndChild('/api/sections?page.vitrine=1&page=1&exists%5Bsection%5D=false', webApp);
     
    } catch (e) { }
}
getData()