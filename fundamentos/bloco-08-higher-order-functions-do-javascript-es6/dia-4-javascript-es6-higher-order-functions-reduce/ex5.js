// 🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA(array) {
    let allTogether = array.reduce((acc, curr) => acc + curr);
    let count = 0;
    for(let i = 0; i < allTogether.length; i += 1) {
        if(allTogether[i] === 'a' || allTogether[i] === 'A') {
            count += 1;
        }
    }
    return count;
  };

  console.log(containsA(names));