const output = [];
const student = [
          { id: 21, name: 'omar sunny' }, { id: 31, name: 'manaaaaaaa' }, { id: 21, name: 'minhaz' },
          { id: 71, name: 'Deepjol' }
          
];
for (i = 0; i < student.length; i++) {

          const element = student[i];
          const result = element;
          output.push(result);

}

console.log(output);
const names = student.map(x => x.name);
const ids = student .map(x => x.id)
const bigger = student.filter(s => s.id>40);
console.log(names,ids, bigger);

