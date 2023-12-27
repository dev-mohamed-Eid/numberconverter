function convert(){ 
  let x = parseInt(num.value,from.value).toString(to.value)
  if(x == 'NaN'){
    error.classList.add('flash')
    result.value = ''
  }else{
    error.classList.remove('flash')
    result.value = x
  }
  if(num.value == ''){
    error.classList.remove('flash')
  }
}

num.addEventListener('input',convert)
num.addEventListener('change',convert)
from.addEventListener('change',convert)
to.addEventListener('change',convert)