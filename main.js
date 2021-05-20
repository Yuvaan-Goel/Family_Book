var names= [
    "The Family Book",
    "My Father- Ankush Goel",
    "My Mother- Neha Goel",
    "My Brother- Suyog Goel",
    "Me- Yuvaan Goel"
  ];
  var images= [
    "The-family-book.jpeg",
    "unnamed.png",
    "unnamed (1).png",
    "bb.png",
    "—Pngtree—courier staff professional character cartoon_4094552.png"
  ];
  var i=0;
  function nextslide() {
    document.getElementById("family").innerHTML= names[i];
  document.getElementById("img").src= images[i];
    i++;
  }