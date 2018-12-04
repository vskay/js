function range (start, end, delta){
  let diapazon = [];
  delta = delta || 1;                       // устанавливаем шаг по умолчанию 1
  if ((delta > 0)&&(start < end)){          // проверка на корректность полученых данных, шаг > 0
    let dlinna = end - start;
    diapazon[0] = start;
    for (let i=1; i <= dlinna/delta; i++){
        diapazon[i] = diapazon[i-1]+delta;
  // forTest      console.log(i + ' ' + diapazon[i]);
    };
  }
  else if ((delta < 0)&&(start > end)){     // вариант когда шаг < 0
    let dlinna = start - end;
    diapazon[0] = start;
    console.log('0 ' + diapazon[0] / delta);
    for (let i=1; i <= Math.abs(dlinna/delta); i++){
        diapazon[i] = diapazon[i-1]+delta;
 // forTest       console.log(i + ' ' + diapazon[i]);
    };
  }
  else                                      // вывод ошибки при остальных вариантах
    return NaN;

 // forTest console.log(diapazon.length);
  return diapazon;
}

function sum(dpz){
  let summa = 0;
  for (let i= 0; i < dpz.length; i++){
      summa += dpz[i];
  }
  return summa;
}

console.log(sum(range(-1,4,2)));
