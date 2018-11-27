let whit = ' ', black = '#', x = 9, y = 8, keyX = true, keyY = false, string='' ;
if (x % 2 == 0) keyY = true;
for (var i=0; i < y ; i++) {
  for (var j = 0; j < x; j++) {
    if (keyX)
        string += black;
    else string +=whit;
    keyX = !keyX;
    }
    console.log(string);
    string='' ;
    if (keyY) keyX = !keyX;
  }
