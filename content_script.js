/*
 Author: Josiah Dean
 Licence: GNU GENERAL PUBLIC LICENSE
 Disclaimer: Not affiliated with Swinburne University of Technology or Blackboard
 */

window.addEventListener ("load", main, false);

function main() {
    var jsInitCheckTimer = setInterval (checkForJS_Finish, 500);
        function checkForJS_Finish() {
        if(document.getElementById("ek-overlay") != null) {
            console.log("ek-overlay div loaded");
            
            clearInterval (jsInitCheckTimer);
            console.log("about to delete ek-overlay and ek-modal");
            
            document.getElementById("ek-overlay").parentElement.removeChild(document.getElementById("ek-overlay"));
            document.getElementById("ek-modal").parentElement.removeChild(document.getElementById("ek-modal"));
            
            console.log("deleted ek-overlay and ek-modal");
        }
        else
        {
            console.log("ek-overlay div not yet loaded");
        }
    }
}
