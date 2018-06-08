var noun1 = ["A singer", "Jung Kook", "Mukund", "Reese", "Brendan", "Kevin", "GlobalHack", "A dog", "A cat", "BTS", "A homeless person", "A fly", "The United States", "China", "Kim Jung Un", "Trump", "Lil Tay", "Yanny", "Laurel", "George Washington", "Barack Obama"];
var verb = ["ran to", "walked to", "flew to", "ate", "drank", "sled down", "kicked", "washed", "sold", "became", "ruined", "cleaned", "destroyed", "bought", "made", "spoke to", "taped", "stapled", "burned", "painted", "sang about"];
var noun2 = ["Summer Break", "Phani", "a park", "a home", "a person", "some food", "you", "a school", "a camp", "a waterslide", "a painting", "water", "a laptop", "a chair", "an office", "a parent", "guitars", "sodas", "schools", "soup kitchens", "Earth"];
var cont = 0;

function printSent(){
if (cont < 1){
    cont = 1;
    var i = Math.floor(Math.random() * 21);
    var x = Math.floor(Math.random() * 21);
    var y = Math.floor(Math.random() * 21);
    
    var a = i;
    var b = x;
    var c = y;
    
    i = Math.floor(Math.random() * a);
    x = Math.floor(Math.random() * b);
    y = Math.floor(Math.random() * c);
}
    document.getElementById("randSent").innerHTML = noun1[a] + " " + verb[b] + " " + noun2[c];

}

function clearSent(){
    document.getElementById("randSent").innerHTML = "";
    cont = 0;
}

